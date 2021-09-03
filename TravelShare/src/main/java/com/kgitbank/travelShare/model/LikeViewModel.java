package com.kgitbank.travelShare.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class LikeViewModel {
	@NonNull
	private Integer board_id;
	@NonNull
	private Integer user_id;
	private String board_title;
	private Integer board_lookupcnt;
	private String board_bestplace;
	private String board_besteat;
	private String board_mainimg;
	private String board_content;
	private Integer sigungucode;
	private String sido;
	private String sigungu;
	private String addr;
	private Date board_date;
	private Integer like_cnt;
	private String user_imgurl;
	private String user_nickName;
}
