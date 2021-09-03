package com.kgitbank.travelShare;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.kgitbank.travelShare.mapper.AdminNoticeMapper;
import com.kgitbank.travelShare.model.AdminNotice;

@RequestMapping("/notice")
@Controller
public class NoticeController {

	@Autowired
	private AdminNoticeMapper AdminNoticeMapper;
	
	@RequestMapping(value="/main", produces=MediaType.APPLICATION_JSON_VALUE)
	public String getAdmin_notice(){
	

//		ArrayList<AdminNotice> noticeList = AdminNoticeMapper.getNoticesAll();
//		model.addAttribute("noticeList",noticeList);
//		System.out.println(noticeList);
		
		return "notice/notice_main";
	}
	
}
