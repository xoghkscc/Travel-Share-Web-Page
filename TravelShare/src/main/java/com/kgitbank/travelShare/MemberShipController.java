package com.kgitbank.travelShare;




import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.lang.ProcessBuilder.Redirect;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.Random;
import java.util.UUID;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.kgitbank.travelShare.mapper.BoardMapper;
import com.kgitbank.travelShare.mapper.LoginMapper;
import com.kgitbank.travelShare.mapper.UserInfoMapper;
import com.kgitbank.travelShare.model.BoardModel;
import com.kgitbank.travelShare.model.LoginInfo;
import com.kgitbank.travelShare.model.UserInfo;

import lombok.extern.java.Log;
import lombok.extern.log4j.Log4j;

@Controller
@Log4j
@RequestMapping("/membership")
public class MemberShipController {
	
	@Autowired
	UserInfoMapper user_info;
	
	@Autowired
	BoardMapper boardMapper;

	@GetMapping("/membership")
	public String memberShip() {
	
		return "/membership/membership";
	}
	
	@PostMapping("/membership")
	public String memberShipPost(UserInfo userinfo) {
		Calendar cal = new GregorianCalendar();
		Date date = new Date(cal.getTimeInMillis());
		
		userinfo.setUser_birth(userinfo.getUser_year() + "/" + userinfo.getUser_month() + "/" + userinfo.getUser_day());
		userinfo.setUser_date(date);
		userinfo.setUser_rank("브론즈");
		userinfo.setUser_position("member");
		userinfo.setUser_imgurl("\\resources\\files\\user_img\\null.jpg");
		
		user_info.adduserinfo(userinfo);
		
		return "/login/login";
		}
	
	@PostMapping("/membershipUpdate")
	public void membershipUpdate(UserInfo userinfo, HttpSession session, HttpServletResponse resp) {
		
		userinfo.setUser_birth(userinfo.getUser_year() + "/" + userinfo.getUser_month() + "/" + userinfo.getUser_day());
		userinfo.setUser_id(Integer.valueOf((String) session.getAttribute("id")));
		user_info.updateUserinfo15(userinfo);
		session.setAttribute("name", userinfo.getUser_name());
		try {
			resp.sendRedirect("./userinfo");
		} catch (IOException e) {
			e.printStackTrace();
		}
		}
	
	@GetMapping("/idsearch")
	public String idSearch() {
		return "/membership/idSearch";
	}
	
	@PostMapping("/idSearch")
	public String idSearchFind(UserInfo userinfo, Model model) {
		
		
  		if(user_info.getUserEmail(userinfo) == null) {
  			userinfo.setUser_email("등록된 정보가 없습니다");
  			model.addAttribute("email", userinfo.getUser_email());
  			System.out.println(userinfo.getUser_email());
  		} else if (user_info.getUserEmail(userinfo) != null) {
  			UserInfo useremail = user_info.getUserEmail(userinfo);
  	
  			model.addAttribute("email", useremail.getUser_email());
  			model.addAttribute("text", "입니다");
  		}
		
	
		return "/membership/idSearchFind";
	}
	
	@GetMapping("/passwordsearch")
	public String passwordSearch() {
		
		return "/membership/passwordSearch";
	}
	
	@GetMapping("/passwordchange")
	public String passwordSearchFind() {
		
		
		return "/membership/passwordChange";
	}
	
	@PostMapping("/passwordchange")
	public String passwordChange(HttpSession session, UserInfo userinfo) {
		userinfo.setUser_id((int) session.getAttribute("password_id"));

		user_info.changePassword(userinfo);
		
		return "/login/login";
	}
	
	@GetMapping("/userinfo")
	public String userinfo(HttpSession session, UserInfo userinfo, Model model) {
		
		
		if(session.getAttribute("loginCheck") == null) {
			return "/login/login";
		} else {

			UserInfo userif = user_info.getUserInfo(session.getAttribute("id"));	
			model.addAttribute("user_name", userif.getUser_name());
			model.addAttribute("user_like", user_info.getUserLike(userif.getUser_id()));
			model.addAttribute("user_img", userif.getUser_imgurl());
			model.addAttribute("boardDB", boardMapper.getBoardLike(Integer.valueOf((String) session.getAttribute("id"))));
			
			if(session.getAttribute("id") != null) {
				model.addAttribute("id", session.getAttribute("id"));
			} 
			return "/membership/userinfo";
		}

	}
	
	@GetMapping("/userinfoLike")
	public String userinfoLike(HttpSession session, UserInfo userinfo, Model model) {
		
		
		if(session.getAttribute("loginCheck") == null) {
			return "/login/login";
		} else {
			UserInfo userif = user_info.getUserInfo(session.getAttribute("id"));	
			model.addAttribute("user_name", userif.getUser_name());
			model.addAttribute("user_like", user_info.getUserLike(userif.getUser_id()));
			model.addAttribute("user_img", userif.getUser_imgurl());
			model.addAttribute("boardDB", boardMapper.getMyLike(Integer.valueOf((String) session.getAttribute("id"))));
			
			if(session.getAttribute("id") != null) {
				model.addAttribute("id", session.getAttribute("id"));
			} 
			return "/membership/userinfoLike";
		}

	}
	
