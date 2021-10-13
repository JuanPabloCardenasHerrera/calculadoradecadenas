describe("calculadora de cadenas",()=>{
    it("recibe una cadena",()=>{
        expect(calculadoraDeCadenas("Hola")).toEqual("Hola");
    });
    
});

function calculadoraDeCadenas(cadenaDeEntrada){
    return cadenaDeEntrada;
}