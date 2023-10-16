using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebApi.Entities
{
    [Index(nameof(PostName), IsUnique = true)]
    public class Post
    {
        public int? PostId { get; set; }
        public string? PostName { get; set; }
        public string? PostDescription { get; set; } 
        public string? PostExeption { get; set; }
        public int? BlogId { get; set; }

        [JsonIgnore]
        public Blog? Blog { get; set; } 
    }
}
