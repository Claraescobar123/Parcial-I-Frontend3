import { useState } from "react";

function App(){

  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");

  const errorMessage = validate(email, password);
  
  return (
    <div className="App">
      <h1>Ingresa tu nombre y contraseña para poder ingresar</h1>
      <form>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <p>{errorMessage}</p>
        <button tyoe='submit'>Iniciar Sesión</button>
      </form>
    </div>
  );
}

const validate = (nombre, password) => {
  if(nombre.lenght < 3 ) 
  return 'debe contener al menos 3 caracteres'
  if(password < 6)
  return 'debe contener al menos 6 caracteres'
}

export default App;
