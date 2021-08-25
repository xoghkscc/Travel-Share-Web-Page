package com.kgitbank.travelShare;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kgitbank.travelShare.mapper.LoginMapper;
import com.kgitbank.travelShare.model.LoginInfo;

import lombok.extern.log4j.Log4j;


@RestController
@RequestMapping("/loginrest/")
public class LoginRestController {
	

	@Autowired
	LoginMapper loginService;
		
	@PostMapping(value="/loginWarning", produces= MediaType.APPLICATION_JSON_VALUE)
	public int getEmailwaring(@RequestBody LoginInfo logindata) {
		if(loginService.loginCheck(logindata).isEmpty()) {
			return 1;
		} 
		return 0;
	}
	
}
