let 제목 = document.querySelector('#title');

// 제목은 element타입을 가질 수도 있고 null타입도 가질 수 있음.
// HTML 조작시 narrowing(타입을 하나로 확정시켜야 함) 방법 5개
if(제목 != null){
    제목.innerHTML = '반가워요'

}


//instanceof 연산자 사용 narrowing2
// 가장 많이 사용
if (제목 instanceof Element){
    제목.innerHTML = '안녕하세요'

}

//as로 사기치기. 비상시 쓰거나, 100% 확신시 쓰기때문에 별로 사용하지 않음.
//narrowing3
let 에즈제목 = document.querySelector('#title') as Element;
에즈제목.innerHTML = '반가워요에즈'

//오브젝트에 붙이는 ? .(optional chaning)
let 간지제목 = document.querySelector('#title')
if(간지제목?.innerHTML){
    간지제목.innerHTML = '반가워요간지'
}

//5번째 반복은 config에서 strictNullchecks를 false한다. 


// 타입스크립트가 기본적으로 제공하는 타입들이 있다.
let 링크 = document.querySelector('.link');
if(링크 instanceof HTMLAnchorElement){
    링크.href = 'https://kakao.com'
}

let 버튼 = document.querySelector('#button')
버튼?.addEventListener('click', function() {
    alert('하위');
})