package com.kgitbank.travelShare;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.kgitbank.travelShare.mapper.LoginMapper;
import com.kgitbank.travelShare.mapper.UserInfoMapper;
import com.kgitbank.travelShare.model.UserInfo;

import lombok.extern.log4j.Log4j;

@Log4j
@RestController
@RequestMapping("/membershiprest/")
public class MemberShipRestController {
	
	@Autowired
	UserInfoMapper user_info;

	
	@PostMapping(value="/emailwarning", produces="text/plain; charset=utf-8")
	public String getEmailwaring(@RequestBody String member_email) {
		if(user_info.checkId(member_email) == 0) {
			return "";
		} else {
			return "이미 존재하는 이메일입니다";
		}

	}
	
	@PostMapping(value="/nicknamewarning", produces="text/plain; charset=utf-8")
	public String getnicknamewarning(@RequestBody String user_nickname) {
		if(user_info.checkNickname(user_nickname) == 0) {
			return "";
		} else {
			return "이미 존재하는 닉네임입니다";
		}

	}
	
	@PostMapping(value="/phoneCheck", produces="text/plain; charset=utf-8")
	 public String sendSMS(@RequestBody String member_phone) {
		System.out.println("왔음");
		System.out.println(member_phone);
		
		
	        Random rand  = new Random();
	        String numStr = "";
	        for(int i=0; i<4; i++) {
	            String ran = Integer.toString(rand.nextInt(10));
	            numStr+=ran;
	        }

	        System.out.println("수신자 번호 : " + member_phone);
	        System.out.println("인증번호 : " + numStr);
	        certificationService.certifiedPhoneNumber(member_phone,numStr);
			return numStr;
	 }
	
	
}
