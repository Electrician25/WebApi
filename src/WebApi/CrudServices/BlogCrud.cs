using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Entities;

namespace WebApi.CrudServices
{
    public class BlogCrud : ControllerBase
    {
        private readonly ApplicationContext _applicationContext;
        Errors<Exception, object> _errors;

        public BlogCrud(ApplicationContext applicationContext, Errors<Exception,object>  errors)
        {
            _applicationContext = applicationContext;
            _errors = errors;
        }

        public Errors<Exception, object> AddsNewBlog(Blog newBlog)
        {
            try 
            {
                _applicationContext.Blogs.Add(newBlog);
                _errors.ErrorData = newBlog;
                _applicationContext.SaveChanges();
            }
            catch (Exception exception) 
            {
                _errors.Error = exception.InnerException;
            }

            return _errors;
        }

        public Errors<Exception,object> GetsAllBlogs()
        {
            try 
            {
                _errors.ErrorData = _applicationContext.Blogs.ToArray();
            }

            catch (Exception exception) 
            {
                _errors.Error = exception;   
            }

            return _errors;
        }

        public Errors<Exception, object> GetsBlogById(int blogId)
        {
            try 
            {
                var blog = _applicationContext.Blogs.FirstOrDefault(b => b.BlogId == blogId);
                _errors.ErrorData = blog;
            }

            catch (Exception exception)
            {
                _errors.Error = exception;
            }

            return _errors;
        }

        public Errors<Exception,object> UpdatesBlogById(int blogId, Blog newBlog)
        {
            var currentBlog = _applicationContext.Blogs.FirstOrDefault(b => b.BlogId == blogId);

            try 
            {
                currentBlog.BlogName = newBlog.BlogName;
                currentBlog.BlogAuthor = newBlog.BlogAuthor;
                _errors.ErrorData = currentBlog;
                _applicationContext.SaveChanges();
            }
            
            catch(Exception exception) 
            {
                _errors.Error = exception;
            }

            return _errors;
        }

        public Errors<Exception,object> DeleteBlog(int blogId)
        {
            var blog = _applicationContext.Blogs.Where(e => e.BlogId == blogId).Include(e => e.Post).First();
            try
            {
                _errors.ErrorData = blog;
                _applicationContext.Remove(blog);
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