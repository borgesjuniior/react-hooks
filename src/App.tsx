import { useState } from 'react';

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

function App() {
  const [ user, setUser ] = useState<User>();

  async function loadData() {
    const response = await fetch('https://api.github.com/users/borgesjuniior');
    const data = await response.json();
    console.log(data);

    setUser(data);
  }

  return (  
    <>
    <button onClick={loadData} type="submit">Carregar dados</button>
    </>
  );
}

export default App;
