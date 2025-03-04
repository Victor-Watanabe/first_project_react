import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';  
import './style.css';
import Trash from "../../assets/trash.jpg";

function Home() {
  const [users, setUsers] = useState([]);

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  function PressButton() {
    const newUser = {
      id: uuidv4(), 
      name: inputName.current.value,
      age: inputAge.current.value + " Anos",
      email: inputEmail.current.value,
    };

    setUsers([...users, newUser]);

    inputName.current.value = "";
    inputAge.current.value = "";
    inputEmail.current.value = "";
  }

  return (
    <div className="container">
      <form>
        <h1>Cadastro de usuários</h1>
        <input placeholder="Nome" name="name" type="text" ref={inputName} />
        <input placeholder="Idade" name="age" type="number" ref={inputAge} />
        <input placeholder="E-mail" name="email" type="email" ref={inputEmail} />
        <button type="button" onClick={PressButton}>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} alt="Excluir usuário" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;