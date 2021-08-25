package com.kgitbank.travelShare;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.jsp.PageContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.JsonObject;
import com.kgitbank.travelShare.mapper.BoardMapper;
import com.kgitbank.travelShare.model.BoardModel;

@Controller
@RequestMapping("/board")
public class BoardContentController {

	@Autowired
	BoardMapper boardMapper;
	
	public Model filterText(HttpServletRequest req, Model model) {
		String sidoName = req.getParameter("sidoName");
		String sidogunName = req.getParameter("sidogunName");
		model.addAttribute("sidoName", sidoName);
		model.addAttribute("sidogunName", sidogunName);
		
		return model;
	}
	
	@GetMapping("mainBoardFilter")
	public String mainBorderFilter(HttpServletRequest req ,Model model) {
		Integer sigungucode =Integer.parseInt(req.getParameter("sigungucode"));
		model = filterText(req, model);
		model.addAttribute("boardDB", boardMapper.getBoardFilter1(sigungucode));
		return "/board/main_board";
	}
	
	@GetMapping("mainBoardFilter2")
	public String mainBorderFilter2(HttpServletRequest req ,Model model) {
		model = filterText(req, model);
		Integer sidocode =Integer.parseInt(req.getParameter("sidocode"));
		if(sidocode == 0) {
			model.addAttribute("boardDB", boardMapper.getBoardAll());
		} else {
			model.addAttribute("boardDB", boardMapper.getBoardFilter2(sidocode));
		}
		return "/board/main_board";
	}
	
	@GetMapping("mainBoard")
	public String mainBorder(Model model, HttpSession session) {
		model.addAttribute("boardDB", boardMapper.getBoardAll());
		return "/board/main_board";
	}

	@GetMapping("createBoard")
	public String createBoard(Model model) {
		return "/board/create_board";
	}

	@RequestMapping(value = "createBoard", method = RequestMethod.POST)
	public String insertBoard(HttpServletRequest request, HttpServletResponse response, BoardModel boardModel,
			@RequestParam("board_mainimgReal") MultipartFile upload) {
		OutputStream out = null;

		try {
			byte[] bytes = upload.getBytes();
			UUID uuid = UUID.randomUUID();
			String fileRanName = uuid.toString();
			
			String path = request.getSession().getServletContext().getRealPath("./");
			Pattern regex = Pattern.compile("\\.metadata");
			String uploadPath2 = regex.split(path)[0]+"TravelShare\\src\\main\\webapp\\resources\\files\\board_img\\"+fileRanName+".jpg";// 저장경로
			out = new FileOutputStream(new File(uploadPath2));
			out.write(bytes);
		
			boardModel.setBoard_mainimg(request.getContextPath()+"/resources/files/board_img/" + fileRanName+".jpg");
			out.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		boardModel.setUser_id(1);
		boardModel.setBoard_lookupcnt(0);
		boardModel.setLikecnt(0);
		boardMapper.insertBoard(boardModel);
		return "/index";
//		나중에 게시판 만들고 가야할 위치를 정해야함
	}

	@RequestMapping(value = "ckUpload", method = RequestMethod.POST)
	public void ckUpload(HttpServletRequest request, HttpServletResponse response, @RequestParam MultipartFile upload) {
		OutputStream out = null;
		PrintWriter printWriter = null;
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");

		try {

			UUID uuid = UUID.randomUUID();
			String fileRanName = uuid.toString();
			byte[] bytes = upload.getBytes();

			String uploadPath = request.getSession().getServletContext().getRealPath("/resources/files/board_img/") + fileRanName+".jpg";// 저장경로
			out = new FileOutputStream(new File(uploadPath));
			out.write(bytes);

			String callback = request.getParameter("CKEditorFuncNum");

			printWriter = response.getWriter();
			String fileUrl = request.getContextPath() + "/resources/files/board_img/" + fileRanName+".jpg";// url경로
			JsonObject json = new JsonObject();

			json.addProperty("uploaded", 1);
			json.addProperty("fileName", fileRanName);
			json.addProperty("url", fileUrl);
			printWriter.println(json);
			printWriter.flush();
			
			String path = request.getSession().getServletContext().getRealPath("./");
			Pattern regex = Pattern.compile("\\.metadata");
			String uploadPath2 = regex.split(path)[0]+"TravelShare\\src\\main\\webapp\\resources\\files\\board_img\\"+fileRanName+".jpg";// 저장경로
			out = new FileOutputStream(new File(uploadPath2));
			out.write(bytes);
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				if (out != null) {
					out.close();
				}
				if (printWriter != null) {
					printWriter.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
}
