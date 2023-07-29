//####실습1######

// function call(name) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log(name);
//       resolve(name);
//     }, 1000);
//   });
// }

// function back() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("back");
//       resolve("back");
//     }, 1000);
//   });
// }

// function hell() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("callback hell");
//     }, 1000);
//   });
// }

// call("kim")
//   .then(function (name) {
//     console.log(name + "반가워");
//     return back();
//   })
//   .then(function (txt) {
//     console.log(txt + "을 실행했구나");
//     return hell();
//   })
//   .then(function (message) {
//     console.log("여기는 " + message);
//   })

//#######실습2#######
// let name;
// let txt;
// let message;
// exec();

// function call(name) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log(name);
//       resolve(name);
//     }, 1000);
//   });
// }

// function back() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("back");
//       resolve("back");
//     }, 1000);
//   });
// }

// function hell() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("callback hell");
//     }, 1000);
//   });
// }

// async function exec() {
//   let name = await call("kim");
//   console.log(name + "반가워");

//   let txt = await back();
//   console.log(txt + "을 실행했구나");

//   let message = await hell();
//   console.log("여기는 " + message);
// }

//###########실습3####

function changeBackgroundColor(color, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = color;
      resolve();
    }, delay);
  });
}

changeBackgroundColor("red", 1000)
  .then(() => changeBackgroundColor("orange", 1000))
  .then(() => changeBackgroundColor("yellow", 1000))
  .then(() => changeBackgroundColor("green", 1000))
  .then(() => changeBackgroundColor("blue", 1000));
