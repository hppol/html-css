// console.dir: 객체의 모든 속성을 콘솔에서 볼 수 있는 방법으로서 이를 사용하면 개발자가 객체의 속성을 쉽게 확인할 수 있다.
console.dir(document);
document.title = "Changed it";

// document.getElementById() : id 속성을 가진 요소를 찾고, 이를 나타내는 Element 객체를 반환한다.
const h1 = document.getElementById("h1-tag");
console.log(h1);
// textContent: 텍스트 변경하기
h1.textContent = "Bye";

// document.getElementsByClassName(): class 속성을 가진 요소를 찾고, 이를 나타내는 Element 객체를 반환한다.
const h2 = document.getElementsByClassName("h2-tag");
console.log(h2);
h2[1].textContent = "추가";

// document.querySelector(): css 선택자를 사용 (id면 #, class면 .)
// querySelectorAll()도 있다.
const div = document.querySelector("#div-tag");
console.log(div);
div.textContent = "123";