package com.kimson.web.service;

import com.kimson.web.entity.Blog;
import org.apache.ibatis.annotations.Param;

import javax.websocket.server.PathParam;
import java.util.List;

public interface BlogService {
    public List<Blog> findAll();

    public Blog findOne(int id);

    public void insert(String title, String content, String author);

    public void update(Blog blog);

    public void delete(int id);
}
