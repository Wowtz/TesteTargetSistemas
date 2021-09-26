using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace TestTarget.Entities
{
    public class Faturamento
    {
        [JsonPropertyName("dia")]
        public int Dia { get; set; }
        [JsonPropertyName("valor")]
        public double Valor { get; set; }
    }
}
