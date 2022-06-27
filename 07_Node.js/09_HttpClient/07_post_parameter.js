/**
 * $ npm install --save form-data
 */
import axios from "axios";
import FormData from 'form-data';

(async()=>{
    let result = null;
    try{
        // POST 방식으로 전송할 파라미터 정의 --> 가상의 <form>태그를 생서
        const form = new FormData();
        
        // form 태그에 input 요소 추가와 같은 원리 -> 이름, value 형태
        form.append('num1', 200);
        form.append('num2', 300);
        

        // POST 방식 전송
        //파라미터를 저장하고 있는 객체를 url, 2번째 파라미터(form)로 설정
        const response = await axios.post('http://itpaper.co.kr/data/post.php', 
        form,{
            //매번 url을 작성할 수 없음으로 -> 3번째 함수로 만들어서 전달
            headers: form.getHeaders()
        });
        result = response.data;
    }catch(error){
        const errorMsg = "["+ error.response.status +"]" + error.response.statusText
        console.log(errorMsg);
        return;
    }
    console.log('다른 백엔드로부터 응답받은 결과값: ' + result);
})();