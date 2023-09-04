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
        [Route("writeLine")]
        public IActionResult GetLine() 
        {
            return _htmlResult(@"./wwwroot/html/index.html");
        }
    }
}
