//using Instagramar.Models;
// using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
// using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Instagramar.Models.User;
// using Instagramar.Models.Users;

namespace Instagramar.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    // [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private readonly BlogDataContext _context;

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }


        // [HttpPost(Name = "signup")]
        // [HttpPost(Name = "signup")]
        // public async Task<ActionResult<User>> Post(SignupRequest signUpRequest)
        // {
        //     // var user = new User { Username = "Username", PasswordHash = "PasswordHash" };

        //     return new JsonResult(new
        //     {
        //         message = "ok",
        //         signUpRequest,
        //         StatusCode = StatusCode(200)
        //     });
        // }

        [HttpPost("signup", Name = "signup")]
        public async Task<ActionResult<User>> SignUp(SignUpRequest signUpRequest)
        {
            // var user = new User { Username = "Username", PasswordHash = "PasswordHash" };

            // var john = new User { Username = "John T. hoàng", PasswordHash = "john@example.com" };
            // _context.Users.Add(john);

                var jane = new Author { Name = "Jane Q. Hacker", Email = "jane@example.com" };
                _context.Authors.Add(jane);

            //     var post = new Post { Title = "Hello World", Content = "I wrote an app using EF Core!", Author = jane };
            //     context.Posts.Add(post);
            //     post = new Post { Title = "How to use EF Core", Content = "It's pretty easy", Author = john };
            //     context.Posts.Add(post);

            // await _context.SaveChangesAsync();

            return new JsonResult(new
            {
                message = "ok",
                signUpRequest,
                StatusCode = StatusCode(200)
            });
        }

        [HttpPost("signin")]
        public async Task<ActionResult<User>> SignIn(SignUpRequest signUpRequest)
        {
            // var user = new User { Username = "Username", PasswordHash = "PasswordHash" };

            return new JsonResult(new
            {
                message = "ok in",
                signUpRequest,
                StatusCode = StatusCode(200)
            });
        }

        [HttpPost("forgot")]
        public async Task<ActionResult<User>> Forgot(SignUpRequest signUpRequest)
        {
            // var user = new User { Username = "Username", PasswordHash = "PasswordHash" };

            return new JsonResult(new
            {
                message = "ok got",
                signUpRequest,
                StatusCode = StatusCode(200)
            });
        }




















        [HttpGet(Name = "GetUser")]
        public async Task<ActionResult<User>> Get()
        {
            var user = new User { Username = "Username", PasswordHash = "PasswordHash" };

            return new JsonResult(new
            {
                Username = user,
                PasswordHash = "PasswordHash",
                StatusCode = StatusCode(200)
            });
        }

        // [HttpGet(Name = "GetUserId")]
        [HttpGet("{id}", Name = "GetById")]
        public async Task<ActionResult<User>> GetId(int id)
        {
            var user = new User { Username = "Username", PasswordHash = "PasswordHash" };

            return new JsonResult(new
            {
                user,
                id,
                StatusCode = StatusCode(200)
            });
        }

        // [HttpPost(Name = "PostUser")]
        // public async Task<ActionResult<User>> Post(CreateRequest createRequest)
        // {
        //     var user = new User { Username = "Username", PasswordHash = "PasswordHash" };

        //     return new JsonResult(new
        //     {
        //         Username = createRequest,
        //         PasswordHash = "PasswordHash",
        //         StatusCode = StatusCode(200)
        //     });
        // }

        [HttpPut("{id}", Name = "PutUser")]
        public async Task<ActionResult<User>> Put(int id, CreateRequest createRequest)
        {
            var user = new User { Username = "Username", PasswordHash = "PasswordHash" };

            return new JsonResult(new
            {
                id,
                createRequest,
                StatusCode = StatusCode(200)
            });
        }

        [HttpPatch("{id}", Name = "PatchUser")]
        public async Task<ActionResult<User>> Patch(int id, CreateRequest createRequest)
        {
            var user = new User { Username = "Username", PasswordHash = "PasswordHash" };

            return new JsonResult(new
            {
                id,
                createRequest,
                StatusCode = StatusCode(200)
            });
        }

        [HttpDelete("{id}", Name = "DeleteUser")]
        public async Task<ActionResult<User>> Delete(int id)
        {
            var user = new User { Username = "Username", PasswordHash = "PasswordHash" };

            return new JsonResult(new
            {
                id,
                PasswordHash = "PasswordHash",
                StatusCode = StatusCode(200)
            });
        }
    }
}
