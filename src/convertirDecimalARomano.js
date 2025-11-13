
function convertirDecimalARomano(numeroD,path){
    const mapValores = [
        { simbolo: "M",  valor: 1000 },
        { simbolo: "CM", valor: 900 },
        { simbolo: "D",  valor: 500 },
        { simbolo: "CD", valor: 400 },
        { simbolo: "C",  valor: 100 },
        { simbolo: "XC", valor: 90 }, 
        { simbolo: "L",  valor: 50 },
        { simbolo: "XL", valor: 40 }, 
        { simbolo: "X",  valor: 10 },
        { simbolo: "IX", valor: 9 },  
        { simbolo: "V",  valor: 5 },
        { simbolo: "IV", valor: 4 },  
        { simbolo: "I",  valor: 1 }
      ];
      let resultado = "";
      let i = 0;
      for (const { simbolo, valor } of mapValores) {
        while (numeroD >= valor) {
            resultado += simbolo;
            numeroD -= valor;
        }
      }

      return resultado
}

export default convertirDecimalARomano