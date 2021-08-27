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
<script src="<%=request.getContextPath()%>/resources/js/main_chart.js?ver=5.18"></script>
<script type="text/javascript">
var highMap = new highMaps();
highMap.init();
</script>
<link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/main.css?ver=5.16">
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
                <input type="text" placeholder="어디로 여행을 떠나시나요?">
                <span class="material-icons-outlined" style="font-size: calc(20px + 1vw);">search</span>
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
                                <img alt=""
                                    src="<%=request.getContextPath()%>/resources/files/back1.jpg">
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
            <hr>
            <div id="main_sev3_container2">
                <div>
                    <span id="main_sev3_text_1">머선129? 한번 가보긴 했나~?</span><br>
                    <span id="main_sev3_text_2">Travel<span style="color: orangered;">ers</span>가 추천해드려요~!</span>
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
            <section class="main_lastWord global-width">
            	<div>
	                <h2>일상을 떠나는 사람들</h2>
	                <p>업무에 시달리고, 학업에 시달리는 여러분들을 위해 하루의 행복한 시간을 선물해드립니다.<br></p>
            	</div>
            	<div>
	                <h2>St. Auhustine</h2>
    	            <p>여행하지 않는 사람들에게는, 이 세상이 한 페이지만 읽은 책과 같다.</p>
            	</div>
                <div>
	                <h2>Lin Yutang</h2>
	                <p>여행이 얼마나 아름다운 것인지는, 집으로 돌아와 오래되고 친숙한 베개에 누워 쉴 때까지 깨닫지 못한다.</p>
                </div>
                <div>
	                <h2>고도원 ‘사랑합니다, 감사합니다’ 중</h2>
	                <p>인생은 여행이다. 여행은 떠나는 일이다. 오늘의 나를 떠나 어제의 나와 내일의 나를 만나는 일이다.힘들여 오늘을 살아가는
	                    나로부터 벗어나 새로운 나와 소통하는 일은 살아가면서 얼마나 중요한가. 타지에서의 깊은밤 낯선 침대에 누워 어둠에 안겨있노라면
	                    내가 있던 자리에 두고 온 많은 일들이 그 동안 내 삶을 얼마나 꽁꽁 묶어놓고 있었는지를 깨닫게 된다. 사람에 치이고 생활에 찌든
	                    현실의 무게는 늘 버거웠고 사랑에 배고픈 일상은 언제나 외로웠다. 오늘..아무리 삶이 버겁고 외로울지라도 언제나 사랑합니다.
	                    감사합니다... 한마디 하면서 살아가는 사람에게 행복은 늘 품 안에 있다. </p>
                </div>
            </section>

            <footer class="footer_container">
               <div>
                    <div class="footer_logo"></div>
                    <div>Travel<span style="color: orangered;">ers</span></div>
               </div>
               <div>
                   <div onclick="location.href='#'"></div>
                   <div onclick="location.href='#'"></div>
                   <div onclick="location.href='#'"></div>
                   <div onclick="location.href='#'"></div>
               </div>
               <div>A website created by the collaboration of the left team</div>
            </footer>
        </section>
    </main>
    
    <!-- popup창 -->
   	<div id="board_clickPan" class="board_hide">
		<div class="x_box">
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
						<div class="board_comment_tit">
							<p>한줄댓글</p>
						</div>
						<div class="board_comment_write">
							<form action="">
								<input type="text" name="board_commnet"
									placeholder="한 줄 댓글을 남겨주세요."> <input type="submit"
									name="board_commnet_submit" value="댓글남기기">
							</form>
						</div>
						<div class="board_comment_show">
							<div class="board_comment_see">
								<div class="board_comment_see_img">
									<img src="<%=request.getContextPath()%>/resources/files/null.jpg" alt="">
								</div>
								<div class="board_comment_see_text">
									<div>
										<strong>닉네임</strong> <span class="board_comment_see_text_date">2021.08.12</span>
									</div>
									<div>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</div>
								</div>
							</div>
							<hr style="color: black; width: 100%; margin-bottom: 50px;">
						</div>
					</div>
				</div>
				<div class="board_right_pan">
					<div class="board_user_info">
						<img id="board_mainimg" src="<%=request.getContextPath()%>/resources/files/null.jpg"
							alt="">
					</div>
					<div class="board_user_name">닉네임</div>

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
							<div>0</div>
						</div>
					</div>

					<div>
						<div class="board_scrap_btn">
							<span class="material-icons-outlined board_like_img">
								favorite </span>
							<div>스크랩</div>
						</div>
					</div>

					<div class="board_travelPlans">
						<div class="singo">
							<span class="material-icons singo_img"> lightbulb </span> <span
								class="board_singo">신고하기</span>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
   	<script src="<%=request.getContextPath()%>/resources/js/main_ajax.js?ver=1.08"></script>
    <script src="<%=request.getContextPath()%>/resources/js/main_app.js?ver=5.19"></script>
</body>
</html>