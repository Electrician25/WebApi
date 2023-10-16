using Microsoft.AspNetCore.Mvc;
using WebApi.CrudServices;
using WebApi.Entities;

namespace WebApi.Controllers
{
    [Route("/api/{controller}")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly PostCrud _postCrudService;

        public PostsController(PostCrud postCrudService)
        {
            _postCrudService = postCrudService;
        }

        [HttpPost]
        [Route("{id}")]
        public ActionResult<Errors<Exception, object>> Add(Post post)
        {
            return _postCrudService.AddsNewPost(post);
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<Errors<Exception, object>> Get(int id)
        {
            return _postCrudService.GetsPostById(id);
        }

        [HttpGet]
        public ActionResult<Errors<Exception, object>> GetAll()
        {
            return _postCrudService.GetsAllPosts();
        }

        [HttpPut]
        [Route("{id}")]
        public ActionResult<Errors<Exception, object>> Update(int id, Post post)
        {
            return _postCrudService.UpdatesPostById(id, post);
        }

        [HttpDelete]
        [Route("{id}")]
        public ActionResult<Errors<Exception, object>> Delete(int id)
        {
            return _postCrudService.DeletesPostById(id);
        }
    }
}