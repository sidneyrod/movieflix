package com.api.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.movieflix.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
