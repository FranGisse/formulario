import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [nombre,setNombre]=useState("ESCRIBIR..");
  const[numberError,setNumberError]=useState(0)
  const cambiarNombre=(e)=>{
    const value=e.target.value;
    console.log(value);
    const minValue=value.length>3;
    const maxValue=value.length<10;
    const onliLet=/^[a-za]*$/g.test(value);
    console.log("min",minValue);
    console.log("maxValue",maxValue);
    console.log("onliLet", onliLet);
    if (onliLet==false){
      setNumberError(1);
    }else if(!minValue){
      setNumberError(2);
    }else{
      setNumberError(3)
    }
    if(onliLet==true && minValue && maxValue){
      setNumberError(0)
    }



    setNombre(value);
};


  const guardarClick=()=>{
    console.log("este es mi estado local:",nombre);
  }

 return (
  <div className="mi_formulario_container">
    <div className= "mi_formulario_header">
       <h1 className="mi_formulario_title">Mi formulario</h1>
       </div>
       <div className="mi_formulario_body">
        <div className="mi_formulario_form">
          <label className= "mi_formulario_label">Nombre:</label>
          <div className="mi_formulario_inpunt-icon">
          <i class="fa-solid fa-users mi_formulario_icon" aria-hidden="true"/>
           <input 
           id="nombre"
           name= "nombre" 
           value={nombre} 
           onChange={cambiarNombre}
           className="mi_formulario_input"
           ></input>
           {
            (numberError==1) && (
              <label className='mi_formulario_error'>solo incluir letras</label>
            )
           }
           {
            (numberError==2) && (
              <label className='mi_formulario_error'>yvan rosa letas minimas 3 caracters</label>
            )
           }
           {
            (numberError==3) && (
              <label className='mi_formulario_error'>maximo es 10 caracters</label>
            )
           }
          </div>
       <button disabled={numberError>0} onClick={guardarClick} className="mi_formulario_button">GUARDAR</button>
    </div>
   </div>
    <div className="mi_formulario_footer">
      <div className="mi_formulario_group">
        <span className="mi_formulario_label">
          GRACIAS POR SU VISITA!
        </span>
      </div>
      </div>
  </div>
  );
}

export default App;
