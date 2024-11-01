// https://leetcode.com/problems/delete-characters-to-make-fancy-string
// Difficulty: Easy

function makeFancyString(s: string): string {
  if (s.length < 2) return s
  let fancyString = ''

  for (let i = 0; i < s.length; i++) {
    if (s[i - 1] !== s[i] || s[i + 1] !== s[i]) {
      fancyString += s[i]
    }
  }
  return fancyString
}
