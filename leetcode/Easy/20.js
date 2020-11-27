/**
 * 20 Valid Parentheses
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 *  Open brackets must be closed by the same type of brackets.
 *  Open brackets must be closed in the correct order.
 * Example:
 *  Input: s = "()[]{}"
 *  Output: true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
export default function isValid(s) {
  const stack = [];
  const map = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);

  for (let i = 0; i < s.length; i++) {
    if (map.has(s.charAt(i))) {
      const top = stack.length === 0 ? '@' : stack.pop();
      if (top !== map.get(s.charAt(i))) {
        return false;
      }
    } else {
      stack.push(s.charAt(i));
    }
  }

  return stack.length === 0;
}
