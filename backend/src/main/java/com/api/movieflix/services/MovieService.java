package com.api.movieflix.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.api.movieflix.dto.MovieDTO;
import com.api.movieflix.dto.ReviewDTO;
import com.api.movieflix.entities.Genre;
import com.api.movieflix.entities.Movie;
import com.api.movieflix.entities.Review;
import com.api.movieflix.repositories.GenreRepository;
import com.api.movieflix.repositories.MovieRepository;
import com.api.movieflix.repositories.ReviewRepository;
import com.api.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService {

	@Autowired
	private MovieRepository repository;
	
	@Autowired
	private GenreRepository genreRepository;
	
	@Autowired
	private ReviewRepository reviewRepository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAllPaged(Long genreId, PageRequest pageRequest) {
		Genre genre = (genreId == 0) ? null : genreRepository.getOne(genreId);
		Page<Movie> page = repository.find(genre, pageRequest);
		return page.map(movie -> new MovieDTO(movie));
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Optional<Movie> obj = repository.findById(id);
		Movie movie = obj.orElseThrow(() -> new ResourceNotFoundException("Movie not found"));
		return new MovieDTO(movie);
	}
	
	@Transactional
	public MovieDTO insert(MovieDTO dto) {
		Movie movie = new Movie();
		copyDtoToEntity(dto, movie);
		movie = repository.save(movie);
		return new MovieDTO(movie);
	}
	
	@Transactional
	public MovieDTO update(Long id, MovieDTO dto) {
		try {
			Movie movie = repository.getOne(id);
			copyDtoToEntity(dto, movie);
			movie = repository.save(movie);
			return new MovieDTO(movie);
		}
		catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id " + id + " not found");
		}
	}
	
	private void copyDtoToEntity(MovieDTO dto, Movie entity) {
		entity.setTitle(dto.getTitle());
		entity.setSubTitle(dto.getSubTitle());
		entity.setYear(dto.getYear());
		entity.setImgUrl(dto.getImgUrl());
		entity.setSynopsis(dto.getSynopsis());
		
		Genre genre = genreRepository.getOne(dto.getGenreId());
		entity.setGenre(genre);
		
		entity.getReviews().clear();
		
		for (ReviewDTO reviewDTO : dto.getReviews()) {
			Review review = reviewRepository.getOne(reviewDTO.getId());
			entity.getReviews().add(review);
		}
	}
}
