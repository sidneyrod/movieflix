package com.api.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.movieflix.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

}
