/**
 * @filename    : ProfessorService.js
 * @author      : 이승아 (leeah0913@gmail.com)
 * @description : 교수테이블을 입력, 수정, 삭제, 조회
 */
import mybatisMapper from 'mybatis-mapper';
import DBPool from '../helper/DBPool.js';
import RuntimeException from '../exceptions/RuntimeException.js';

class ProfessorService {

    /** 생성자 - Mapper파일을 로드한다 */
    constructor() {
        mybatisMapper.createMapper([
            './mappers/ProfessorMapper.xml',
            './mappers/StudentMapper.xml'
        ]);
    }
  
    /** 목록 데이터를 조회한다 */
    async getList(params) {
        let dbcon = null;
        let data = null;

        try {
            dbcon = await DBPool.getConnection();

            let sql = mybatisMapper.getStatement('ProfessorMapper','selectList', params);
            let [result] = await dbcon.query(sql);

            if(result.length === 0){
                throw new RuntimeException('조회된 데이터가 없습니다.');
            }
            data = result;
        } catch (err) {
            throw err;
        } finally {
            if (dbcon) { dbcon.release(); }
        }
        return data;
    }

    /** 단일 데이터를 조회한다 */
    async getItem(params) {
        let dbcon = null;
        let data = null;

        try {
            dbcon = await DBPool.getConnection();

            let sql = mybatisMapper.getStatement('ProfessorMapper','selectItem', params);
            let [result] = await dbcon.query(sql);

            if(result.length === 0){
                throw new RuntimeException('조회된 데이터가 없습니다.');
            }
            data = result;
        } catch (err) {
            throw err;
        } finally {
            if (dbcon) { dbcon.release(); }
        }
        return data;
    }

    /** 데이터를 추가하고 추가된 결과를 조회하여 리턴한다. */
    async addItem(params) {
        let dbcon = null;
        let data = null;
        try {
            dbcon = await DBPool.getConnection();

            let sql = mybatisMapper.getStatement('ProfessorMapper','insertItem', params);
            let [{insertId, affectedRows}] = await dbcon.query(sql);

            if(affectedRows === 0){
                throw new RuntimeException('조회된 데이터가 없습니다.');
            }


            sql = mybatisMapper.getStatement('ProfessorMapper', 'selectItem', {profno: insertId});
            let [result] = await dbcon.query(sql);

            if(result.length === 0){
                throw new RuntimeException('저장된 데이터를 조회할 수 없습니다.');
            }
            data = result[0];
        } catch (err) {
            throw err;
        } finally {
            if (dbcon) { dbcon.release(); }
        }
        return data;
    }

    /** 데이터를 수정하고 수정된 결과를 조회하여 리턴한다. */
    async editItem(params) {
        let dbcon = null;
        let data = null;

        try {
            dbcon = await DBPool.getConnection();

            let sql = mybatisMapper.getStatement('ProfessorMapper', 'updateItem', params);
            let [{affectedRows}] = await dbcon.query(sql);

            if (affectedRows === 0) {
                throw new RuntimeException('저장된 데이터가 없습니다.');
            }


            sql = mybatisMapper.getStatement('ProfessorMapper', 'selectItem', {profno: params.profno});
            let [result] = await dbcon.query(sql);

            if(result.length === 0){
                throw new RuntimeException('저장된 데이터를 조회할 수 없습니다.');
            }

            data = result[0];
        } catch (err) {
            throw err;
        } finally {
            if (dbcon) { dbcon.release(); }
        }
            return data;
    }

    /** 데이터를 삭제한다. */
    async deleteItem(params) {
        let dbcon = null;

        try {
            dbcon = await DBPool.getConnection();

            let sql = mybatisMapper.getStatement('StudentMapper', 'deleteItemByProfno', params);
            let [{affectedRows}] = await dbcon.query(sql);

            sql = mybatisMapper.getStatement('ProfessorMapper', 'deleteItem', params);
            [{affectedRows}] = await dbcon.query(sql);

            if(affectedRows === 0){
                throw new RuntimeException('삭제된 데이터가 없습니다.');
            }
        } catch (err) {
            throw err;
        } finally {
            if (dbcon) { dbcon.release(); }
        }
    }

    /** 전체 데이터 수 조회 */
    async getCount(params){
        let dbcon = null;
        let cnt = 0;

        try{
            dbcon = await DBPool.getConnection();

            let sql = mybatisMapper.getStatement('ProfessorMapper', 'selectCountAll', params);
            let [result] = await dbcon.query(sql);

            if(result.length > 0){
                cnt = result[0].cnt;
            }
        }catch (err) {
            throw err;
        }finally{
            if(dbcon) {dbcon.release();}
        }
        return cnt;
    }
}
export default new ProfessorService();
