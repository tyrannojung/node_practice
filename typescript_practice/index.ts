let 이름 :string[] = ['kim', 'park'];

let 오브젝트 :{ name? : string } = { name : 'kim' } 


//숫자 또는 문자
let 유니온타입 :string | number = 123; 

type 내타입 = string | number;
let 유니온타입변수사용 :내타입 = 123;

function 함수(x :number) : number{
    return x * 2
}


//array에 쓸 수 있는 tuple타입
//array에 꼭 맞는 규칙이 있지만 이 규칙을 모르는 사람이 뒤죽박죽으로 넣으면 오류발생할 수 있으므로 튜플타입 존재
type Member = [number, boolean];
let john:Member = [123, true]

// 여러개의 속성을 간단하게 작성할때.
type memObject = {
    [key :string] : string,
}

let kim : memObject = { name : 'kim', age : '123' }


class User {
    name :string;
    constructor(name :string){
        this.name = name;

    }
}