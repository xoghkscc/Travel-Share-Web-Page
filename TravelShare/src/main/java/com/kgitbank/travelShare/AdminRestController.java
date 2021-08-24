package com.kgitbank.travelShare;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kgitbank.travelShare.mapper.AdminNoticeMapper;
import com.kgitbank.travelShare.mapper.BoardMapper;
import com.kgitbank.travelShare.mapper.UserMapper;
import com.kgitbank.travelShare.model.AdminNotice;
import com.kgitbank.travelShare.model.BoardModel;
import com.kgitbank.travelShare.model.User;

@RequestMapping("/rest")
@RestController
public class AdminRestController {

	@Autowired
	private UserMapper UserMapper;
	@Autowired
	private AdminNoticeMapper AdminNoticeMapper;
	
	@RequestMapping(value="/searching", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<User> getUesrInfo(){
		
		
		
		System.out.println("searching!");
		//mapping안하고 바로 @셀렉트
		List<User> users = UserMapper.getUserList();

		return users;
	}
	
	@RequestMapping(value="/admin_position", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<User> getAdmin_position(){
		
		//mapping안하고 바로 @셀렉트
		List<User> users = UserMapper.getAdmin_positionList();

		return users;
	}
	
	@RequestMapping(value="/admin_warning", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<User> getAdmin_warning(){
		
		//mapping안하고 바로 @셀렉트
		List<User> users = UserMapper.getAdmin_warningList();

		return users;
	}
	
//	@RequestMapping(value="/admin_board", produces=MediaType.APPLICATION_JSON_VALUE)
//	public List<AdminNotice> getAdmin_board(){
//		
//		//mapping안하고 바로 @셀렉트
//		List<AdminNotice> adminNotices = AdminNoticeMapper.getNoticesAll();
//
//		return adminNotices;
//	}
	
	@RequestMapping(value="/admin_notice", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<AdminNotice> getAdmin_notice(){
		
		//mapping안하고 바로 @셀렉트
		List<AdminNotice> adminNotices = AdminNoticeMapper.getNoticesAll();

		return adminNotices;
	}
	
	@RequestMapping(value="/admin_position_update")
	public String getAdmin_position_update(@RequestParam("AdminNickName") String AdminNickName,
										   @RequestParam("AdminPositionValue") String AdminPositionValue){
		
		System.out.println("AdminNickName : " + AdminNickName);
		System.out.println("AdminPositionValue : " + AdminPositionValue);
		
//		User user = new User();
//		
//		int idCnt = UserMapper.getAdminUsersId();
		
//		User user = UserMapper.getAdmin_User(noticeNickName);
		
		//user한명의 직책 업데이트하기
		UserMapper.getAdmin_position_update(AdminNickName, AdminPositionValue);

		return "성공";
	}
	
	@RequestMapping(value="/admin_noticeUpdate", produces=MediaType.APPLICATION_JSON_VALUE)
	public AdminNotice getAdmin_noticeUpdate(@RequestParam("noticeId") String noticeId){
		
		System.out.println("수정원하는번호 : " + noticeId);
		
		//mapping안하고 바로 @셀렉트
		AdminNotice adminNotices = AdminNoticeMapper.getNoticeOne(noticeId);

		return adminNotices;
	}
	
	@RequestMapping(value="/admin_searching", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<User> getAdmin_searching(@RequestParam("noticeName") String noticeName) {	
		
		
		List<User> users = UserMapper.getAdmin_SearchingList(noticeName);
		System.out.println("유저 : " + users);
		return users;
	}
	
	@RequestMapping(value="/admin_position_searching", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<User> getAdmin_position_searching(@RequestParam("noticeName") String noticeName) {	
		
		//position_search 이지만 sql은 같으므로 같은 함수
		List<User> users = UserMapper.getAdmin_SearchingList(noticeName);
		System.out.println("유저 : " + users);
		return users;
	}
	
	@RequestMapping(value="/admin_notice_searching", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<AdminNotice> getAdmin_notice_searching(@RequestParam("noticeName") String noticeName) {	
		
		//공지사항 제목 검색하기
		List<AdminNotice> adminNotices = AdminNoticeMapper.getNoticesAllSearching(noticeName);

		return adminNotices;
	}
	
	@RequestMapping(value="/admin_board", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<BoardModel> getAdmin_Board(){
		
		//mapping안하고 바로 @셀렉트
		List<BoardModel> boardModel = AdminNoticeMapper.getBoardsAll();

		return boardModel;
	}
	
	@RequestMapping(value="/admin_board_searching", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<BoardModel> getAdmin_board_searching(@RequestParam("boardName") String boardName) {	
		
		//공지사항 제목 검색하기
		List<BoardModel> boardModel = AdminNoticeMapper.getBoardsAllSearching(boardName);

		return boardModel;
	}
}
