import axios from "axios";

// API 발급키 = devU01TX0FVVEgyMDIyMDYyNzE5MjQ0OTExMjczOTg=

/** API 참조: https://www.juso.go.kr/addrlink/openApi/searchApi.do */
(async()=>{
    let json = null;
    try{
        //axios를 활용하여 다른 백엔드에게 HTTP GET 파라미터를 전달하고 결과를 리턴받는다.
        const response = await axios.get("https://www.juso.go.kr/addrlink/addrLinkApi.do",{
            params:{
                confmKey: 'devU01TX0FVVEgyMDIyMDYyNzE5MjQ0OTExMjczOTg=',
                currentPage: 1,      // 현재 페이지 번호
                countPerpage: 20,   // 페이지장 출력할 결과 Row 수    
                keyword: "서초W",   //주소 검색어
                resultType: 'json'  //검색 결과 형식 설정 (xml, json)
            }
        });
        //response.data안에 results가 있다면, 그리고 그 안에 common 있다면, 그리고 errorMessage가 0이 아니라면
        if(response.data.results?.common?.errorMessage !== "0"){
           //error 메세지를 만들어서
            const error = new Error();
            // 강제 세팅해서 에러를 발생시키도록 구성
            error.response ={
                status: response.data.results.common.errorCode,
                statusText: response.data.results.common.errorMessage
            }
            throw error;
        }
        //console.log(response.data)
        json = response.data;
    }catch(error){
        const errorMsg = "["+ error.response.status +"]" + error.response.statusText
        console.log(errorMsg);
        return;
    }
    json.results.juso.map((item, index)=>{
        console.log("[%s]", item.zipNo);
        console.log("[지번주소]" + item.jibunAddr);
        console.log("[도로명 주소]" + item.roadAddr);
        console.log();
    });

})();