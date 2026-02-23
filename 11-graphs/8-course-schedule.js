function canFinish(numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(null).map(() => []);
  const inDegree = new Array(numCourses).fill(0);

  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
    inDegree[course]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  let count = 0;
  while (queue.length > 0) {
    const course = queue.shift();
    count++;
    for (const next of graph[course]) {
      inDegree[next]--;
      if (inDegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  return count === numCourses;
}

export default canFinish;
