// 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four] = arr;
console.log(one, two, three, four);

// 객체의 구조 분해 할당
let person = {
  name: "유수현",
  age: 25,
  hobby: "테니스",
};

let { name, age, hobby, extra = "hello" } = person;
console.log(name, age, hobby, extra);

// 객체의 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
