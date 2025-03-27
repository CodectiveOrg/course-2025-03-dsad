const map = new Map<string, number>();

map.set("bijan", 23);
map.set("reza", 4);
map.set("ali", 42);
console.log(map);

map.set("bijan", 16);
console.log(map);

console.log(map.has("bijan"));

console.log(map.get("bijan"));

map.delete("bijan");
console.log(map);

console.log(map.keys());
console.log(map.values());
console.log(map.entries());
