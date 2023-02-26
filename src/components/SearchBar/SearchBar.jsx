import React, { useState, useEffect } from 'react';

import {
    Container,
    Box,
    TextField,
    InputAdornment,
    CssBaseline,
    Typography,
    Button,
} from '@mui/material';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { FaSearch } from 'react-icons/fa';

import axios from 'axios';
import SearchedUser from '../SearchedUser/SearchedUser';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const SearchBar = () => {

    const [limit, setLimit] = useState([]);

    const [search, setSearch] = useState("");
    const [searchUser, setSearchUser] = useState([]);

    const [userRepo, setUserRepo] = useState([]);

    const [userFollowers, setUserFollowers] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get("https://api.github.com/rate_limit")
            .then((res) => {
                setLimit(res.data.resources.core);
            })
            .catch((err) => {
                console.log(err);
            })
        // eslint-disable-next-line
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        setLoading(false);
        axios.get(`https://api.github.com/users/${search}`)
            .then((res) => {
                setSearchUser(res.data);
                setLoading(true);
            })
            .catch((err) => {
                console.log(err);
            });

        axios.get(`https://api.github.com/users/${search}/repos`)
            .then((res) => {
                setUserRepo(res.data);
                setLoading(true);
            })
            .catch((err) => {
                console.log(err);
            });

        axios.get(`https://api.github.com/users/${search}/followers`)
            .then((res) => {
                setUserFollowers(res.data);
                setLoading(true);
            })
            .catch((err) => {
                console.log(err);
            });

        setSearch("");
    }



    return (
        <React.Fragment>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Typography sx={{ mt: 2 }} variant='h6'>Requests: {limit.remaining}/{limit.limit}</Typography>
                    <Typography mb={2} variant='h6'>Reset Time: {new Date(limit.reset * 1000).toLocaleTimeString()}</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <TextField
                            fullWidth
                            type="text"
                            placeholder="Search for a user, e.g. TheNewC0der-24"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#dee2e6",
                                    },
                                },
                                "& .MuiFormLabel-root.Mui-focused": {
                                    color: "#dee2e6",
                                },
                            }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><FaSearch /></InputAdornment>,
                            }}
                        />
                        <Button
                            variant="contained"
                            sx={{ height: 55, backgroundColor: "#dee2e6", color: "#161b22", "&:hover": { backgroundColor: "#dee2e6" } }}
                            onClick={handleSearch}
                            disabled={search === ""}
                        >
                            Search
                        </Button>
                    </Box>
                </Container>
            </ThemeProvider>

            {
                loading && (
                    <SearchedUser
                        searchUser={searchUser}
                        userRepo={userRepo}
                        userFollowers={userFollowers}
                    />
                )
            }
        </React.Fragment>
    )
}

export default SearchBar;