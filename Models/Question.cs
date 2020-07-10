using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SuncoastOverflow.Models
{
    public class Question
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Body { get; set; }
        public string Tags { get; set; }

        public List<Answer> Answers { get; set; }
        public int UpvoteCount { get; private set; } = 0;
        public void IncrementUpvoteCount()
        {
            this.UpvoteCount++;
        }
        public int UserId { get; set; }
        public int DownvoteCount { get; private set; } = 0;
        public void IncrementDownvoteCount()
        {
            this.DownvoteCount++;
        }
    }
}