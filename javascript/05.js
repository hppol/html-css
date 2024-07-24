const title = document.querySelector(".hello:first-child h1");


// 이벤트

// 	요소에 마우스를 클릭했을 때 이벤트가 발생
title.addEventListener("click", clickedTitle);
function clickedTitle(){
    title.style.color = "blue";
}

// 요소에 마우스를 더블클릭했을 때 이벤트가 발생
title.addEventListener("dblclick", dblClickedTitle);
function dblClickedTitle(){
    title.style.color = "red";
}

// mousedown: 마우스 버튼을 누를 때 발생
// mouseup: 마우스 버튼을 뗐을 때 발생
// mousemove: 마우스가 움직일 때 발생
// mouseover: 마우스가 요소 위로 이동할 때 발생
// mouseout: 마우스가 요소 밖으로 이동할 때 발생
// mouseenter: 마우스가 요소 안으로 이동할 때 발생 (버블링하지 않음)
// mouseleave: 마우스가 요소 밖으로 나갈 때 발생 (버블링하지 않음)

const div = document.querySelector("#div-tag");
div.addEventListener("click", clickedDiv);
function clickedDiv(event){
    console.log(event);
}