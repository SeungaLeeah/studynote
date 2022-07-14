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
    // ... 구현해야 할 처리 로직
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
    // ... 구현해야 할 처리 로직
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
    // ... 구현해야 할 처리 로직
  } catch (err) {
      throw err;
  } finally {
      if (dbcon) { dbcon.release(); }
  }
}

/** 데이터를 수정하고 수정된 결과를 조회하여 리턴한다. */
async editItem(params) {
  let dbcon = null;
  let data = null;
  try {
     // ... 구현해야 할 처리 로직
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
    // ... 구현해야 할 처리 로직
  } catch (err) {
    throw err;
  } finally {
    if (dbcon) { dbcon.release(); }
  }
}

/** 데이터 수를 조회한다 */
async count(params) {
  let dbcon = null;
  let cnt = 0;

  try {
   // ... 구현해야 할 처리 로직
  } catch (err) {
      throw err;
  } finally {
      if (dbcon) { dbcon.release(); }
  }
  return cnt;
 }
}
export default new ProfessorService();