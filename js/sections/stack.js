window.DS_SECTIONS = window.DS_SECTIONS || [];
window.DS_SECTIONS.push({
  id: "stack",
  label: "Stack",
  title: "Stack",
  badge: "LIFO - Last In First Out",
  badgeClass: "bl",
  note: "push/pop happen at the same end (top).",
  properties: [
    ["Construction", "int[] s = new int[cap]\ntop = -1"],
    ["Full", "top == cap - 1"],
    ["Empty", "top == -1"],
    ["Push", "s[++top] = x"],
    ["Pop", "return s[top--]"],
    ["Peek", "return s[top]"],
    ["Insert/Remove at pos", "Not applicable (LIFO contract)"]
  ],
  code: `class Stack {
  int[] s; int top = -1, cap;
  Stack(int cap){ this.cap = cap; s = new int[cap]; }
  void push(int x){ if(top < cap - 1) s[++top] = x; }
  int pop(){ return top == -1 ? -1 : s[top--]; }
  int peek(){ return top == -1 ? -1 : s[top]; }
}`
});