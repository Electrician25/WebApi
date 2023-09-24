using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Entities;

namespace WebApi.CrudServices
{
    public class BlogCrud : ControllerBase
    {
        private readonly ApplicationContext _applicationContext;

        public BlogCrud(ApplicationContext applicationContext) 
        {
            _applicationContext = applicationContext;
        }
        public Blog AddNewBlog(Blog blog)
        {
            _applicationContext.Blogs.Add(blog);
            _applicationContext.SaveChanges();

            return blog;
        }

        public Blog[] GetAllBlogs() 
        {
            return _applicationContext.Blogs.ToArray();
        }

        public Blog GetBlogId(int id)
        {
            var blogId = _applicationContext.Blogs.FirstOrDefault(b => b.BlogId == id);

            if (blogId == null)
            {
                throw new Exception($"Blog id: {blogId} is not found");
            }

            return blogId;
        }

        public Blog UpdateBlog(int id, Blog blog)
        {
            var blogId = _applicationContext.Blogs.FirstOrDefault(b => b.BlogId == id);

            if (blogId == null)
            {
                throw new Exception($"Blog id: {blogId} is not found");
            }

            blogId.BlogName = blog.BlogName;
            blogId.BlogAuthor = blog.BlogAuthor;
            blogId.BlogTopic = blog.BlogTopic;
            _applicationContext.SaveChanges();

            return blogId;
        }

        public Blog DeleteBlog() 
        {
            var blogId = _applicationContext.Blogs.OrderBy(e => e.BlogName).Include(e => e.Post).First()
                ?? throw new Exception();

            _applicationContext.Remove(blogId);
            _applicationContext.SaveChanges();

            return blogId;
        }
    }
}