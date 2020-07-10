using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
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
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> PostQuestionVote(int id, string upOrDown)
        {
            var existingVote = await _context.QuestionVotes.AnyAsync(questionVote => questionVote.UserId == GetCurrentUserId() && questionVote.QuestionId == id);
            if (existingVote)
            {
                return BadRequest();
            }

            var questionVote = new QuestionVote
            {
                QuestionId = id,
                UserId = GetCurrentUserId(),
                UpOrDown = upOrDown
            };
            await _context.QuestionVotes.AddAsync(questionVote);

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

        private int GetCurrentUserId()
        {
            return int.Parse(User.Claims.FirstOrDefault(claim => claim.Type == "Id").Value);
        }
    }
}