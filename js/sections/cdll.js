window.DS_SECTIONS = window.DS_SECTIONS || [];
window.DS_SECTIONS.push({
  id: "cdll",
  label: "Circular DLL",
  title: "Circular Doubly Linked List",
  badge: "Circular + bidirectional",
  badgeClass: "bb",
  note: "head.prev gives O(1) tail access.",
  properties: [
    ["Node", "Node { data, prev, next }"],
    ["Empty", "head == null"],
    ["Single node", "node.next = node.prev = node"],
    ["Insert front", "link between last and head; head=n"],
    ["Insert end", "link between last and head"],
    ["Delete front", "head=head.next; reconnect head <-> last"],
    ["Delete end", "secondLast.next=head; head.prev=secondLast"],
    ["Display", "do-while until back to head"]
  ],
  code: `class CircularDLL {
  static class Node { int d; Node prev, next; Node(int d){ this.d = d; } }
  Node head;
  void insertFront(int x){
    Node n = new Node(x);
    if(head == null){ n.next = n.prev = n; head = n; return; }
    Node last = head.prev;
    n.next = head; n.prev = last;
    last.next = n; head.prev = n; head = n;
  }
}`
});