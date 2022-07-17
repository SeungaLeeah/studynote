/**
 * @filename    : ProfessorController.js
 * @author      : 이승아 (leeah0913@gmail.com)
 * @description : 교수테이블을 위한 Controller
 */
import express from 'express';
import logger from '../helper/LogHelper.js';
import regexHelper from '../helper/RegexHelper.js';
import { pagenation } from '../helper/UtilHelper.js';
import BadRequestException from '../exceptions/BadRequestException.js';
import professorService from '../services/ProfessorService.js';

const ProfessorController = () => {
    const url = "/professor";
    const router = express.Router();

    /** 전체 목록 조회 --> Read(SELECT) */
    router.get(url, async (req, res, next) => {
        // 검색 파라미터
        const query = req.get('query');

        // 페이지 번호 파라미터 (기본값은 1)
        const page = req.get('page', 1);
        // 한 페이지에 보여질 목록 수 받기 (기본값은 10)
        const rows = req.get('rows', 10);

        const params = {};
        if(query){
            params.name = query;
        }

        // 데이터 조회
        let json = null;
        let pageInfo = null;

        try {
            // 전체 데이터 수 얻기
            const totalCount = await professorService.getCount(params);
            pageInfo = pagenation(totalCount, page, rows);

            params.offset = pageInfo.offset;
            params.listCount = pageInfo.listCount;
            json = await professorService.getList(params);
        } catch (err) {
            return next(err);
        }

        res.sendResult({pagenation: pageInfo, item: json});
    });

    /** 단일행 조회 --> Read(SELECT) */
    router.get(`${url}/:profno`, async (req, res, next) => {
        // 파라미터 받기
        const profno = req.get('profno');

        // 파라미터 유효성검사
        try {
            regexHelper.value(profno, '교수번호가 없습니다.');
            regexHelper.num(profno, '교수번호가 잘못되었습니다.');
        } catch (err) {
            return next(err);
        }

        // 데이터 조회
        let json = null;

        try{
            json = await professorService.getItem({
                profno: profno
            });
        }catch (err) {
            return next(err);
        }
        res.sendResult({item: json});
    });


    /** 데이터 추가 --> CREATE(INSERT) */
    router.post(url, async (req, res, next) => {
        // 파라미터 받기
        const name = req.post('name');
        const userid = req.post('userid');
        const position = req.post('position');
        const sal = req.post('sal');
        const hiredate = req.post('hiredate');
        const comm = req.post('comm');
        const deptno = req.post('deptno');

        // 파라미터 유효성검사
        try {
            regexHelper.value(name, '교수 이름이 없습니다.');
            regexHelper.value(userid, '교수 아이디가 없습니다.');
            regexHelper.value(position, '교수 직급이 없습니다.');
            regexHelper.value(sal, '교수 급여가 없습니다.');
            regexHelper.value(hiredate, '교수 입사일이 없습니다.');
            regexHelper.value(comm, '교수 보직수당 없습니다.');
            regexHelper.value(deptno, '부서번호가 없습니다.');
        } catch (err) {
            return next(err);
        }

        // 데이터 조회
        let json = null;

        try{
            json = await professorService.addItem({
                name: name,
                userid: userid,
                position: position,
                sal: sal,
                hiredate: hiredate,
                comm: comm,
                deptno: deptno
            });
        }catch (err) {
            return next(err);
        }
        res.sendResult({item: json});
    });



    /** 데이터 수정 --> Update(update) */
    router.put(`${url}/:profno`, async (req, res, next) => {
        // 파라미터 받기
        const profno = req.get('profno');
        const name = req.put('name');
        const userid = req.put('userid');
        const position = req.put('position');
        const sal = req.put('sal');
        const hiredate = req.put('hiredate');
        const comm = req.put('comm');
        const deptno = req.put('deptno');

        // 파라미터 유효성검사
        try {
            regexHelper.value(profno, '교수번호가 없습니다.');
            regexHelper.num(profno, '교수번호가 잘못되었습니다.');
            regexHelper.value(name, '교수 이름이 없습니다.');
            regexHelper.value(userid, '교수 아이디가 없습니다.');
            regexHelper.value(position, '교수 직급이 없습니다.');
            regexHelper.value(sal, '교수 급여가 없습니다.');
            regexHelper.value(hiredate, '교수 입사일이 없습니다.');
            regexHelper.value(comm, '교수 보직수당 없습니다.');
            regexHelper.value(deptno, '부서번호가 없습니다.');
        } catch (err) {
            return next(err);
        }

        // 데이터 조회
        let json = null;

        try{
            json = await professorService.editItem({
                profno: profno,
                name: name,
                userid: userid,
                position: position,
                sal: sal,
                hiredate: hiredate,
                comm: comm,
                deptno: deptno
            });
        }catch (err) {
            return next(err);
        }
        res.sendResult({item: json});
    });



    /** 데이터 삭제 --> Delete(DELETE) */
    router.delete(`${url}/:profno`, async (req, res, next) => {
        // 파라미터 받기
        const profno = req.get('profno');

        // 파라미터 유효성검사
        try {
            regexHelper.value(profno, '교수번호가 없습니다.');
            regexHelper.num(profno, '교수번호가 잘못되었습니다.');
        } catch (err) {
            return next(err);
        }

        // 데이터 조회
        let json = null;

        try{
            json = await professorService.deleteItem({
                profno: profno
            });
        }catch (err) {
            return next(err);
        }
        res.sendResult({item: json});
    });


    return router;
};

export default ProfessorController;
