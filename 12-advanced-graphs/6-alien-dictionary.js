/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    const adj = {};
    
    for (const word of words) {
        for (const c of word) {
            adj[c] = new Set();
        }
    }
    
    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i];
        const word2 = words[i + 1];
        
        let j = 0;
        while (j < word1.length && j < word2.length && word1[j] === word2[j]) {
            j++;
        }
        
        if (j < word1.length && j < word2.length) {
            adj[word2[j]].add(word1[j]);
        } else if (word1.length > word2.length && word2.length === j) {
            return "";
        }
    }
    
    const inDegree = {};
    for (const c in adj) {
        inDegree[c] = 0;
    }
    
    for (const c in adj) {
        for (const neighbor of adj[c]) {
            inDegree[neighbor]++;
        }
    }
    
    const queue = [];
    for (const c in inDegree) {
        if (inDegree[c] === 0) {
            queue.push(c);
        }
    }
    
    let result = "";
    
    while (queue.length) {
        const c = queue.shift();
        result += c;
        
        for (const neighbor of adj[c]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    
    return result.length === Object.keys(adj).length ? result : "";
};

export { alienOrder };
