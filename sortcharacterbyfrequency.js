/**
 * Given a string s, sort it in decreasing order based on the frequency of the characters. 
 * The frequency of a character is the number of times it appears in the string.
 * Return the sorted string. If there are multiple answers, return any of them.
 * @param {string} s 
 * @returns {string}
 */ 


var frequencySort = function (s) {
    let freq = {}, max = 1
    for (let c of s) {
        freq[c] = (freq[c] || 0) + 1
        max = Math.max(max, freq[c])
    }
    let res = Array(max + 1).fill('')  // init with empty strings!

    // insert chars into res according to freq -> no sorting required
    // length-freq for decreasing order 
    for (let c of Object.keys(freq)) res[res.length - freq[c]] = res[res.length - freq[c]] + c.repeat(freq[c])

    // join to build string. Elements without chars will still have an empty string and will be ignored,
    // this is important as we loop over the max freq but not every freq might have associated chars. 
    return res.join('')
};

// Example usage:
const s = "tree";
const result = frequencySort(s);
console.log(result);