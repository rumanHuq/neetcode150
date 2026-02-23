/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    const n = points.length;
    if (n <= 1) return 0;
    
    const dist = (i, j) => 
        Math.abs(points[i][0] - points[j][0]) + 
        Math.abs(points[i][1] - points[j][1]);
    
    const visited = new Array(n).fill(false);
    const minDist = new Array(n).fill(Infinity);
    minDist[0] = 0;
    
    let result = 0;
    
    for (let i = 0; i < n; i++) {
        let u = -1;
        let minVal = Infinity;
        
        for (let v = 0; v < n; v++) {
            if (!visited[v] && minDist[v] < minVal) {
                minVal = minDist[v];
                u = v;
            }
        }
        
        visited[u] = true;
        result += minDist[u];
        
        for (let v = 0; v < n; v++) {
            if (!visited[v]) {
                const d = dist(u, v);
                if (d < minDist[v]) {
                    minDist[v] = d;
                }
            }
        }
    }
    
    return result;
};

export { minCostConnectPoints };
