package com.kgitbank.travelShare;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kgitbank.travelShare.mapper.BoardMapper;
import com.kgitbank.travelShare.mapper.LoginMapper;
import com.kgitbank.travelShare.model.CommentInfo;
import com.kgitbank.travelShare.model.LoginInfo;

import lombok.extern.log4j.Log4j;


@RestController
@RequestMapping("/loginrest/")
public class LoginRestController {
	

	@Autowired
	LoginMapper loginService;
	
	@Autowired
	BoardMapper boardMapper;
		
	@PostMapping(value="/loginWarning", produces= MediaType.APPLICATION_JSON_VALUE)
	public int getEmailwaring(@RequestBody LoginInfo logindata) {
		if(loginService.loginCheck(logindata).isEmpty()) {
			return 1;
		} 
		return 0;
	}
	
	@GetMapping(value="/alramContent", produces= MediaType.APPLICATION_JSON_VALUE)
	public ArrayList<CommentInfo> alramContent(HttpSession session) {
		if(session.getAttribute("loginCheck") == null) {
			return null;
		} else {
			Integer user_id =Integer.parseInt((String) session.getAttribute(("id")));
			ArrayList<CommentInfo> ci = boardMapper.alramContent(user_id);
			ci.addAll(boardMapper.alramContent2(user_id));
			return ci;
		}
	}
	
	@PostMapping(value="/alramLookChange", produces= MediaType.APPLICATION_JSON_VALUE)
	public void alramLookChange(@RequestBody Integer board_id, HttpSession session) {
		boardMapper.alramLookChange(board_id);
	}
	
	@PostMapping(value="/alramLookChange2", produces= MediaType.APPLICATION_JSON_VALUE)
	public void alramLookChange2(@RequestBody Integer qna_id, HttpSession session) {
		boardMapper.alramLookChange2(qna_id);
	}
	
}
