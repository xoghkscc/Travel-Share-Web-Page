package com.kgitbank.travelShare;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.kgitbank.travelShare.mapper.SampleBoardMapper;
import com.kgitbank.travelShare.model.SampleBoardModel;

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
}
