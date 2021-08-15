<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>아이디 찾기</title>
  <script type="text/javascript" src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js" charset="utf-8"></script>
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
  <link rel="stylesheet" href="./id_search.css">
  
  
</head>
<body>
  
  <div class="id_search_box">
      <div>
          <div id="id_search1">아이디 찾기</div>
      
          <div id="red">
              <div class="name_text"><b>이름</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="info"></div>
              <div class="phone_text"><b>전화번호</b>&nbsp;&nbsp;<input type="text" class="info" id="phone_text1" maxlength="11"></div>
          </div>   
            <div id="password_search">
              <span><a href="./password_search"></a><b>비밀번호찾기<b></span>
              <span id="submit"><input id="idsearch_sub" type="submit" value="아이디 찾기"></span>
            </div>
       
        </div>
    </div>
    
  <script>
      $('.id_search_box').css('border','3px solid skyblue');
      $('.id_search_box').css('width','400px');
      $('.id_search_box').css('height','300px');
      $('.id_search_box').css('margin','auto');
  </script>
  <script src="./id_search.js"></script>
  </body>
</html>