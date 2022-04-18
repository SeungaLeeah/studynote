/** 
* @filename    : javascript.js
* @author      : 이승아(leeah0913@gmail.com)
* @description : 현대자동차 자바스크립트 구현
*/

/* 회사소개 화면구현 */
const navSide = document.querySelector("#nav_side");
const sub = document.querySelector(".sub_nav") ;

navSide.addEventListener("mouseover", e =>{
    sub.style.display = "block";
    //중복방지
    iconSearch.style.display= "none";
    selectList.style.display = "none";
});

navSide.addEventListener("mouseout", e =>{
    sub.style.display = "none";
});

sub.addEventListener("mouseover", e =>{
    sub.style.display = "block"
});
sub.addEventListener("mouseout", e =>{
    sub.style.display = "none"
});

//검색창 열기
let search = true;

const navSearch = document.querySelector("#nav_search");
const iconSearch = document.querySelector(".icon_search");

navSearch.addEventListener("click", e =>{
    if(search === true) {
        iconSearch.style.display = "block";
        //중복 방지
        sub.style.display = "none"
        selectList.style.display = "none";   
    }
});


/* 닫기 버튼 구현 */
const close = document.querySelectorAll(".close").forEach(v => {
    v.addEventListener("click", e => {
        
        // 회사소개 닫기
        sub.style.display="none";

        // 검색창 닫기
        iconSearch.style.display= "none";
    });
});

/* 언어선택 */
let language = true;

const languageSelect = document.querySelector("#select");
const selectList = document.querySelector("#ul");

const languageIcon = document.querySelector(".select_arrow");

languageSelect.addEventListener("click", e =>{
    if(language === true) {
        selectList.style.display = "block";
        languageIcon.style.transform = "rotate(180deg)"; 
        languageIcon.style.transition = "all 0.3s"

        //중복 방지
        sub.style.display = "none"
        iconSearch.style.display= "none";

        language = false;
    } else{
        selectList.style.display = "none";
       languageIcon.style.transform = "none";

        language = true;
    }
});


/* social 화면 구현 */
const socialSection = document.querySelector(".social_section");
const socialHidden = document.querySelector(".social_hidden") ;

socialSection.addEventListener("mouseover", e =>{
    socialHidden.style.display = "block";
    
});

socialSection.addEventListener("mouseout", e =>{
    socialHidden.style.display = "none";
});

socialHidden.addEventListener("mouseover", e =>{
    socialHidden.style.display = "block"
});
socialHidden.addEventListener("mouseout", e =>{
    socialHidden.style.display = "none"
});

