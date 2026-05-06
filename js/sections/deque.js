window.DS_SECTIONS = window.DS_SECTIONS || [];
window.DS_SECTIONS.push({
  id: "deque",
  label: "Deque",
  title: "Deque",
  badge: "Insert/Delete both ends",
  badgeClass: "bb",
  note: "Supports queue and stack style operations in one structure.",
  properties: [
    ["Construction", "int[] d = new int[cap]\nfront = rear = -1"],
    ["Full", "(rear + 1) % cap == front"],
    ["Empty", "front == -1"],
    ["Insert front", "front = (front - 1 + cap) % cap"],
    ["Insert rear", "rear = (rear + 1) % cap"],
    ["Delete front", "front = (front + 1) % cap"],
    ["Delete rear", "rear = (rear - 1 + cap) % cap"],
    ["Display", "walk circularly from front to rear"]
  ],
  code: `public class Deque {
    int[] arr; int front, rear, cap;

    Deque(int c) {
        cap = c; arr = new int[cap]; front = rear = -1;
    }

    boolean isFull()  { return rear == cap-1; }
    boolean isEmpty() { return front == -1; }

    void insertRear(int x) {
        if (isFull()) { System.out.println("Full"); return; }
        if (front == -1) front = 0;
        arr[++rear] = x;
    }

    void insertFront(int x) {
        if (isFull()) { System.out.println("Full"); return; }
        if (front == -1) { front = rear = 0; arr[0] = x; return; }
        for (int i = rear; i >= front; i--) arr[i+1] = arr[i];
        arr[front] = x; rear++;
    }

    int removeFront() {
        if (isEmpty()) { System.out.println("Empty"); return -1; }
        int v = arr[front];
        if (front == rear) front = rear = -1; else front++;
        return v;
    }

    int removeRear() {
        if (isEmpty()) { System.out.println("Empty"); return -1; }
        int v = arr[rear];
        if (front == rear) front = rear = -1; else rear--;
        return v;
    }

    void display() {
        for (int i = front; i <= rear; i++)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    public static void main(String[] args) {
        Deque dq = new Deque(6);
        dq.insertRear(20); dq.insertRear(30); dq.insertFront(10);
        dq.display(); // 10 20 30
    }
}`
});
