<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="http://code.highcharts.com/maps/highmaps.js"></script>
<script src="http://code.highcharts.com/maps/modules/drilldown.js"></script>
<script src="<%=request.getContextPath()%>/resources/js/main_chart.js?ver=5.21"></script>
<script type="text/javascript">
var highMap = new highMaps();
highMap.init();
</script>
<link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/main.css?ver=5.19">
<link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/main_board.css?ver=1.00">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Two+Tone|Material+Icons+Sharp|Material+Icons+Outlined" rel="stylesheet">
<link rel="shortcut icon" href="#">
</head>
<body>
  <main>
        <!-- 메인섹션 -->
        <section id="main_sec1">
            <div class="main_backgroundImg"></div>
            <div class="main_container">
				<jsp:include page="./header/top.jsp"></jsp:include>
                <div class="main_mainBar">
                    <div id="main_content">
                        <div class="main_travel">
                            Travel<span style="color: orangered;">ers</span>
                        </div>
                        <div class="main_writing">
                            <div>여행 일자, 숙소, 가고 싶은 장소만
                                선택하면 일정이 자동으로 완성되는
                                쉽고 간편한 여행 일정 플래너</div>
                            <div class="main_start">START</div>
                        </div>
                    </div>
                    <!-- <div id="main_map"></div> -->
                    <div></div>
                </div>
                <footer></footer>
            </div>
        </section>
        
        <!-- 여행섹션 -->
        <section>    
            <div class="main_sec2_topbar1">여행 루트</div>
            <div class="main_sec2_topbar2">여행지를 직접 검색하시거나 목록에서 선택해주세요.</div>
            <div class="main_sec2_topbar3">
                <input class="main_textInput" type="text" placeholder="어디로 여행을 떠나시나요?">
                <span class="material-icons-outlined" id="main_textSearch" style="font-size: calc(20px + 1vw);">search</span>
            </div>
            <div id="main_map_container">
                <div id="main_map" class="main_map_app"></div>
            </div>
        </section>

        <!-- 추천섹션 -->
        <section id="main_sec3">
            <div id="main_sev3_container1">
                <div>
                    <span id="main_sev3_text_1">우리나라에 이런 곳이 있었어???</span><br>
                    <span id="main_sev3_text_2">Best Travel<span style="color: orangered;">ers</span> Course!</span>
                    <div class="main_recommend">
                        <div class="board_content" id="board_content">
                            <div class="board_imgContent">
                                <div><img alt=""
                                    src="<%=request.getContextPath()%>/resources/files/back1.jpg"></div>
                                <img alt="" 
                                    src="<%=request.getContextPath()%>/resources/files/back2.jpg">
                            </div>
                            <div class="board_textContent">
                                <div class="board_text1">${board.user_name }</div>
                                <div class="board_textTit">${board.board_name }</div>
                            </div>
                            <div class="board_option">
                                <div class="board_areaPan">
                                    <span class="material-icons-outlined board_area_img">
                                        location_on </span>
                                    <div class="board_area">${board.area }</div>
                                </div>
                                <div class="board_likePan">
                                    <span class="material-icons-outlined board_like_img">
                                        favorite </span>
                                    <div class="like">0명</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        
        <!-- 스크롤섹션 -->

        <section>
            <section class="scroll-content">
                <div class="scroll-graphic">
                    <div class="main_sticky_container1">
                        <div class="main_sticky_text">
                            <p>#사랑하는 연인 #커플 #부부</p>
                            <p>소중하고 사랑스러운 하루를 Travel<span style="color: orangered;">ers</span>에서 함께</p>
                            <p>당신의 행복했던 하루를 다른 Traveler와 공유해보세요</p>
                        </div>
                        <div class="main_sticky_text">
                            <p>#하나뿐인 가족 #형제 #자매 #부모님</p>
                            <p>가족들과 잊지 못할 추억여행을 Travel<span style="color: orangered;">ers</span>에서 함께</p>
                            <p>당신의 행복했던 하루를 다른 Traveler와 공유해보세요</p>
                        </div>
                        <div class="main_sticky_text">
                            <p>#불알친구 #동아리 #모임</p>
                            <p>익사이팅하고 신나는 여행을 Travel<span style="color: orangered;">ers</span>에서 함께</p>
                            <p>당신의 행복했던 하루를 다른 Traveler와 공유해보세요</p>
                        </div>
                    </div>
                    <div class="main_sticky_container2">
                        <img src="<%=request.getContextPath()%>/resources/files/mainlogo.png" alt="">
                    </div>
                    <!-- <div class="graphic-item"><img class="scene-img" src="./asset/배경1.jpg" alt=""></div> -->
                    <div class="main_cellphone">
                        <div class="main_cellphone_list"><img src="<%=request.getContextPath()%>/resources/files/back1.jpg" alt=""></div>
                        <div class="main_cellphone_list"><img src="<%=request.getContextPath()%>/resources/files/back2.jpg" alt=""></div>
                        <div class="main_cellphone_list"><img src="<%=request.getContextPath()%>/resources/files/back3.jpg" alt=""></div>
                        <div><img src="<%=request.getContextPath()%>/resources/files/cellphone.png" alt="" id="main_cellphoneImg"></div>
                    </div>   
                </div>
                <div class="scroll-text global-width">
                    <div class="main_scroll_height"></div>
                </div>
            </section>
            <section class="main_last">
            	<div class="main_lastWord global-width">
	            	<div>
		                <h2>일상을 떠나는 사람들</h2>
		                <p>업무에 시달리고, 학업에 시달리는 여러분들을 위해<br> 하루의 행복한 시간을 선물해드립니다.<br></p>
		                <br>
                        <h3>St. Auhustine</h3>
		                <p>여행하지 않는 사람들에게는, 이 세상이 한 페이지만 읽은 책과 같다.</p>
	            	</div>
	            </div>
	            <div>
	            	<div class="main_lastContainer global-widthBig">
		            	<div class="main_lastwordText">
                            <div>
                                <h2>우리나라 구석구석</h2>
                                <h2>여행지를 한 곳에</h2><br>
                                <h4>Travelers에서는 원하는 지역의 여러 여행지를</h4>
                                <h4>직접입력하거나, 지도를 통해 빠르게 찾아볼 수 있습니다.</h4>
                            </div>
		            	</div>
		            	<div class="main_lastwordImg" id="main_lastImg1"></div>
	            	</div>
	            	<div class="main_lastContainer global-widthBig">
                        <div class="main_lastwordImg" id="main_lastImg2"></div>
		                <div class="main_lastwordText">
                            <div>
                                <h2>나만 아는 여행지를</h2>
                                <h2>다른 사람들과 공유</h2><br>
                                <h4>Travler 들이 올린 여행지를 찜해서 모아둘 수 있고</h4>
                                <h4>내가 직접 게시한 여행지를 다른 사람이 찜해 갈 수 있습니다</h4>
                            </div>
		                </div>
	            	</div>
	            	<div class="main_lastContainer global-widthBig">
		                <div class="main_lastwordText">
                            <div>
                                <h2>Travlers 라면 누구나</h2>
                                <h2>게시물에 후기 작성 가능</h2><br>
                                <h4>직접 여행했었던 곳이라면 후기를 댓글로 작성해 보아요</h4>
                                <h4>내 게시물에 댓글이 남겨졌다면 알람이 도착합니다</h4>
                            </div>
		                </div>
		                <div class="main_lastwordImg" id="main_lastImg3"></div>
	            	</div>
                </div>
             </section>
					<jsp:include page="./footer/footer.jsp"></jsp:include>
        </section>
    </main>
    
    <!-- popup창 -->
   	<div id="board_clickPan" class="board_hide">
		<div onclick="imgClickRollback()" class="x_box">
			<span class="material-icons-outlined "> close </span>
		</div>
		<div id="board_detailContent">
			<div class="board_detailPan">
				<div class="board_left_pan">
					<iframe id="board_googleMap"
						src="https://www.google.com/maps?q= 서울 관악구 관악로 85 &output=embed"
						style='border: 0;' allowfullscreen="" aria-hidden="false"
						tabindex="0" frameborder="0"></iframe>
					<!-- q= 뒤에 주소를 입력하면 됨 -->
					<hr style="color: black; width: 100%; margin-bottom: 50px;">
					<div id="board_main_content" class="board_main_content">
						<!-- 게시판 콘텐츠들이 들어가는 곳  -->
					</div>

					<div class="board_comment">
						<div id="board_comment_tit" class="board_comment_tit">
							<p>한줄댓글</p>
