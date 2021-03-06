# SQL활용 
> 2022-06-21 이승아

## 문제1.
### 문제 1-1) 학생 테이블에서 전체 학생을 소속 학과별로 나누고, 같은 학과 학생은 다시 학년별로 그룹핑하여, 학과와 학년별로 인원수, 평균 몸무게를 출력하시오.
```sql
SELECT deptno, grade, COUNT(*), AVG(weight)
FROM student
GROUP BY deptno, grade;
```
![문제1결과](1.png)

### 문제 1-2) 학생 수가 4명 초과인 학년에 대해서 학년, 학생 수, 평균 키, 평균 몸무게를 출력하시오.
```sql
SELECT grade, count(*), AVG(height) avg_height, AVG(weight) avg_weight
from student
GROUP BY grade
HAVING COUNT(*) > 4
order by avg_height DESC;
```
![문제2결과](2.png)

### 문제 1-3) 학과별로 학과 번호, 교수들의 평균 급여, 최소 급여, 최대 급여를 출력하여라.
```sql
SELECT deptno, AVG(sal), MIN(sal), MAX(sal)
FROM professor
GROUP BY deptno;
```
![문제3결과](3.png)

### 문제 1-4) 학과별로 학과번호, 평균 몸무게, 학생수를 출력하되 평균 몸무게의 내림차순으로 정렬하시오.
```sql
SELECT deptno, AVG(weight) as avg_weight, COUNT(*)
FROM student
GROUP BY deptno
ORDER BY avg_weight DESC;
```
![문제4결과](4.png)

### 문제 1-5) 학과별 교수 수가 2명 이하인 학과의 학과 번호, 교수 수를 학과번호 순으로 정렬하여 출력 하세요.
```sql
SELECT deptno, COUNT(*) 
FROM professor 
GROUP BY deptno 
HAVING COUNT(*) <= 2
ORDER BY deptno ASC;
```
![문제5결과](5.png)


## 문제2.
### 문제 2-1) 아이디가 ‘jun123’인 학생과 같은 학년인 학생의 학번, 이름, 학년을 조회 하시오.
```sql
SELECT studno, name, grade FROM student
     WHERE grade=(
     SELECT grade 
     FROM student 
     WHERE userid='jun123'
     );
```
![문제6결과](2-1.png)

### 문제 2-2) 101번 학과 학생들의 평균 몸무게보다 몸무게가 적은 학생의 이름, 학과번호, 몸무게를 조회하시오.
```sql
 SELECT name, deptno, weight FROM student
     WHERE weight < (
     SELECT AVG(weight) 
     FROM student WHERE deptno=101
     );
```
![문제7결과](2-2.png)

### 문제 2-3) ‘이광훈 학생’과 같은 학과의 학생들에 대한 평균 몸무게보다 몸무게가 적게 나가는 학생들의 이름, 몸무게, 소속학과 이름, 담당교수 이름을 조회하시오.(담당교수가 없는 학생은 출력되지 않습니다.)
```sql
SELECT s.name, s.weight, d.dname, p.name FROM student s
     INNER JOIN department d ON s.deptno=d.deptno
     INNER JOIN professor p ON s.profno=p.profno
     WHERE s.weight < (
     SELECT AVG(weight) 
     FROM student 
     WHERE deptno=(
     SELECT deptno 
     FROM student 
     WHERE name='이광훈'
         )
     );
```
![문제8결과](2-3.png)

### 문제 2-4) 20101번 학생과 같은 학년이고, 20101번 학생의 키보다 큰 키를 갖는 학생의 이름, 학년, 키를 조회하시오.
```sql
SELECT name, grade, height FROM student
     WHERE grade = (SELECT grade FROM student WHERE studno=20101)
     AND   height > (SELECT height FROM student WHERE studno=20101);
```
![문제9결과](2-4.png)

### 문제 2-5) 학과 이름에 ‘공학’이라는 단어를 포함하고 있는 학과에 재학중인 학생의 학번, 학과 이름, 학년, 학생이름을 조회하시오.
```sql
SELECT studno, dname, grade, name FROM student s
     INNER JOIN department d ON s.deptno=d.deptno
     WHERE s.deptno IN (
     SELECT deptno 
     FROM department 
     WHERE dname 
     LIKE '%공학%'
     );
```
![문제10결과](2-5.png)