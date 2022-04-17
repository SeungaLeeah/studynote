"use strict";

/** 
* @filename    : javascript.js
* @author      : 이승아(leeah0913@gmail.com)
* @description : 현대자동차 자바스크립트 구현
*/

/* 회사소개 화면구현 */
var navSide = document.querySelector("#nav_side");
var sub = document.querySelector(".sub_nav");
navSide.addEventListener("mouseover", function (e) {
  sub.style.display = "block"; //중복방지

  iconSearch.style.display = "none";
  selectList.style.display = "none";
});
navSide.addEventListener("mouseout", function (e) {
  sub.style.display = "none";
});
sub.addEventListener("mouseover", function (e) {
  sub.style.display = "block";
});
sub.addEventListener("mouseout", function (e) {
  sub.style.display = "none";
}); //검색창 열기

var search = true;
var navSearch = document.querySelector("#nav_search");
var iconSearch = document.querySelector(".icon_search");
navSearch.addEventListener("click", function (e) {
  if (search === true) {
    iconSearch.style.display = "block"; //중복 방지

    sub.style.display = "none";
    selectList.style.display = "none";
  }
});
/* 닫기 버튼 구현 */

var close = document.querySelectorAll(".close").forEach(function (v) {
  v.addEventListener("click", function (e) {
    // 회사소개 닫기
    sub.style.display = "none"; // 검색창 닫기

    iconSearch.style.display = "none";
  });
});
/* 언어선택 */

var language = true;
var languageSelect = document.querySelector("#select");
var selectList = document.querySelector("#ul");
var languageIcon = document.querySelector(".select_arrow");
languageSelect.addEventListener("click", function (e) {
  if (language === true) {
    selectList.style.display = "block";
    languageIcon.style.transform = "rotate(180deg)";
    languageIcon.style.transition = "all 0.3s"; //중복 방지

    sub.style.display = "none";
    iconSearch.style.display = "none";
    language = false;
  } else {
    selectList.style.display = "none";
    languageIcon.style.transform = "none";
    language = true;
  }
});
/* social 화면 구현 */

var socialSection = document.querySelector(".social_section");
var socialHidden = document.querySelector(".social_hidden");
socialSection.addEventListener("mouseover", function (e) {
  socialHidden.style.display = "block";
});
socialSection.addEventListener("mouseout", function (e) {
  socialHidden.style.display = "none";
});
socialHidden.addEventListener("mouseover", function (e) {
  socialHidden.style.display = "block";
});
socialHidden.addEventListener("mouseout", function (e) {
  socialHidden.style.display = "none";
});