<!-- 									<div class="board_ud"> -->
<!-- 										<button>수정</button> -->
<!-- 										<button>삭제</button> -->
<!-- 									</div> -->
						</div>
						<div class="board_comment_write">
							<form action="#" id="board_commentId">
								<input type="text" id="board_commnet" name="board_commnet"
									placeholder="한 줄 댓글을 남겨주세요." autocomplete="off"> <input type="hidden"
									id="user_id" name="user_id" value="${id }"> <input
									type="submit" name="board_commnet_submit" value="댓글남기기">
							</form>
						</div>
						<div id="board_comment_show" class="board_comment_show"></div>
					</div>
				</div>


				<div class="board_right_pan">
					<div id="board_user_info" class="board_user_info">
						<img id="board_mainimg"
							src="<%=request.getContextPath()%>/resources/files/null.jpg"
							alt="">
					</div>
					<div id="board_user_name" class="board_user_name">닉네임</div>

					<div id="board_content_id" class="board_content_id"></div>
					<div id="board_title" class="board_title"></div>
					<div class="board_sub_info">
						<div class="board_sub_info2">
							<div>
								<span class="material-icons-outlined board_area_img">
									location_on </span>
								<div>추천 여행지</div>
							</div>
							<div id="board_bestplace">몰라</div>
						</div>
						<div class="board_sub_info2">
							<div>
								<span class="material-icons-outlined"> local_dining</span>
								<div>추천 맛집</div>
							</div>
							<div id="board_besteat">몰라</div>
						</div>
						<div class="board_sub_info2">
							<div>
								<span class="material-icons-outlined board_like_img">
									favorite </span>
								<div>스크랩</div>
							</div>
							<div id="board_scarp_cnt">0</div>
						</div>
					</div>

					<div>
						<div id="board_scrap_btn" class="board_scrap_btn">
							<span class="material-icons-outlined board_like_img">
								favorite </span>
							<div>스크랩</div>
						</div>
					</div>

					<div class="board_travelPlans">
						<div id="singo" class="singo" >
							<span class="material-icons singo_img"> lightbulb </span> <span
								class="board_singo">신고하기</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
   	<script src="<%=request.getContextPath()%>/resources/js/main_ajax.js?ver=1.12"></script>
    <script src="<%=request.getContextPath()%>/resources/js/main_app.js?ver=5.23"></script>
</body>
</html>