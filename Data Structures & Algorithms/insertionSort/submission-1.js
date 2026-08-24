/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */

    insertionSort(pairs) { 

        if (pairs.length == 0) {
            return pairs
        }
        
        let newArray = []
        newArray[0] = ([...pairs])
        
        for (let i = 1; i < pairs.length; i++) {
            let key = pairs[i] // Current element being checked.
            let j = i - 1 // Elements sorted up to this current point

            while (j >= 0 &&  pairs[j].key > key.key) {
                pairs[j + 1] = pairs[j];
                j = j - 1;
            }
            
            pairs[j+1] = key 
            newArray.push([...pairs])
        }
        
        console.log(newArray)
        return newArray
    }
}


