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
    // All of these routes will be at the base URL:     /api/Answers
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case AnswersController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class AnswersController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public AnswersController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Answers
        //
        // Returns a list of all your Answers
        //

        [HttpPost]
        public async Task<ActionResult<Answer>> PostAnswer(Answer answer)
        {
            // Indicate to the database context we want to add this new record
            _context.Answers.Add(answer);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetAnswer", new { id = answer.Id }, answer);
        }

        // DELETE: api/Answers/5
        //
        // Deletes an individual answer with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //

    }
}
