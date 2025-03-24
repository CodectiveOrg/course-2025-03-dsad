function a() {
  console.log("a");
  a();
}

function b() {
  console.log("b");
  c();
}

function c() {
  console.log("c");
}

a();
