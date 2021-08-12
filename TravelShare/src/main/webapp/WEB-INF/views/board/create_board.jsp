<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>해먹 남녀</title>
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/create_board.css">
<link
	href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
	rel="stylesheet">
</head>
<body>
<body>

	<div class="board_create">
        <div class="boardtit">여행지 등록하기</div>

        <div class="board_create_form">
            <form action="">
                <div class="board_input">
                    <div>
                        <label>제목 입력하기</label><input type="text"
							name="boardtit">
                    </div>
                    <div>
                        <label>우편번호 </label> <input type="text" id="zip"
							style="width:80px; height:26px;" readonly />
                        <button type="button"
							style="width:60px; height:32px;" id="address_kakao">검색</button>
                    </div>
                    <div> <label>주소</label> <input type="text"
							id="addr1" style="width:300px; height:30px;" readonly /><br>
					</div>
                    <div> <label>상세</label> <input type="text"
							id="addr2" style="width:300px; height:30px;" />
					</div>
                    <div> <label>시도</label> <input type="text"
							id="addr5" style="width:300px; height:30px;" readonly /><br>
					</div>
                    <div> <label>시/군/구</label> <input type="text"
							id="addr6" style="width:300px; height:30px;" readonly /><br>
					</div>
                    <div> <label>시 코드</label> <input type="text"
							id="addr7" style="width:300px; height:30px;" readonly /><br>
					</div>
                    <div> <label>시/군/구 코드</label> <input type="text"
							id="addr8" style="width:300px; height:30px;" readonly /><br>
					</div>
                </div>


            </form>
        </div>
    </div>

    <script
		src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
    <script>
        window.onload = function(){
            document.getElementById("address_kakao").addEventListener('click', (e) => {
                new daum.Postcode({
                    oncomplete: function (data) {
                        document.getElementById('zip').value = data.zonecode; //5자리 새우편번호 사용
                        document.getElementById('addr1').value = data.address; //전체 주소
                        document.getElementById('addr2').value = data.buildingName; //상세 주소
                        document.getElementById('addr2').focus();
                        document.getElementById('addr5').value = data.sido; //시도
                        document.getElementById('addr6').value = data.sigungu; //시/군/구
                        document.getElementById('addr7').value = data.sigunguCode[0]+data.sigunguCode[1]; //시도 코드
                        document.getElementById('addr8').value = data.sigunguCode; //시/군/구 코드
                    }
                }).open();
            });
        }
    </script>
</body>


</html>