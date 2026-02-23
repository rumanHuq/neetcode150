/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    const n = grid.length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    let left = 0;
    let right = n * n - 1;
    
    function canSwim(time) {
        if (grid[0][0] > time) return false;
        
        const visited = new Array(n).fill(null).map(() => new Array(n).fill(false));
        const queue = [[0, 0, time]];
        visited[0][0] = true;
        
        while (queue.length) {
            const [x, y, t] = queue.shift();
            
            if (x === n - 1 && y === n - 1) return true;
            
            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;
                
                if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny] && grid[nx][ny] <= t) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny, t]);
                }
            }
        }
        
        return false;
    }
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canSwim(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};

export { swimInWater };
