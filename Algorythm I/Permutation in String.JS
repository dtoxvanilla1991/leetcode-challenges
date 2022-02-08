// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
//In other words, return true if one of s1's permutations is the substring of s2.
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
//  We have 26 english letters. Here is the idea:

//  Create a negative map of s1 chars
//  While iterating over s2 chars, 1 char enters the window and 1 char exits, update the map accordingly
//  If all map elements are zero we have the answer!

//  const checkInclusion = function (s1, s2) {
// 	const chars = new Array(26).fill(0),
//               a = "a".charCodeAt(0);
	
// 	// Create a map of s1 chars
// 	for (let i = 0; i < s1.length; i++) 
// 		chars[s1.charCodeAt(i) - a]--;

// 	for (let i = 0; i < s2.length; i++) {
// 		// Increase visited char in the map
// 		chars[s2.charCodeAt(i) - a]++;

// 		// Continue until s1.length chars are visited
// 		if (i < s1.length - 1) continue;
		
// 		// Reset chars exiting the window in the map
// 		if (i > s1.length - 1) chars[s2.charCodeAt(i - s1.length) - a]--;

// 		// Check if all map chars are zero
//         if(chars.every(v => v == 0)) return true;
// 	}
    
// 	return false;
// };
var checkInclusion = function(s1, s2) {
    // Build a cache of the existing letter counts we need to match
	// An array that maps to each letter index is faster but a little harder to implement, can be done with `letter.charCodeAt(0)` if you want to convert this
    const keys = {};
    const s1N = s1.length;
    for (let i = 0; i < s1N; i++) {
        const letter = s1[i];
        keys[letter] = (keys[letter] || 0) + 1;
    }
    
	// Track existing matches in our sliding window
    const matchCount = {};
    const s2N = s2.length;
	
	// Pointers used to slide a window of possible solutions
    let left = 0;
    let right = 0;
	
    while (right < s2N) {
        const letter = s2[right];
		
		// Track the new letter
        matchCount[letter] = (matchCount[letter] || 0) + 1;
        
		// Remove all letters that exceed our letter count by bumping up the left pointer
        while (matchCount[letter] > (keys[letter] || 0)) {
            matchCount[s2[left]] -= 1;
            left++;
        }
        
		// Get the window length and exit early if we have a match
        if (right - left + 1 === s1N) return true;
        
		// Increment the right to increase the window size
        right++;
    }
        
	// No match was found, exit early
    return false;
};
checkInclusion("hello", "ooolleoooleh");