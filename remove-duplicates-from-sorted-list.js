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
var deleteDuplicates = function(head) {
    let cur = head
    if (cur) {
        let prev = cur
        cur = cur.next
        while(cur){
           if(prev.val === cur.val){
               prev.next = cur.next
               cur = cur.next
           }
           else {
               prev = cur
               cur = cur.next
           }
        }
    }
    return head
};
