package com.api.movieflix.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.api.movieflix.dto.ReviewDTO;
import com.api.movieflix.entities.Movie;
import com.api.movieflix.entities.Review;
import com.api.movieflix.entities.User;
import com.api.movieflix.repositories.MovieRepository;
import com.api.movieflix.repositories.ReviewRepository;
import com.api.movieflix.repositories.UserRepository;
import com.api.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class ReviewService {
	
	@Autowired 
	private ReviewRepository repository;
	
	@Autowired 
	private MovieRepository movieRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Transactional(readOnly = true)
	public List<ReviewDTO> findAll() {
		List<Review> reviews = repository.findAll();
		return reviews.stream().map(review -> new ReviewDTO(review)).collect(Collectors.toList());
	}
	
	@Transactional(readOnly = true)
	public ReviewDTO findById(Long id) {
		Optional<Review> obj = repository.findById(id);
		Review review = obj.orElseThrow(() -> new ResourceNotFoundException("Review not found"));
		return new ReviewDTO(review);
	}
	
	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {
		Review review = new Review();
		
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		User userAuthenticated = userRepository.findByEmail(authentication.getName());
		
		Movie movie = movieRepository.getOne(dto.getMovieId());
		
		review.setUser(userAuthenticated);
		review.setMovie(movie);
		review.setText(dto.getText());
		
		review = repository.save(review);
		
		return new ReviewDTO(review);
	}
	
}
