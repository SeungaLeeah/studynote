/** 가장 일반적인 형태의 목록 구조  */
// 목록을 구성하는 배열 외의 목록을 설명하기 위한 부가 정보도 함께 포함
const bbs ={
    title: [
        {id: 1, subject: "첫 번째 게시물 제목"},
        {id: 2, subject: "두 번째 게시물 제목"},
        {id: 3, subject: "세 번째 게시물 제목"},
        {id: 4, subject: "네 번째 게시물 제목"}
    ]
};

console.log("게시판이름:"+bbs.title);
console.log("전체 게시물 수: " + bbs.title.length);

//일반 for 문
console.group("일반 for문");
for (let i=0; i<bbs.title.length; i++){
    console.log("["+bbs.title[i].id+"]"+bbs.title[i].subject);
}

console. groupEnd();

//for~of문
console.group('for~of문');
for(let k of bbs.title){
    console.log("[" + k.id +"]"+ k.subject);
}
console.groupEnd();