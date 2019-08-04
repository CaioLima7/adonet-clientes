using adonet_clientes.Models;
using DAL;
using System.Web.Mvc;

namespace adonet_clientes.Controllers
{
    public class ClienteController : Controller
    {
        public ActionResult Cadastro()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Inserir(ClienteModel model)
        {
            string query = $"insert into Clientes values ('{model.Nome}', '{model.Cpf}', '{model.Rg}', '{model.DataNascimento}', '{model.Telefone}', '{model.Logradouro}', '{model.Numero}', '{model.Complemento}', '{model.Cep}', '{model.Bairro}', '{model.Estado}', '{model.Cidade}')";
            Conexao.Inserir(query);
            return View();
        }
        public ActionResult BuscarDados(ClienteModel clienteModel)
        {
            string query = $"select top 1 * from Clientes where ID ='{clienteModel.Id}'";
            var DadosCliente = Conexao.RetornarGrid(query);

            return Json(DadosCliente);
        }
        [HttpGet]
        public ActionResult MiniGrid(ClienteModel clienteModel)
        {
            string query = $"select top 6 * from Clientes";
            var DadosCliente = Conexao.VariasLinhas(query);

            return Json(DadosCliente, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult Alterar(ClienteModel model)
        {
            string query = $"update Clientes set Nome = '{model.Nome}', cpf = '{model.Nome}', rg = '{model.Rg}', datanascimento = '{model.DataNascimento}', telefone = '{model.Telefone}', logradouro = '{model.Logradouro}', numero = '{model.Numero}', complemento = '{model.Complemento}', cep = '{model.Cep}', bairro = '{model.Bairro}', UF = '{model.Estado}', cidade = '{model.Cidade}' where ID = '{model.Id}'";

            var DadosCliente = Conexao.Inserir(query);

            return Json(DadosCliente, JsonRequestBehavior.AllowGet);
        }
        public ActionResult Deletar(ClienteModel model)
        {
            string query = $"delete from Clientes where ID = {model.Id}";
            var DadosCliente = Conexao.Inserir(query);

            return Json(DadosCliente, JsonRequestBehavior.AllowGet);
        }
    }
}