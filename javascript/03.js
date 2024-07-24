// 입력
// const askAge = prompt("how old are you?");

// parseInt() string => number 로변환
// 문자라고 다 변환이 되는 것이 아니고 문자열이지만 숫자로 된 문자열만 변환 가능
const justString = "20";
const stringNumber = parseInt("20");
console.log(typeof justString, typeof stringNumber);


// if 문
// &&: and, ||: or
const num = 7;
if(num < 10) {
	console.log('입력한 값이 10보다 작습니다.');
} else {
	console.log('입력한 값이 10보다 큽니다.');
}
