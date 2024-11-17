class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        arrLength = len(words)
        wordLength = len(words[0])
        if len(s) < arrLength * wordLength:
            return []

        wordMap = {}

        for word in words:
            wordMap[word] = wordMap.get(word, 0) + 1

        currentWordMap = dict(wordMap)

        left = 0
        right = arrLength * wordLength
        result = []
        while right <= len(s):
            for i in range(arrLength):
                currentWord = s[(left + (i*wordLength)) : (left + ((i+1)*wordLength))] 
                if currentWordMap.get(currentWord, 0) > 0:
                    currentWordMap[currentWord] -= 1
                else:
                    break
            else:
                result.append(left)

            left += 1
            right += 1
            currentWordMap = dict(wordMap)
        return result

                    
                
