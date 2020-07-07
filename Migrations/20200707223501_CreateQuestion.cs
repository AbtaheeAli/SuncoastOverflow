using Microsoft.EntityFrameworkCore.Migrations;

namespace SuncoastOverflow.Migrations
{
    public partial class CreateQuestion : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "title",
                table: "Questions",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "tags",
                table: "Questions",
                newName: "Tags");

            migrationBuilder.RenameColumn(
                name: "body",
                table: "Questions",
                newName: "Body");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Questions",
                newName: "title");

            migrationBuilder.RenameColumn(
                name: "Tags",
                table: "Questions",
                newName: "tags");

            migrationBuilder.RenameColumn(
                name: "Body",
                table: "Questions",
                newName: "body");
        }
    }
}
