import React from 'react';
import useAxios from 'axios-hooks';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

import Spinner from '../components/Spinner';
import Table from '../components/Table';
import regexHelper from '../libs/RegexHelper';

const TableEx= styled(Table)`
    margin-top: 50px;
    margin-bottom: 15px;

    .inputWrapper{
        padding: 0;
        position: relative;
        text-align: left;

        .field{
            box-sizing: border-box;
            display: block;
            position: absolute;
            left: 10px;
            top: 0;
            width: 100%;
            height: 100%;
            border: 0;
            padding: 0;
            outline: none;
            font-size: 14px;
        }
        label{
            margin-left: 7px;
            margin-right: 10px;

            input{
                margin-right: 10px;
            }
        }
    }
`;

const ProfessorEdit = () => {
    /** 저장 완료 후 목록으로 되돌아가기 위한 페이지 강제 이동 함수 생성 */
    const navigate = useNavigate();
    const {id} = useParams();

    /** 학과설정을 위한 데이터 불러오기 */
    const [{data:department, loading:loading1 , error:error1}] = useAxios('http://localhost:3001/department');

    

    /** 백엔드에 데이터 저장을 위한 Ajax 요청 객체 생성 - 메뉴얼 전송 모드 */
    const [{data:professor, loading:loading2 , error:error2}, refetch] = useAxios(`http://localhost:3001/professor/${id}`);

   

    /** <form>의 submit 버튼이 눌러졌을 때 호출될 이벤트 핸들러 */
    const onSubmit = React.useCallback((e)=>{
        e.preventDefault();

        //이벤트가 발생한 폼 객체
        const current = e.target;
        
        //입력값 유효성 검사
        try{
            regexHelper.value(current.name, '이름을 입력하세요');
            

            regexHelper.kor(current.name, '이름은 한글로만 입력하세요');
            regexHelper.minLength(current.name, 2, '이름은 최소 글자 이상 입력해야 합니다.');
            regexHelper.maxLength(current.name, 20,'이름은 최대 20글자 미만으로 입력해야 합니다.');
            regexHelper.engNum(current.userid, '아이디는 영어와 숫자로만 이루어져야 합니다.');
            regexHelper.minLength(current.userid, 2, '아이디는 최소 글자 이상 입력해야 합니다.');
            regexHelper.maxLength(current.userid, 20,'아이디는 최대 20글자 미만으로 입력해야 합니다.');
            regexHelper.check(current.position, '직급을 선택해주세요.');
            regexHelper.checkMax(current.position,1, '직급은 한개만 선택이 가능합니다.');
            regexHelper.value(current.sal, '급여를 입력해주세요');
            regexHelper.num(current.sal, '급여는 숫자로만 입력하세요');
            regexHelper.value(current.hiredate, '입사일을 입력해주세요');
            regexHelper.value(current.comm, '보직수당을 입력하세요');
            regexHelper.num(current.comm, '보직수당은 숫자로만 입력하세요');
            regexHelper.value(current.deptno, '소속학과를 선택해주세요.');
        }catch (e) {
            window.alert(e.message);
            e.field.focus();
            return;
        }

        let json = null;
        (async () => {
            try{
                const response = await refetch({
                    data:{
                    name: current.name.value,
                    userid: current.userid.value,
                    position: current.position.value,
                    sal: parseInt(current.sal.value),
                    hiredate: current.hiredate.value,
                    comm: parseInt(current.comm.value),
                    deptno:parseInt(current.deptno.value)
                    }
                });
                json = response.data;
            }catch(e){
                console.error(e);
                window.alert(`[${e.response.status}] ${e.response.statusText}\n${e.message}`);
            }
            
            if(json !== null){
                window.alert('저장되었습니다.');
                navigate('/');
            }
        })();
    },[refetch,navigate]);

  return (
    <>
        <Spinner visible={loading1||loading2}/>

        {(error1||error2) ?(
            <div>
                <h1>에러가 났습니다. 원인은 {(error1||error2).code} Error 입니다.</h1>
                <hr/>
                <p>{(error1||error2).message}</p>
            </div>
        ):(
            professor &&(
        <form onSubmit={onSubmit}>
            <TableEx>
                <colgroup>
                <col width='120'/>
                <col/>
                </colgroup>
                <tbody>
                    <tr>
                    <th>이름</th>
                    <td className='inputWrapper'><input className='field' type='text' name='name' defaultValue={professor.name}/></td>
                    </tr>
                    <tr>
                    <th>아이디</th>
                    <td className='inputWrapper'><input className='field' type='text' name='userid' defaultValue={professor.userid}/></td>
                    </tr>
                    <tr>
                    <th>직급</th>
                    <td className='inputWrapper'>
                        <label><input type='radio' name="position" value="교수" defaultChecked={professor.position === '교수'}/>교수</label>
                        <label><input type='radio' name="position" value="부교수"defaultChecked={professor.position === '부교수'}/>부교수</label>
                        <label><input type='radio' name="position" value="조교수"defaultChecked={professor.position === '조교수'}/>조교수</label>
                        <label><input type='radio' name="position" value="전임강사defaultChecked={professor.position === '전임강사'}"/>전임강사</label>    
                    </td>
                    </tr>
                    <tr>
                    <th>급여(만원)</th>
                    <td className='inputWrapper'><input className='field' type='text' name='sal' placeholder='숫자만 입력' defaultValue={professor.sal}/></td>
                    </tr>
                    <tr>
                    <th>입사일</th>
                    <td className='inputWrapper'>
                       <input className='field' type='date' name='hiredate' defaultValue={professor.hiredate}/> 
                        
                    </td>
                    </tr>
                    <tr>
                    <th>보직수당(만원)</th>
                    <td className='inputWrapper'><input className='field' type='text' name='comm' placeholder='숫자만 입력' defaultValue={professor.comm}/></td>
                    </tr>
                    <tr>
                    <th>소속학과</th>
                    <td className='inputWrapper' defaultValue={professor.deptno}>
                        <select name='deptno' className='field'>
                        <option value="">----선택하기----</option>
                        {department && department.map((v,i)=>{
                         return(
                            <option key={i} value={v.id}>{v.dname}</option>    
                        )
                         })}
                        </select>    
                    </td>
                    </tr>
                    
                </tbody>
            </TableEx>
            <div style={{textAlign:'center'}}>
                         <button type='submit'>저장하기</button>
            </div>
        </form>
            )
         )}
    </>
  )
}

export default React.memo(ProfessorEdit);