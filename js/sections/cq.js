window.DS_SECTIONS = window.DS_SECTIONS || [];
window.DS_SECTIONS.push({
  id: "cq",
  label: "Circular Queue",
  title: "Circular Queue",
  badge: "FIFO + wrap-around",
  badgeClass: "bf",
  note: "Reuses empty slots using modulo arithmetic.",
  properties: [
    ["Construction", "int[] q = new int[cap]\nfront = rear = -1"],
    ["Full", "(rear + 1) % cap == front"],
    ["Empty", "front == -1"],
    ["Enqueue", "if empty: front=rear=0 else rear=(rear+1)%cap"],
    ["Dequeue", "if single: front=rear=-1 else front=(front+1)%cap"],
    ["Display", "i=front; loop until i==rear"],
    ["Insert/Remove at pos", "Not applicable (FIFO contract)"]
  ],
  code: `public class CircularQueue {
    int[] q; int front, rear, cap;

    CircularQueue(int c) {
        cap = c; q = new int[cap]; front = rear = -1;
    }

    boolean isFull()  { return front == (rear+1) % cap; }
    boolean isEmpty() { return front == -1; }

    void enqueue(int x) {
        if (isFull()) { System.out.println("Full"); return; }
        if (front == -1) front = 0;
        rear = (rear+1) % cap;
        q[rear] = x;
    }

    int dequeue() {
        if (isEmpty()) { System.out.println("Empty"); return -1; }
        int val = q[front];
        if (front == rear) { front = rear = -1; }
        else front = (front+1) % cap;
        return val;
    }

    void display() {
        if (isEmpty()) { System.out.println("Empty"); return; }
        int i = front;
        while (true) {
            System.out.print(q[i] + " ");
            if (i == rear) break;
            i = (i+1) % cap;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        CircularQueue cq = new CircularQueue(4);
        cq.enqueue(10); cq.enqueue(20); cq.enqueue(30);
        cq.dequeue();
        cq.enqueue(40); cq.enqueue(50);
        cq.display(); // 20 30 40 50
    }
}`
});
