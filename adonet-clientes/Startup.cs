using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(adonet_clientes.Startup))]
namespace adonet_clientes
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
