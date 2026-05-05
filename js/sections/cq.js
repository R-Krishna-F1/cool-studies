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
  code: `class CircularQueue {
  int[] q; int front = -1, rear = -1, cap;
  CircularQueue(int cap){ this.cap = cap; q = new int[cap]; }
  void enqueue(int x){
    if((rear + 1) % cap == front) return;
    if(front == -1) front = rear = 0;
    else rear = (rear + 1) % cap;
    q[rear] = x;
  }
}`
});