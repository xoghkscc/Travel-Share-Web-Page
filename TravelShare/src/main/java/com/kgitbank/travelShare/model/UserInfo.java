package com.kgitbank.travelShare.model;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@RequiredArgsConstructor
@Data
@ToString
@Getter
@Setter
public class UserInfo {
	
	@NonNull
	private String member_email;
	@NonNull
	private String member_nickname;
	@NonNull
	private String member_phone;
	
}
