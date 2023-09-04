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

        [HttpGet("{id}")]
        public ActionResult<Blog> Get(int id)
        { 
            return _blogCrudService.GetBlogById(id);
        }

        [HttpGet]
        public ActionResult<Blog[]> GetAll()
        {
            return _blogCrudService.GetAllBlogs();
        }

        [HttpPut]
        public ActionResult<Blog> Update(Blog blog) 
        {
            return _blogCrudService.UpdateBlog(blog);
        }

        [HttpDelete("{id}")]
        public ActionResult<Blog> Delete(int id) 
        {
            return _blogCrudService.DeleteBlog(id);
        }
    }
}