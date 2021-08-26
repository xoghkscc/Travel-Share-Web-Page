package com.kgitbank.travelShare;

import java.io.File;
import java.io.FileOutputStream;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kgitbank.travelShare.mapper.AdminNoticeMapper;
import com.kgitbank.travelShare.mapper.UserMapper;
import com.kgitbank.travelShare.model.BoardLikeModel;
import com.kgitbank.travelShare.model.BoardModel;
import com.kgitbank.travelShare.model.NoticeModel;
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
	public List<NoticeModel> getAdmin_notice(){

		//mapping안하고 바로 @셀렉트
		List<NoticeModel> NoticeModel = AdminNoticeMapper.getNoticesAll();

		return NoticeModel;
	}
	
	@RequestMapping(value="/admin_position_update")
	public String getAdmin_position_update(@RequestParam("AdminNickName") String AdminNickName,
										   @RequestParam("AdminPositionValue") String AdminPositionValue){

		//user한명의 직책 업데이트하기
		UserMapper.getAdmin_position_update(AdminNickName, AdminPositionValue);

		return "성공";
	}
	
	@RequestMapping(value="/admin_noticeUpdate", produces=MediaType.APPLICATION_JSON_VALUE)
	public NoticeModel getAdmin_noticeUpdate(HttpServletRequest request, @RequestParam("noticeId") String noticeId){
		
		//mapping안하고 바로 @셀렉트
		NoticeModel NoticeModel = AdminNoticeMapper.getNoticeOne(noticeId);

		String uploadPath = request.getSession().getServletContext().getRealPath("/resources/files/user_img/") + "null"+".jpg";// 저장경로
	
		NoticeModel.setUser_imgurl(uploadPath);
		
		return NoticeModel;
	}
	
	@RequestMapping(value="/admin_searching", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<User> getAdmin_searching(@RequestParam("noticeName") String noticeName) {	
		
		
		List<User> users = UserMapper.getAdmin_SearchingList(noticeName);

		return users;
	}
	
	@RequestMapping(value="/admin_position_searching", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<User> getAdmin_position_searching(@RequestParam("noticeName") String noticeName) {	
		
		//position_search 이지만 sql은 같으므로 같은 함수
		List<User> users = UserMapper.getAdmin_SearchingList(noticeName);

		return users;
	}
	
	@RequestMapping(value="/admin_notice_searching", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<NoticeModel> getAdmin_notice_searching(@RequestParam("noticeName") String noticeName) {	
		
		//공지사항 제목 검색하기
		List<NoticeModel> NoticeModel = AdminNoticeMapper.getNoticesAllSearching(noticeName);

		return NoticeModel;
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
	
	@RequestMapping(value="/GetbestPlace", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<BoardLikeModel> getBestPlace() {	
		
		List<BoardLikeModel> boardLikeModel = AdminNoticeMapper.getMainBestPlace();

		return boardLikeModel;
	}
}
