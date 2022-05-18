import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Professor from './components/Professor';
import Spinner from './components/Spinner';
import Student from './components/Student';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [department,setDepartment] =React.useState([]);
  const [deptno, setDeptno] = useState(-1); 

    useEffect(()=> {
      setLoading(true);
        (async()=>{
          try {
          const response = await axios.get('http://localhost:3001/department')
          setDepartment(response.data)
        }catch(error) {
        console.error(error);
        alert('서버와 연결되지 않음')
       }finally {
      setLoading(false);
        }
      })();
    },[])

    const onChange = useCallback((e)=>{
      setDeptno(e.currentTarget.value)
      },[])
    return (
      <div >
        <Spinner visible={loading}/>
        <h1>Exam 09</h1>
          <hr/>

            <select onChange={onChange} >
              {department.map((v,i)=> {
                return(
                  <option key={i} value={v.id}>{v.dname}</option>
                )
              })}
            </select>
            <h2>학생목록</h2>
            <Student props={deptno}/>
            <h2>교수목록</h2>
            <Professor props={deptno}/>
      </div>
    );
    };
    export default React.memo(App);
