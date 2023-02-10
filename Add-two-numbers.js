/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0
    let dummy = new ListNode()
    let curr = dummy
    while(l1 && l2){
       if(Number(l1.val) + Number(l2.val) + carry >= 10){
          curr.next = new ListNode((Number(l1.val) + Number(l2.val) + carry)%10)
          carry = 1
       }
       else {
          curr.next = new ListNode(Number(l1.val) + Number(l2.val) + carry)
          carry = 0
       }
        curr = curr.next
        l1 = l1.next
        l2 = l2.next
    }
    if(l1){
        while(l1){
            if((l1.val + carry) === 10){
                carry = 1
                curr.next = new ListNode (0)
            }
            else {
                curr.next = new ListNode(l1.val + carry)
                 carry = 0
            }
            l1 = l1.next
            curr = curr.next
        }
    }
     if(l2){
        while(l2){
            if((l2.val + carry) === 10){
                carry = 1
                curr.next = new ListNode (0)
            }
            else {
                curr.next = new ListNode(l2.val + carry)
                carry = 0
            }
            l2 = l2.next
            curr = curr.next
        }
    }

    if(carry === 1) {
           curr.next = new ListNode(1) 
        }
    return dummy.next
};
