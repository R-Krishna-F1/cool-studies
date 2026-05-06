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
  code: `class Node {
    int data; Node prev, next;
    Node(int d) { data=d; prev=next=null; }
}
public class DoublyLL {
    Node head = null;

    void insertFront(int d) {
        Node n = new Node(d);
        if (head == null) { head = n; return; }
        n.next = head; head.prev = n; head = n;
    }

    void insertEnd(int d) {
        Node n = new Node(d);
        if (head == null) { head = n; return; }
        Node t = head;
        while (t.next != null) t = t.next;
        t.next = n; n.prev = t;
    }

    void insertPos(int d, int pos) {
        if (pos <= 0) return;
        if (pos == 1) { insertFront(d); return; }
        Node t = head;
        for (int i = 1; i < pos-1; i++) {
            t = t.next; if (t == null) return;
        }
        Node n = new Node(d);
        n.next = t.next; n.prev = t;
        if (t.next != null) t.next.prev = n;
        t.next = n;
    }

    void deleteFront() {
        if (head == null) return;
        head = head.next;
        if (head != null) head.prev = null;
    }

    void deleteEnd() {
        if (head == null) return;
        Node t = head;
        while (t.next != null) t = t.next;
        if (t.prev != null) t.prev.next = null; else head = null;
    }

    void deletePos(int pos) {
        if (head == null || pos <= 0) return;
        if (pos == 1) { deleteFront(); return; }
        Node t = head;
        for (int i = 1; i < pos; i++) {
            t = t.next; if (t == null) return;
        }
        if (t.prev != null) t.prev.next = t.next;
        if (t.next != null) t.next.prev = t.prev;
    }

    void display() {
        Node t = head;
        while (t != null) { System.out.print(t.data+"<->"); t=t.next; }
        System.out.println("null");
    }

    public static void main(String[] args) {
        DoublyLL l = new DoublyLL();
        l.insertFront(10); l.insertFront(5);
        l.insertEnd(20); l.insertPos(15,3);
        l.display(); // 5<->10<->15<->20<->null
        l.deleteFront(); l.deleteEnd(); l.deletePos(2);
        l.display(); // 10<->null
    }
}`
});
