/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns the new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
    if (obj === undefined) return undefined;
    if (Object.keys(obj).length === 0) return {};
    const res = Object.entries(obj).reduce( (acc, [key, value]) => {
        acc[value] = key;
        return acc;
    }, {} );
    return res;
}
