/**
 * @filename    : ProfessorTest.js
 * @author      : 이승아 (leeah0913@gmail.com)
 * @description : 교수테이블을 위한 테스트
 */
import DBPool from '../helper/DBPool.js';
import professorService from '../services/ProfessorService.js';


(async ()=>{
    try{
        let result= await professorService.getList();
        console.log(result);

        result = await professorService.getItem({deptno: 102});
        console.log(result);

        result= await professorService.addItem({name:"이승아", userid:"leeah", position:"부교수", sal:200, hiredate: "1982-06-12", comm:40, deptno: 102});
        console.log(result);

        result= await professorService.editItem({deptno:102, position:"조교수", sal:400, comm:40});
        console.log(result);
         
        await professorService.deleteItem({deptno: 102});
    }catch(e){
        console.error(e);
    }finally{
        DBPool.close();
    }
})();