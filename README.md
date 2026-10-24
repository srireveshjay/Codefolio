# Codefolio — graph algorithms edition

Upload the contents of THIS website folder to your public GitHub Pages repository. No npm or Node.js is needed for the public website. Do not upload your real class roster, credentials, private source records, or the private-repository setup folder here.

## Assignment and blank templates

The question covers BFS, DFS, Dijkstra, Prim and Kruskal in Java, Python and C++, each operating directly on edge-list, adjacency-list and adjacency-matrix representations: 15 algorithm implementations per language. Students also implement their own path-compressed/rank-or-size DSU and an indexed binary min-heap priority queue.

Each language opens with commented function signatures and empty placeholder bodies. Throwing/raising a TODO exception is a placeholder, not a solution. Fields, types and signatures are supplied; algorithm and ADT implementations are not. Original templates are also in templates/. The source views are editable. A placeholder count is a completion aid, not an evaluation of correctness.

Copy/paste, copy/cut shortcuts and text drops are blocked only inside code editors. These restrictions can be bypassed. There is no compiler, plagiarism detector or authorship guarantee.

## Private GitHub submission log

This feature requires the separate submission service included in the overall update package. Read SETUP-PRIVATE-SUBMISSIONS.md in that package. GitHub Pages cannot safely write to a private repository by itself.

Once configured, students enter their roll number and faculty-issued submission code and click **Submit to faculty & download PDF**. The service validates the code, takes the student's official name and section from the private roster, enforces the private assignment deadline, saves all three programs in one JSON source record and returns a receipt.

Private repository paths:

- `submissions/graph-algorithms-v1/ROLL/TIMESTAMP-RECEIPT_ID.json`: original source and metadata; each attempt is separate.
- `logs/graph-algorithms-v1.md`: human-readable Submitted / Not submitted status for every roster student, with source-record links.
- `config/roster.json`: full class roster used to determine non-submitters.

The public **faculty.html** page requires the faculty key to display records. It shows missing students, attempts and submitted code; exports status CSV; generates individual student submission codes; and downloads Java, Python, C++ or combined PDF snapshots. **Sync log in GitHub** rebuilds the repository summary after a roster change or a log-update failure. The live dashboard calculates status directly from source records rather than relying on a possibly stale summary file.

A submission is successful only after the service confirms the source-record GitHub commit. If updating the separate Markdown log fails, the saved source remains valid and the student sees a notice for faculty follow-up. Resubmissions create new files; earlier attempts remain. A lost network response may leave a saved attempt even when the browser cannot confirm it; check the faculty log before retrying.

Until `submissionApiUrl` is configured in config.js, the website clearly reports that repository submissions are unavailable. Downloading a PDF alone never marks a student as submitted.

## Update the public website

1. Open your existing GitHub Pages repository.
2. Upload the contents of this website folder, including assets/, templates/, templates.js, faculty.html and faculty.js. Replace existing files. index.html must remain at the repository root.
3. Commit the changes and wait for the Pages deployment.
4. Edit config.js to set the public submission API URL after deploying the separate service.
5. Refresh the page; use a hard refresh if an older version is cached.

Edit the assignment in config.js. The authoritative assignment ID, title, prompt, course and deadline also belong in the private repository's assignment JSON. The server checks its private configuration and does not trust browser-supplied assignment text or time.

## Local use and data

Double-click index.html to inspect the page and work with templates. The production submission service accepts only your configured HTTPS website origin, so online submission must be tested from GitHub Pages rather than a file:// page.

Drafts are device-local, scoped by assignment ID and version, and contain student details and code. Private submission codes are not saved in browser storage. Clear work on shared computers. Clearing restores the blank templates and removes personal details; it does not delete existing private-repository submissions. Download source/PDF copies before clearing unfinished work.

The PDF includes all programs, line numbers, roll-number footers, receipt ID, content hash and submission status. A recorded PDF uses the roster identity and server time. The hash is a content checksum, not a cryptographic faculty signature or proof of authorship. Unsupported glyphs are reported explicitly rather than silently changed. Print / Save as PDF is the fallback for browser-supported scripts.

## Verification completed

- Java template compiles; C++17 template passes syntax checking; Python template parses.
- All five algorithms appear in each representation in each language.
- Student UI checks with a simulated DOM cover templates, placeholder counts, paste prevention, code retention, local-only PDF status, repository submission, roster identity, no code-secret persistence and reset.
- Mock GitHub API checks cover private-repository enforcement, origin restrictions, faculty authorization, per-roll codes, roster identity, deadlines, TODO rejection, concurrent-write conflict retry, separate attempts, Markdown logs, missing students and protected source access.
- Multi-page combined PDFs parse and preserve source text; previous PDF cover layout was visually inspected.

Live submission and full browser checks are still pending deployment and your repository configuration. No repository was connected or modified during preparation.
