// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2;
animal.type = "강아지";
delete animal.name;

console.log(animal);

// 2. 메서드
const person = {
  name: "이정환",
  //   sayHi: function () {
  //     console.log("안녕");
  //   },
  sayHi() {
    console.log("안녕");
  },
};

person.sayHi();
