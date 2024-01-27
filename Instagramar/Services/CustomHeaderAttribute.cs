﻿using Microsoft.AspNetCore.Mvc.Filters;

public class CustomHeaderAttribute : ResultFilterAttribute
{
    public override void OnResultExecuting(ResultExecutingContext context)
    {
        context.HttpContext.Response.Headers.Add("x-my-custom-header", "attribute response");
        base.OnResultExecuting(context);
    }
}
