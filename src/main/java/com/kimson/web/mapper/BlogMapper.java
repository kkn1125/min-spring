package com.kimson.web.mapper;

import com.kimson.web.entity.Blog;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface BlogMapper {
    @Select("select * from board order by regdate desc")
    public List<Blog> findAll();

    @Select("select * from board where id=#{id}")
    public Blog findOne(@Param("id") int id);

    @Insert("insert into board (title, content, author) values(#{title}, #{content}, #{author})")
    public void insert(@Param("title") String title, @Param("content") String content, @Param("author") String author);

    @Update("update board set title=#{blog.title}, content=#{blog.content}, author=#{blog.author} where id=#{blog.id}")
    public void update(@Param("blog") Blog blog);

    @Delete("delete from board where id=#{id}")
    public void delete(@Param("id") int id);
}
