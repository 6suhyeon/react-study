// falsy 한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f1) {
  console.log("falsy");
}

// truthy한값 : 나머지

// 활용 사례
function printName() {
  if (!person) {
    console.log("person 의 값이 없음");
  }
  console.log(person.name);
}

let person = { name: "이정환" };
printName(person);
