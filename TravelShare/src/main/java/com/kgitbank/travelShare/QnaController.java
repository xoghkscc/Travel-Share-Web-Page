package com.kgitbank.travelShare;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.kgitbank.travelShare.mapper.LoginMapper;
import com.kgitbank.travelShare.mapper.Page;
import com.kgitbank.travelShare.mapper.QnaMapper;
import com.kgitbank.travelShare.model.LoginInfo;
import com.kgitbank.travelShare.model.QnaVO;

import com.kgitbank.travelShare.model.QnaViewModel;
import com.kgitbank.travelShare.model.User;


@Controller
@RequestMapping("/qna")
public class QnaController {
	
	@Autowired
	QnaMapper service;
	
	@Autowired
	LoginMapper qnaService;
	
	
	@RequestMapping(value = "/qnaList", method = RequestMethod.GET)
	public void getList(Model model) throws Exception {
		
		List<QnaVO> list = null;
		list = service.qna_list();
		
		model.addAttribute("qna_list",list);
	}
	
	@GetMapping(value = "/qnaWrite")
	public String getWrite() throws Exception {
		return "/qna/qnaWrite";
		
	}
	
	@RequestMapping(value = "/qnaWrite", method = RequestMethod.POST)
	public ModelAndView postWrite(QnaVO vo, HttpSession session) throws Exception {
		ModelAndView mav = new ModelAndView("redirect:/qna/qnaList");
        int qnacnt = service.getQno();
        Object user = session.getAttribute("id");
        int userid = Integer.parseInt(user.toString());
        User nick = service.getWriter(userid);

        vo.setQno(qnacnt +1);
        vo.setWriter(nick.getUser_nickName());
        service.qna_write(vo);
        return mav;
	}
	
	//게시물 조회
	@RequestMapping(value = "/qnaView", method = RequestMethod.GET)
	public void getView(@RequestParam("qno") int qno, Model model, HttpSession session) throws Exception {
		QnaViewModel vo = service.qna_view(qno);
		
		vo.setViewcnt(vo.getViewcnt() + 1);
		service.qna_viewcntup(vo);
		Object userid = session.getAttribute("id");
		User user = null;
		if(userid != null) {
			int user_id = Integer.parseInt(userid.toString());
			user = service.qna_getUserPosition(user_id);
			vo.setUser_position(user.getUser_position());			
		}else {
			vo.setUser_position(null);
		}
		
		model.addAttribute("QnaViewModel", vo);
	}
	
	@RequestMapping(value = "/qnaModify", method = RequestMethod.GET)
	public void getModify(@RequestParam("qno") int qno, Model model) throws Exception {
		

		QnaViewModel vo = service.qna_view(qno);
		
		model.addAttribute("qna_view", vo);
	}
	
	@RequestMapping(value = "/qnaModify", method = RequestMethod.POST)
	public String postModify(QnaVO vo) throws Exception {
		service.qna_modify(vo);
		
		return "redirect:/qna/qnaList";
	}
	
	@RequestMapping(value = "/qnaDelete", method = RequestMethod.GET)
	public String getDelete(@RequestParam("qno") int qno) throws Exception {
		service.qna_delete(qno);
		return "redirect:/qna/qnaList";
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
