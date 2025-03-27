import { Node } from "./linked-list.mjs";

const sampleHead = new Node(0);

const one = new Node(1);
sampleHead.next = one;

const two = new Node(2);
one.next = two;

const three = new Node(3);
two.next = three;

const four = new Node(4);
three.next = four;

export { sampleHead };
