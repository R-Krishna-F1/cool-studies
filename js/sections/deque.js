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
  code: `class Deque {
  int[] d; int front = -1, rear = -1, cap;
  Deque(int cap){ this.cap = cap; d = new int[cap]; }
  void pushFront(int x){ /* update front with wrap-around */ }
  void pushRear(int x){ /* update rear with wrap-around */ }
}`
});