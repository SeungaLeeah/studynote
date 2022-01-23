# 명령어 옵션 및 약자


## Window 명령어

#### 01. explorer
1. 기능 : 현재 위치에서 폴더창 열기
2. 옵션
   > explorer . --> 현재 cmd가 위치한 경로를 폴더창으로 열기    
   > explorer C:\ --> C드라이브를 위치로 폴더창 열기


#### 02. cd (Change Directory)
1. 기능 : 작업 디렉토리 이동
2. 옵션 및 약자
   > cd 이동할 경로     
   > cd ..  --> 상위 폴더 이동시     
   > cd /d  --> 드라이브 문자열이 다른 경우 


#### 03. cls (Clear Screen)
1. 기능 : 화면을 깨끗이 한다


#### 04. copy
1. 기능 : 파일 복사
2. 옵션 및 약자
   > copy 원본경로 복사본 경로 --> copy a.txt b.txt


#### 05. del (delete)
1. 기능 : 파일 삭제
2. 옵션 및 약자
   > del /p --> paush 약자. 파일 삭제전 확인 메세지 표기    
   > del /f --> 읽기 전용 파일도 삭제   
   > del /s "삭제할 파일명 " --> Subdirectory 약자. 지정된 파일의 모든 하위 디렉토리 삭제    
   > del /q --> Quiet 약자. 삭제할 것인지 묻지 않음 
   > del /s /q --> 무적 삭제 방법. 묻지 않고 다 삭제


#### 06. dir (directory)
1. 기능 : 현재 디렉토리 파일의 정보 출력
2. 옵션 및 약자
   > dir /b --> bare 약자. 파일이름만 보기      
   > dir /s --> subdirectory 약자. 하위 디렉토리 보기      
   > dir /ad --> attributes directory 약자. 디렉토리만 보기     
   > dir /ah --> attributes hide 약자. 숨김파일만 보기      
   > dir /ar --> attributes read 약자. 읽기 전용 파일만 보기     
   > dir /as --> attributes system 약자. 시스템 파일만 보기     
   > dir /p --> pause 약자. 출력 내용이 한 화면을 벗어나면 잠시 멈춤 (아무키나 눌러서 계속 진행 가능)   
   > dir /w --> wide 약자. 파일 이름을 가로로 보여줌
     > > bare : 들어내다    
     > > attributes : 속성 

#### 07. echo
1. 기능 : 출력문
2. 옵션 및 약자
   > echo 출력할 내용


#### 08. exit
1. 기능 : 종료


#### 09. md, mkdir (make directory)
1. 기능 : 디렉토리 생성
2. 옵션 및 약자
   > md 생성할 경로


#### 10. rd, rmdir (remove directory)
1. 기능 : 디렉토리 삭제
2. 옵션 및 약자
   > rd "삭제할 디렉토리"
   > rd /s --> 비어있지 않은 폴더의 하위 항목까지 모두 삭제


#### 11. rename, ren  
1. 기능 : 파일 및 폴더 이름 변경
2. 옵션 및 약자
   > ren "변경할 폴더" "폴더 새이름"    


#### 12. move
1. 기능 : 파일, 폴더, 절대경로 이동
2. 옵션 및 약자
   > move 이동할폴더 이동될폴더