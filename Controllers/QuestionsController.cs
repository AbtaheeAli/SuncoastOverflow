using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SuncoastOverflow.Models;

namespace SuncoastOverflow.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {

        private readonly DatabaseContext _context;

        public QuestionsController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Question>>> GetQuestions(string filter)
        {
            if (filter == null)
            {
                return await _context.Questions.OrderBy(question => question.Title).Include(question => question.Answers).ToListAsync();
            }
            else
            {
                return await _context.Questions.Where(question => question.Title.Contains(filter)).OrderBy(Question => Question.Title).Include(question => question.Answers).ToListAsync();
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Question>> GetQuestion(int id)
        {
            var question = await _context.Questions.Where(question => question.Id == id).Include(question => question.Answers).FirstOrDefaultAsync();

            if (question == null)
            {
                return NotFound();
            }
            return question;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutQuestion(int id, Question question)
        {
            if (id != question.Id)
            {
                return BadRequest();
            }

            _context.Entry(question).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QuestionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Question>> PostQuestion(Question question)
        {
            _context.Questions.Add(question);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetQuestion", new { id = question.Id }, question);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQuestion(int id)
        {
            var question = await _context.Questions.FindAsync(id);
            if (question == null)
            {
                return NotFound();
            }

            _context.Questions.Remove(question);

            await _context.SaveChangesAsync();

            return NoContent();
        }
        private bool QuestionExists(int id)
        {
            return _context.Questions.Any(question => question.Id == id);
        }
    }
}
