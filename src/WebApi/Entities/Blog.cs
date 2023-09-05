using System.Text.Json.Serialization;

namespace WebApi.Entities
{
    public class Blog
    {
        public int BlogId { get; set; }
        public string? BlogName { get; set; }

        public string? BlogAuthor { get; set; }

        public string? BlogTopic { get; set; }
        [JsonIgnore]
        public ICollection<Post>? Post { get; set; }
    }
}
