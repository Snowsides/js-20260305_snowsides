/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const dir = (param == 'asc') ? 1 : -1;

  const sortArr = [...arr].sort((a, b) => {
    return dir * a.localeCompare(b, ['ru', 'en'], { caseFirst: 'upper' });
  });

  return sortArr;
}

sortStrings(['b', 'a', 'c'], 'asc'); // ['a', 'b', 'c']
sortStrings(['b', 'a', 'c'], 'desc'); // ['c', 'b', 'a']