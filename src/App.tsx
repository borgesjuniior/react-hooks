import { useCallback } from 'react';
import { useMemo, useState } from 'react';

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

function App() {
  // Retorna um valor e uma função para atualizar o valor.
  const [ users, setUser ] = useState<[User]>(); 
  
  /**
  * O useMemo só recuperará o valor memoizado quando o array receber uma atualização. 
  * Esta otimização ajuda a evitar cálculos caros em cada renderização.
  * O primeiro parâmetro é a função a ser disparada e o segundo o array de depedências
  */
  const names = useMemo(() => users?.map(user => user.name).join(','), [users]);

  /**
   * Retorna um callback memoizado.
   * Recebe como argumentos, um callback e um array. 
   * useCallback retornará uma versão memoizada do callback que só muda 
   * se uma das entradas tiverem sido alteradas.
   */

  const greeting = useCallback((user: User) => alert(`Hello ${user.name}`), [])



  async function loadData() {
    const response = await fetch('https://api.github.com/users/borgesjuniior');
    const data = await response.json();

    setUser(data);
  }

  return (
    <h1>React Hooks</h1>
  )
}

export default App;
