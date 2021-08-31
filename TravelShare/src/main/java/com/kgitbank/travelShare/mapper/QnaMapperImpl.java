package com.kgitbank.travelShare.mapper;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kgitbank.travelShare.model.QnaVO;


public class QnaMapperImpl implements QnaMapper {
	
	@Autowired
	private SqlSession sql;
	
	private static String namespace = "com.kgitbank.travelShare.mapper.QnaMapper";

	@Override
	public List<QnaVO> qna_list() throws Exception {
		return sql.selectList(namespace + ".qna_list");
	}
	@Override
	public int getQno() {
		return sql.insert(namespace);
	}
	
	@Override
	public void qna_write(QnaVO vo) throws Exception {
		
		sql.insert(namespace + ".qna_write", vo);
	}
	
	@Override
	public QnaVO qna_view(int qno) throws Exception {
		return sql.selectOne(namespace + ".qna_view", qno);
	}
	
	@Override
	public void qna_modify(QnaVO vo) throws Exception {
		sql.update(namespace + ".qna_modify", vo);
		
	}
	
	@Override
	public void qna_delete(int qno) throws Exception {
		sql.delete(namespace + ".qna_delete", qno);
	
	}
	
	@Override
	public int qna_count() throws Exception {
		return sql.selectOne(namespace + ".count");
	}
	
	@Override
	public List listPage(int displayPost, int postNum) throws Exception {
		
		HashMap data = new HashMap();
		
		data.put("displayPost", displayPost);
		data.put("postNum", postNum);
		
		return sql.selectList(namespace + ".listPage", data);
	}
}
	

