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
  code: `class Queue {
  int[] q; int front = -1, rear = -1, cap;
  Queue(int cap){ this.cap = cap; q = new int[cap]; }
  void enqueue(int x){
    if(rear == cap - 1) return;
    if(front == -1) front = 0;
    q[++rear] = x;
  }
  int dequeue(){
    if(front == -1 || front > rear) return -1;
    return q[front++];
  }
}`
});