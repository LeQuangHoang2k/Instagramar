namespace Instagramar
{
    public class User
    {
        // public DateOnly Date { get; set; }

        // public int TemperatureC { get; set; }

        // public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        // public string? Summary { get; set; }

        public string Username { get; set; }
        public string PasswordHash { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        
        
        public string Token { get; set; }
        public string FreshToken { get; set; }
    }
}
