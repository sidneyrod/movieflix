package com.api.movieflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.api.movieflix.dto.MovieDTO;
import com.api.movieflix.entities.Genre;
import com.api.movieflix.entities.Movie;
import com.api.movieflix.repositories.GenreRepository;
import com.api.movieflix.repositories.MovieRepository;

@Service
public class MovieService {

	@Autowired
	private MovieRepository repository;
	
	@Autowired
	private GenreRepository genreRepository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAllPaged(Long genreId, PageRequest pageRequest) {
		Genre genre = (genreId == 0) ? null : genreRepository.getOne(genreId);
		Page<Movie> page = repository.find(genre, pageRequest);
		return page.map(movie -> new MovieDTO(movie));
	}
}
