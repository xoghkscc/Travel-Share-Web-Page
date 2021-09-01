package com.kgitbank.travelShare;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kgitbank.travelShare.mapper.QnaMapper;
import com.kgitbank.travelShare.model.CommentInfo;

@RestController
@RequestMapping("/qnaRest")
public class QnaRestController {

	@Autowired
	QnaMapper qnaMapper;
	
	@PostMapping(value = "/qnaInsertComment", produces = MediaType.APPLICATION_JSON_VALUE)
	public void qna_insert_commnet(@RequestBody CommentInfo commentInfo){
		System.out.println("commentInfo : "+commentInfo);
		qnaMapper.qna_insertComment(commentInfo);
	}
	
	@PostMapping(value = "/qnaSelectComment", produces = MediaType.APPLICATION_JSON_VALUE)
	public ArrayList<CommentInfo> selectCommnet(@RequestBody Integer qna_id){
		ArrayList<CommentInfo> commentArr = qnaMapper.qna_selectComment(qna_id);
		return commentArr;
	}
}
