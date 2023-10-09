using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using WebApi.Data;
using WebApi.Entities;

namespace WebApi.CrudServices
{
    public class PostCrud : ControllerBase
    {
        private readonly ApplicationContext _applicationContext;

        public PostCrud(ApplicationContext applicatioContext)
        {
            _applicationContext = applicatioContext;
        }

        public Post AddsNewPost(Post post)
        {
            _applicationContext.Posts.Add(post);

            try 
            {
                _applicationContext.SaveChanges();
            }

            catch (Exception ex) 
            {
                post.PostExeption = "ТакойПостУжеЕсть";
            }

            return post;
        }

        public Post[] GetsAllPosts()
        {
            return _applicationContext.Posts.ToArray();
        }

        public Post[] GetsPostById(int postId)
        {
            var post = _applicationContext.Blogs.Find(postId);

            if (post == null)
            {
                throw new Exception($"Post id: {post} not foud");
            }

            return _applicationContext.Posts.Where(e => e.BlogId == postId).ToArray();
        }

        public Post UpdatesPostById(int postId, Post post) 
        {
            var newPost = _applicationContext.Posts.FirstOrDefault(p => p.PostId == postId);

            newPost.PostName = post.PostName;
            newPost.PostDescription = post.PostDescription;
            try
            {
                newPost.PostExeption = null;
                _applicationContext.SaveChanges();
            }
            
            catch(Exception ex) 
            {
                newPost.PostExeption = "ТакойПостУжеЕсть";
            }
            return newPost;
        }

        public Post DeletesPostById(int postId)
        {
            var post = _applicationContext.Posts.FirstOrDefault(p => p.PostId == postId);

            if (post == null)
            {
                throw new Exception($"Post id: {post} not foud");
            }

            _applicationContext.Posts.Remove(post);
            _applicationContext.SaveChanges();

            return post;
        }
    }
}