window.DS_SECTIONS = window.DS_SECTIONS || [];
window.DS_SECTIONS.push({
  id: "queue",
  label: "Queue",
  title: "Queue (Linear)",
  badge: "FIFO - First In First Out",
  badgeClass: "bf",
  note: "Linear queue wastes freed slots; circular queue reuses them.",
  properties: [
    ["Construction", "int[] q = new int[cap]\nfront = rear = -1"],
    ["Full", "rear == cap - 1"],
    ["Empty", "front == -1 || front > rear"],
    ["Enqueue", "if(front==-1) front=0\nq[++rear] = x"],
    ["Dequeue", "return q[front++]"],
    ["Display", "for i=front..rear print q[i]"],
    ["Insert/Remove at pos", "Not applicable (FIFO contract)"]
  ],
  code: `public class Queue {
    int[] queue; int front, rear, capacity;

    Queue(int cap) {
        capacity = cap;
        queue = new int[capacity];
        front = rear = -1;
    }

    void enqueue(int x) {
        if (rear == capacity-1) { System.out.println("Full"); return; }
        if (front == -1) front = 0;
        queue[++rear] = x;
    }

    int dequeue() {
        if (front == -1 || front > rear) {
            System.out.println("Empty"); return -1;
        }
        return queue[front++];
    }

    void display() {
        for (int i = front; i <= rear; i++)
            System.out.print(queue[i] + " ");
        System.out.println();
    }

    public static void main(String[] args) {
        Queue q = new Queue(5);
        q.enqueue(10); q.enqueue(20); q.enqueue(30);
        q.display();    // 10 20 30
        q.dequeue();
        q.display();    // 20 30
    }
}`
});
