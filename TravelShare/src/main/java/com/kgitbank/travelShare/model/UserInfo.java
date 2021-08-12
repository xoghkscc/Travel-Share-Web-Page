package com.kgitbank.travelShare.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@NoArgsConstructor
@RequiredArgsConstructor
@Data
public class UserInfo {
	
	@NonNull
	private String member_email;
	@NonNull
	private String member_nickname;
	@NonNull
	private String member_phone;
	
}
