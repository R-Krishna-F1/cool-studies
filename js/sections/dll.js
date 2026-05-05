window.DS_SECTIONS = window.DS_SECTIONS || [];
window.DS_SECTIONS.push({
  id: "dll",
  label: "Doubly LL",
  title: "Doubly Linked List",
  badge: "Bidirectional",
  badgeClass: "bb",
  note: "prev + next pointers allow easier middle deletion.",
  properties: [
    ["Node", "Node { data, prev, next }"],
    ["Empty", "head == null"],
    ["Insert front", "n.next=head; head.prev=n; head=n"],
    ["Insert end", "tail.next=n; n.prev=tail"],
    ["Delete front", "head=head.next; head.prev=null"],
    ["Delete end", "tail.prev.next=null"],
    ["Insert at pos", "link n between prev and next"],
    ["Delete at pos", "prev.next=next; next.prev=prev"]
  ],
  code: `class DLL {
  static class Node { int d; Node prev, next; Node(int d){ this.d = d; } }
  Node head;
  void insertFront(int x){
    Node n = new Node(x);
    if(head != null){ n.next = head; head.prev = n; }
    head = n;
  }
}`
});