	@GetMapping("/profile")
	public String profile(HttpSession session, HttpServletRequest request, UserInfo userinfo, Model model) {
		 

			UserInfo userif = user_info.getUserInfo(request.getParameter("user_id"));	
			session.setAttribute("profile_id", request.getParameter("user_id"));
			model.addAttribute("user_name", userif.getUser_name());
			model.addAttribute("user_like", user_info.getUserLike(userif.getUser_id()));
			model.addAttribute("user_img", userif.getUser_imgurl());
			model.addAttribute("boardDB", boardMapper.getBoardLike(Integer.valueOf((String) request.getParameter("user_id"))));
			
			if(session.getAttribute("id") != null) {
				model.addAttribute("id", session.getAttribute("id"));
			} 
			
			return "/membership/profile";
		
	}
	
	@GetMapping("/profileLike")
	public String profileLike(HttpSession session, HttpServletRequest request, UserInfo userinfo, Model model) {
		 

			UserInfo userif = user_info.getUserInfo(request.getParameter("user_id"));	
			model.addAttribute("user_name", userif.getUser_name());
			model.addAttribute("user_like", user_info.getUserLike(userif.getUser_id()));
			model.addAttribute("user_img", userif.getUser_imgurl());
			model.addAttribute("boardDB", boardMapper.getMyLike(Integer.valueOf((String) request.getParameter("user_id"))));
			
			if(session.getAttribute("id") != null) {
				model.addAttribute("id", session.getAttribute("id"));
			} 
			return "/membership/profileLike";
		
	}
	
	@GetMapping("/userImgChange")
	public String profileChange(HttpSession session, UserInfo userinfo, Model model) {
	
		if(session.getAttribute("loginCheck") == null) {
			return "/login/login";
		} else {

			UserInfo userif = user_info.getUserInfo(session.getAttribute("id"));	
			model.addAttribute("user_img2", userif.getUser_imgurl());

			return "/membership/userImgChange";
		}
			
	}
	

	@RequestMapping(value = "profileChange", method = RequestMethod.POST)
	public void profileChange(HttpServletRequest request, HttpServletResponse response, 
								HttpSession session, @RequestParam("userImgurl") MultipartFile upload, UserInfo userinfo) {
		

		userinfo.setUser_id(Integer.valueOf((String) session.getAttribute("id")));
		
		OutputStream out = null;

		try {
			byte[] bytes = upload.getBytes();
			UUID uuid = UUID.randomUUID();
			String fileRanName = uuid.toString();
			
//			String uploadPath = request.getContextPath()+"/resources/files/user_img/" + fileRanName+".jpg";// 저장경로
			String uploadPath = request.getSession().getServletContext().getRealPath("/resources/files/user_img/") + fileRanName+".jpg";// 저장경로
			out = new FileOutputStream(new File(uploadPath));
			out.write(bytes);
		
			userinfo.setUser_imgurl("/resources/files/user_img/" + fileRanName+".jpg");
			out.close();
		} catch (IOException e) {
			e.printStackTrace();
		}

		user_info.updateUserImgurl(userinfo);
		
	
		try {
			response.sendRedirect("./userinfo");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	@GetMapping("/membershipChange")
	public String memberShipChange(HttpSession session, UserInfo userinfo, Model model) {
		
		if(session.getAttribute("loginCheck") == null) {
			return "/login/login";
		} else {
		
		UserInfo userif = user_info.getUserInfo2(Integer.valueOf((String) session.getAttribute("id")));
		
		
		String str = userif.getUser_birth();
		String[] array = str.split("/");
		userif.setUser_year(array[0]);
		userif.setUser_month(array[1]);
		userif.setUser_day(array[2]);
		
		model.addAttribute("userinfo", userif);
		
		return "/membership/membershipChange";
		}
	}
	
	@GetMapping("deleteBoard")
	public void deleteBoard(HttpServletRequest req, HttpServletResponse resp) {
		String board_id = req.getParameter("board_id");
		boardMapper.deleteBoard(Integer.parseInt(board_id));
		try {
			resp.sendRedirect("./userinfo");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	@GetMapping("updateBoard")
	public String createBoard(HttpServletRequest req, Model model) {
		String board_id = req.getParameter("board_id");
		BoardModel bm = boardMapper.selectBoardSearch(Integer.parseInt(board_id));
		model.addAttribute("updateBoardInfo", bm);
		return "/board/update_board";
	}
	
	@RequestMapping(value = "updateBoard", method = RequestMethod.POST)
	public void updateBoard(HttpServletRequest request, HttpServletResponse response, BoardModel boardModel,
			@RequestParam("board_mainimgReal") MultipartFile upload) {
		OutputStream out = null;
		if(!upload.isEmpty()) {
			try {
				byte[] bytes = upload.getBytes();
				UUID uuid = UUID.randomUUID();
				String fileRanName = uuid.toString();
				
//				String uploadPath = request.getSession().getServletContext().getRealPath("/resources/files/user_img/") + fileRanName+".jpg";// 저장경로
				String uploadPath = request.getSession().getServletContext().getRealPath("/resources/files/user_img/") + fileRanName+".jpg";// 저장경로
				out = new FileOutputStream(new File(uploadPath));
				out.write(bytes);
				boardModel.setBoard_mainimg(request.getContextPath()+"/resources/files/board_img/" + fileRanName+".jpg");
				out.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
			boardMapper.updateBoard1(boardModel);
		}else {
			boardMapper.updateBoard2(boardModel);
		}
		
		try {
			response.sendRedirect("./userinfo");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
		
}
