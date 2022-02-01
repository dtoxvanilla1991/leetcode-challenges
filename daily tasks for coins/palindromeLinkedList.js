/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = head => {
    let seq = '';
    while (head) {
        seq += head.val;
        head = head.next;
    }
    console.log(seq);
    const l = Math.floor(seq.length);
    console.log(l, seq.length);
    for (let i = 0; i < l; i++)
        if (seq[i] != seq[l - 1 - i])
            return false;
    return true;
};
isPalindrome([1, 2, 2, 1]);