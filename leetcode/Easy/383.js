/**
 * 383 Ransom Note
 * Given an arbitrary ransom note string and another string containing letters from all the magazines,
 * write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.
 * Each letter in the magazine string can only be used once in your ransom note.
 *
 * Example:
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
export default function canConstruct(ransomNote, magazine) {
  const magazineChar = {};

  for (let i = 0; i < magazine.length; i++) {
    magazineChar[magazine[i]] = magazineChar[magazine[i]] || 0;
    magazineChar[magazine[i]]++;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!magazineChar[ransomNote[i]]) {
      return false;
    }
    magazineChar[ransomNote[i]]--;
  }
  return true;
}
