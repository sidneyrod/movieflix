package com.api.movieflix.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.api.movieflix.dto.UserDTO;
import com.api.movieflix.entities.User;
import com.api.movieflix.repositories.UserRepository;
import com.api.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;
	
	@Transactional(readOnly = true)
	public List<UserDTO> findAll() {
		List<User> list = repository.findAll();
		return list.stream().map(users -> new UserDTO(users)).collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public UserDTO findById(Long id) {
		Optional<User> obj = repository.findById(id);
		User user = obj.orElseThrow(() -> new ResourceNotFoundException("Id " + id + " not found"));
		return new UserDTO(user);
	}

	public UserDTO insert(UserDTO dto) {
		User user = new User();
		copyDtoToEntity(dto, user);
		user = repository.save(user);
		return new UserDTO(user);
	}
	
	@Transactional
	public UserDTO update(Long id, UserDTO dto) {
		try {
			User user = repository.getOne(id);
			copyDtoToEntity(dto, user);
			user = repository.save(user);
			return new UserDTO(user);
		}
		catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id " + id + " not found");
		}
	}
	
	public void copyDtoToEntity(UserDTO dto, User entity) {
		entity.setName(dto.getName());
		entity.setEmail(dto.getEmail());
	}
}
