class Solution:
    def compress(self, chars: List[str]) -> int:
        i = lengthOfresult = 0
        while i < len(chars):
            currFrequency = 1
            j = i + 1
            while j < len(chars) and chars[j] == chars[i]:
                    currFrequency += 1
                    j += 1
            chars[lengthOfresult] = chars[i]
            lengthOfresult += 1
            if currFrequency > 1:
                string = list(str(currFrequency))
                chars[lengthOfresult: lengthOfresult + len(string)] = string
                lengthOfresult += len(string)
            i = j
        return lengthOfresult 
                

            
            

                    


            
            

      
                

        
