/**
 * 특정 시각에 한번만 수행 되는 예약 작업 만들기
 */

import logger from './helper/LogHelper.js';
import dayjs from 'dayjs';
import schedule from 'node-schedule';

const atTime = dayjs();
logger.debug(atTime.format('HH:mm:ss'));

const afTime = atTime.add(5,'second')
logger.debug(afTime.format('HH:mm:ss'));

const jsDate = afTime.toDate();
schedule.scheduleJob(jsDate,()=>{
    logger.debug('5초 후 예약된 작업이 수행되었습니다.');
});
logger.info(afTime.format('HH:mm:ss')+ '에 작업이 예약되었습니다.');