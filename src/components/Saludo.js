function Saludo(props){
    var dato = "Mañana sera miercoles...";
    const {nombre,edad}=props;
    return (
    <div>
            <h1>Mi primer martes React, {nombre}, con edad {edad}</h1>
            <h2>{dato}</h2>
    </div>);
}

export default Saludo;