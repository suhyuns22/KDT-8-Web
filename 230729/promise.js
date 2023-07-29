// promise 객체를 반환하는 promise1 함수 정의
// function promise1(flag) {
//   return new Promise(function (resolve, reject) {
//     if (flag) {
//       resolve("promise 상태는 fulfilled, then으로 연결, 이떄 flag 값은 true");
//     } else {
//       reject("promise 상태는 rejected, catch로 연결, 이떄 flag값은 false");
//     }
//   });
// }

// console.log(promise1(true));

// console.log(promise1(false));

// promise1(true)
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// promise1(false)
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

//##################
// let product;
// let price;
// goMart();
// pickDrink()
//   .then(pay)
//   .catch((err) => {
//     console.log(err);
//   });

// function goMart() {
//   console.log("마트에 와서 어떤 음료 마실까?");
// }

// function pickDrink() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("고민 끝!");
//       product = "제로 콜라";
//       price = 3000;
//       if (price <= 2000) {
//         resolve();
//       } else {
//         reject("돈이 부족해요");
//       }
//       //   resolve();
//     }, 3000);
//   });
// }

// function pay() {
//   console.log(`상품명: ${product}, 가격 ${price}`);
// }

//################
//promise 체이닝

//체이닝 사용 안 한 경우
//(4+3)*2-1=13

//프로미스 체이닝 사용한 경우
//장점 : then 메서드 연속 사영 사능 -> 순차적으로 작업 가능
//예외처리 간편 -> 마지막에 catch 구문으로 한번에 처리

function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n - 1;
      //   resolve(result);
      reject(new Error("에러처리"));
    }, 500);
  });
}

add(4, 3)
  .then(function (result) {
    console.log("1:", result);
    return mul(result);
  })
  .then(function (result) {
    console.log("2:", result);
    return sub(result);
  })
  .then(function (result) {
    console.log("3:", result);
  })
  .catch(function (err) {
    console.log("실패!");
    console.log(err);
  });
