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
  code: `class Node {
    int data; Node prev, next;
    Node(int d) { data=d; prev=next=null; }
}
public class CircularDLL {
    Node head = null;

    void insertFront(int d) {
        Node n = new Node(d);
        if (head == null) { n.next=n.prev=n; head=n; return; }
        Node last = head.prev;
        n.next=head; n.prev=last;
        last.next=n; head.prev=n; head=n;
    }

    void insertEnd(int d) {
        Node n = new Node(d);
        if (head == null) { n.next=n.prev=n; head=n; return; }
        Node last = head.prev;
        n.next=head; n.prev=last;
        last.next=n; head.prev=n;
    }

    void insertPos(int d, int pos) {
        if (pos == 1) { insertFront(d); return; }
        Node t = head;
        for (int i = 1; i < pos-1; i++) {
            t=t.next; if(t==head) return;
        }
        Node n=new Node(d);
        n.next=t.next; n.prev=t;
        t.next.prev=n; t.next=n;
    }

    void deleteFront() {
        if (head == null) return;
        if (head.next==head) { head=null; return; }
        Node last=head.prev;
        head=head.next;
        head.prev=last; last.next=head;
    }

    void deleteEnd() {
        if (head == null) return;
        if (head.next==head) { head=null; return; }
        Node last=head.prev, sLast=last.prev;
        sLast.next=head; head.prev=sLast;
    }

    void deletePos(int pos) {
        if (head == null) return;
        if (pos==1) { deleteFront(); return; }
        Node t=head;
        for (int i=1; i<pos; i++) {
            t=t.next; if(t==head) return;
        }
        t.prev.next=t.next; t.next.prev=t.prev;
    }

    void display() {
        if (head==null) { System.out.println("Empty"); return; }
        Node t=head;
        do { System.out.print(t.data+"<->"); t=t.next; }
        while(t!=head);
        System.out.println("(back to head)");
    }

    public static void main(String[] args) {
        CircularDLL l=new CircularDLL();
        l.insertFront(10); l.insertFront(5);
        l.insertEnd(20); l.insertPos(15,3);
        l.display(); // 5<->10<->15<->20<->(back to head)
        l.deleteFront(); l.deleteEnd(); l.deletePos(2);
        l.display(); // 10<->(back to head)
    }
}`
});
