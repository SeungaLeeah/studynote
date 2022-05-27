const Search = styled.div`
position: absolute;
z-index: 1002;
width: 100%;
background: #fff;
box-sizing: border-box;
transform: translate(0,-180%);
opacity: 0;
&.SearchOn {
opacity: 1;
transform: translate(0,0);
transition: opacity 0.4s ease-in-out;
}
>form {
height: 243px;
width: 1200px;
margin: auto;
padding: 25px 0;
table {
width: 100%;
height: 150px;
tr {
width: 100%;
text-align: left;
vertical-align: top;
th {
width:7%;

padding-top:8px ;
font-size: 14px;
color: #2f231c;
font-weight: 400;
}
td {
&:nth-child(2) {
width: 35%;
select {
margin-right: 14px;
border: 1px solid #d1cecc;
padding: 6px 6px;
option {
width: 128px;
font-size: 13px;
}
}
input {
padding: 8px 80px 8px 10px;
background-color: #efefef;
border: none;
}
}
&:nth-child(4) {
width: 35%;
input {
width: 100%;
padding: 8px 1px 8px 10px;
background-color: #efefef;
border: none;
}
p {
&:nth-child(2) {
font-size: 13px;
color: #9c9c9c;
}
&:nth-child(3) {
font-size: 13px;
color: #ff7c98;
}
}
}
}
&:nth-child(2) {
th {
padding-top: 3px;
}
td {
div {
width: 280px;
label {
float: left;
width: 25%
11 / 37
font-size: 13px;
input {
vertical-align: middle;
}
}
&:after {
float: left;
display: block;
clear: both;
content: '';
}
}
}
}
}
}
>div {
width: 400px;
margin: auto;
padding-top: 25px;
text-align: center;
button {
width: 147px;
line-height: 37px;
background-color: #ff7c98;
border: none;
border-radius: 20px;
color: #fff;
font-size:15px
}
}
}
`;


//상단 우측 검색 이미지 클릭시 바뀔 상태값
const [SearchBtn,setSearchBtn] = React.useState(false);
//상단 우측 검색 이미지 클릭시 발생할 이벤트
const BtnClick = React.useCallback(e=>setSearchBtn(SearchBtn => !SearchBtn),
[SearchBtn])


// 마우스 변경시 아이콘 변경 예시
<img src={SearchBtn ? ('./img/btn_search_close.gif'):
('./img/icon_search.png')} alt='search' onClick={BtnClick}/>



//마우스 클릭시 나오는 부분 예시
<Search className={SearchBtn?('SearchOn'):('')}>
<form>
<table>
<tbody>
<tr>
<th><span>제품명</span></th>
<td>
<select>
<option>전체</option>
<option>아이스크림</option>
<option>아이스크림케이크</option>
<option>음료</option>
<option>커피</option>
<option>디저트</option>
<option>block pack</option>
<option>ready pack</option>
</select>
<input name='product'></input>
</td>
<th>해시태그</th>
<td>
<div>
<input name='hash'></input>
<p>자주 찾는 해시태그</p>
<p>#피카피카피카츄 #피카츄초코바나나블라스트 #쿨쿨잠만보밀
키소다블라스트 #고라파덕아이스크림콘 #푸린아이스크림콘 #포켓몬스터</p>
</div>
</td>
</tr>
<tr>
<th>알르레기 성분</th>
<td>
<div>
<div>
<label htmlFor='egg'>
<input type='checkbox' name='egg'/>
</label>
<label htmlFor='soybean'>
<input type='checkbox' name='soybean'/>
대두
</label>
<label htmlFor='pork'>
<input type='checkbox' name='pork'/>
돼지고기
</label>
<label htmlFor='peanut'>
<input type='checkbox' name='peanut'/>
땅콩
</label>
</div>
<div>
<label htmlFor='wheat'>
<input type='checkbox' name='wheat'/>
밀
</label>
<label htmlFor='peach'>
<input type='checkbox' name='peach'/>
복숭아
</label>
<label htmlFor='milk'>
<input type='checkbox' name='milk'/>
우유
</label>
<label htmlFor='none'>
<input type='checkbox' name='none'/>
없음
</label>
</div>
</div>
</td>
</tr>
</tbody>
</table>
<div>
<button type='submit'>검색</button>
</div>
</form>
</Search>
<GrayBox className={SearchBtn?(''):('SearchOut')} onClick={BtnClick}>
</GrayBox>
</div>
);
};