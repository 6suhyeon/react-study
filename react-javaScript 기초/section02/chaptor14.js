// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "유수현",
        id: "winterhood",
      });
    }, 1500);
  });
}

// console.log(getData());

// await
// async 내부 함수에서만 사용가능
// 비동기 함수가 다 처리되기를 기다리는 함수

async function printData() {
  const data = await getData();
  console.log(data);
}
printData();
