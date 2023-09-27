using System.ComponentModel.DataAnnotations;

namespace WebApi.Entities
{
    public class Post
    {
        public int? PostId { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string? PostName { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string? PostDescription { get; set; } 
        public int? BlogId { get; set; }
        public Blog? Blog { get; set; } 
    }
}
