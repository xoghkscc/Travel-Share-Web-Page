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

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String loginProcess(HttpSession session, LoginInfo logininfo, String user_email, String user_password) {

		logininfo.setUser_email(user_email);
		logininfo.setUser_password(user_password);
		
		List<LoginInfo> loinfo = loginService.loginCheck(logininfo);

		return "";
	}

	@RequestMapping(value = "/logoutProcess")
	public String logoutProcess(HttpSession session) {

		session.setAttribute("loginCheck", null);
		session.setAttribute("id", null);
		session.setAttribute("name", null);

		return "redirect:/site/index";
	}

	@RequestMapping(value = "/needLogin")
	public String needLoginPage(HttpSession session) {

		// 세션 검사를 통해 Access control
		if (session.getAttribute("loginCheck") != null) {
			return "/login/login";
		} else {
			return "/site/index";
		}
	}

	
	@RequestMapping("/login/goIndex")
	public String loginProcess2(HttpSession session, @RequestParam("user_email") String user_email) {

		LoginInfo loginfo = loginService.getUserName(user_email);
		session.setAttribute("loginCheck", true);
		session.setAttribute("id", loginfo.getUser_id());
		session.setAttribute("name", loginfo.getUser_name());
		session.setAttribute("manager", loginfo.getUser_position());

		return "redirect:/site/index";
	}
}
