using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestTarget.Entities;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;
using System.IO;
using Microsoft.AspNetCore.Cors;

namespace TestTarget.Controllers
{
    [EnableCors("MyPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {

        private string getDadosJson()
        {
            string path = Path.Combine(Environment.CurrentDirectory, "dados.json");
            StreamReader sr = new StreamReader(path);
            string dadosJson = sr.ReadToEnd();
            return dadosJson;
        }
      


        private static List<Faturamento> faturamentos = new List<Faturamento>();

        [HttpPost]
        public int CalcResult(int indice, int soma, int k)
        {
            while (k < indice)
            {
                k = k + 1;
                soma = soma + k;
            }
            return soma;
        }


        [HttpGet("menorFat")]
        public Faturamento menorFaturamento()
        {
            try
            {
                var json = this.getDadosJson();
                List<Faturamento> fat = JsonSerializer.Deserialize<List<Faturamento>>(json);
                var menor = fat.Where(x => x.Valor > 0).Min(x => x.Valor);
                Faturamento resultado = fat.Where(p => p.Valor == menor).FirstOrDefault();
                return resultado;
            }
            catch(Exception e)
            {
                throw new InvalidOperationException(e.Message);
            }
        }

        [HttpGet("maiorFat")]
        public Faturamento maiorFaturamento()
        {
            try 
            {
                var json = this.getDadosJson();
                List<Faturamento> fat = JsonSerializer.Deserialize<List<Faturamento>>(json);
                var maior = fat.Max(x => x.Valor);
                Faturamento resultado = fat.Where(x => x.Valor == maior).FirstOrDefault();
                return resultado;
            }
            catch (Exception e)
            {
                throw new InvalidOperationException(e.Message);
            }
        }


        [HttpGet("acimaMedia")]
        public List<Faturamento> listAcimaMedia()
        {
            try
            {
                var json = this.getDadosJson();
                List<Faturamento> fat = JsonSerializer.Deserialize<List<Faturamento>>(json);
                var media = fat.Where(x => x.Valor > 0).Average(x => x.Valor);
                List<Faturamento> resultado = fat.Where(x => x.Valor > media).ToList();
                return resultado;
            }
            catch (Exception e)
            {
                throw new InvalidOperationException(e.Message);
            }
        }
    }
}
