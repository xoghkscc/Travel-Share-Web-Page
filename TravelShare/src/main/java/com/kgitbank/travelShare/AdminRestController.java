package com.kgitbank.travelShare;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kgitbank.travelShare.mapper.UserMapper;
import com.kgitbank.travelShare.model.User;

@RequestMapping("/rest")
@RestController
public class AdminRestController {

	@Autowired
	private UserMapper UserMapper;
	
	@RequestMapping(value="/searching", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<User> getUesrInfo(){
		
		//mapping안하고 바로 @셀렉트
		List<User> users = UserMapper.getUserList();
		String allUser = "";
		for(User user : users) {
//			System.out.println(user);
			allUser += user + " ";
		}
		//mapping으로 mapper.xml 연결  그런데 지금안됨
//		List<User> users2 = UserMapper.getUserList2();
//		for(User user : users2) {
//			System.out.println(user);
//		}
		return users;
	}
	
	@RequestMapping(value="/admin_position", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<User> getAdmin_position(){
		
		//mapping안하고 바로 @셀렉트
		List<User> users = UserMapper.getAdmin_positionList();

		return users;
	}
}
