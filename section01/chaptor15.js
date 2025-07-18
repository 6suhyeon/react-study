// 1. 객체 생성
let ob1 = new Object(); // 객체 생성자
let ob2 = {}; // 객체 리터럴

// 2. 객체 프로퍼티
let person = {
  name: "이정환",
  age: 26,
  hobby: "테니스",
  extra: {},
};

// 3. 객체 프로퍼티 다루는 방법
// 3-1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name);

let age = person["age"];
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.1 새로운 프로퍼티 추가
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

console.log(person);

// 3.2 프로퍼티 수정
person.job = "educator";
console.log(person);

// 3.3 프로퍼티 삭제
delete person.job;
console.log(person);

//  3.4 프로퍼티 존재 여부를 확인
let result = "name" in person;
console.log(result);
