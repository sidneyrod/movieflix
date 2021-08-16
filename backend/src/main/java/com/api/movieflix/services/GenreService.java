package com.api.movieflix.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.api.movieflix.dto.GenreDTO;
import com.api.movieflix.entities.Genre;
import com.api.movieflix.repositories.GenreRepository;

@Service
public class GenreService {
	
	@Autowired
	private GenreRepository repository;
	
	@Transactional(readOnly = true)
	public List<GenreDTO> findAll() {
		List<Genre> genres = repository.findAll();
		return genres.stream().map(genre -> new GenreDTO(genre)).collect(Collectors.toList());
	}

}
