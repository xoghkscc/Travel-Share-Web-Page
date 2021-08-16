package com.kgitbank.travelShare;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/site")
@Controller
public class IndexController {

	@GetMapping("/index")
	public String getIndex() {	
		return "/index";
	}
	
	@RequestMapping("/login")
	public String getLogin() {
		return "login/naverLogin";
	}
	
	@RequestMapping("/callback")
	public String getCallback() {
		return "login/naverCallback";
	}
}
