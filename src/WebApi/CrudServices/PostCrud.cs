using Microsoft.AspNetCore.Mvc;
using WebApi.Data;
using WebApi.Entities;

namespace WebApi.CrudServices
{
    public class PostCrud : ControllerBase
    {
        private readonly ApplicationContext _applicationContext;
        Errors<Exception, object> _errors;

        public PostCrud(ApplicationContext applicatioContext, Errors<Exception, object> errors)
        {
            _applicationContext = applicatioContext;
            _errors = errors;
        }

        public Errors<Exception,object> AddNewPost(Post post)
        {
            try 
            {
                _applicationContext.Posts.Add(post);
                _errors.ErrorData = post;
                _applicationContext.SaveChanges();
            }

            catch (Exception exception) 
            {
                _errors.Error = exception; 
            }

            return _errors;
        }

        public Errors<Exception, object> GetAllPosts()
        {
            try
            {
                _errors.ErrorData = _applicationContext.Posts.ToArray();
            }

            catch (Exception exception)
            {
                _errors.Error = exception;
            }

            return _errors;
        }

        public Errors<Exception, object> GetPostById(int postId)
        {
            try
            {
                var post = _applicationContext.Blogs.Find(postId);
                _errors.ErrorData = _applicationContext.Posts.Where(e => e.BlogId == postId).ToArray();
            }

            catch (Exception exception)
            {
                _errors.Error = exception;
            }

            return _errors;
        }

        public Errors<Exception, object> UpdatePostById(int postId, Post post)
        {
            try 
            {
                var newPost = _applicationContext.Posts.FirstOrDefault(p => p.PostId == postId);

                newPost.PostName = post.PostName;
                newPost.PostDescription = post.PostDescription;
                _errors.ErrorData = newPost;

                _applicationContext.SaveChanges();
            }

            catch (Exception exception)
            {
                _errors.Error = exception;
            }

            return _errors;
        }

        public Errors<Exception, object>DeletePostById(int postId)
        {
            try 
            {
                var post = _applicationContext.Posts.FirstOrDefault(p => p.PostId == postId);
                _applicationContext.Posts.Remove(post);
                _applicationContext.SaveChanges();
            }

            catch (Exception exception)
            {
                _errors.Error = exception;
            }

            return _errors;
        }
    }
}