package com.api.movieflix.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.movieflix.dto.UserDTO;
import com.api.movieflix.services.UserService;

@RestController
@RequestMapping(value = "/users")
public class UserResource {
	
	@Autowired
	private UserService service;
	
	@GetMapping
	private ResponseEntity<List<UserDTO>> findAll() {
		List<UserDTO> users = service.findAll();
		return ResponseEntity.ok().body(users);
	}

}
