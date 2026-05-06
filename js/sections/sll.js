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
  code: `class Node {
    int data; Node next;
    Node(int d) { data = d; next = null; }
}
public class SinglyLL {
    Node head = null;

    void insertFront(int d) {
        Node n = new Node(d);
        n.next = head; head = n;
    }

    void insertEnd(int d) {
        Node n = new Node(d);
        if (head == null) { head = n; return; }
        Node t = head;
        while (t.next != null) t = t.next;
        t.next = n;
    }

    void insertPos(int d, int pos) {
        if (pos == 1) { insertFront(d); return; }
        Node t = head;
        for (int i = 1; i < pos-1; i++) {
            if (t == null) return; t = t.next;
        }
        Node n = new Node(d);
        n.next = t.next; t.next = n;
    }

    void deleteFront() { if (head != null) head = head.next; }

    void deleteEnd() {
        if (head == null) return;
        if (head.next == null) { head = null; return; }
        Node t = head;
        while (t.next.next != null) t = t.next;
        t.next = null;
    }

    void deletePos(int pos) {
        if (head == null) return;
        if (pos == 1) { deleteFront(); return; }
        Node t = head;
        for (int i = 1; i < pos-1; i++) {
            t = t.next; if (t == null) return;
        }
        if (t.next != null) t.next = t.next.next;
    }

    void display() {
        Node t = head;
        while (t != null) { System.out.print(t.data + "→"); t = t.next; }
        System.out.println("null");
    }

    public static void main(String[] args) {
        SinglyLL l = new SinglyLL();
        l.insertFront(10); l.insertEnd(20); l.insertPos(15,2);
        l.display(); // 10→15→20→null
    }
}`
});
