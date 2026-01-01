package com.example.halo.repository;

import com.example.halo.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
  // JpaRepository를 상속받는 것만으로 save(), findAll(), findById() 등을 바로 사용할 수 있습니다.
}