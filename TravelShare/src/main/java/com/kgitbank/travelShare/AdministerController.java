package com.kgitbank.travelShare;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.kgitbank.travelShare.mapper.AdminNoticeMapper;
import com.kgitbank.travelShare.model.AdminNotice;

@RequestMapping("/site")
@Controller
public class AdministerController {
	
	@Autowired
	private AdminNoticeMapper AdminNoticeMapper;
	
	@RequestMapping("/admin")
	public String getAdminister() {	
		return "administer/administer";
	}
	
	@RequestMapping(value="/adminNotice", produces=MediaType.APPLICATION_JSON_VALUE)
	public String getAdmin_notice(@RequestParam("noticeTitle") String title, 
								  @RequestParam("notice_content") String content){
	
		int idCnt = AdminNoticeMapper.getNoticeId();
	
		Date now = new Date();
		
		AdminNotice adn = new AdminNotice(idCnt+1,1,title, content, 1, now);
		
		System.out.println("notice_id : " + idCnt+1);
		System.out.println("title : " + title);
		System.out.println("content : " + content+1);
		
		
		AdminNoticeMapper.insertAdminNotice(adn);
		
		return "administer/administer";
	}
	
	
	@RequestMapping("/admin_delete")
	public String getAdmin_delete(@RequestParam("noticeId") String noticeId) {	
		
		System.out.println(noticeId);
		
		AdminNoticeMapper.deleteAdminNotice(noticeId);
		
		return "administer/administer";
	}
	
	@RequestMapping(value="/adminNoticeUpdate", produces=MediaType.APPLICATION_JSON_VALUE)
	public String getAdmin_update(@RequestParam("noticeTitleUpdate") String title, 
								  @RequestParam("notice_contentUpdate") String content,
								  @RequestParam("notice_id") String noticeId){
	
		
		Date now = new Date();
		
		AdminNotice adn = new AdminNotice(Integer.parseInt(noticeId),1,title, content, 1, now);
		
		System.out.println("notice_id : " + Integer.parseInt(noticeId));
		System.out.println("title : " + title);
		System.out.println("content : " + content);
		
		AdminNoticeMapper.updateAdminNotice(adn);
		
		return "administer/administer";
	}
}
