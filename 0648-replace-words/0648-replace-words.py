class TrieNode:
    def __init__(self):
        self.children = {}
        self.word = None 

class Solution:
    def replaceWords(self, dictionary: List[str], sentence: str) -> str:
        root = TrieNode()
        for word in dictionary:
            node = root
            for char in word:
                if char not in node.children:
                    node.children[char] = TrieNode()
                node = node.children[char]
            node.word = word 
        def findRoot(word):
            node = root
            for char in word:
                if char not in node.children:
                    break
                node = node.children[char]
                if node.word:
                    return node.word
            return word
        return " ".join(findRoot(w) for w in sentence.split())
