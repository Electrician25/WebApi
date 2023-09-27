using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebApi.Entities
{
    public class Blog
    {
        public int? BlogId { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string? BlogName { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string? BlogAuthor { get; set; }

        [JsonIgnore]
        public ICollection<Post>? Post { get; set; }
    }
}
