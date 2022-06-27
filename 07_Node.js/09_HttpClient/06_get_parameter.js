import axios from "axios";

(async()=>{
    let result = null;
    try{
        //axios를 활용하여 다른 백엔드에게 HTTP GET 파라미터를 전달하고 결과를 리턴받는다.
        // 2가지 방법이 있는데, 첫 번째는 url에 ?찍고 params까지 다 적는 방법
        // const response = await axios.get('http://itpaper.co.kr/data/get.php?num1=100&num2=200');
        
        // 두번째는 url적고 그 뒤에 json 열고, json 안에 params라는 항목으로 key와 value를 명시
        const response = await axios.get('http://itpaper.co.kr/data/get.php',{
            params:{
                num1: 100,
                num2: 200
            },
            // HTTP 헤더를 전송해야 하는 경우
            // 현재 이 예제에서 사용하는 php페이즈는 http header에 대한 처리는 전혀 하고 있지 않으므로,
            // 전송해도 아무 영향이 없으므로 설명을 위해 아래 코드를 유지함.
            headers: {
                'Authorization': 'KakaoAK ###################'
            }
        });
        result = response.data;
    }catch{
        const errorMsg = "["+ error.response.status +"]" + error.response.statusText
        console.log(errorMsg);
        return;
    }
    console.log("다른 백엔드로부터 응답받은 결과값:" + result);
})();