using System;

namespace SuncoastOverflow.Models
{
    public class Answer
    {
        public int id { get; set; }
        public string body { get; set; }
        public DateTime CreatedAt { get; private set; } = DateTime.Now;
        public int QuestionId { get; set; }

    }
}