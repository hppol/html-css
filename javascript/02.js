// 함수
function sayHello(){
    console.log("안녕하세요");
}
sayHello();


function infoOfPerson(name, age){
    console.log(name, age);
}
infoOfPerson("James", 22);
infoOfPerson("Jimmy", 24);


// 객체에서 함수사용
const player = {
    name: "john",
    sayHello: function(){
        console.log("hello");
    }
}
player.sayHello();


// 보통 함수 쓰면 return을 안쓰고 print(a+b) 이런식으로 자주 사용하나 이거에 단점은 변수에 저장이 안된다는 것이다. 당연히 print만 하는것이므로
// ex)
function minus(a, b){
    console.log(a-b);
}
const resultMinus = minus(7, 3);
// undefined로 뜬다
console.log(resultMinus);

// 따라서 return을 써주자
function plus(a, b){
    return a+b;
}

const resultPlus = plus(2, 6);
console.log(resultPlus);