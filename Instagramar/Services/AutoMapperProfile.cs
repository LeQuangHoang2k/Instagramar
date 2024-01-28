//namespace Instagramar.Services;

//using AutoMapper;
//using Instagramar.Models;
//using Instagramar.Models.Request.User;
//using static System.Runtime.InteropServices.JavaScript.JSType;

//public class AutoMapperProfile : Profile
//{
//    public AutoMapperProfile()
//    {
//        // CreateRequest -> User
//        CreateMap<SignupRequestModel, User>();

//        // UpdateRequest -> User
//        //CreateMap<UpdateRequest, User>()
//        //    .ForAllMembers(x => x.Condition(
//        //        (src, dest, prop) =>
//        //        {
//        //            // ignore both null & empty string properties
//        //            if (prop == null) return false;
//        //            if (prop.GetType() == typeof(string) && string.IsNullOrEmpty((string)prop)) return false;

//        //            // ignore null role
//        //            if (x.DestinationMember.Name == "Role" && src.Role == null) return false;

//        //            return true;
//        //        }
//        //    ));
//    }
//}