/** 
let ssn = 9203211
ssn +="" 
const date = new Date();
const now_year = date.getFullYear();

let yy = parseInt(ssn.substring(0,2));
let mm = parseInt(ssn.substring(2,4));
let dd = parseInt(ssn.substring(4,6));
let gen = parseInt(ssn.substring(6,7))

yy = (gen<2) ? yy+1900 : yy+2000;

const age = now_year - yy ;

const gender = (gen==1 ||gen==3) ? "남자" : "여자";


console.log('당신은 %d세 %s입니다.', age, gender);

*/
/** 
const number = 111;
const x = 3;

let sum = 0;

for(let i=1; i<number; i++){
    if(i % x == 0 ){
        sum ++
    }
}

console.log("%d의 배수의 총 합: %d", x, sum);
*/
/** 
## 문제 5.
어느 학급의 중간고사 평균 성적이 아래의 표와 같았다.
민수 철영 나영 수철 영민
82 76 91 98 64
학생의 성적에 대해 아래의 요구사항을 충족하는 Student 클래스를 작성하고 각 메서드의 실행결과를 제시시오.

요구사항
1. 생성자에서 원소가 0개인 빈 배열 grade를 생성합니다.
2. setter에 학생 한명의 점수를 주입하면 grade의 원소로 추가됩니다. getter는 제공되지않습니다.
3. 주입된 점수의 총점과 평균을 배열로 리턴하는 getSumAvg() 함수를 제공합니다.
4. 주입된 점수 중에서 최하점과 최고점을 JSON으로 리턴하는 getMinMax() 함수를 제공합니다.
5. 주입된 점수에 대한 분산을 리턴하는 getVar() 함수를 제공합니다.
6. 주입된 점수에 대한 표준편차를 리턴하는 getStd() 함수를 제공합니다.
Javascript에서 제곱근은 Math.sqrt(input)을 사용하여 리턴받을 수 있다.
*/

class Student{
    constructor(){
        this._grade = [];
    }
   
    setGrade(score){
        this._grade.push(score);
    }
    getSumAvg (){
        let sum=0;
        let avg=0;
        for(let i = 0; i<this._grade.length; i++){
            sum+=this._grade[i];
        }
        avg += sum/this._grade.length;
        return [sum,avg];
    }
    getMinMax(){
        let max = -100;
        let min = 100;
        for (let i = 0; i < this._grade.length; i++) {
          if (this._grade[i] < min) min = this._grade[i];
          if (this._grade[i] > max) max = this._grade[i];
        }
        return { 최하점: min, 최고점: max };
    }
    getVar(){
        const avg = this.getSumAvg()[1];
    let sum = 0;
    for (let i = 0; i < this._grade.length; i++) {
      sum += Math.pow(this._grade[i] - avg, 2);
    }
    return sum / this._grade.length;
    }
    getStd(){
        return Math.sqrt(this.getVar());
    }

}
const std = new Student();
const 민수 = 82;
const 철영 = 76;
const 나영 = 91;
const 수철 = 98;
const 영민 = 64;
std.setGrade(민수);
std.setGrade(철영);
std.setGrade(나영);
std.setGrade(수철);
std.setGrade(영민);

console.log("sum, avg:", std.getSumAvg());
console.log("minmax:", std.getMinMax());
console.log("var:", std.getVar());
console.log("std:", std.getStd());

/** 
function solution(n){
    let sum =0;
    let x = String(n).split("");
    for (let i =0; i<x.length; i++){
        sum += Number(arr[i]);
    } 
    return (n % sum ==0) ? true :false; 
 }
 
 console.log(solution(10));
 console.log(solution(12));
 console.log(solution(11));
 console.log(solution(13));

 */
//k는 과자 한개,  n는 과자 갯수,  m는 가진 돈 : 동수가 받아야하는 모자란 돈

/** 
let money =0
function solution(k, n, m){
    
    money = k*n-m
    if( m<n*k){
        return money;
    }
}
  // K=30, N=4, M=100인 경우
solution(30, 4, 100);
console.log("동수가 부모님께 받아야 하는 돈은 %d원 입니다",money)
solution(250, 2, 140);
console.log("동수가 부모님께 받아야 하는 돈은 %d원 입니다",money)
solution(20, 6, 120);
console.log("동수가 부모님께 받아야 하는 돈은 %d원 입니다",money)
solution(20, 10, 320);
console.log("동수가 부모님께 받아야 하는 돈은 %d원 입니다",money)
*/


