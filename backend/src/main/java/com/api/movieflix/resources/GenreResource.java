package com.api.movieflix.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.movieflix.dto.GenreDTO;
import com.api.movieflix.services.GenreService;

@RestController
@RequestMapping(value = "/genres")
public class GenreResource {
	
	@Autowired
	private GenreService service;
	
	@GetMapping
	public ResponseEntity<List<GenreDTO>> findAll() {
		List<GenreDTO> genres = service.findAll();
		return ResponseEntity.ok().body(genres);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<GenreDTO> findById(@PathVariable Long id) {
		GenreDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}
}
