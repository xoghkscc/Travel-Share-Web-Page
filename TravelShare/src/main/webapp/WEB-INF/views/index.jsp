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
<script src="<%=request.getContextPath()%>/resources/js/main_chart.js?ver=5.0"></script>
<script type="text/javascript">
var highMap = new highMaps();
highMap.init();
</script>
<link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/main.css?ver=5.0">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Two+Tone|Material+Icons+Sharp|Material+Icons+Outlined" rel="stylesheet">
<link rel="shortcut icon" href="#">
</head>
<body>
<jsp:include page="./header/top.jsp"></jsp:include>
  <main>
        <!-- 메인섹션 -->
        <section id="main_sec1">
            <div class="main_backgroundImg"></div>
            <div class="main_container">
                <nav class="main_navbar">
                    <div class="main_logo">Travel<span style="color: orangered;">ers</span></div>
                    <div class="main_menuBar">
                        <div class="main_topMenu">
                            <div></div>
                            <div class="main_icons">
                                <div class="main_flipedInfo">
                                    <span class="material-icons-two-tone" style="font-size: 2.5vw;">
                                        event
                                    </span>
                                </div>
                                <div class="main_flipedInfo">
                                    <span class="material-icons-two-tone" style="font-size: 2.5vw;">
                                        location_on
                                    </span>
                                </div>
                                <div class="main_flipedInfo">
                                    <span class="material-icons-two-tone" style="font-size: 2.5vw;">
                                        phone_iphone
                                    </span>
                                </div>
                                <div class="main_flipedInfo">
                                    <span class="material-icons-two-tone" style="font-size: 2.5vw;" id="main_login_Btn">
                                        perm_identity
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="main_bottomMenu">
                            <span>전체</span>
                            <span><a href="https://www.mangoplate.com/">먹기</a></span>
                            <span><a href="https://www.starbucks.co.kr/index.do">마시기</a></span>
                            <span><a href="https://www.everland.com/web/intro.html">놀기</a></span>
                            <span><a href="https://gil.seoul.go.kr/walk/main.jsp">걷기</a></span>
                            <span><a href="http://ticket.interpark.com/Contents/Ranking?smid1=s_menu&smid2=performance">보기</a></span>
                        </div>
                    </div>
                </nav>
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
            <section class="normal-content global-width">
                <h2>왼쪽조</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ullam culpa ab, laborum repellat ut quae deleniti nostrum sapiente illum!</p>
                <h2>프로젝트 성공을 위한 걸음</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam provident voluptatum numquam dolorum, quod odio.</p>
                <h2>오늘도 힘내보자</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui impedit numquam atque quidem quos facere obcaecati deleniti labore culpa esse nostrum dicta earum rem ducimus, voluptates eligendi voluptate exercitationem dolorem!</p>
            </section>
            <footer class="global-footer">
                <a href="https://www.youtube.com/channel/UC_s1FC7s5YVwDImzv-WG93Q" target="blank">1분코딩</a>
            </footer>
        </section>
    </main>
   
    <script src="<%=request.getContextPath()%>/resources/js/main_app.js?ver=5.0"></script>
</body>
</html>