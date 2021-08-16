package com.api.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.movieflix.entities.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {

}
