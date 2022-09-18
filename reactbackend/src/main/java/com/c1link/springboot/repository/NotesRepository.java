package com.c1link.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.c1link.springboot.entity.Note;

@Repository
public interface NotesRepository extends JpaRepository<Note, Long> {

}
