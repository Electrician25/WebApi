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
            return _htmlResult(@"./wwwroot/html/blogs.html");
        }


        [HttpGet]
        [Route("writePosts")]
        public IActionResult GetPosts()
        {
            return _htmlResult(@"./wwwroot/html/posts.html");
        }
    }
}
