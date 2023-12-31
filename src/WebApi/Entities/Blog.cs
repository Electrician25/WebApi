﻿using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

namespace WebApi.Entities
{
    [Index(nameof(BlogName), IsUnique = true)]
    public class Blog
    {
        public int? BlogId { get; set; }
        public string? BlogName { get; set; }
        public string? BlogExeption { get; set; }
        public string? BlogAuthor { get; set; }

        [JsonIgnore]
        public ICollection<Post>? Post { get; set; }
    }
}
