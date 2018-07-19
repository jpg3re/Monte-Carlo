using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MonteCarlo.Models.MathThings;
using MonteCarlo.Models.MathThings.PDFs;

namespace MonteCarlo
{
    public class Startup
    {
        public static Ziggurat normalZigg;
        public static Ziggurat laplaceZigg;
        public static Ziggurat tZigg;

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            normalZigg = new Ziggurat(PDFType.Normal);
            laplaceZigg = new Ziggurat(PDFType.Laplace);
            tZigg = new Ziggurat(PDFType.T);
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigins",
                    builder =>
                    {
                        builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                    });
            });
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("AllowAllOrigins");
            app.UseMvc();
        }
    }
}
