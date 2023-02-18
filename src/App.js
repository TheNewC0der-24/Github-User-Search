import { useState, useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
// import SearchedUser from './components/SearchedUser/SearchedUser';
// import Result from './components/Result/Result';
import Home from './components/Home/Home';
import About from './components/About/About';


import axios from 'axios';

function App() {

  // const [search, setSearch] = useState("");
  // const [searchUser, setSearchUser] = useState({});
  // const [userData, setUserData] = useState([]);

  // const [Loading, setLoading] = useState(false);

  // const [display, setDisplay] = useState("d-none");

  // const fetchUser = async () => {
  //   setLoading(true);
  //   const response = await axios.get("https://api.github.com/users");
  //   const data = response.data.map((users) => {
  //     return {
  //       id: users.id,
  //       name: users.login,
  //       avatar: users.avatar_url,
  //       url: users.html_url
  //     }
  //   });
  //   setUserData(data);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchUser();
  //   // eslint-disable-next-line
  // }, []);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   searchedUser(search);
  // }

  // const searchedUser = async (string) => {
  //   const temp = await axios.get(`https://api.github.com/users/${string}`);
  //   var data = {};
  //   if (temp.data.length > 1) {
  //     data = temp.map((user) => {
  //       return {
  //         name: user.name,
  //         url: user.html_url,
  //         avatar: user.avatar_url,
  //         followers: user.followers,
  //         repo: user.public_repos,
  //         location: user.location,
  //         bio: user.bio,
  //       }
  //     });
  //   }
  //   else {
  //     data = {
  //       name: temp.data.name,
  //       url: temp.data.html_url,
  //       avatar: temp.data.avatar_url,
  //       followers: temp.data.followers,
  //       repo: temp.data.public_repos,
  //       location: temp.data.location,
  //       bio: temp.data.bio,
  //     }
  //   }
  //   setDisplay("");
  //   setSearchUser(data);
  //   setSearch("");
  // }

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={
            <SearchBar
            // handleSearch={handleSearch}
            // search={search}
            // setSearch={setSearch}
            />
          } />
          {/* <Route path="/search/:id" element={
            <>
              <SearchedUser
                display={display}
                searchUser={searchUser}
              />

              <Result
                Loading={Loading}
                userData={userData} />
            </>
          } /> */}
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
