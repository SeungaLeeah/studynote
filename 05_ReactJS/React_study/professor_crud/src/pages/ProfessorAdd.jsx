import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import TableEx from '../components/TableEx';
import regexHelper from '../libs/RegexHelper';
import { useSelector, useDispatch } from 'react-redux';
import {postItem} from '../slices/ProfessorSlice';
import useAxios from 'axios-hooks';

const ProfessorAdd = memo(() => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {loading, error} = useSelector((state) => state.ProfessorSlice);


    /** 학과설정을 위한 데이터 불러오기 */
    const [{data}] = useAxios("http://localhost:3002/department");

    /** <form>의 submit 버튼이 눌러졌을 때 호출될 이벤트 핸들러 */
    const onSubmit = React.useCallback((e) => {
        e.preventDefault();

        // 이벤트가 발생한 폼 객체
        const current = e.target;

        // 입력값에 대한 유효성 검사
        try {
            regexHelper.value(current.name, '교수 이름이 없습니다.');

            regexHelper.value(current.userid, '교수 아이디가 없습니다.');
            regexHelper.minLength(current.userid, 4, '교수 아이디는 최소 4글자 이상 입력해야 합니다.');
            regexHelper.maxLength(current.userid, 10, '교수 아이디는 최대 10글자 까지 입력 가능합니다.');

            regexHelper.value(current.position, '교수 직급을 선택해주세요.');

            regexHelper.value(current.sal, '교수 급여가 없습니다.');

            regexHelper.value(current.hiredate, '교수 입사일을 선택해주세요.');

            regexHelper.value(current.comm, '교수 보직수당 없습니다.');

            regexHelper.value(current.deptno, '부서번호가 없습니다.');
        } catch (e) {
            window.alert(e.message);
            e.field.focus();
            return;
        }

        // 리덕스를 통한 데이터 저장 요청. --> 처리가 완료된 후 목록 페이지로 강제 이동한다.
        dispatch(postItem({
            name: current.name.value,
            userid: current.userid.value,
            position: current.position.value,
            sal: current.sal.value,
            hiredate: current.hiredate.value,
            comm: current.comm.value,
            deptno: current.deptno.value
        })).then(() => {
            navigate("/");
        });
    }, [dispatch, navigate]);

    return (
        <>
            <Spinner visible={loading} />
            
            {error ? (
                <ErrorView error={error} />
            ) : (
                <form onSubmit={onSubmit}>
                    <TableEx>
                        <colgroup>
                            <col width="120" />
                            <col />
                        </colgroup>
                        <tbody>
                        <tr>
                            <th>교수 이름</th>
                            <td className='inputWrapper'><input className='field' type="text" name="name" /></td>
                        </tr>
                        <tr>
                            <th>교수 아이디</th>
                            <td className='inputWrapper'><input className='field' type="text" name="userid" /></td>
                        </tr>
                        <tr>
                            <th>교수 직급</th>
                            <td className='inputWrapper'>
                                <select name="position" className='field'>
                                    <option value="">선택안함</option>
                                    <option value="교수">교수</option>
                                    <option value="조교수">조교수</option>
                                    <option value="부교수">부교수</option>
                                    <option value="전임강사">전임강사</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>교수 급여</th>
                            <td className='inputWrapper'><input className='field' type="text" name="sal" /></td>
                        </tr>
                        <tr>
                        <th>교수 입사일</th>
                        <td className='inputWrapper'>
                        <input className='field' type='date' name='hiredate'/></td>
                        </tr>
                        <tr>
                            <th>보직수당</th>
                            <td className='inputWrapper'><input className='field' type="text" name="comm" /></td>
                        </tr>
                        <tr>
                            <th>소속학과</th>
                            <td className='inputWrapper'>
                                <select name='deptno' className='field'>
                                    <option value="">----선택하기----</option>
                                    {data && data.map((v,i)=>{
                                    return(
                                        <option key={i} value={v.id}>{v.dname}</option>    
                                    )
                                    })}
                                </select>    
                            </td>
                        </tr>
                        </tbody>
                    </TableEx>

                    <div style={{ textAlign: 'center' }}>
                        <button type='submit'>저장하기</button>
                    </div>
                </form>
            )}
        </>
    );
});

export default ProfessorAdd;