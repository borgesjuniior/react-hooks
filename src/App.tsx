import { useMemo, useState } from 'react';

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

function App() {
  // Retorna um valor e uma função para atualizar o valor.
  const [ user, setUser ] = useState<[User]>(); 
  
  /**
  * O useMemo só recuperará o valor memoizado quando o array receber uma atualização. 
  * Esta otimização ajuda a evitar cálculos caros em cada renderização.
  * O primeiro parâmetro é a função a ser disparada e o segundo o array de depedências
  */
  const names = useMemo(() => user?.map(user => user.name).join(','), [user]);



  async function loadData() {
    const response = await fetch('https://api.github.com/users/borgesjuniior');
    const data = await response.json();

    setUser(data);
  }

  return (  
    <>
    <button onClick={loadData} type="submit">Carregar dados</button>
    <li>{user?.login}</li>
    {user && <img src={user?.avatar_url} alt="Foto" />}
    
    </>
  );
}

export default App;
