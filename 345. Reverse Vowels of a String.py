class Solution:
    def reverseVowels(self, s: str) -> str:
        left,right = 0, len(s) - 1
        list_of_s = list(s)
        vowels = "aeiouAEIOU"
        while left < right:
            if list_of_s[left] in vowels and list_of_s[right] in vowels:
                list_of_s[left], list_of_s[right] = list_of_s[right], list_of_s[left]
                left, right = left + 1, right - 1
            elif list_of_s[left] not in vowels:
                left += 1
            elif list_of_s[right] not in vowels:
                right -= 1
        return "".join(list_of_s)
