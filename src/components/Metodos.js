function Metodos(){
    var ejemmplo ="Soy un ejemplo";
    var estilo ={
        color: "white",
        backgroundColor:"green"
    }

    //CREAMOS UN METODO/ACCION 
    const mostrarMensaje = () =>{
        console.log("Boton pulsado");
        ejemmplo ="NUEVO VALOR!!!!";
        console.log(ejemmplo);
    }
    const dobleNumero = (numero) =>{
        var doble = numero*2;
        console.log(doble);
    }
    return(<div>
        <h1 style={estilo}>Ejemplo de metodos</h1>
        <h2 style={{color:"blue"}}>{ejemmplo}</h2>
        <button onClick={() => dobleNumero(7)}>
            Doble7
        </button>
        
        <button onClick={() => dobleNumero(17)}>
            Doble 17
        </button>

        <button onClick={ () =>mostrarMensaje()}>
            Mostrar Mensaje
        </button>
    </div>);
}

export default Metodos;