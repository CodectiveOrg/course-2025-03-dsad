import { Node } from "./node.mjs";

const root = new Node(0, 0);
const one = new Node(1, 1);
const two = new Node(2, 2);
const three = new Node(3, 3);
const four = new Node(4, 4);

root.children = [one, two];
one.children = [three, four];

console.log(root.children[0].children[1].data);
