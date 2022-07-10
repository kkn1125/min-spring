package com.kimson.web.service;

import com.kimson.web.entity.Blog;
import com.kimson.web.mapper.BlogMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogServiceImpl implements BlogService {
    @Autowired
    BlogMapper mapper;

    @Override
    public List<Blog> findAll() {
        return mapper.findAll();
    }

    @Override
    public Blog findOne(int id) {
        return mapper.findOne(id);
    }

    @Override
    public void insert(String title, String content, String author) {
        mapper.insert(title, content, author);
    }

    @Override
    public void update(Blog blog) {
        mapper.update(blog);
    }

    @Override
    public void delete(int id) {
        mapper.delete(id);
    }

}
