/* Dependency-free PDF writer. Embeds DejaVu Sans Mono and a Unicode character map. */
(function(root){
'use strict';
const enc=new TextEncoder();
const ascii=s=>enc.encode(s);
function join(chunks){const out=new Uint8Array(chunks.reduce((n,c)=>n+c.length,0));let offset=0;for(const c of chunks){out.set(c,offset);offset+=c.length}return out}
function fontInfo(bytes){
 const d=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength),u16=o=>d.getUint16(o),i16=o=>d.getInt16(o),u32=o=>d.getUint32(o),tables={};
 for(let i=0;i<u16(4);i++){const o=12+i*16;tables[String.fromCharCode(...bytes.slice(o,o+4))]=u32(o+8)}
 const head=tables.head,hhea=tables.hhea,units=u16(head+18),cmap=tables.cmap;let format4=0,format12=0;
 for(let i=0;i<u16(cmap+2);i++){const o=cmap+4+i*8,p=u16(o),e=u16(o+2),sub=cmap+u32(o+4);if(p===0||p===3&&(e===1||e===10)){if(u16(sub)===12)format12=sub;else if(u16(sub)===4)format4=sub}}
 function glyph(cp){if(format12){let lo=0,hi=u32(format12+12)-1;while(lo<=hi){const m=(lo+hi)>>1,o=format12+16+m*12,start=u32(o),end=u32(o+4);if(cp<start)hi=m-1;else if(cp>end)lo=m+1;else return u32(o+8)+cp-start}return 0}
 if(cp>65535||!format4)return 0;const count=u16(format4+6)/2,end=format4+14,start=end+count*2+2,delta=start+count*2,range=delta+count*2;for(let i=0;i<count;i++){if(cp<=u16(end+i*2)){if(cp<u16(start+i*2))return 0;const r=u16(range+i*2),de=i16(delta+i*2);return r?((g=>g?(g+de)&65535:0)(u16(range+i*2+r+(cp-u16(start+i*2))*2))):(cp+de)&65535}}return 0}
 const metrics=u16(hhea+34);const width=g=>Math.round(u16(tables.hmtx+Math.min(g,metrics-1)*4)/units*1000);
 return {glyph,width,ascent:Math.round(i16(hhea+4)/units*1000),descent:Math.round(i16(hhea+6)/units*1000),bbox:[36,38,40,42].map(o=>Math.round(i16(head+o)/units*1000))};
}
function buildPDF(record,fontBytes){
 const f=fontInfo(fontBytes),chars=new Map(),pages=[],missing=new Set();let commands=[],y=0;
 function encode(t){let hex='';for(const c of t){if(!chars.has(c)){const gid=f.glyph(c.codePointAt(0));if(!gid)missing.add(c);chars.set(c,{cid:chars.size+1,gid})}hex+=chars.get(c).cid.toString(16).padStart(4,'0')}return hex}
 function text(t,x,y,size=10,color='0.16 0.22 0.17'){commands.push(`BT /F1 ${size} Tf ${color} rg 1 0 0 1 ${x} ${y} Tm <${encode(t)}> Tj ET`)}
 function page(){if(commands.length)pages.push(commands);commands=[];y=785;text('CODEFOLIO / PROGRAMMING ASSIGNMENT',42,y,9,'0.20 0.38 0.28');y-=33}
 function line(t,size=10){if(y<70)page();text(t||' ',42,y,size);y-=size+6}
 function block(t,size=10){const max=Math.floor(510/(f.width(f.glyph(77))/1000*size));for(const raw of String(t).replace(/\r\n?/g,'\n').replace(/\t/g,'    ').split('\n')){const a=Array.from(raw);if(!a.length)line(' ',size);for(let i=0;i<a.length;i+=max)line(a.slice(i,i+max).join(''),size)}}
 page();block(record.title,17);y-=8;block(record.course);block('Student: '+record.name);block('Roll number: '+record.roll);block('Section: '+(record.section||'—'));block('Generated: '+new Date(record.created).toLocaleString('en-IN',{timeZone:'Asia/Kolkata'})+' IST');block('Receipt ID: '+record.id);y-=10;block('Assignment ID: '+record.assignmentId);block('Content SHA-256 (not a digital signature):',8);block(record.hash,8);y-=10;block(record.prompt,10);y-=15;block('Programs generated locally. No programs are uploaded or stored.',9);block('The completion list records PDF download requests when connected; it cannot verify file saving or independent authorship.',9);
 for(const [key,label] of [['java','Java'],['python','Python'],['cpp','C++']]){page();line(label,18);y-=10;let i=0;for(const raw of record.codes[key].replace(/\r\n?/g,'\n').split('\n'))block(String(++i).padStart(4,' ')+'  '+raw,9)}
 if(commands.length)pages.push(commands);
 pages.forEach((p,i)=>{commands=p;text(record.roll+' | '+record.id,42,32,7,'0.45 0.52 0.41');text(`${i+1}/${pages.length}`,515,32,8)});
 if(missing.size)throw Error('The PDF font does not support these characters: '+[...missing].slice(0,12).join(' ') + '. Use “Print / Save as PDF” to preserve them with browser fonts.');
 const objects=[];const add=v=>{objects.push(typeof v==='string'?ascii(v):v);return objects.length};const stream=(dict,data)=>join([ascii(`<< ${dict} /Length ${data.length} >>\nstream\n`),data,ascii('\nendstream')]);
 const catalog=add(''),tree=add(''),font=add('');const file=add(stream('/Length1 '+fontBytes.length,fontBytes));
 const descriptor=add(`<< /Type /FontDescriptor /FontName /DejaVuSansMono /Flags 33 /FontBBox [${f.bbox.join(' ')}] /ItalicAngle 0 /Ascent ${f.ascent} /Descent ${f.descent} /CapHeight ${f.ascent} /StemV 80 /FontFile2 ${file} 0 R >>`);
 const mapping=new Uint8Array((chars.size+1)*2),widths=[];let pairs=[];
 const utf16=c=>{let t='';for(let i=0;i<c.length;i++)t+=c.charCodeAt(i).toString(16).padStart(4,'0');return t};
 for(const [c,{cid,gid}]of chars){mapping[cid*2]=gid>>8;mapping[cid*2+1]=gid&255;widths.push(f.width(gid));pairs.push(`<${cid.toString(16).padStart(4,'0')}> <${utf16(c)}>`)}
 const map=add(stream('',mapping));const cid=add(`<< /Type /Font /Subtype /CIDFontType2 /BaseFont /DejaVuSansMono /CIDSystemInfo << /Registry (Adobe) /Ordering (Identity) /Supplement 0 >> /FontDescriptor ${descriptor} 0 R /CIDToGIDMap ${map} 0 R /DW 602 /W [1 [${widths.join(' ')}]] >>`);
 let cmap='/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo << /Registry (Adobe) /Ordering (UCS) /Supplement 0 >> def\n/CMapName /CodefolioUnicode def\n/CMapType 2 def\n1 begincodespacerange\n<0000> <FFFF>\nendcodespacerange\n';
 for(let i=0;i<pairs.length;i+=100){const p=pairs.slice(i,i+100);cmap+=p.length+' beginbfchar\n'+p.join('\n')+'\nendbfchar\n'}cmap+='endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend';const unicode=add(stream('',ascii(cmap)));objects[font-1]=ascii(`<< /Type /Font /Subtype /Type0 /BaseFont /DejaVuSansMono /Encoding /Identity-H /DescendantFonts [${cid} 0 R] /ToUnicode ${unicode} 0 R >>`);
 const ids=pages.map(p=>{const content=add(stream('',ascii(p.join('\n'))));return add(`<< /Type /Page /Parent ${tree} 0 R /MediaBox [0 0 595.28 841.89] /Resources << /Font << /F1 ${font} 0 R >> >> /Contents ${content} 0 R >>`)});
 objects[catalog-1]=ascii(`<< /Type /Catalog /Pages ${tree} 0 R >>`);objects[tree-1]=ascii(`<< /Type /Pages /Kids [${ids.map(i=>i+' 0 R').join(' ')}] /Count ${ids.length} >>`);
 let chunks=[ascii('%PDF-1.7\n%Codefolio\n')],offset=chunks[0].length,offsets=[0];objects.forEach((o,i)=>{offsets.push(offset);const c=join([ascii(`${i+1} 0 obj\n`),o,ascii('\nendobj\n')]);chunks.push(c);offset+=c.length});const xref=offset;chunks.push(ascii(`xref\n0 ${objects.length+1}\n0000000000 65535 f \n`+offsets.slice(1).map(o=>String(o).padStart(10,'0')+' 00000 n \n').join('')+`trailer\n<< /Size ${objects.length+1} /Root ${catalog} 0 R >>\nstartxref\n${xref}\n%%EOF\n`));return join(chunks);
}
root.CodefolioPDF={buildPDF,fontInfo};
})(typeof window!=='undefined'?window:globalThis);
