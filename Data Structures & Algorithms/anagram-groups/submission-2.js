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
    // strs = ["act","pots","tops","cat","stop","hat"]

    const dictionary = {};


    // Time Complexity: 0(n) -> Single loop, each element is checked.
    for (let i = 0; i < strs.length; i++)  {
        
        const word = strs[i];
        const sortedWord = word.split('').sort().join(''); // Time Complexity is 0(mLogm).

        // Time Compleixity: 0(1) ~ Constant? // 
         if (!(sortedWord in dictionary)) {
            dictionary[sortedWord] = [];
         }

        dictionary[sortedWord].push(word);

    } // Time Complexity: 0(n*2)

    const anagramList = Object.values(dictionary);
    return anagramList
    }
}
