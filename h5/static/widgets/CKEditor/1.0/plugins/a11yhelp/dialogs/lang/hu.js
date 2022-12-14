package controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.ServletRequestDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import pojo.User;

@Controller
public class JsonController {

	@RequestMapping("/addUserJson")
	public String addUserAction(){
		
		return "addUser";
	}
	
	@RequestMapping("/registerAction")
	@ResponseBody
	public ArrayList<User> registerUser( User user,Model model){
		 
		ArrayList<User> users = new ArrayList<User>();
		
		users.add(user);
		
		User user2 = new User();
		user2.setUsername("user2");
		user2.setPassword("admind");
		users.add(user2);
		
		
	return users;
	}
	
	
	
	@InitBinder
	public void InitBinder (ServletRequestDataBinder binder){
		//注册自定义的编辑器
		binder.registerCustomEditor(
			java.util.Date.class, 
			new CustomDateEditor(new SimpleDateFormat("yyyy-MM-dd"), true));
		//后面的true代表的是 允许为null  false 不允许null
	}

}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   package pojo;

import java.util.Date;

public class User {
		private String username;
		private String password;
		private Integer age;
		private String email;
		private Dog dog;
		private Date birthday;
		public Date getBirthday() {
			return birthday;
		}
		public void setBirthday(Date birthday) {
			this.birthday = birthday;
		}
		public Dog getDog() {
			return dog;
		}
		public void setDog(Dog dog) {
			this.dog = dog;
		}
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public String getPassword() {
			r