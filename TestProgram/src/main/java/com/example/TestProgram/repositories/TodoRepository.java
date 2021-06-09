package com.example.TestProgram.repositories;

import com.example.TestProgram.entities.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface TodoRepository extends JpaRepository<Todo,Long> {
}
