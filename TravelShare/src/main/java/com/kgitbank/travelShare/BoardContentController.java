package com.kgitbank.travelShare;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.JsonObject;
import com.kgitbank.travelShare.mapper.SampleBoardMapper;

@Controller
@RequestMapping("/board")
public class BoardContentController {

	@Autowired
	SampleBoardMapper boardMapper;

	@GetMapping("mainBoard")
	public String mainBorder(Model model) {

		model.addAttribute("boardDB", boardMapper.getBoardsampleAll());
		return "/board/main_board";
	}

	@GetMapping("createBoard")
	public String createBoard(Model model) {
		return "/board/create_board";
	}

	@RequestMapping(value = "ckUpload", method = RequestMethod.POST)
	public void ckUpload(HttpServletRequest request, HttpServletResponse response, @RequestParam MultipartFile upload) {
		OutputStream out = null;
		PrintWriter printWriter = null;
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");

		try {
			
			String fileName = upload.getOriginalFilename();
			
			byte[] bytes = upload.getBytes();
			
			
			String uploadPath = request.getSession().getServletContext().getRealPath("/resources/ckeditorUploadImg")+"/" + fileName;// 저장경로
			out = new FileOutputStream(new File(uploadPath));
			out.write(bytes);
			
			String callback = request.getParameter("CKEditorFuncNum");

			printWriter = response.getWriter();
			String fileUrl = request.getContextPath()+"/resources/ckeditorUploadImg/" + fileName;// url경로
			JsonObject json = new JsonObject();
			
			json.addProperty("uploaded", 1);
			json.addProperty("fileName", fileName);
			json.addProperty("url", fileUrl);
			printWriter.println(json);
			printWriter.flush();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
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
