package com.kgitbank.travelShare;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.kgitbank.travelShare.mapper.AdminNoticeMapper;
import com.kgitbank.travelShare.mapper.BoardMapper;
import com.kgitbank.travelShare.mapper.UserMapper;
import com.kgitbank.travelShare.model.AdminNotice;
import com.kgitbank.travelShare.model.BoardModel;

@RequestMapping("/site")
@Controller
public class AdministerController {
	
	@Autowired
	private UserMapper UserMapper;
	@Autowired
	private AdminNoticeMapper AdminNoticeMapper;
	@Autowired
	BoardMapper boardMapper;
	
	@RequestMapping("/admin")
	public String getAdminister() {	
		return "administer/administer";
	}
	
	@RequestMapping(value="/adminNotice", produces=MediaType.APPLICATION_JSON_VALUE)
	public String getAdmin_notice(@RequestParam("noticeTitle") String title, 
								  @RequestParam("notice_content") String content, HttpSession session){
	
		int idCnt = AdminNoticeMapper.getNoticeId();
	
		Date now = new Date();

		Object ids = session.getAttribute("id");
		int number = Integer.parseInt(ids.toString());
		AdminNotice adn = new AdminNotice(idCnt+1,number,title, content, 1, now);
		
		
		AdminNoticeMapper.insertAdminNotice(adn);
		
		return "administer/administer";
	}
	
	
	@RequestMapping("/admin_delete")
	public String getAdmin_delete(@RequestParam("noticeId") String noticeId) {	
		AdminNoticeMapper.deleteAdminNotice(noticeId);
		return "administer/administer";
	}
	
	@RequestMapping("/admin_user_delete")
	public String getAdmin_user_delete(@RequestParam("adminUserEmail") String adminUserEmail) {	
		UserMapper.deleteAdminUser(adminUserEmail);
		return "administer/administer";
	}
	
	@RequestMapping(value="/adminNoticeUpdate", produces=MediaType.APPLICATION_JSON_VALUE)
	public String getAdmin_update(HttpServletRequest request, HttpServletResponse response,
								  @RequestParam("noticeTitleUpdate") String title, 
								  @RequestParam("notice_contentUpdate") String content,
								  @RequestParam("notice_id") String noticeId,
								  @RequestParam("noticeImgFile") MultipartFile upload){
		OutputStream out = null;
		try {
			byte[] bytes = upload.getBytes();
			UUID uuid = UUID.randomUUID();
			String fileRanName = uuid.toString();
			
//			String path = request.getSession().getServletContext().getRealPath("./");
//			Pattern regex = Pattern.compile("\\.metadata");
//			String uploadPath2 = regex.split(path)[0]+"TravelShare\\src\\main\\webapp\\resources\\files\\board_img\\"+fileRanName+".jpg";// 저장경로
			String uploadPath2 = request.getContextPath()+"/resources/files/board_img/" + fileRanName+".jpg";// 저장경로
			out = new FileOutputStream(new File(uploadPath2));
			out.write(bytes);
			out.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		Date now = new Date();
		
		AdminNotice adn = new AdminNotice(Integer.parseInt(noticeId),1,title, content, 1, now);

		
		AdminNoticeMapper.updateAdminNotice(adn);
		
		return "administer/administer";
	}
	
	
	@RequestMapping(value="/admin_position_update")
	public String getAdmin_position_update(HttpServletRequest request,
										   @RequestParam("AdminNickName") String AdminNickName,
										   @RequestParam("AdminPositionValue") String AdminPositionValue){
		
		//user한명의 직책 업데이트하기
		UserMapper.getAdmin_position_update(AdminNickName, AdminPositionValue);
		
		String referer = request.getHeader("Referer");
	    return "redirect:"+ referer;
	}
	
	@RequestMapping(value="/admin_declare_update")
	public String getAdmin_declare_update(HttpServletRequest request,
										   @RequestParam("AdminNickName") String AdminNickName,
										   @RequestParam("declareCnt") String declareCnt){
		
		//user한명의 신고수 업데이트하기
		UserMapper.getAdmin_declare_update(AdminNickName, declareCnt);
		
		String referer = request.getHeader("Referer");
	    return "redirect:"+ referer;
	}
	
	@RequestMapping(value="/admin_boardOne", produces=MediaType.APPLICATION_JSON_VALUE)
	public String getAdmin_Board(HttpServletRequest req ,Model model, @RequestParam("boardId") String boardId){

		//mapping안하고 바로 @셀렉트
		BoardModel boardModel = AdminNoticeMapper.getBoardOne(boardId);

		Integer sigungucode =boardModel.getSigungucode();
		model.addAttribute("sidoName", boardModel.getSido());
		model.addAttribute("sidogunName", boardModel.getSigungu());
		model.addAttribute("boardDB", boardMapper.getBoardFilter1(sigungucode));
		return "/board/main_board";
		
	}
	
	@RequestMapping("/admin_boardOneDelte")
	public String getAdmin_boardOneDelte(@RequestParam("boardId") String boardId) {	
		

		AdminNoticeMapper.deleteBoardNotice(boardId);
		
		return "administer/administer";
	}
	
	@RequestMapping("/MainBoard_MapSearching")
	public String getMainBoard_MapSearching(@RequestParam("Searching_content") String Searching_content,HttpServletRequest req, Model model) {	
		
		//공지사항 제목 검색하기
		ArrayList<BoardModel> sido = AdminNoticeMapper.findSido(Searching_content);
		ArrayList<BoardModel> sigungu = AdminNoticeMapper.findGungu(Searching_content);

		if(sido == null || sido.size() == 0) {
			if(sigungu == null || sigungu.size() == 0) {
				model.addAttribute(sigungu);
				model = filterTextMain(req, model);
				model.addAttribute("boardDB",sido);
			}else {
				model = filterTextMain(req, model);
				model.addAttribute("boardDB",sigungu);
			}
		}else {
			model = filterTextMain(req, model);
			model.addAttribute("boardDB",sido);
		}
		
		return "/board/main_board";
	}

	public Model filterTextMain(HttpServletRequest req, Model model) {
		String sidoName = req.getParameter("sidoName");
		String sidogunName = req.getParameter("sidogunName");
		model.addAttribute("sidoName", sidoName);
		model.addAttribute("sidogunName", sidogunName);
		
		return model;
	}
}
