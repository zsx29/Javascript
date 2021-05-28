/*
    scope = 범위

    전역변수(Global Variables) : 자바스크립트 어디에서든 사용할 수 있는 변수
    지역변수(Local Varialbes) : 함수 스코프에서만 사용할 수 있는 변수
*/

var score = 10;

function myFnc(params) {
  var score = 1;
  console.log(score);
}

myFnc();
console.log(score);

(function () {
  var num = 100;
  function menu() {
    num += 100;
    console.log(num);
  }
  menu();
})();

(function () {
  var num = 100;
  function munu() {
    console.log(num);
  }
})();
