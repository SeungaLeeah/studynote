import React from 'react';
import MyChildrenSub from '../components/MyChildrenSub';
import Meta from '../components/Meta';

const MyChildren =  () =>{
    return(
        <div>
            {/* Route처리를 적용 받는 페이지에서 이 컴포넌트를 중복 사용시 App.js에서의 설정을 덮어쓰게 된다. */}
            <Meta title="MyChildren.js" description="여기는 MyChildren.js 파일입니다." url={window.location.href} />  

            <h2>MyChildern</h2>

            {/* props 전달시 문자열 이외의 데이터타입은 중괄호로 묶어야 함 */}
            <MyChildrenSub width={400} heigth={100}><b>Hello World</b></MyChildrenSub>
            <MyChildrenSub width={300} heigth={80}>안녕 React</MyChildrenSub>
            <MyChildrenSub width={200} heigth={50}/>
        </div>
    );
};

export default MyChildren;