using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace WebApi.Entities
{
    [Index(nameof(PostName), IsUnique = true)]
    public class Post
    {
        public int? PostId { get; set; }
        public string? PostName { get; set; }
        public string? PostDescription { get; set; } 
        public int? BlogId { get; set; }
        public Blog? Blog { get; set; } 
    }
}
