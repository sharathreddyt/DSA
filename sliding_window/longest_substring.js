// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


// sliding window approach

function findLongestSubstring(s){
let current_substring = new Set()
let substring_start_index = 0;
let length_of_substring = 0;

for(let index =0; index < s.length; index++){
    while(current_substring.has(s[index])){
        current_substring.delete(s[substring_start_index]);
        substring_start_index++
    }
    current_substring.add(s[index]);
    length_of_substring = Math.max(length_of_substring, index - substring_start_index +1)
}

return length_of_substring

}

const length_of_longest_substring = findLongestSubstring("abcabcbb")

console.log("lenght of longest substring is: ",length_of_longest_substring )
console.log("lenght of longest substring is: ",findLongestSubstring("bbbbb") )
console.log("lenght of longest substring is: ",findLongestSubstring("pwwkew") )