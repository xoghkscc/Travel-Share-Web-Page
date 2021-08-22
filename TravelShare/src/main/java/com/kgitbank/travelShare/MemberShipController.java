package com.kgitbank.travelShare;




import java.lang.ProcessBuilder.Redirect;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import com.kgitbank.travelShare.mapper.UserInfoMapper;
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

		user_info.adduserinfo(userinfo);
		
		return "/login/naverLogin";
		}

	
//	@PostMapping("/phoneCheck")
//    public @ResponseBody
//    void sendSMS(String phoneNumberCheck) {
//		
//        Random rand  = new Random();
//        String numStr = "";
//        for(int i=0; i<4; i++) {
//            String ran = Integer.toString(rand.nextInt(10));
//            numStr+=ran;
//        }
//
//        System.out.println("수신자 번호 : " + phoneNumberCheck);
//        System.out.println("인증번호 : " + numStr);
//        certificationService.certifiedPhoneNumber(phoneNumberCheck,numStr);
//    }
	
	
	@GetMapping("/idsearch")
	public String idSearch() {
		return "/membership/idSearch";
	}
	
	@GetMapping("/passwordsearch")
	public String passwordSearch() {
		return "/membership/passwordSearch";
	}
	
	@GetMapping("/userinfo")
	public String userinfo() {
		return "/membership/userinfo";
	}
	
	
	
}
