# HTML 코드 정리

Created: 2022년 2월 25일 오후 10:19
Reviewed: No

> 시멘틱 웹이란 기계가 문장의 용도를 파악할 수 있도록 문장에 의미를 부여한 형태.
> 

## 01. HTML 기본구조

```jsx
<!DOCTYPE html>
<html lang="ko">
     <!-- 페이지 설정 부분 -->
     <head>
          <!-- 저장시에 사용된 인코딩(파일의 저장 형식) 값을 웹 브라우저에게 알려준다.  ANSI(euc-kr), UTF-8 -->
          <meta charset="utf-8" />
          <!-- 스마트 장치에서의 해상도 균일화 처리 -->
          <meta name="viewport" content="width=device-width,initialscale= 1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
          <!-- 브라우저에 표시될 문서 제목 -->
          <title>My Web Page</title>
     </head>
     <!-- 브라우저에 보여질 부분 -->
     <body>
           Hello HTML
      </body>
</html>
```

## 02. 문단 관련 요소

| 이름 | 태그 | 설명 |
| --- | --- | --- |
| 제목 | <h1> </h2>,<h2> </h2>,<h3> </h3>,<h4> </h4>,<h5> </h5,<h6> </h6 | * h는 Heading의 줄임말.
* h1~h6까지 제목을 표시하는 태그로 숫자가 커질 수록 제목이 작아진다. |
| 문단 | <p> </p> | * 본문 안에서 다른 본문 중첩 사용 가능
* 두 개 이상의 본문을 연속적으로 사용 가능, 각 문단 간에는 여백이 형성 됨 |
| 인용문 | <blockquote> </blockquote> | * 출처가 존재하는 형식의 문장 구성
* 이 태그 안에는 다른 문단 요소들이 포함 될 수 있음
* 인용문으로 설정된 문단은 오른쪽으로 들여쓰기가 적용됨.  |
| 목록 | 순서가 없는 목록 : <ul> </ul>
순서가 있는 목록:  <ol> </ol> | * 목록 안에 항목을 나열한다.
* 항목 안에서 새로운 목록을 나눌 수 있음 |
| 항목 | <li> </li> | * 목록 태그 안에 위치함
* 항목 안에서는 독립적인 본문을 구성할 수 있다.
(<p></p>,<div></div>,<h></h> 사용 가능)
* 항목 안에서 새로운 목록을 하위 요소로 포함 할 수 있다.
<li> 태그 안에서 새롭게 <ul><ol>태그를 시작할 수 있다. |
| 페이지 영역 나누기 | <div> </div> | * HTML에서 디자인 적용인 안됨
* 연속적으로 사용할 경우 간격 없는 문단 구성
* 중첩에 사용할 수 있으며 모든 종류의 HTML 태그 포함이 가능함
* |

### # id속성

모든 태그 요소에 사용할 수 있는 id속성
각 태그에게 고유한 기능을 부여하기 위해 다른 요소와 중첩되지 않는 값을 부여해야 한다.
id속성을 통해 고유한 기능을 부여하기 위해 이 속성이 CSS나 Javascript와 연계된다.
반드시 그 파일 안에서 고유한 값을 명시해야 한다.

## 03. 문장 관련 요소

