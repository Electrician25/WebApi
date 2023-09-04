using Microsoft.AspNetCore.Mvc;
using System.Net.Mime;

namespace WebApi.ActionResult
{
    public sealed class HtmlResult : ContentResult
    {
        public HtmlResult()
        {

        }

        public HtmlResult(string path)
        {
            Content = File.ReadAllText(path);
            ContentType = "text/html; charset=utf-8";
        }
    }
}
