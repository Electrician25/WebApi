using Microsoft.AspNetCore.Mvc;
using WebApi.ActionResult;

namespace WebApi.Controllers
{
    [Route("/api/{controller}")]
    [ApiController]
    public class HtmlController : ControllerBase
    {
        private readonly Func<string, HtmlResult> _htmlResult;

        public HtmlController(Func<string, HtmlResult> htmlResult)
        {
            _htmlResult = htmlResult;
        }

        [HttpGet]
        [Route("writeBlogs")]
        public IActionResult GetBlogs() 
        {
            return _htmlResult(@"./wwwroot/html/blogsList.html");
        }


        [HttpGet]
        [Route("writePosts")]
        public IActionResult GetPosts()
        {
            return _htmlResult(@"./wwwroot/html/creatingNewPost.html");
        }

        [HttpGet]
        [Route("writePost")]
        public IActionResult GetPost()
        {
            return _htmlResult(@"./wwwroot/html/listenPostPage.html");
        }

        [HttpGet]
        [Route("getPosts")]
        public IActionResult GetBlog()
        {
            return _htmlResult(@"./wwwroot/html/listenPostPage.html");
        }

    }
}
