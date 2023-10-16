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
        public ActionResult<Errors<Exception,object>> AddsBlog(Blog blog)
        {
            return _blogCrudService.AddsNewBlog(blog);
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<Errors<Exception, object>> GetsBlog(int id)
        { 
            return _blogCrudService.GetsBlogById(id);
        }

        [HttpGet]
        public ActionResult<Errors<Exception, object>> GetsBlogs()
        {
            return _blogCrudService.GetsAllBlogs();
        }

        [HttpPut]
        [Route("{id}")]
        public ActionResult<Errors<Exception, object>> UpdatesBlog(int id,Blog blog) 
        {
            return _blogCrudService.UpdatesBlogById(id,blog);
        }

        [HttpDelete]
        [Route("{id}")]
        public ActionResult<Errors<Exception, object>> Delete(int id) 
        {
            return _blogCrudService.DeleteBlog(id);
        }
    }
}