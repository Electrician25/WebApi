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
        public ActionResult<Post> Add(Post post)
        {
            return _postCrudService.AddNewPost(post);
        }

        [HttpGet("{id}/orders")]
        public ActionResult<Post[]> Get(int id)
        {
            return _postCrudService.GetPostAndBlogsById(id);
        }

        [HttpGet]
        public ActionResult<Post[]> GetAll()
        {
            return _postCrudService.GetAllPosts();
        }

        [HttpPut]
        public ActionResult<Post> Update(Post post)
        {
            return _postCrudService.UpdatePost(post);
        }

        [HttpDelete("{id}")]
        public ActionResult<Post> Delete(int id)
        {
            return _postCrudService.DeletePost(id);
        }
    }
}