using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SuncoastOverflow.Models;

namespace SuncoastOverflow.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class QuestionVotesController : ControllerBase
    {
        private readonly DatabaseContext _context;


        public QuestionVotesController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpPost("{id}/{upOrDown}")]
        public async Task<IActionResult> PostQuestionVote(int id, string upOrDown)
        {
            var question = await _context.Questions.FindAsync(id);

            if (question == null)
            {

                return NotFound();
            }
            switch (upOrDown)
            {
                case "upvote":
                    question.IncrementUpvoteCount();
                    break;
                case "downvote":
                    question.IncrementDownvoteCount();
                    break;
                default:
                    return BadRequest();
            }

            _context.Entry(question).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return NoContent();

        }
    }
}