using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;


namespace TestTarget.Services
{
   
    public class GlobalServices
    {
        public string getDadosJson()
        {
            string path = Path.Combine(Environment.CurrentDirectory, @"Data\", "dados.json");
            StreamReader sr = new StreamReader(path);
            string dadosJson = sr.ReadToEnd();
            return dadosJson;
        }

    }
}
