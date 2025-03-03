import './style.css'
import Trash from "../../assets/trash.jpg"

function Home() {

  const users = [
    {
      id: '1234',
      name: 'Victor Watanabe',
      age: '21 Anos',
      email: 'Exemple@gmail.com'
    },
    {
      id: '12345',
      name: 'Lavínia Watanabe',
      age: '19 Anos',
      email: 'Exemple02@gmail.com'
    }
  ]

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de usuários</h1>
        <input placeholder='Nome' name='name' type='text' />
        <input placeholder='Idade' name='age' type='number' />
        <input placeholder='E-mail' name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Home
