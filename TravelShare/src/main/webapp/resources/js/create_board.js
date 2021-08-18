window.onload = function(){
            document.getElementById("address_kakao").addEventListener('click', (e) => {
                new daum.Postcode({
                    oncomplete: function (data) {
                        document.getElementById('zipCode').value = data.zonecode; //5자리 새우편번호 사용
                        document.getElementById('addr').value = data.jibunAddress; //전체 주소
                        document.getElementById('detailAddr').value = data.buildingName; //상세 주소
                        document.getElementById('detailAddr').focus();
                        document.getElementById('sido').value = data.sido; //시도
                        document.getElementById('sigungu').value = data.sigungu; //시/군/구
                        document.getElementById('sidoCode').value = data.sigunguCode[0]+data.sigunguCode[1]; //시도 코드
                        document.getElementById('sigunguCode').value = data.sigunguCode; //시/군/구 코드
                    }
                }).open();
            });
        }