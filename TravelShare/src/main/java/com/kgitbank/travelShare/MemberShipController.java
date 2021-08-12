package com.kgitbank.travelShare;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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
		System.out.println("왔음");
		System.out.println(user_info.getUserInfo());
		return "/membership/membership";
	}
	
	@PostMapping("/membership")
	public String memberShipPost() {
		
		System.out.println("포스트왔다");
		return "/membership/membership";
		
	}
	

	
	
}
