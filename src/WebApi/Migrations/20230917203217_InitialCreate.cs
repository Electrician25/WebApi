using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace WebApi.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Blogs",
                columns: table => new
                {
                    BlogId = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    BlogName = table.Column<string>(type: "text", nullable: true),
                    BlogAuthor = table.Column<string>(type: "text", nullable: true),
                    BlogTopic = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Blogs", x => x.BlogId);
                });

            migrationBuilder.CreateTable(
                name: "Posts",
                columns: table => new
                {
                    PostId = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    PostTopic = table.Column<string>(type: "text", nullable: true),
                    PostName = table.Column<string>(type: "text", nullable: true),
                    PostDescription = table.Column<string>(type: "text", nullable: true),
                    BlogId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Posts", x => x.PostId);
                    table.ForeignKey(
                        name: "FK_Posts_Blogs_BlogId",
                        column: x => x.BlogId,
                        principalTable: "Blogs",
                        principalColumn: "BlogId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "BlogId", "BlogAuthor", "BlogName", "BlogTopic" },
                values: new object[,]
                {
                    { 0, "Viktor Dresson", "Traveling", "Bermuda Triangle" },
                    { 1, "Willson Wolles", "Underwater", "Studying the bottom of the Mariana Trench" },
                    { 2, "Bill Wolles", "Space travalling", "Exploring the dark side of the moon" },
                    { 3, "Alex Binner", ".NET 7 VERSION", "New .net 7 version" }
                });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "PostId", "BlogId", "PostDescription", "PostName", "PostTopic" },
                values: new object[,]
                {
                    { 0, 0, "If this is your first time in Moscow, you have come to the right place. The Red Square and St Basil’s Cathedral are just a couple of the sights that attract visitors to Moscow every year. Dare I say nothing beats seeing them with your own eyes. But there are so many more things to see and do in Moscow. You could easily spend four days here and barely scratch the surface. Here is your complete guide to help you plan your trip to the capital city of Russia!", "My first travelling in Moscow", "Travelling" },
                    { 1, 1, "I remember during my first scuba diving experience I was half scared. The idea of leaving the world I knew and entering into something far more mysterious and oblivious was undoubtedly scary. And the fact that every cry, every yell, was only going to be left unheard underwater, was, moreover, alarmingly daunting.\r\n\r\nFor the first 5 minutes of my scuba experience, I did not take my eyes off my instructor and the other two fellow divers. They seemed to be my only hope. But as I slowly sank down, listening to a louder ‘pop’ in my left ear, I began to take shape and come into focus.", "My first diving", "Diving" },
                    { 2, 2, "China has become the first nation ever to successfully land a spacecraft on the far side of the moon. The official China Central Television station announced that the lunar explorer spaceship, Chang'e 4, touched down at 10:26am on Thursday. Professor Zhu Menghua, from Macau University of Science and Technology, said the success of the mission was a major milestone for China and established the nation as a pioneer in space exploration. He told the New York Times: \"We Chinese people have done something that the Americans have not dared try.\" Sun Zezhou, chief designer of Chang'e-4, said: \"Landing on the far side of the moon is more risky than landing on the near side.", "History sapce travellings", "History" },
                    { 3, 3, "Производительность является ключевым моментом .NET 7, и все ее функции разработаны с учетом производительности. Кроме того, .NET 7 включает следующие улучшения, направленные исключительно на повышение производительности:\r\n\r\nЗамена в стеке (OSR) является дополнением к многоуровневой компиляции. Это позволяет среде выполнения изменять код, выполняемый текущим методом, в середине его выполнения (то есть, пока он находится «в стеке»). Длительно работающие методы могут переключаться на более оптимизированные версии в середине выполнения.\r\nОптимизация на основе профиля (PGO) теперь работает с OSR, и ее легче включить (путем добавления <TieredPGO>true</TieredPGO>в файл проекта). PGO также может инструментировать и оптимизировать дополнительные вещи, такие как делегаты.", ".NET_7", "Programming" },
                    { 4, 3, "Производительность является ключевым моментом .NET 7, и все ее функции разработаны с учетом производительности. Кроме того, .NET 7 включает следующие улучшения, направленные исключительно на повышение производительности:\r\n\r\nЗамена в стеке (OSR) является дополнением к многоуровневой компиляции. Это позволяет среде выполнения изменять код, выполняемый текущим методом, в середине его выполнения (то есть, пока он находится «в стеке»). Длительно работающие методы могут переключаться на более оптимизированные версии в середине выполнения.\r\nОптимизация на основе профиля (PGO) теперь работает с OSR, и ее легче включить (путем добавления <TieredPGO>true</TieredPGO>в файл проекта). PGO также может инструментировать и оптимизировать дополнительные вещи, такие как делегаты.", ".NET_7", "Programming" },
                    { 5, 3, "Производительность является ключевым моментом .NET 7, и все ее функции разработаны с учетом производительности. Кроме того, .NET 7 включает следующие улучшения, направленные исключительно на повышение производительности:\r\n\r\nЗамена в стеке (OSR) является дополнением к многоуровневой компиляции. Это позволяет среде выполнения изменять код, выполняемый текущим методом, в середине его выполнения (то есть, пока он находится «в стеке»). Длительно работающие методы могут переключаться на более оптимизированные версии в середине выполнения.\r\nОптимизация на основе профиля (PGO) теперь работает с OSR, и ее легче включить (путем добавления <TieredPGO>true</TieredPGO>в файл проекта). PGO также может инструментировать и оптимизировать дополнительные вещи, такие как делегаты.", ".NET_7", "Programming" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Posts_BlogId",
                table: "Posts",
                column: "BlogId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Posts");

            migrationBuilder.DropTable(
                name: "Blogs");
        }
    }
}
