using AutoMapper;
using Instagramar.Models;
using Instagramar.Models.Request.User;

namespace Instagramar.Services
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<SignUp, User>()
                .ForMember(user => user.HashPassword, opt => opt.MapFrom(src => src.Password));
            CreateMap<SignIn, User>();
            CreateMap<Forgot, User>();
        }
    }
}
