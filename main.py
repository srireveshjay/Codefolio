# GRAPH ALGORITHMS ASSIGNMENT — Python
# Fill every TODO body. Do not use heapq or a library DSU.
# Run every algorithm directly on each representation; do not convert it.
# Vertex IDs: 0..n-1. Zero-weight edges are valid. BFS/DFS visit the source
# component; Prim/Kruskal return minimum spanning forests for disconnected graphs.

class Edge:
    # TODO: store endpoints u, v and weight.
    def __init__(self, u: int, v: int, weight: int):
        raise NotImplementedError("TODO")

class ShortestPathResult:
    # TODO: store distance and parent arrays; use float('inf') for unreachable vertices.
    def __init__(self, distance: list, parent: list):
        raise NotImplementedError("TODO")

class MSTResult:
    # TODO: store the selected edges, total_weight and component count.
    def __init__(self, edges: list, total_weight: int, components: int):
        raise NotImplementedError("TODO")

class DisjointSetUnion:
    # TODO: Initialize parent, rank/size arrays for n singleton sets.
    def __init__(self, n: int):
        raise NotImplementedError("TODO")

    # TODO: Create a singleton set for v.
    def make_set(self, v: int):
        raise NotImplementedError("TODO")

    # TODO: Return the representative using path compression.
    def find(self, v: int) -> int:
        raise NotImplementedError("TODO")

    # TODO: Merge by rank or size and return whether a merge occurred.
    def union(self, u: int, v: int) -> bool:
        raise NotImplementedError("TODO")

    # TODO: Return whether both vertices belong to the same set.
    def connected(self, u: int, v: int) -> bool:
        raise NotImplementedError("TODO")

class MinHeapPriorityQueue:
    # TODO: Initialize an empty indexed binary min heap and a vertex-to-position mapping.
    def __init__(self, capacity: int):
        raise NotImplementedError("TODO")

    # TODO: Return whether the heap is empty.
    def is_empty(self) -> bool:
        raise NotImplementedError("TODO")

    # TODO: Return whether the vertex is in the heap.
    def contains(self, v: int) -> bool:
        raise NotImplementedError("TODO")

    # TODO: Swap entries and update both position mappings.
    def _swap(self, i: int, j: int):
        raise NotImplementedError("TODO")

    # TODO: Restore heap order toward the root.
    def _sift_up(self, i: int):
        raise NotImplementedError("TODO")

    # TODO: Restore heap order toward the leaves.
    def _sift_down(self, i: int):
        raise NotImplementedError("TODO")

    # TODO: Insert a new vertex and priority, then restore heap order.
    def insert(self, v: int, key: int):
        raise NotImplementedError("TODO")

    # TODO: Decrease an existing key and restore heap order. Reject invalid increases.
    def decrease_key(self, v: int, key: int):
        raise NotImplementedError("TODO")

    # TODO: Remove and return (vertex, key). Update the mapping and handle an empty heap.
    def extract_min(self) -> tuple:
        raise NotImplementedError("TODO")

class EdgeListGraph:
    # TODO: Initialize EdgeListGraph storage. Use a list of Edge objects.
    def __init__(self, n: int, directed: bool = False):
        raise NotImplementedError("TODO")

    # TODO: Validate endpoints and store the edge. Store both directions for undirected adjacency structures.
    def add_edge(self, u: int, v: int, weight: int):
        raise NotImplementedError("TODO")

    # TODO: Scan the edge list to find incident edges. Return outgoing/incident Edge objects.
    def neighbors(self, u: int) -> list:
        raise NotImplementedError("TODO")

    # TODO: Enumerate edges directly; return each undirected edge once, preserving zero weights.
    def get_edges(self) -> list:
        raise NotImplementedError("TODO")

    # TODO: Return BFS visit order from source, visiting only its reachable component. Use this representation directly; validate source and handle isolated vertices.
    def bfs(self, source: int):
        raise NotImplementedError("TODO")

    # TODO: Return DFS visit order from source. Track visited vertices to avoid cycles and use this representation directly.
    def dfs(self, source: int):
        raise NotImplementedError("TODO")

    # TODO: Return distance and parent arrays from source. Reject negative-weight edges; use your MinHeapPriorityQueue ADT. Mark unreachable vertices with INF and guard arithmetic overflow.
    def dijkstra(self, source: int):
        raise NotImplementedError("TODO")

    # TODO: Return a minimum spanning forest using your MinHeapPriorityQueue ADT. Restart for every unvisited component; report total weight and component count. Require an undirected graph.
    def prim(self):
        raise NotImplementedError("TODO")

    # TODO: Return a minimum spanning forest by sorting this representation's edges by weight and using your DisjointSetUnion ADT. Require an undirected graph. Include each undirected edge once, skip loops, and report components and total weight.
    def kruskal(self):
        raise NotImplementedError("TODO")

