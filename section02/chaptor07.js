// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6);

// console.log(arr1);
// console.log(newLength);
// 2. pop
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

// console.log(arr2);
// console.log(poppedItem);

// 3. shift
// 배열의 맨앞 요소 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

// console.log(shiftedItem);

// 4. unshift
// 배열의 맨앞 요소 추가
let arr4 = [1, 2, 3];
const unshiftedItem = arr4.unshift(0);

console.log(unshiftedItem, arr4);

// 5. slice
// 배열의 특정 범위를 잘라냄
let arr5 = [1, 2, 3, 4, 5];
const sliceItem = arr5.slice(2);

console.log(sliceItem);

// 6. concat
// 두개 배열 이어붙임
let arr6 = [1, 2];
let arr7 = [3, 4];
console.log(arr6.concat(arr7));
