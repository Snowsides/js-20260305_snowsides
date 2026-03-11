/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    let rus = arr.filter( s => /^[а-яёА-ЯЁ]/.test(s) );
    let lat = arr.filter( s => /^[a-zA-Z]/.test(s) );

    let res1 = (param == 'asc') ? rus.sort( (a, b) => a.localeCompare(b, 'ru', {caseFirst: "upper"}) ) : (param == 'desc') ? rus.reverse().sort( (a, b) => b.localeCompare(a, 'ru', {sensitivity: "variant"}) ) : arr;

    let res2 = (param == 'asc') ? lat.sort( (a, b) => a.localeCompare(b, 'en', {caseFirst: "upper"}) ) : (param == 'desc') ? lat.reverse().sort( (a, b) => b.localeCompare(a, 'en', {sensitivity: "variant"}) ) : arr;

    return param === 'asc' ? [...res1, ...res2] : [...res2, ...res1];
}