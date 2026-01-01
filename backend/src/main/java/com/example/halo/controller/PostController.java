package com.example.halo.controller;


import com.example.halo.domain.Post;
import com.example.halo.repository.PostRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {
  private final PostRepository postRepository;

  public PostController(PostRepository postRepository) {
    this.postRepository = postRepository;
  }

  @GetMapping
  public List<Post> getPosts() {
    return postRepository.findAll();
  }

  @PostMapping
  public Post createPost(@RequestBody Post post) {
    return postRepository.save(post);
  }
}
