import axios from "axios";

const url = 'http://itpaper.co.kr/data/grade_card.json';

    //즉시실행 함수로 실행해야함
    (async()=>{
        let json = null;
        try{
            // axios를 활용하여 json 데이터 요청 --> get(url)로 데이터 가져오기
            const response = await axios.get(url);
            json = response.data; // 미리 준비한 json에 결과를 넣고 반환
        }catch(error){
            const errorMsg = "["+ error.response.status +"]" + error.response.statusText
            console.log("즉시 실행 함수 방식 - " + errorMsg);
            return;
        }
        // 반환된 json 값으로 반복문 실행
        json.grade_card.map((v,i)=>{
            console.group(i + "번째 항벅 ---");
            console.log("이름: %s, 학년: %d, 성별: %s, 국어: %d, 영어: %d, 수학: %d, 과학: %d", v.이름, v.학년, v.성별, v.국어, v.영어, v.수학, v.과학 );
            console.groupEnd();
        })
    })();