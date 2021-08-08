package com.kgitbank.travelShare;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/content")
public class BoderContentController {
	
	@GetMapping("mainBorder")
	public String mainBorder() {
		return "/border/main_border";
	}
}
