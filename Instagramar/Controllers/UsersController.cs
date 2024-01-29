using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Instagramar.Models;
using Instagramar.Models.Request.User;
using AutoMapper;
using Microsoft.CodeAnalysis.Scripting;
using Microsoft.AspNetCore.Identity;

namespace Instagramar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly InstagramarContext _context;
        private readonly IMapper _mapper;

        public UsersController(InstagramarContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(long id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(long id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(long id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(long id)
        {
            return _context.Users.Any(e => e.Id == id);
        }

        [HttpPost("SignUp")]
        public async Task<ActionResult<User>> SignUp(SignUp request)
        {
            if (!ModelState.IsValid)
                return new JsonResult(new { message = "Model is Wrong", StatusCode = StatusCode(400) });

            var usernameFind = await _context.Users.Where(i => i.Username == request.Username).ToListAsync();
            if (usernameFind.Count() != 0)
                return new JsonResult(new { message = "Username existed", StatusCode = StatusCode(400) });

            var emailFind = await _context.Users.Where(i => i.Email == request.Email).ToListAsync();
            if (emailFind.Count() != 0)
                return new JsonResult(new { message = "Email existed", StatusCode = StatusCode(400) });

            var phoneFind = await _context.Users.Where(i => i.Phone == request.Phone).ToListAsync();
            if (phoneFind.Count() != 0)
                return new JsonResult(new { message = "Phone existed", StatusCode = StatusCode(400) });

            //BCrypt
            request.Password = BCrypt.Net.BCrypt.HashPassword(request.Password);
            //bool isPasswordCorrect = BCrypt.Verify("my password", passwordHash);
            // map model to new user object
            //var userMapper = _mapper.Map<User>(user);
            //User model = this.Mapper.Map<User>(new user());
            var userMapper = _mapper.Map<User>(request);
            //_mapper.Map(user, user);
            _context.Users.Add(userMapper);
            await _context.SaveChangesAsync();

            //return user;
            return new JsonResult(new
            {
                message = "Sign Up Success",
                request,
                usernameFind,
                emailFind,
                phoneFind,
                StatusCode = StatusCode(200)
            });
        }

        [HttpPost("SignIn")]
        [CustomHeader]
        public async Task<ActionResult<User>> SignIn(SignIn request)
        {
            if (!ModelState.IsValid)
                return new JsonResult(new { message = "Model is Wrong", StatusCode = StatusCode(400) });

            var usernameFind = await _context.Users.Where(i => i.Username == request.Username).ToListAsync();
            if (usernameFind.Count() == 0)
                return new JsonResult(new { message = "Username is not existed", StatusCode = StatusCode(400) });

            bool isPasswordCorrect = BCrypt.Net.BCrypt.Verify(request.Password, usernameFind[0].HashPassword);
            if (!isPasswordCorrect)
                return new JsonResult(new { message = "Password is not matched", StatusCode = StatusCode(400) });


            return new JsonResult(new
            {
                message = "Login Success",
                StatusCode = StatusCode(200)
            });
        }

        [HttpPost("Forgot")]
        public async Task<ActionResult<User>> Forgot(Forgot request)
        {
            if (!ModelState.IsValid)
                return new JsonResult(new { message = "Model is Wrong", StatusCode = StatusCode(400) });

            var usernameFind = await _context.Users.Where(i => i.Username == request.Username).ToListAsync();
            if (usernameFind.Count() == 0)
                return new JsonResult(new { message = "Username is not existed", StatusCode = StatusCode(400) });

            request.NewPassword = BCrypt.Net.BCrypt.HashPassword(request.NewPassword);

            _mapper.Map(request, usernameFind[0]);
            _context.Users.Update(usernameFind[0]);
            await _context.SaveChangesAsync();
          
            return new JsonResult(new
            {
                message = "Change Password Success",
                StatusCode = StatusCode(200)
            });
        }
    }
}
