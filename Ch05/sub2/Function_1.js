var count = 0;

// 호출문이 먼저나와도 정상작동한다.
myFnc();

function myFnc(params) {
  count++;
  console.log("hello" + count);
}
// 호출문 뒤에
myFnc();

var theFnc = function name(params) {
  count++;
  console.log("bye" + count);
};

theFnc();
