import { useState, useEffect } from 'react';

import './App.css';

// Components
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import SearchedUser from './components/SearchedUser/SearchedUser';
import Result from './components/Result/Result';

import axios from 'axios';

function App() {

  const [search, setSearch] = useState("");
  const [searchUser, setSearchUser] = useState({});
  const [userData, setUserData] = useState([]);

  const [Loading, setLoading] = useState(false);

  const [display, setDisplay] = useState("d-none");

  const fetchUser = async () => {
    setLoading(true);
    const response = await axios.get("https://api.github.com/users");
    const data = response.data.map((users) => {
      return {
        id: users.id,
        name: users.login,
        avatar: users.avatar_url,
        url: users.html_url
      }
    });
    setUserData(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    searchedUser(search);
  }

  const searchedUser = async (string) => {
    const temp = await axios.get(`https://api.github.com/users/${string}`);
    var data = {};
    if (temp.data.length > 1) {
      data = temp.map((user) => {
        return {
          name: user.name,
          avatar: user.avatar_url,
          followers: user.followers,
          repo: user.public_repos,
          location: user.location,
          bio: user.bio,
        }
      });
    }
    else {
      data = {
        name: temp.data.name,
        avatar: temp.data.avatar_url,
        followers: temp.data.followers,
        repo: temp.data.public_repos,
        location: temp.data.location,
        bio: temp.data.bio,
      }
    }
    setDisplay("");
    setSearchUser(data);
    setSearch("");
  }

  return (
    <>
      <Header />
      <SearchBar
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
      <hr />
      <SearchedUser
        display={display}
        searchUser={searchUser}
      />

      <Result
        Loading={Loading}
        userData={userData} />
    </>
  );
}

export default App;
