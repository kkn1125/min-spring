package com.kimson.web.restController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kimson.web.entity.Blog;
import com.kimson.web.service.BlogServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RestBlogController {
    @Autowired
    BlogServiceImpl service;

    @GetMapping("/blogs")
    public String findAll() throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        List<Blog> list = service.findAll();
        String result = mapper.writeValueAsString(list);

        return result;
    }

    @GetMapping("/blog/{id}")
    public String findAll(@PathVariable("id") int id) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        Blog one = service.findOne(id);
        String result = mapper.writeValueAsString(one);

        return result;
    }

    @DeleteMapping("/blog/{id}")
    public String delete(@PathVariable("id") int id) {
        try {
            service.delete(id);
        } catch(Exception e) {
            return "false";
        }

        return "true";
    }

    @PutMapping("/blog/{id}")
    public String update(@PathVariable("id") int id, Blog blog) {
        try {
            blog.setId(id);
            System.out.println("blog title: " + blog.getTitle());
            service.update(blog);
        } catch(Exception e) {
            System.out.println(e.getMessage());
            return "false";
        }

        return "true";
    }

    @PostMapping("/blog")
    public String insert(String title, String content, String author) {
        try {
            service.insert(title, content, author);
        } catch(Exception e) {
            System.out.println(e.getMessage());
            return "false";
        }

        return "true";
    }
}
