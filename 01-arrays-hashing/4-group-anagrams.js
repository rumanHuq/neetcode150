/**
 * 49. Group Anagrams
 * https://leetcode.com/problems/group-anagrams/
 * Given an array of strings strs, group the anagrams together.
 *
 * @export
 * @param {string[]} strs
 */
export function groupAnagrams(strs) {
  /** @type {Record<string, string[]>} */
  const map = {};
  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split('').toSorted().join('');
    if (!map[key]) map[key] = [];

    map[key].push(strs[i]);
  }

  return Object.values(map);
}
