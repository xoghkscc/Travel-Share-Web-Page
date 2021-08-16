package com.kgitbank.travelShare;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.log4j.Log4j;

@Log4j
@RestController
@RequestMapping("/membershiprest/")
public class MemberShipRestController {
	
	@GetMapping(value="/emailwarning", produces="text/plain;")
	public String getEmailwaring() {
		return "";
	}
	
}
