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
        public IActionResult WriteBlogs() 
        {
            return _htmlResult(@"./wwwroot/html/blogMainPage.html");
        }

        [HttpGet]
        [Route("createBlog")]
        public IActionResult CreateBlog()
        {
            return _htmlResult(@"./wwwroot/html/blogCreatePage.html");
        }

        [HttpGet]
        [Route("updateBlog")]
        public IActionResult UpdateBlog()
        {
            return _htmlResult(@"./wwwroot/html/blogUpdatePage.html");
        }

        [HttpGet]
        [Route("writePosts")]
        public IActionResult WritePosts() 
        {
            return _htmlResult(@"./wwwroot/html/postMainPage.html");
        }

        [HttpGet]
        [Route("createPost")]
        public IActionResult CreatePosts()
        {
            return _htmlResult(@"./wwwroot/html/postCreatePage.html");
        }


        [HttpGet]
        [Route("updatePost")]
        public IActionResult UpdatePost()
        {
            return _htmlResult(@"./wwwroot/html/postUpdatePage.html");
        }
    }
}
