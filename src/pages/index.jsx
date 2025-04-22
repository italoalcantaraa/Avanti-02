import './style.css';

import imgGitHub from '../assets/images/github.svg';
import titleGitHub from '../assets/images/titleGitHub.svg';

import imgSearch from '../assets/images/search.svg';

import Profile from '../components/profile';
import Error from '../components/error'
import { useState } from 'react';

export default function Home() {

  const URL = "https://api.github.com/users/";

  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  async function request() {
    if (username == "") return;

    const response = await fetch(URL + username);

    const data = await response.json();
    console.log(data)

    if (data.status == 404) {
      setError(true);
      setData(null)
      return;
    }

    setError(false)
    setData(data);
  }

  return (
    <div className="home">
      <div className="content">
        <div className='header'>
          <img src={imgGitHub} alt="" />
          <h1>Perfil <img src={titleGitHub} alt="" /></h1>
        </div>
        <div className='search-profile'>
          <div className='search'>
            <input onKeyDown={(e) => {
              if (e.key == 'Enter')
                request();
            }
            }
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Digite um usuário do GitHub'
              type="text" />
            <button onClick={() => request()}>
              <img src={imgSearch} alt="" />
            </button>
          </div>
          {data != null ? <Profile data={data} /> : null}
          {error ? <Error /> : null}
        </div>
      </div>
    </div>
  );
}