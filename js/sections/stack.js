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
  code: `public class Stack {
    int[] arr; int top, capacity;

    Stack(int cap) {
        capacity = cap;
        arr = new int[capacity];
        top = -1;
    }

    void push(int x) {
        if (top == capacity-1) { System.out.println("Full"); return; }
        arr[++top] = x;
    }

    int pop() {
        if (top == -1) { System.out.println("Empty"); return -1; }
        return arr[top--];
    }

    int peek() {
        if (top == -1) { System.out.println("Empty"); return -1; }
        return arr[top];
    }

    void display() {
        for (int i = 0; i <= top; i++)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    public static void main(String[] args) {
        Stack s = new Stack(5);
        s.push(10); s.push(20); s.push(30);
        s.display();              // 10 20 30
        System.out.println(s.pop()); // 30
        s.display();              // 10 20
    }
}`
});
