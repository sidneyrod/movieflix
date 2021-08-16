package com.api.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.movieflix.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long> {

}
