/**
 * @FileName : UtilHelper.js
 * @Description : 백엔드 개발시 자주 사용되는 독립 함수들 모음
 * @Author : EZEN 아카데미 Node.js 강의 (이광호, leekh4232@gmail.com)
 */

import { networkInterfaces } from 'os';

const myip = () => {
    const ipAddress = [];
    const nets = networkInterfaces();

    for (const attr in nets) {
        const item = nets[attr];

        item.map((v, i) => {
            if (v.family == 'IPv4' && v.address != '127.0.0.1') {
                ipAddress.push(v.address);
            }
        });
    }

    return ipAddress;
};

const urlFormat = (urlObject) => String(Object.assign(new URL("http://a.com"), urlObject));

/**
 * 페이지 구현에 필요한 변수값들을 계산한다.
 * @param totalCount
 * @param nowPage
 * @param listCount
 * @param groupCount
 * @return Objecet - nowPage    : 현재 페이지
 *                 - totalCount : 전체 데이터 수
 *                 - ListCount  : 한 페이지에 보여질 목록 수
 *                 - totalPage  : 전체 페이지 수
 *                 - groupCount : 한 페이지에 보여질 그룹 수
 *                 - totalGroup : 전체 그룹 수
 *                 - nowGroup   : 현재 페이지가 속해 있는 그룹 번호 
 *                 - groupStart : 현재 그룹의 시작 페이지
 *                 - groupEnd   : 현재 그룹의 마지막 페이지
 *                 - preGroupLastPage   : 이전 그룹의 마지막 페이지
 *                 - nextGroupLastPage   : 다음 그룹의 시작 페이지
 *                 - offset   : SQL의 LIMIT절에서 사용할 데이터 시작 위치
 */
const pagenation =(totalCount=0, nowPage=1, listCount=10, groupCount=5)=>{
    //전달된 파라미터가 정수 타입이 아니라면 정수로 변환
    totalCount = isNaN(totalCount) ? 0 : parseInt(totalCount);
    nowPage = isNaN(nowPage) ? 1 : parseInt(nowPage);
    listCount = isNaN(listCount) ? 10 : parseInt(listCount);
    groupCount = isNaN(groupCount) ? 5 : parseInt(groupCount);

    // 전체 페이지 수
    var totalPage = parseInt(((totalCount -1) / listCount)) +1;

    // 전체 그룹 수
    var totalGroup = parseInt(((totalPage -1) / (groupCount))) +1;

    // 현재 페이지가 속한 그룹
    var nowGroup = parseInt(((nowPage -1) / groupCount)) +1;

    // 현재 그룹의 시작 페이지 번호
    var groupStart = parseInt(((nowGroup -1) / groupCount)) +1;

    // 현재 그룹의 마지막 페이지 번호
    var groupEnd = Math.min(totalCount, nowGroup * groupCount);

    // 이전 그름의 마지막 페이지 번호
    var preGroupLastPage = 0;
    if(groupEnd < totalPage) { nextGroupLastPage = groupStart -1;}

    // 다음 그룹의 시작 페이지 번호
    var nextGroupLastPage = 0;
    if(groupEnd < totalPage) { nextGroupLastPage = groupEnd +1;}

    // LIMIT절에서 사용할 데이터 시작 위치
    var offset = parseInt(((totalCount -1) / listCount)) +1;

    //리턴할 데이터들을 객체로 묶기
    return{
        nowPage : nowPage,
        totalCount : totalCount,
        listCount : listCount,
        totalPage : totalPage,
        groupCount : groupCount,
        totalGroup : totalGroup,
        nowGroup : nowGroup,
        groupStart : groupStart,
        groupEnd : groupEnd,
        preGroupLastPage : preGroupLastPage,
        nextGroupLastPage : nextGroupLastPage,
        offset: offset
    };
};

export { myip, urlFormat, pagenation };