using Microsoft.AspNetCore.Mvc;
using WebApi.CrudServices;
using WebApi.Entities;

namespace WebApi.Controllers
{
    [Route("/api/{controller}")]
    [ApiController]
    public class BlogsController : ControllerBase
    {
        private readonly BlogCrud _blogCrudService;

        public BlogsController(BlogCrud blogCrudService)
        {
            _blogCrudService = blogCrudService;
        }

        [HttpPost]
        public ActionResult<Blog> Add(Blog blog)
        {
            return _blogCrudService.AddNewBlog(blog);
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<Blog> Get(int id)
        { 
            return _blogCrudService.GetBlogId(id);
        }

        [HttpGet]
        public ActionResult<Blog[]> GetAll()
        {
            return _blogCrudService.GetAllBlogs();
        }

        [HttpPut]
        [Route("{id}")]
        public ActionResult<Blog> Update(int id,Blog blog) 
        {
            return _blogCrudService.UpdateBlog(id,blog);
        }

        [HttpDelete("{id}")]
        public ActionResult<Blog> Delete() 
        {
            return _blogCrudService.DeleteBlog();
        }
    }
}