/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const adj = {};
    
    for (const [from, to] of tickets) {
        if (!adj[from]) adj[from] = [];
        adj[from].push(to);
    }
    
    for (const key in adj) {
        adj[key].sort();
    }
    
    const result = [];
    
    function dfs(airport) {
        while (adj[airport] && adj[airport].length > 0) {
            const next = adj[airport].shift();
            dfs(next);
        }
        result.push(airport);
    }
    
    dfs("JFK");
    return result.reverse();
};

export { findItinerary };
