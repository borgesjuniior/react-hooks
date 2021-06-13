import { useCallback } from 'react';
import { useRef } from 'react';
import { useMemo, useState } from 'react';
import { v4 as uuid } from 'uuid';

interface User {
  id: string;
  name: string;
  // login: string;
  // avatar_url: string;
}

function App() {
  // Retorna um valor e uma função para atualizar o valor.
  const [ users, setUser ] = useState<User[]>([
    {
      id: uuid(),
      name: 'Júnior'
    },
    {
      id: uuid(),
      name: 'Austin'
    }
  ]);   
  
  /**
  * O useMemo só recuperará o valor memoizado quando o array receber uma atualização. 
  * Esta otimização ajuda a evitar cálculos caros em cada renderização.
  * O primeiro parâmetro é a função a ser disparada e o segundo o array de depedências
  */
  const names = useMemo(() => users?.map(user => user.name).join(', '), [users]);

  /**
   * Retorna um callback memoizado.
   * Recebe como argumentos, um callback e um array. 
   * useCallback retornará uma versão memoizada do callback que só muda 
   * se uma das entradas tiverem sido alteradas.
   */

  const greeting = useCallback((user: User) => alert(`Hello ${user.name}`), []);

  /**
   * useRef faz referência para algum elemento da DOM, no qual a propriedade .current 
   * é inicializada para o argumento passado (initialValue).
   */

  const inputRef = useRef<HTMLInputElement>(null);
  inputRef.current?.focus();



  async function loadData() {
    // const response = await fetch('https://api.github.com/users/borgesjuniior');
    // const data = await response.json();

    const newUser = {
      id: uuid(),
      name: 'Justin'
    }

    setUser([...users, newUser]);


  }

  return (
    <>
    <h1>React Hooks</h1>
    <button type="submit" onClick={loadData}>click me</button>
    {users.map(user => <li key={user.id}>{user.name}</li>)}

    <form action="">
      <input type="text" ref={inputRef} />
    </form>
    </>
  )
}

export default App;
