package com.kgitbank.travelShare;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kgitbank.travelShare.mapper.UserMapper;
import com.kgitbank.travelShare.model.User;

@RequestMapping("/site")
@Controller
public class AdministerController {
	
	@RequestMapping("/admin")
	public String getAdminister() {	
		return "administer/administer";
	}
}
