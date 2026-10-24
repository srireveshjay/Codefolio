// Public assignment configuration. Never place GitHub or faculty secrets here.
window.CODEFOLIO_CONFIG = {
  faculty: 'Dr. Eshwar Srinivasan',
  course: 'Graph Algorithms Assignment',
  assignmentId: 'graph-algorithms-v1',
  title: 'Graph algorithms across three representations',
  prompt: 'Implement BFS, DFS, Dijkstra, Prim and Kruskal in Java, Python and C++. Implement each algorithm directly for all three graph representations: edge list, adjacency list and adjacency matrix (15 algorithm implementations per language). Implement your own Disjoint-Set Union ADT with path compression and union by rank or size for Kruskal. Implement your own indexed binary min-heap priority queue for Dijkstra and Prim; do not use a built-in priority queue or library DSU. Fill all template function bodies. Support zero-weight edges, disconnected graphs and isolated vertices. BFS/DFS visit the source component; Prim/Kruskal return a minimum spanning forest. Dijkstra must reject negative-weight edges and report unreachable vertices. Explain and demonstrate your operations in main().',
  // Set a deadline in BOTH this file and the private assignment configuration.
  deadline: '',
  // Public URL of the separately deployed submission Worker, no trailing slash.
  // Example: 'https://codefolio-submissions.YOUR-SUBDOMAIN.workers.dev'
  submissionApiUrl: '',
  submissionUrl: ''
};
