//using Instagramar.Models;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Instagramar.Models.Users;

namespace Instagramar.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    // [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetUser")]
        public async Task<ActionResult<Users>> Get()
        {
            var user = new Users { Username = "Username", PasswordHash = "PasswordHash" };

            return new JsonResult(new
            {
                Username = user,
                PasswordHash = "PasswordHash",
                StatusCode = StatusCode(200)
            });
        }

        // [HttpGet(Name = "GetUserId")]
        [HttpGet("{id}", Name = "GetById")]
        public async Task<ActionResult<Users>> GetId(int id)
        {
            var user = new Users { Username = "Username", PasswordHash = "PasswordHash" };

            return new JsonResult(new
            {
                user,
                id,
                StatusCode = StatusCode(200)
            });
        }

        [HttpPost(Name = "PostUser")]
        public async Task<ActionResult<Users>> Post(CreateRequest createRequest)
        {
            var user = new Users { Username = "Username", PasswordHash = "PasswordHash" };

            return new JsonResult(new
            {
                Username = createRequest,
                PasswordHash = "PasswordHash",
                StatusCode = StatusCode(200)
            });
        }

        [HttpPut("{id}", Name = "PutUser")]
        public async Task<ActionResult<Users>> Put(int id, CreateRequest createRequest)
        {
            var user = new Users { Username = "Username", PasswordHash = "PasswordHash" };

            return new JsonResult(new
            {
                id,
                createRequest,
                StatusCode = StatusCode(200)
            });
        }

        [HttpPatch("{id}", Name = "PatchUser")]
        public async Task<ActionResult<Users>> Patch(int id, CreateRequest createRequest)
        {
            var user = new Users { Username = "Username", PasswordHash = "PasswordHash" };

            return new JsonResult(new
            {
                id,
                createRequest,
                StatusCode = StatusCode(200)
            });
        }

        [HttpDelete("{id}", Name = "DeleteUser")]
        public async Task<ActionResult<Users>> Delete(int id)
        {
            var user = new Users { Username = "Username", PasswordHash = "PasswordHash" };

            return new JsonResult(new
            {
                id,
                PasswordHash = "PasswordHash",
                StatusCode = StatusCode(200)
            });
        }
    }
}
