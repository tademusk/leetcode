/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    let dummy = new ListNode()
    let curr = head
    dummy.next = new ListNode(curr.val)
    curr = curr.next
    while(curr){
        let prev = dummy
        while(prev) {
          if(prev.next && prev.next.val >= curr.val){
              let temp = prev.next
              prev.next = new ListNode(curr.val)
              prev.next.next = temp
              break   
          }
          else {
              if(prev.next === null){
                 prev.next = new ListNode (curr.val)
                 prev = prev.next
                 break 
              }
              else {
                prev = prev.next  
              }    
          }
       }
       curr = curr.next
    }
    return dummy.next
};
