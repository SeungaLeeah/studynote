// react 기본 패키지 참조(필수)
import React from 'react';

import MySubComponent from './MySubComponent';

const MyComponent2= () => {
    return(
        <div>
            <h2>Virtual Dom</h2>
            <p>This is React MyComponent</p>

            <MySubComponent/>
            <MySubComponent/>
            <MySubComponent/>
        </div>
    );
};
export default MyComponent2;