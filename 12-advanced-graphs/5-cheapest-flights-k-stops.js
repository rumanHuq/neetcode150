/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    const adj = {};
    
    for (let i = 0; i < n; i++) {
        adj[i] = [];
    }
    
    for (const [u, v, w] of flights) {
        adj[u].push([v, w]);
    }
    
    const dist = new Array(n).fill(Infinity);
    dist[src] = 0;
    
    const pq = [[0, src, 0]];
    
    while (pq.length) {
        const [cost, node, stops] = pq.shift();
        
        if (node === dst) return cost;
        if (stops > k) continue;
        
        for (const [neighbor, price] of adj[node]) {
            if (cost + price < dist[neighbor]) {
                dist[neighbor] = cost + price;
                pq.push([cost + price, neighbor, stops + 1]);
            }
        }
    }
    
    return dist[dst] === Infinity ? -1 : dist[dst];
};

export { findCheapestPrice };
