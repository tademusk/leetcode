/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
   let output = []
   let cur = head
   while (cur) {
       let temp = cur
       while(temp){
           if (temp.val > cur.val){
               output.push(temp.val)
               break
           }
           else if (temp.next){
               temp = temp.next
           }
           else {
               output.push(0)
               temp = temp.next
           }
       }
       cur = cur.next
   }
   return output 
};
