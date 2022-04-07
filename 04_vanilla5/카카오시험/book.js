/** 
* @filename    : book.js
* @author      : 이승아(leeah0913@gmail.com)
* @description : 프로그래밍 언어 응용
*/

  /* KAKAO REST KEY */
  const KAKAO_REST_KEY = "cd848075b9839c768c713e6ca8cd056a";

  /* 페이지 번호 */
  let currentPage = 1;

  /** 검색어*/
  let queryKeyword = null;

  /** 결과 문서 정렬 방식*/
  let sort = null;

  /** 문서 수 */
  let page = null;

  /* 마지막 페이지인지 검사 */
  let isEnd = false;

  /* 검색폼의 submit 이벤트 - 신규검색 */
  document.querySelector('#searchForm').addEventListener('submit', (e)=>{
      e.preventDefault();
  
      // 입력된 검색어를 가져온다.
      const queryField = document.querySelector('#query');
      queryKeyword = queryField.value.trim();
  
      // 결과 문서 정렬을 가져온다.
      const sortField = document.getElementById('sort');
      sort= sortField.options[sortField.selectedIndex].value;

      // 선택한 문서 수을 가져온다.
      const select = document.getElementById('total_count');
      search= select.options[select.selectedIndex].value;

      // 검색어가 입련되지 않은 경우에 대한 예외처리
      if(!queryKeyword){
          alert('검색어를 입력하세요.');
          queryField.focus();
          return;
      }

      //신규검색
      currentPage =1;
      get_book_search();
  });

  /* 스크롤 이벤트 - 추가검색 */
  window.addEventListener('scroll', (e)=>{
      // 마지막 페이지이거나 이미 로딩바가 화면에 표시되고 있다면, 처리중단
      if(isEnd || document.querySelector('#loading').classList.contains('active')){
          return;
      }

      // 스크롤바의 Y좌표
      const scrollTop = window.scrollY;
      //웹 브라우저의 창 높이
      const windowHeight = window.screen.availHeight;
      //HTML 문서의 높이
      const documentHeight = document.body.scrollHeight;

      // 스크롤바의 변동 효과를 고려해서 scrollTop + windowHeight가 실제 화면 크기보다 커질 수 있다.
      if(scrollTop + windowHeight >= documentHeight){
          //2페이지 이후는 추가 검색
          currentPage++;
          get_book_search();
      }
  });

  /* Ajax요청 후 결과를 화면에 HTML로 출력하는 함수 */
  async function get_book_search(){
  // 로딩바 객체
  const loading = document.querySelector('#loading');

  // 로딩바 화면에 표시하기
  loading.classList.add('active');

  // 검색결과가 표시될 영역
  const list = document.querySelector('#list');

  // 1페이지에 대한 요청일 경우 기존에 표시되고 있던 검색결과가 있다면 삭제한다.
  if (currentPage == 1){
      Array.from(list.getElementsByTagName('li')).forEach((v,i)=>{
          list.removeChild(v);
      });
  }
  // 검색결과를 저장할 빈 변수
  let json = null;    
  console.log(json);
  try{
      json = await axios.get(`https://dapi.kakao.com/v3/search/book`,{
          params:{
              query: queryKeyword,
              page: currentPage, 
              sort: sort,
          },
          headers: {
              Authorization: `KakaoAK ${KAKAO_REST_KEY}`,
          },
      });

  } catch(e){
      console.error(err);
      alert('요청을 처리하는데 실패했습니다.');
      return;
  }finally{
      // 로딩바 닫기
      loading.classList.remove('active');
  }

      if(json !=null) {
          const {data}  = json;

          // 다음 페이지를 요청할 수 있는지를 판단하기 위한 값.
          isEnd = data.meta.is_end;

            data.documents.map((v,i)=>{

            // li 태그 생성하기 
            const li = document.createElement('li');
            list.appendChild(li);

            // a태그 생성하기
            const a = document.createElement('a');
            a.setAttribute('href', v.url);
            a.setAttribute('target', '_blank');
            a.setAttribute('title', v.title);
            li.appendChild(a);

            // 이미지 태그 생성하기
            const img = document.createElement('img');
            if (v.thumbnail) {
            img.setAttribute('src', v.thumbnail);
            } else {
            img.setAttribute('src', 'img/noimage.jpg');
            }
            a.appendChild(img);

            // 글제목 생성하기
            const h2 = document.createElement('h2');
            h2.innerHTML = v.title;
            a.appendChild(h2);

            // 본문 태그 생성하기
            const p =document.createElement('p');
            p.innerHTML = v.contents;
            a.appendChild(p);

            // 저자 생성하기
            const spanWriter = document.createElement('span');
            spanWriter.classList.add("info");
            spanWriter.innerHTML = v.authors;
            a.appendChild(spanWriter);

            // 출판사 생성하기
            const spanCompany = document.createElement('span');
            spanCompany.classList.add("info");
            spanCompany.innerHTML = v.publisher;
            a.appendChild(spanCompany);

            // 도서정가 생성하기
            const spanPrice = document.createElement('span');
            spanPrice.classList.add("price");
            spanPrice.innerHTML = v.price;
            a.appendChild(spanPrice);

            // 도서 판매가 생성하기
            const spanSale = document.createElement('span');
            spanSale.classList.add("price");
            spanSale.innerHTML = v.sale_price;
            a.appendChild(spanSale);

          });
      }
 }

 