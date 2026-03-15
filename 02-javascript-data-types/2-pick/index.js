/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
<<<<<<< HEAD
=======
<<<<<<< HEAD
const fruits = {
 apple: 2,
 orange: 4,
 banana: 3
};

=======
>>>>>>> 0239335 (fix remarks)
>>>>>>> c0a498e (fix)
export const pick = (obj, ...fields) => {
    const res =  Object.fromEntries(
        Object.entries(obj).filter( ([key]) => fields.includes(key) )
    );
    return res;
};
<<<<<<< HEAD
=======
<<<<<<< HEAD


console.log(pick(fruits, 'apple', 'banana')); // { apple: 2, banana: 3 }

=======
>>>>>>> 0239335 (fix remarks)
>>>>>>> c0a498e (fix)
