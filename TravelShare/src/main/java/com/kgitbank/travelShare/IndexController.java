package com.kgitbank.travelShare;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
		return "login/login";
	}
	
	@RequestMapping("/callback")
	public String getCallback() {
		return "login/naverCallback";
	}
	
	@PostMapping("/index") 
	public String postIndex() {
		return "/index";
				
	}
	
}
