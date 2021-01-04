using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace bookshelf.Pages
{
    public class ReviewsModel : PageModel
    {
        private readonly ILogger<ReviewsModel> _logger;

        public ReviewsModel(ILogger<ReviewsModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}