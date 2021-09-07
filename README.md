# Travel-Share-Web-Page

## 0_개요
유저들의 여행 경험을 공유할 수 있는 사이트를 제작하였다. 게시글 관리, 회원정보 관리, 공지사항 관리, 관리자 모드 등 다양한 기능을 할 수 있도록 개발하였다
## 1_개발환경
  * OS : window 10
  * 개발언어 : Java, JavaScript, 
  * DB : oracle
  * Tool : eclipse
  * 프레임워크: Spring, Mybatis
  * 외부 라이브러리 : jdbc, jdatepicker, HikariCP, commons-fileupload 등
  * 외부 API : hihgmaps API, coolSMS API, googleMaps API, 카카오 주소 API , ckEditor 등
## 2_Usecase Diagram
![image](https://user-images.githubusercontent.com/82793713/132162796-36e42c8f-da58-404b-9156-37b5685c0a97.png)
![image](https://user-images.githubusercontent.com/82793713/132162808-1ec31994-d4f7-4973-8fd4-95c41507f8ea.png)

## 3_ER Diagram
![ER_](https://user-images.githubusercontent.com/82793713/132268457-cbcd0294-47fe-42e2-a918-126ae3f43e71.PNG)
## 4_Server
AWS EC2에 아파치 톰캣을 설치하고 개발한 프로젝트를 배포하였음

http://3.35.52.40:8000/travelShare/site/index
로 개발된 프로젝트를 확인할 수 있음
## 5_화면
### 5.1_메인화면
![image](https://user-images.githubusercontent.com/82793713/132148330-334a5d6d-4a31-439f-8bba-13ba3753577f.png)
  * START 버튼을 클릭하면 여행지를 검색할 수 있는 지도화면으로 이동
![image](https://user-images.githubusercontent.com/82793713/132148613-2eed399d-8f91-4ce2-a33b-60aa992c0ebf.png)
  * 직접 검색란에는 사용자가 검색한 텍스트를 시도, 군구 형식으로 나누어 매칭을 하는 방식으로 구현
  * 지도 검색방법으로는 highchart의 hihgmaps API를 사용, 오픈 소스를 이용하여 구현하였다.
![image](https://user-images.githubusercontent.com/82793713/132148650-a698aa08-5ce2-41d8-9c73-2180d2c189c8.png)
  * 여행지에서 회원들이 가장 많이 찜을 한 게시물 순으로 4개만 DB에서 추출해 나열한 기능
```C
select * from (SELECT * FROM like_view order by LIKE_CNT DESC) INNER JOIN user_info USING(user_id) where rownum <![CDATA[<]]> 5
```
![image](https://user-images.githubusercontent.com/82793713/132148699-82a7b08c-1e2a-4eff-92b7-d390094fdeba.png)
  * 화면 내에 핸드폰 이미지를 sticky를 사용하여 같은 자리에서 움직이지 않도록 구현하여 스크롤을 내릴때마다 핸드폰의 이미지를 바꿀 수 있도록 구현하였고 스크롤에 관한 이벤트 리스너를 적용하여 스크롤의 위치에 따라 굴러가는 모양으로 UI를 만들었다
### 5.2_회원정보
![image](https://user-images.githubusercontent.com/82793713/132148804-79464084-eb77-4dda-8884-0fe6c14853e3.png)
![image](https://user-images.githubusercontent.com/82793713/132149134-a524c508-0d2b-40cd-aa53-ef28305f7898.png)
  *  회원가입을 할 때에 인증번호를 입력하도록 개발


![image](https://user-images.githubusercontent.com/82793713/132148885-8300ab28-ac5d-465b-a1c1-9a9d53222fe8.png)
  *  아이디 찾기 및 비밀번호 찾기를 할 때에도 가입된 핸드폰번호에 보낸 인증번호를 입력하여 찾기 기능을 구현하였음
![image](https://user-images.githubusercontent.com/82793713/132148953-8fdc9383-926c-4916-95af-41dc313b7451.png)
  *  회원 정보를 수정할 수 있으며 전화번호는 수정하려면 인증을 받아야 수정할 수 있음
![image](https://user-images.githubusercontent.com/82793713/132149027-213bf3fd-4c61-419c-8011-3c8a12d10cce.png)
  *  프로필 사진도 변경할 수 있음
![image](https://user-images.githubusercontent.com/82793713/132149085-e98f4fce-4244-4be5-947a-c7e08564a391.png)
  * 본인 올린 게시글 및 찜한 게시글을 확인할 수 있는 화면
### 5.3_관리자 화면

  * 관리자(★master, ☆manager)만 접근할 수 있는 메뉴 페이지이다
#### 5.3.1_회원정보관리
![image](https://user-images.githubusercontent.com/82793713/132149283-f9cff966-bc1e-443f-b0f7-8b5288908dd6.png)
  * 회원정보관리는 간략적인 회원정보를 확인하는 곳이며 창이 열리자마자 ajax를 통해 비동기로 데이터를 가져와서 테이블로 뿌려준다
  * 회원을 추방할 수 있는 기능이 있다
```C
SELECT notice_id, user_nickName, user_imgurl, notice_title, notice_text, notice_lookupcnt, notice_date 
		FROM notices INNER JOIN user_info USING ( user_id ) WHERE notice_title like '%${name}%' order by notice_id desc
    
DELETE FROM user_info where user_email = '${adminUserEmail}'
```
#### 5.3.2_관리자 현황
![image](https://user-images.githubusercontent.com/82793713/132149578-1745f436-bd43-4e1a-831f-6a23bf98e3a9.png)
  * 관리자들을 관리할 수 있는 화면이다
  * 직책을 콤보박스를 통해 직책을 수정할 수 있음
```C
UPDATE user_info SET user_position = '${AdminPositionValue}' where user_nickname = '${AdminNickName}'
```
#### 5.3.3_게시판 현황
![image](https://user-images.githubusercontent.com/82793713/132149681-0f44d289-1101-4932-8dfb-c7a8640b32b9.png)
  * 현재 게시판의 현황을 보기쉽게 나열해 놓은 기능으로서 이 곳에서 게시판의 강제적 삭제가 가능하다.
#### 5.3.4_신고 회원 관리
  * 신고받은 회원들의 신고수를 확인하고 신고수를 수정이 가능한 화면
#### 5.3.5_공지사항 관리
![image](https://user-images.githubusercontent.com/82793713/132149815-37847fdf-9f38-4374-afda-f038c721caae.png)
  * 공지사항을 생성, 조회, 수정, 삭제를 할 수 있는 화면
  * 공지사항 작성 및 수정은 ckEditor를 활용하여 구현
### 5.4_여행지 화면
![image](https://user-images.githubusercontent.com/82793713/132150075-416c47e4-6c2a-47b7-8d19-64887de23531.png)
  * 유저들이 올린 게시글들을 확인할 수 있는 화면
  * 상단에는 각 시도 및 군구 별로 게시글을 분류할 수 있는 기능
  * 우측 상단에는 최신순, 조회순, 찜순으로 게시글을 정렬할 수 있는 기능
  * 하단에는 게시글을 페이징할 수 있는 기능(ajax와 REST를 활용하여 비동기로 구현)
  * 게시글의 프로필 사진을 클릭하면 그 게시글을 올린 회원의 화면으로 이동함
 ![image](https://user-images.githubusercontent.com/82793713/132150339-5b57ea23-2388-41cf-8ea1-a149e5feaf70.png)
  * 게시글을 클릭하면 위와 같은 화면이 나타남
  * 게시글 주소에 위치를 Google Maps API를 활용하여 구현
  * 우측에 스크랩 버튼을 클릭하면 해당 게시글을 찜할 수 있고 이는 DB에 기록됨
  * 해당 게시글의 스크랩 개수를 확인할 수 있음
  * 신고하기 버튼을 클릭하면 해당 게시글을 작성한 유저를 신고할 수 있으며 이 또한 DB에 기록되어 같은 게시글에 대해 중복 신고는 불가능하게 구현하였음
  ![image](https://user-images.githubusercontent.com/82793713/132150502-290de08b-72b6-4892-9b34-ad4bae5d67cc.png)
  * 게시글을 확인할 수 있는 화면
![image](https://user-images.githubusercontent.com/82793713/132150544-31bb1e5d-81ee-4320-b794-f2209478e8f6.png)
  * 댓글을 작성 및 조회할 수 있음
  * 댓글을 작성하면 비동기처리를 통해 댓글을 바로 조회가능하며 댓글을 작성한 유저의 프로필 사진, 닉네임, 작성 시간, 댓글 내용을 확인할 수 있음
  * 댓글을 작성하면 해당 게시글을 작성한 유저에게 알람이 감
![image](https://user-images.githubusercontent.com/82793713/132150720-5d25024e-1a56-4d53-88a2-fb2c0619e37a.png)
  * 게시글 작성 화면
  * 검색 버튼을 누르면 카카오 주소 API를 통해 주소를 검색할 수 있음
  * 게시글 내용 작성란은 ckEditor API를 통해 글과 사진을 업로드할 수 있음
![image](https://user-images.githubusercontent.com/82793713/132150859-d86201e2-3acf-4e25-87e0-d944308c0089.png)  
  * 게시글 수정 및 삭제 버튼은 본인이 올린 게시글에만 보이도록 구현
### 5.5_알람
![image](https://user-images.githubusercontent.com/82793713/132151014-faf743a9-d705-45b7-bf06-6b09d63cc9b2.png)
  * 게시글에 댓글이 달리면 알람이 뜨며 클릭하면 댓글이 달린 게시글로 이동
### 5.6_Q&A
![image](https://user-images.githubusercontent.com/82793713/132151231-cfd3ce1c-fba0-462f-a05c-5b02b92346da.png)
  * Q&A 게시판을 작성, 조회, 수정, 삭제할 수 있음
  * 게시글을 본인과 관리자만 볼 수 있게 설정가능
  * 조회수를 볼 수 있음
  * 페이징 및 검색 기능
  * Q&A 게시판도 댓글이 달리면 알람이 뜸
### 5.7_공지사항
![image](https://user-images.githubusercontent.com/82793713/132151395-9198ab52-4bd7-44a4-8c9b-38cf2ef8d614.png)
  * 공지사항 게시판은 관리자 외에 일반 회원들 또는 비회원들이 접근하고 확인할 수 있도록 구현
  * 페이징 및 검색 기능
 ![image](https://user-images.githubusercontent.com/82793713/132151585-5b5283e2-c4ef-4db1-8025-60745394a2d8.png)
  * 게시글을 클릭하면 팝업으로 게시글 내용을 확인할 수 있게끔 구현
  * 게시글 정보들을 sql문으로 데이터를 받아 innerHtml로 뿌려주는 방식으로 구현
```C
SELECT notice_id, user_nickName, user_imgurl, notice_title, notice_text, notice_lookupcnt, notice_date 
	      FROM notices INNER JOIN user_info USING ( user_id ) WHERE notice_id=${num})
```

















