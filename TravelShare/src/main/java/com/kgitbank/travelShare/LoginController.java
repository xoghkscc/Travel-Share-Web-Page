package com.kgitbank.travelShare;



import java.lang.ProcessBuilder.Redirect;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kgitbank.travelShare.mapper.LoginMapper;
import com.kgitbank.travelShare.model.LoginInfo;

@Controller
public class LoginController {

		@Autowired
	    LoginMapper loginService;

	    @RequestMapping(value="/login", method = RequestMethod.POST)
	    public String loginProcess(HttpSession session, LoginInfo logininfo, String user_email, String user_password) {

	        logininfo.setUser_email(user_email);
	        logininfo.setUser_password(user_password);
	        
	            session.setAttribute("loginCheck",true);
	            
	            List<LoginInfo> loinfo = loginService.CheckloginId(logininfo);
	    		for (LoginInfo logo_info : loinfo) {
	    			 session.setAttribute("id", logo_info.getUser_id());
	    		}
	            
	            return "";
	        
	    }
	    
	    @RequestMapping(value="/logoutProcess")
	    public String logoutProcess(HttpSession session) {
	                            
	        session.setAttribute("loginCheck",null);
	        session.setAttribute("id",null);
	        
	        return "/site/index";
	    }
	    
	    @RequestMapping(value="/needLogin")
	    public String needLoginPage(HttpSession session) {
	    
	        //세션 검사를 통해 Access control
	        if(session.getAttribute("loginCheck")!=null){
	            return "/login/login";
	        }else{
	            return "/site/index";
	        }
	    }
	    
	}