| 이름 | 태그 | 설명 |
| --- | --- | --- |
| 글자 모양, 색상, 크기 | <font [ face=”글꼴이름”] [color=”색상값”] [size=”크기”]> ...내용...</font> | * 컴퓨터에 없는 글꼴일 경우 기본 글꼴로 표시됨
* 색상값은 #RRBBGG 16진수 또는 RGB형태를 사용 |
| 형광펜 강조 효과 | <mark>...내용...</mark> | * 글자에 형광펜으로 밑줄 친 효과를 줌 |
| 내용 굵게 표시 | <strong>...내용...</strong>
<b>...내용...</b> | * 내용의 글자를 굵게 표시함 |
| 밑줄 표시 | <u>...내용...</u> | * 글자에 밑줄을 표시함 |
| 기울림꼴 표시 | <i>...내용...</i> | * 글자를 기울여줌 |
| CSS 적용을 위한 영역 지정 | <span> </span> | * 이 태그는 HTML 코드 자체만으로는 아무런 기능이 없음 |
| 링크 기본 | <a href=”파일이름 혹은 사이트 주소” [target=”_blank”]> ...내용... </a> | * target 속성을 적용할 경우 새창(새탭)으로 표시됨
* 같은 사이트 내의 파일을 지정할 경우 상대경로, 절대경로 사용 가능
(웹에서 절대 경로는 http://부터 시작되는 온라인 상의 주소를 의미)
* 다른 사이트 주소를 명시할 경우 절대경로 형식으로만 가능함 |
| 스크롤 이동 | 현재 페이지의 맨 위로 이동 : <a href=”#”> </a>
현재 페이지.의 특정 위치로 이동: <a href=”menu”> </a> |  |
| 이메일 보내기 | <a href=”mailto:이메일주소”>...내용...</a> | * 메일을 누르면 연결된 메일로 메일 발송이 가능함 |
| 전화걸기(스마트 폰 전용) | <a href=”tel:전화번호”> ...내용...</a> | * 전화번호를 누르면 연결된 번호로 전화가 됨 |
| 주소, 연락처, 카피라이트 표시 | <address>...내용...</address> | * 이 태그 안에는 모든 종류의 HTML태그를 포함 시킬 수 있음 |

## 04. 문장 문단을 위한 기타 관련 요소

| 이름 | 태그 | 설명 |
| --- | --- | --- |
| 화면 상에 직선 긋기  | <hr/> | * </> 닫는 태그 없음
* /가 없어도 되지만 원칙상 /가 들어가야함 |
| copyright 특수문자 | &copy: | * 카피라이터를 표시할 때 사용되는 태그 |
| 줄바꿈 | <br/> | * </> 닫는 태그가 없음
*HTML 코드에서는 띄어쓰기나 줄바꿈을 아무리 많이 사용해도
 브라우저 상에는 한 칸으로 표시된 |
| 띄어쓰기 특수문자 | &nbsp; | * 띄어쓰기를 위한 태그 |

### 1. 표 그리기 기본 구성 코드

```jsx
<table border="굵기" width="넓이" ← 표의 영역 지정
align="left|center|right">
<thead> ← 제목영역
<tr> ← 행(줄)
<th width="넓이" align="left|center|right"> ← 열(th=제목용도, td=내용용
도)
... 내용 </th>
</tr>
</thead>
<tbody> ← 내용영역
<tr>
<td>... 내용 </td>
</tr>
</tbody>
<tfoot> ← 하단영역
<tr>
<th>... 내용 </th>
</tr>
</tfoot>
</table>
```

## 05. 표 그리기

- 영역 구문이 모호할 경우 thead, tbody, tfoot은 생략할 수 있다.
- th, td, th는 필요한 만큼 반복 사용 가능

| 이름 |  태그 | 설명 |
| --- | --- | --- |
| 표의 영역 지정 | <table border=”굵기” width=”넓이” align=”left | center | rigth ”> </table> | * 표의 영역을 지정 태그
* 표의 전체를 감싸줌 |
| 제목 영역 | <thead> </thead> | * 제목 영역 지정태그
* 제목 영역을 감싸줌(tr,th) |
| 행(줄) | <tr width="넓이" align="left | center| right”> </tr> | * 행(줄)을 만들어줌
* 행에 값을 줄 경우 열에 영향을 줌
* 열을 감싸줌
* 제목, 내용, 하단 어디든 사용 가능함 |
| 열(칸) | 제목& 하단 용도 : <th width="넓이" align="left | center | right”> ...내용... </th>

내용 용도 : <td width="넓이" align="left | center | right”> ...내용... </td> | * 제목, 내용, 하단 어디든 사용 가능함 |
| 내용 영역 | <tbody> </tbody> | * 내용 영역을 감싸줌(tr,td) |
|  하단 영역 | <tfoot> </tfoot> | * 하단 영역을 감싸줌(tr, th) |

### 2. 표의 줄, 칸 합치기

| 이름 |  태그 | 설명 |
| --- | --- | --- |
| 열(칸) 합치기 | <th colspan=”개수”> </th> 
<td colspan=”개수”> </td> | * td나 th 에 대하여 |
| 행(줄) 합치기 | <th rowspan=”개수”> </th>
<td rowspan=”개수”> </td> | * td나 th 에 대하여 |

### 3. 여백설정

- 일반적으로 border, cellpadding, cellspacing은 0으로 설정하여 모든 여백과 테두리 굵기를 0으로 리셋 시키고 CSS를 활용하여 세밀한 디자인을 적용한다.
- 최근의 웹 브라우저는 border, cellpadding, cellspacing을 명시하지 않은 경우 기본값을 0으로 지정한다.

| 이름 |  태그 | 설명 |
| --- | --- | --- |
| 칸관 내용 사이 여백 | <table cellpadding=”여백 크기”> </table> |  |
| 칸과 칸 사이 여백 | <table cellspcing=”여백 크기”> </table> |  |

## 06. 멀티미디어

| 이름 | 태그 | 설명 |
| --- | --- | --- |
| 이미지 삽입 | <img src=”파일경로” [width=”넓이”] [height=”높이”] [alt=”설명”]/>  | * 이미지 넣기 태그
* 넓이 높이 값을 지정하지 않을 경우 원래 사진 사이즈로 삽입됨 |
| 이미지 캡셥 삽입하기 | <figure>
     <img src="파일경로" [width="넓이"] [height="높이"] [alt="설명"] />
      <figcaption>캡션 내용</figcaption>
</figure> | * figure 태그로 감싼 후, figcaption으로 내용삽입
* 이미지는 여러 장 삽입이 가능함 |
| 오디오 삽입 | <audio src="파일경로" [controls] [loop] [autoplay]></audio> | * controls : 화면상에 슬라이드바를 포함한 컨트롤러를 표시함. 속성을 명시하지 않은 경우 배경음악 효과. (아무것도 보이지 않음)
* loop : 반복재생
* autoplay : 자동재생 (Chrome에서는 동작하지 않음) |
| 비디오 삽입 | <video src="파일경로" [controls] [loop] [autoplay] [preload] \[poster="미리보기이미지경로"] [width="넓이"] [height="높이"]></video> | * poster="미리보기이미지경로 |

### 1. 입력양식 기본 코드

```jsx
<input type="종류"
name="백엔드에서의 식별자"
[id="CSS,JS에서의 식별자"]
[value="입력값"]
[placeholder="설명글"]
[maxlength="최대입력가능한 글자 수"]
[min="최소값"]
[max="최대값"]
[step="입력단위"]
[checked]
[required] />
```

## 07. 입력요소

| 이름 | 태그  | 설명 |
| --- | --- | --- |
| 입력 양식 영역 | <form [method="get/post"] [action="backend-url"]
[enctype="multipart/form-data"]> </form> | * method: 입력값을 백엔드 페이지에게 전송하는 방 (GET,POST,PUT,DELETE)
* action : 입력값을 전송받을 백엔드 페이지의 URL
*enctype: 파일 업로드가 요구될 경우 명시  |
| 입력 양식 안 그룹 영역 | <fieldset> </fieldset> | * form 태그 안에 위치
* 그룹 제목을 감싸는 태그 |
| 입력 양식 안 그룹 제목 | <legend> 제목 </legend> | * 그룹의 이름을 지정 |
| 장문 입력 | <textarea name="식별자" id="식별자" [maxlength="숫자"]>내용</textarea> |  |
| 드롭다운 | <select name="식별자" id="식별자" [multiple]>
<option value="값" selected>화면표시내용</option>
</select> |  |
| 버튼(input) | <input type="button" value="click me" />
<input type="submit" value="click me" />
<input type="reset" value="click me" /> | * button= 이 자체로는 아무 기능이 없음. 동작할 내용을 JS로 구현
* submit= 입력한 내용을 백엔드에 전송 (일반적인 저장버튼)
* reset= 입력한 내용을 모두 초기화
* image= submit과 기능이 동일 |
| 버튼 | <button type="button">Click me</button>
<button type="submi">Click me</button>
<button type="reset">Click me</button> |  |
| 텍스트 입력 요소 | <label for="식별자2">텍스트</label>
<input type="종류" name="식별자1" id="식별자2" /> | * <label> 태그의 for 속성과 <input> 태그의 id속성을 연결 |
| 체크, 라디오 버튼 | <label>
<input type="종류" name="식별자1" id="식별자2" />
텍스트
</label> |  |

## 08. 입력양식 속성

| 이름 | 설명 |
| --- | --- |
| text | 일반 텍스트 입력(기본 정보 입력시) |
| password | 비밀번호 입력(*로 표시됨) |
| checkbox | 체크박스 버튼(다중 선택) |
| radio | 라디오 버튼 표시(단일 선택) |
| button | 눌렀을 때 동작할 기능을 JS로 만들어야함. 그 전까지는 기능이 없음 |
| submit | 입력 내용을 백엔드에 전송을 위한 버튼 |
| reset | 입력 내용을 초기화 시키는 버튼 |
| image | src 속성에 지정된 이미지 버튼 표시 ⇒ sumbit과 기능이 동일 |
| time | 시간을 선택할 수 있는 요소 표시 |

## 09. 스마트폰 키보드에 영향을 주는 종류

| 이름 | 설명 |
| --- | --- |
| email | 이메일 입력 할 수 있는 요소 표시 |
| tel | 전화번호 입력을 위한 요쇼 (스마트폰에서 전화번호 키보드가 나옴) |
| url | 웹 사이트 주소 입력을 위한 요소 |
| number | 숫자 입력을 위한 요소(스마트폰에서 숫자 키보드가 나옴)  |
| range | 범위를 지정하는 slider 표시 |
| search | 키보드 상에 검색 아이콘 표시 |
| date | 날짜를 선택할 수 있는 요소 |

## 10. input 태그 속성

| 이름 | 설명 |
| --- | --- |
| value=”기본값” | 페이지가 열릴 때 입력될 값 |
| checked | type 속성이 radio, checkbox인 경우 선택 상대로 지정 |
| min=”최소값” | type 속성이 number, range인 경우 사용 |
| max=”최대값” | type 속성이 number, range인 경우 사용 |
| step=”숫자” | type 속성이 number, range인 경우 사용 |
| maxlength=”숫자” | 키보드로 입력 가능한 최대 글자 수 지정 |
| src=”이미지 경로” | image 형태인 경우만 사용 |
| required |  필수 입력 항목 지정(모든 브라우저가 지원하지 않음) |