class AdjacencyListGraph:
    # TODO: Initialize AdjacencyListGraph storage. Use one adjacency list per vertex.
    def __init__(self, n: int, directed: bool = False):
        raise NotImplementedError("TODO")

    # TODO: Validate endpoints and store the edge. Store both directions for undirected adjacency structures.
    def add_edge(self, u: int, v: int, weight: int):
        raise NotImplementedError("TODO")

    # TODO: Traverse the linked adjacency chains. Return outgoing/incident Edge objects.
    def neighbors(self, u: int) -> list:
        raise NotImplementedError("TODO")

    # TODO: Enumerate edges directly; return each undirected edge once, preserving zero weights.
    def get_edges(self) -> list:
        raise NotImplementedError("TODO")

    # TODO: Return BFS visit order from source, visiting only its reachable component. Use this representation directly; validate source and handle isolated vertices.
    def bfs(self, source: int):
        raise NotImplementedError("TODO")

    # TODO: Return DFS visit order from source. Track visited vertices to avoid cycles and use this representation directly.
    def dfs(self, source: int):
        raise NotImplementedError("TODO")

    # TODO: Return distance and parent arrays from source. Reject negative-weight edges; use your MinHeapPriorityQueue ADT. Mark unreachable vertices with INF and guard arithmetic overflow.
    def dijkstra(self, source: int):
        raise NotImplementedError("TODO")

    # TODO: Return a minimum spanning forest using your MinHeapPriorityQueue ADT. Restart for every unvisited component; report total weight and component count. Require an undirected graph.
    def prim(self):
        raise NotImplementedError("TODO")

    # TODO: Return a minimum spanning forest by sorting this representation's edges by weight and using your DisjointSetUnion ADT. Require an undirected graph. Include each undirected edge once, skip loops, and report components and total weight.
    def kruskal(self):
        raise NotImplementedError("TODO")

class AdjacencyMatrixGraph:
    # TODO: Initialize AdjacencyMatrixGraph storage. Use a presence matrix and a separate weight matrix.
    def __init__(self, n: int, directed: bool = False):
        raise NotImplementedError("TODO")

    # TODO: Validate endpoints and store the edge. Store both directions for undirected adjacency structures.
    def add_edge(self, u: int, v: int, weight: int):
        raise NotImplementedError("TODO")

    # TODO: Scan the row of the matrix; present[][] distinguishes an absent edge from weight zero. Return outgoing/incident Edge objects.
    def neighbors(self, u: int) -> list:
        raise NotImplementedError("TODO")

    # TODO: Enumerate edges directly; return each undirected edge once, preserving zero weights.
    def get_edges(self) -> list:
        raise NotImplementedError("TODO")

    # TODO: Return BFS visit order from source, visiting only its reachable component. Use this representation directly; validate source and handle isolated vertices.
    def bfs(self, source: int):
        raise NotImplementedError("TODO")

    # TODO: Return DFS visit order from source. Track visited vertices to avoid cycles and use this representation directly.
    def dfs(self, source: int):
        raise NotImplementedError("TODO")

    # TODO: Return distance and parent arrays from source. Reject negative-weight edges; use your MinHeapPriorityQueue ADT. Mark unreachable vertices with INF and guard arithmetic overflow.
    def dijkstra(self, source: int):
        raise NotImplementedError("TODO")

    # TODO: Return a minimum spanning forest using your MinHeapPriorityQueue ADT. Restart for every unvisited component; report total weight and component count. Require an undirected graph.
    def prim(self):
        raise NotImplementedError("TODO")

    # TODO: Return a minimum spanning forest by sorting this representation's edges by weight and using your DisjointSetUnion ADT. Require an undirected graph. Include each undirected edge once, skip loops, and report components and total weight.
    def kruskal(self):
        raise NotImplementedError("TODO")

# TODO: demonstrate all algorithms on each representation and test both ADTs.
# Include disconnected graphs, isolated vertices, zero weights and negative edges.
def main():
    raise NotImplementedError("TODO")

# Call main() after completing the assignment.
