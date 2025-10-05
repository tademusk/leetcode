class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False
class Solution:
    def longestWord(self, words: List[str]) -> str:
        root = TrieNode() 
        for word in words:
            node = root
            for char in word:
                if char not in node.children:
                    node.children[char] = TrieNode()
                node = node.children[char]
            node.is_end = True
        longest_word = ""
        for word in words:
            node = root
            valid = True
            for char in word:
                node = node.children[char]
                if not node.is_end:
                    valid = False
                    break
            if valid:
                if len(word) > len(longest_word):
                    longest_word = word
                elif len(word) == len(longest_word) and word < longest_word:
                    longest_word = word
        return longest_word