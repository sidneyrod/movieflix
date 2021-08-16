package com.api.movieflix.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.movieflix.entities.Movie;
import com.api.movieflix.repositories.MovieRepository;

@RestController
@RequestMapping(value = "/movies")
public class MovieResource {
	
	@Autowired
	private MovieRepository repository;
	
	@GetMapping
	public ResponseEntity<List<Movie>> findAll() {
		List<Movie> movies = repository.findAll();
		return ResponseEntity.ok().body(movies);
	}
}
