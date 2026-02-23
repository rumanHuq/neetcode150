/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const adj = {};
    
    for (let i = 1; i <= n; i++) {
        adj[i] = [];
    }
    
    for (const [u, v, w] of times) {
        adj[u].push([v, w]);
    }
    
    const dist = new Array(n + 1).fill(Infinity);
    dist[k] = 0;
    
    const pq = [[0, k]];
    
    while (pq.length) {
        const [d, node] = pq.shift();
        
        if (d > dist[node]) continue;
        
        for (const [neighbor, weight] of adj[node]) {
            if (dist[node] + weight < dist[neighbor]) {
                dist[neighbor] = dist[node] + weight;
                pq.push([dist[neighbor], neighbor]);
            }
        }
    }
    
    let maxTime = 0;
    for (let i = 1; i <= n; i++) {
        maxTime = Math.max(maxTime, dist[i]);
    }
    
    return maxTime === Infinity ? -1 : maxTime;
};

export { networkDelayTime };
