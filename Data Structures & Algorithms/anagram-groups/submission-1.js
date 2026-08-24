class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    
    // Anagram list = []

    // strs2 = strs

    // for strs2. 
    // DIC value can be a list.
    // act = key, value: sublist

    // strs[i] == act, sublist.push[str[i]]

    // Dic: {
        // act:  ["act", "cat" ...]
    //}

    
    // Anagram.push(DIC[key]) 

    let dictionary = {};

    for (let i = 0; i < strs.length; i++)  {
        
        let word = strs[i];
        let sortedWord = word.split('').sort().join('');

         if (!(sortedWord in dictionary)) {
            dictionary[sortedWord] = [];
         }

        dictionary[sortedWord].push(word);

    }

    let anagramList = Object.values(dictionary);
    return anagramList
    }
}
