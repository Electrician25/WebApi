using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Entities;

namespace WebApi.CrudServices
{
    public class BlogCrud : Microsoft.AspNetCore.Mvc.ControllerBase
    {
        private readonly ApplicationContext _applicationContext;

        public BlogCrud(ApplicationContext applicationContext)
        {
            _applicationContext = applicationContext;
        }
        public Blog AddsNewBlog(Blog newBlog)
        {
            _applicationContext.Blogs.Add(newBlog);
            try 
            {
                _applicationContext.SaveChanges();
            }
            catch (Exception ex) 
            {
                newBlog.BlogExeption = "ТакойБлогУжеЕсть";
            }

            return newBlog;
        }

        public Blog[] GetsAllBlogs()
        {
            return _applicationContext.Blogs.ToArray();
        }

        public Blog GetsBlogById(int blogId)
        {
            var blog = _applicationContext.Blogs.FirstOrDefault(b => b.BlogId == blogId);

            if (blog == null)
            {
                throw new Exception($"Blog id: {blog} is not found");
            }

            return blog;
        }

        public Blog UpdatesBlogById(int blogId, Blog newBlog)
        {
            var currentBlog = _applicationContext.Blogs.FirstOrDefault(b => b.BlogId == blogId);

            if (currentBlog == null)
            {
                throw new Exception($"Blog id: {currentBlog} is not found");
            }

            currentBlog.BlogName = newBlog.BlogName;
            currentBlog.BlogAuthor = newBlog.BlogAuthor;
            try 
            {
                currentBlog.BlogExeption = null;
                _applicationContext.SaveChanges();
            }
            
            catch(Exception ex) 
            {
                currentBlog.BlogExeption = "ТакойБлогУжеЕсть";
            }

            return currentBlog;
        }

        public Blog DeleteBlog(int blogId)
        {
            var blog = _applicationContext.Blogs.Where(e => e.BlogId == blogId).Include(e => e.Post).First()
               ?? throw new Exception();

            _applicationContext.Remove(blog);
            _applicationContext.SaveChanges();

            return blog;
        }
    }
}