/** 
* @filename    : RegexHelper.js
* @author      : 이승아(leeah0913@gmail.com)
* @description : 정규표현식 검사 수행
*/

// for node.js
// const BadRequestException = require('./BadRequestException');

class RegexHelper{
    // constructor(){}
    /* 
    * 값의 존재 여부를 검사한다.
    * @param {string} selector 검사할 대상의 CSS 선택자
    * @param {string} msg      값이 없을 경우 표시할 메세지 내용 
    * 
    * ex) regexHelper.value('#user_id', '아이디를 입력하세요');
    */
   value(selector, msg){
       const content = document.querySelector(selector).value;

       if(content == undefined || content == null || (typeof content == 'string' && content.trim().length==0)){
            throw new BadRequestException(msg, selector);
       }
       return true;    
   }

   /**
    * 입력값이 지정된 글자수를 초과했는지 검사한다.
    * @param {string} selector   검사할 대상의 CSS 선택자
    * @param {int} len           최대 글자수
    * @param{string} msg         값이 없을 경우 표시될 메세지
    */
    maxLength(selector, len, msg){
       this.value(selector, msg);

       const content = document.querySelector(selector).value;

       if(content.trim().length > len){
           throw new BadRequestException(msg, selector);
       }
       return true;
    }

   /* 
   * 입력값이 지정된 글자수 미만인지 검사한다.
   * @param {string} selector 검사할 대상의 CSS 선택자
   * @param {int} len         최소 글자수
   * @param {string} msg      값이 없을 경우 표시될 메세지
   */
   minLength(selector, len, msg)   {
       this.value(selector,msg);

       let content = document.querySelector(selector).value;

       if(content.trim().length < len){
           throw new BadRequestException(msg, selector);
       }
       return true;
   }
    /* 두 값이 동일한지 검사한다.
    * @param {String} origin  원본에 대한 CSS선택자.
    * @param {String} compare 검사 대상에 대한 CSS 선택자. 
    * @param {String} msg     검사에 실패할 경우 표시할 메세지
    */
   compareTo(origin, compare, msg){
       this.value(origin, msg);
       this.value(compare, msg);

       var src = document.querySelector(origin).value.trim();  // 원본값을 가져온다.
       var dsc = document.querySelector(compare).value.trim(); // 비교할 값을 가져온다.

       if(src !=dsc){
           throw new BadRequestException(msg, origin);
       }

       return true; //성공했음을 리턴
   }
   
   /* 
   * 입력값이 정규표현식을 충족하는지 검사한다.
   * @param {string} selector  검사할 대상의 CSS 선택자
   * @param {string} msg       표시할 메세지
   * @param {object} regexExpr 검사할 정규표현식
   */
   field(selector, msg, regexExpr){
       this.value(selector, msg);

       const content = document.querySelector(selector).value;
       const src = content.trim();

       // 입력값에 대한 정규표현식 검사가 실패라면?
       if(!regexExpr.test(src)){
           throw new BadRequestException(msg, selector);
       }
       return true;
   }

   /* 
   * 숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string} selector  검사할 대상의 CSS 선택자
   * @param {string} msg       표시할 메세지
   */
    num(selector, msg){
      return this.field(selector, msg, /^[0-9]*$/);
  }

    /* 
   * 영문으로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string} selector  검사할 대상의 CSS 선택자
   * @param {string} msg       표시할 메세지
   */
    eng(selector, msg){
        return this.field(selector, msg, /^[a-zA-Z]*$/);
    }


    /* 
   * 한글로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string} selector  검사할 대상의 CSS 선택자
   * @param {string} msg       표시할 메세지
   */
    kor(selector, msg) {
        return this.field(selector, msg, /^[ㄱ-ㅎ가-힣]*$/);
    }

    /* 
   * 한글과 영어로 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string} selector  검사할 대상의 CSS 선택자
   * @param {string} msg       표시할 메세지
   */
    korEng(selector, msg) {
        return this.field(selector, msg, /^[ㄱ-ㅎ가-힣a-zA-Z]*$/);
    }


    /* 
   * 영문과 숫자로 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string} selector  검사할 대상의 CSS 선택자
   * @param {string} msg       표시할 메세지
   */
    engNum(selector, msg){
      return this.field(selector, msg, /^[a-zA-Z0-9]*$/);
    }
    /* 
   * 한글과 숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string} selector  검사할 대상의 CSS 선택자
   * @param {string} msg       표시할 메세지
   */
    korNum(selector, msg){
        return this.field(selector,msg, /^[ㄱ-ㅎ가-힣0-9]*$/);
    }

     /* 
   * 태어난 년도 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string} selector  검사할 대상의 CSS 선택자
   * @param {string} msg       표시할 메세지
   */
    birthYear(selector, msg){
        this.value(selector,msg);

        let birth = document.querySelector('#year');
        let birth_pattern = /^(19[0-9][0-9]|20\d{2})$/;

        if(!birth_pattern.test(birth.value)){
            birth.value=''; 
            birth.focus(); 
            throw new BadRequestException(msg, selector);
       }
       return true; 
     }


       /* 
   * 태어난 날 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string} selector  검사할 대상의 CSS 선택자
   * @param {string} msg       표시할 메세지
   */
    birthDay(selector, msg){
        this.value(selector,msg);

        let birth = document.querySelector('#day');
        let birth_pattern = /^(0[1-9]|[1-2][0-9]|3[0-1])$/;  

        if(!birth_pattern.test(birth.value)){
            birth.value=''; 
            birth.focus(); 
            throw new BadRequestException(msg, selector);
       }
       return true; 
     }


    /* 
   * 이메일주소 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string} selector  검사할 대상의 CSS 선택자
   * @param {string} msg       표시할 메세지
   */
    email(selector, msg){
        return this.field(selector, msg, /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[az]{2})?)$/i);
    }

    /* 
   * 핸드폰 번호 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string} selector  검사할 대상의 CSS 선택자
   * @param {string} msg       표시할 메세지
   */
    cellphone(selector, msg){
        return this.field(selector, msg, /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/);
    }

    /* 
   * 집전화 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string} selector  검사할 대상의 CSS 선택자
   * @param {string} msg       표시할 메세지
   */
    phone(selector, msg){
        this.value(selector,msg);

        const content = document.querySelector(selector).value.trim();
        var check1 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/; //핸드폰 형식
        var check2 = /^\d{2,3}\d{3,4}\d{4}$/; //집전화 형식

        // 핸드폰 형식도 아니고 집전화 형식도 아니라면?
        if(!check1.test(content)&& !check2.test(content)){
            throw new BadRequestException(msg, selector);
        }
        return true; //성공했음을 리턴
    }
}

// for node.js
// module.exports = new RegexHelper();