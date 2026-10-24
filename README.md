# Codefolio — graph templates and submission list only

Upload this website folder's CONTENTS to the public srireveshjay/Codefolio GitHub Pages repository. No npm or Node.js is required for the website.

## Student workflow

1. Enter name, roster roll number and section.
2. Fill the Java, Python and C++ templates for BFS, DFS, Dijkstra, Prim and Kruskal in edge-list, adjacency-list and adjacency-matrix form, plus the DSU and heap ADTs.
3. Click **Record submission & download PDF**. No student private code or sign-in is required.
4. Only the assignment ID and roll number are sent to the submission-list service. It records the matching roster name, roll, section and server submission time. The service never receives the programs or PDF.
5. All programs are combined into a PDF locally in the browser and downloaded for the student.

**Downloading a PDF only** does not mark the student as submitted. The record button works after the separate status-list service is deployed and its URL is added as submissionApiUrl in config.js.

## Programs are not saved

- Source code is held in browser memory only, with no localStorage/sessionStorage autosave.
- No program, PDF or source-code hash is sent to the server or GitHub.
- Closing or reloading the page can lose work. Download the PDF first. The page requests the browser's usual unsaved-work warning after edits, but browsers may suppress it.
- Earlier v1/v2 device drafts for this assignment are moved to page memory and their stored copies removed on first opening this updated version.
- Downloaded PDFs are intentionally saved on the student's own device. They are not uploaded by this website.

The assignment retains the blank commented templates, typing-only editors, placeholder checklist, line numbers and combined PDF layout. Paste blocking can be bypassed, and completion checks do not grade correctness. There is no compiler.

## Submission list in GitHub

The separate server uses a private repository containing the complete roster. Each acknowledgement stores ONLY these fields:

schema, assignmentId, name, roll, section, id, created, status

Files are stored under `receipts/graph-algorithms-v1/ROLL/TIMESTAMP-ID.json`. The human-readable list is `logs/graph-algorithms-v1.md`, showing Submitted / Not submitted for every roster student.

The faculty.html dashboard shows the list and exports status CSV. It has no code viewer, source download, or student-code generator. A faculty-only access key protects the private class list; students do not need it.

Student identity is self-reported. Matching a roll to the roster does NOT authenticate that student: someone else could enter the roll. The list is an acknowledgement, not proof of independent work or correct algorithms. Because code is not sent, the server cannot verify completion of templates.

## Setup

Read CONNECT-YOUR-REPOSITORIES.md and SETUP-PRIVATE-SUBMISSIONS.md in the overall ZIP. Keep the roster and status records in PRIVATE srireveshjay/Codefolio-records. Put only website/ contents in the public repository. The package has not been uploaded or connected to your live accounts.

For the server, only GITHUB_TOKEN and FACULTY_TOKEN secrets are needed. There is no ENROLLMENT_SECRET or per-student password. Remove the old Worker secret if upgrading an earlier setup; it is unused.

This version does not delete code that might already exist in an older repository or its Git history. It ignores old source-record paths and creates new status-only receipts. No earlier live student records were created during this session.

## Checks

Simulated UI checks confirm no source in network requests, no code-storage writes, no private-code field, local PDF generation and metadata-only acknowledgement. Mock GitHub API tests confirm metadata-only repository records, rejection of source/PDF/hash payloads, roster matching, deadlines, status lists, private-repository checks and removal of enrollment/source-record endpoints. Live GitHub integration and full browser checks remain pending deployment.
