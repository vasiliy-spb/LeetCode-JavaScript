/**
 * @param {string} s
 * @return {string}
 */


// my solution
var frequencySort = function(s) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s.charAt(i))) map.set(s.charAt(i), 0);
        map.set(s.charAt(i), map.get(s.charAt(i)) + 1);
    }
    let list = [];
    for (const entry of map) {
        if (!list[entry[1]]) list[entry[1]] = [];
        list[entry[1]].push(entry[0]);
    }
    let result = "";
    for (let i = list.length - 1; i >= 0; i--) {
        if (list[i]) {
            list[i].sort((a, b) => {
                if (a < b) return -1;
                if (b < a) return 1;
                return 0;
            });
            console.log(list[i])
            for (const ch of list[i]) {
                let count = i;
                while (count-- > 0) {
                    result += ch;
                }
            }
        }
    }
    return result;
};

// from GPT
var frequencySort = function(s) {
    // Create a hashmap to store the frequency of each character
    const charFrequency = new Map();
    
    // Count the frequency of each character
    for (const char of s) {
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }
    
    // Sort the characters based on their frequencies
    const sortedChars = Array.from(charFrequency.keys()).sort((a, b) => charFrequency.get(b) - charFrequency.get(a));
    
    // Build the result string by repeating each character based on its frequency
    let result = '';
    for (const char of sortedChars) {
        result += char.repeat(charFrequency.get(char));
    }
    
    return result;
};

