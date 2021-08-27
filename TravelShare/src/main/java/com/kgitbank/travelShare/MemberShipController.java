package com.kgitbank.travelShare;




import java.lang.ProcessBuilder.Redirect;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.Random;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.kgitbank.travelShare.mapper.LoginMapper;
import com.kgitbank.travelShare.mapper.UserInfoMapper;
import com.kgitbank.travelShare.model.LoginInfo;
import com.kgitbank.travelShare.model.UserInfo;

import lombok.extern.java.Log;
import lombok.extern.log4j.Log4j;

@Controller
@Log4j
@RequestMapping("/membership")
public class MemberShipController {
	
	@Autowired
	UserInfoMapper user_info;
	

	@GetMapping("/membership")
	public String memberShip() {
	
		return "/membership/membership";
	}
	
	@PostMapping("/membership")
	public String memberShipPost(UserInfo userinfo) {
		Calendar cal = new GregorianCalendar();
		Date date = new Date(cal.getTimeInMillis());
		
		userinfo.setUser_birth(userinfo.getUser_year() + "/" + userinfo.getUser_month() + "/" + userinfo.getUser_day());
		userinfo.setUser_date(date);
		userinfo.setUser_rank("브론즈");
		userinfo.setUser_position("member");
		userinfo.setUser_imgurl("\\resources\\files\\user_img\\null.jpg");
		
		user_info.adduserinfo(userinfo);
		
		return "/login/login";
		}
		
	@GetMapping("/idsearch")
	public String idSearch() {
		return "/membership/idSearch";
	}
	
	@PostMapping("/idSearch")
	public String idSearchFind(UserInfo userinfo, Model model) {
		
		System.out.println(userinfo.getUser_phonenumber());
		System.out.println(userinfo.getUser_name());
		
  		if(user_info.getUserEmail(userinfo) == null) {
  			userinfo.setUser_email("등록된 정보가 없습니다");
  			model.addAttribute("email", userinfo.getUser_email());
  			System.out.println(userinfo.getUser_email());
  		} else if (user_info.getUserEmail(userinfo) != null) {
  			UserInfo useremail = user_info.getUserEmail(userinfo);
  	
  			model.addAttribute("email", useremail.getUser_email());
  			model.addAttribute("text", "입니다");
  		}
		
	
		return "/membership/idSearchFind";
	}
	
	@GetMapping("/passwordsearch")
	public String passwordSearch() {
		
		return "/membership/passwordSearch";
	}
	
	@GetMapping("/passwordchange")
	public String passwordSearchFind() {
		
		
		return "/membership/passwordChange";
	}
	
	@PostMapping("/passwordchange")
	public String passwordChange(HttpSession session, UserInfo userinfo) {
		userinfo.setUser_id((int) session.getAttribute("password_id"));

		user_info.changePassword(userinfo);
		
		return "/login/login";
	}
	
	@GetMapping("/userinfo")
	public String userinfo() {
		return "/membership/userinfo";
	}
	
	
	
}
