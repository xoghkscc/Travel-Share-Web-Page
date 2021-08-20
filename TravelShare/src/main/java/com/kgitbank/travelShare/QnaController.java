package com.kgitbank.travelShare;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.kgitbank.travelShare.mapper.Page;
import com.kgitbank.travelShare.mapper.QnaMapper;
import com.kgitbank.travelShare.model.QnaVO;

@Controller
@RequestMapping("/qna")
public class QnaController {
	
	@Autowired
	QnaMapper service;
	
	@RequestMapping(value = "/qna_list", method = RequestMethod.GET)
	public void getList(Model model) throws Exception {
		
		List<QnaVO> list = null;
		list = service.qna_list();
		System.out.println(list);
		
		model.addAttribute("qna_list",list);
	}
	
	@RequestMapping(value = "/qna_write", method = RequestMethod.GET)
	public void getWrite() throws Exception {
		
	}
	
	@RequestMapping(value = "/qna_write", method = RequestMethod.POST)
	public String postWrite(QnaVO vo) throws Exception {
		service.qna_write(vo);
		
		return "redirect:/qna/qna_list";
	}
	
	//게시물 조회
	@RequestMapping(value = "/qna_view", method = RequestMethod.GET)
	public void getView(@RequestParam("qno") int qno, Model model) throws Exception {
		QnaVO vo = service.qna_view(qno);
		model.addAttribute("qna_view", vo);
	}
	
	@RequestMapping(value = "/qna_modify", method = RequestMethod.GET)
	public void getModify(@RequestParam("qno") int qno, Model model) throws Exception {
		
		QnaVO vo = service.qna_view(qno);
		
		model.addAttribute("qna_view", vo);
	}
	
	@RequestMapping(value = "/qna_modify", method = RequestMethod.POST)
	public String postModify(QnaVO vo) throws Exception {
		service.qna_modify(vo);
		
		return "redirect:/qna/view?qno=" + vo.getQno();
	}
	
	@RequestMapping(value = "/delete", method = RequestMethod.GET)
	public String getDelete(@RequestParam("qno") int qno) throws Exception {
		service.qna_delete(qno);
		return "redirect:/qna/list";
	}
	
	//게시물 목록 + 페이징 추가
	@RequestMapping(value = "/listpage", method = RequestMethod.GET)
	public void getListPage(Model model, @RequestParam("name") int num) throws Exception {
		Page page = new Page();
		
		page.setNum(num);
		page.setCount(service.qna_count());
		
		List list = null;
		list = service.listPage(page.getDisplayPost(), page.getPostNum());
		
		model.addAttribute("list", list);
		
		model.addAttribute("page", page);
		model.addAttribute("select", num);
	}
}