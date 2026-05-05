window.DS_SECTIONS = window.DS_SECTIONS || [];
window.DS_SECTIONS.push({
  id: "sll",
  label: "Singly LL",
  title: "Singly Linked List",
  badge: "Positional access",
  badgeClass: "bb",
  note: "Traversal is one-way; deleting tail needs traversal.",
  properties: [
    ["Node", "Node { data, next }"],
    ["Empty", "head == null"],
    ["Insert front", "n.next = head\nhead = n"],
    ["Insert end", "traverse to tail\ntail.next = n"],
    ["Delete front", "head = head.next"],
    ["Delete end", "secondLast.next = null"],
    ["Insert at pos", "go to pos-1\nn.next = cur.next\ncur.next = n"],
    ["Delete at pos", "go to pos-1\ncur.next = cur.next.next"]
  ],
  code: `class SLL {
  static class Node { int d; Node next; Node(int d){ this.d = d; } }
  Node head;
  void insertFront(int x){ Node n = new Node(x); n.next = head; head = n; }
  void deleteFront(){ if(head != null) head = head.next; }
}`
});