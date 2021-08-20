package com.kgitbank.travelShare.mapper;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Page {
	private int num;
	private int count;
	private int postNum = 10;
	private int pageNum;
	private int displayPost;
	private int pageNumCnt = 10;
	private int endPageNum;
	private int startPageNum;
	private boolean prev;
	private boolean next;
	
	private void dataCalc() {
		
		endPageNum = (int)(Math.ceil((double)num / (double)pageNumCnt) * pageNumCnt);
		startPageNum = endPageNum - (pageNumCnt -1);
		int endPageNum_tmp = (int)(Math.ceil((double)count / (double)pageNumCnt));
		
		if(endPageNum > endPageNum_tmp) {
			endPageNum = endPageNum_tmp;
		}
		
		prev = startPageNum == 1 ? false : true;
		next = endPageNum * pageNumCnt >= count ? false : true;
		
		displayPost = (num -1) * postNum;
	}
}
