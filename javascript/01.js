// 변수 const (재할당 불가능)
const a = 5;
const b = 2;
const myName = "John";

// 변수 let  (재할당 가능)
let c = 7;
c = 9;


// console.log() 콘솔창에서 출력하는 명령어
console.log(a+b);
console.log("hello" + myName);

// alert
alert("팝업창");


// booleans
// 값이 없거나 0, -0, null, false, NaN, undefined, 빈 문자열 ("")이라면 객체의 초기값은 false가 됩니다.
// 문자열 "false"를 포함한 그 외 모든 다른 값은 초기값을 true로 설정합니다.
const isTrue = true;
const isFalse = false;
//  null: 변수는 존재하나, null 로 (값이) 할당된 상태. 즉 null은 자료형이 정해진(defined) 상태입니다.
const isNull = null;
// undefined: 변수는 존재하나, 어떠한 값으로도 할당되지 않아 자료형이 정해지지(undefined) 않은 상태입니다.
const isUndefined = undefined;
// NaN: not a number


// 배열
const week = ["mon","tues", "wed", "thur", "fri", "sat"];
// thur 출력 (0부터 시작)
console.log(week[3])
// 배열 추가
week.push("sun");
console.log(week);


// 객체
const info = {
    name: "John",
    age: 22,
    gender: "female",
}
console.log(info.name);
// 변경 가능 (const는 재할당 불가능이라 헷갈릴 수도 있지만 객체 안에 있는 정보를 바꾸는 것이므로 가능하다)
info.gender = "male";
console.log(info.gender);
// 객체 추가
info.pet = false;
console.log(info);
