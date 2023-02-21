import React, { useState, useEffect } from 'react';

import CountUp from 'react-countup';

import {
    Container,
    Box,
    Grid,
    Card,
    CardContent,
    CardActions,
    Typography,
    Link,
    Avatar,
    Divider,
} from '@mui/material';

import { FaUserFriends, FaLink, FaTwitter, FaRegClock } from 'react-icons/fa';
import { GoRepo, GoGist } from 'react-icons/go';
import { IoLocationSharp } from 'react-icons/io5';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';

import axios from 'axios';

const Home = () => {

    const textColor = "#C9D1D9";

    const [profile, setProfile] = useState([]);
    const [createdDate, setCreatedDate] = useState("");
    const [updatedDate, setUpdatedDate] = useState("");

    const token = "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";

    localStorage.setItem("token", token);

    const headers = {
        "Accept": "application/vnd.github.v3+json",
        'Authorization': `token ${localStorage.getItem("token")}`
    }

    const getProfile = async () => {
        const response = await axios.get('https://api.github.com/users/TheNewC0der-24', { headers: headers });
        setProfile(response.data);

        const cDate = new Date(response.data.created_at);
        const formattedCDate = `${cDate.getDate()}/${cDate.getMonth() + 1}/${cDate.getFullYear()}`;
        setCreatedDate(formattedCDate);

        const uDate = new Date(response.data.updated_at);
        const formattedUDate = `${uDate.getDate()}/${uDate.getMonth() + 1}/${uDate.getFullYear()}`;
        setUpdatedDate(formattedUDate);
    }

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Card sx={{ bgcolor: "#161b22" }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                                    <img width="50%" style={{ borderRadius: "50%", border: "2px solid #8b949e" }} src={profile.avatar_url} alt={profile.name} />
                                </Box>

                                <Typography variant='h5' color={textColor} sx={{ mt: 2, fontWeight: "bold" }}>{profile.name}</Typography>
                                <Typography variant='h6'><Link color="#8b949e" href={profile.html_url} target="_blank" underline="hover">{profile.login}</Link></Typography>

                                <Box mt={2} sx={{ display: "flex", alignItems: "center" }}>
                                    <Avatar sx={{ backgroundColor: "#0d1117" }}>
                                        <FaUserFriends />
                                    </Avatar>
                                    <Typography variant='subtitle1' color={textColor} sx={{ ml: 1 }}>Followers: <CountUp end={profile.followers} /></Typography>
                                    <Typography variant='subtitle1' color={textColor} sx={{ ml: 1, fontWeight: "bold" }}>.</Typography>
                                    <Typography variant='subtitle1' color={textColor} sx={{ ml: 1 }}>Following: <CountUp end={profile.following} /></Typography>
                                </Box>

                                <Box mt={2} sx={{ display: "flex", alignItems: "center" }}>
                                    <Avatar sx={{ backgroundColor: "#0d1117" }}>
                                        <GoRepo />
                                    </Avatar>
                                    <Typography variant='subtitle1' color={textColor} sx={{ ml: 1 }}>Public Repos: <CountUp end={profile.public_repos} /></Typography>
                                </Box>
                                <Box mt={2} sx={{ display: "flex", alignItems: "center" }}>
                                    <Avatar sx={{ backgroundColor: "#0d1117" }}>
                                        <GoGist />
                                    </Avatar>
                                    <Typography variant='subtitle1' color={textColor} sx={{ ml: 1 }}>Public Gists: <CountUp end={profile.public_gists} /></Typography>
                                </Box>
                            </CardContent>
                            <CardActions>
                                <Link
                                    href={profile.html_url}
                                    target="_blank"
                                    sx={{
                                        bgcolor: "#0d1117", color: textColor, borderRadius: "5px", padding: "5px 10px", textDecoration: "none", width: "100%", textAlign: "center", display: "block",
                                        '&:hover': { color: textColor }
                                    }}
                                >Go to Profile</Link>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <Card sx={{ bgcolor: "#161b22" }}>
                            <CardContent>
                                <Typography variant='h5' color={textColor} sx={{ fontWeight: "bold" }}>Bio</Typography>
                                <Divider sx={{ mt: 1, mb: 1, backgroundColor: "#8b949e" }} />
                                <Typography variant='subtitle1' color="#8b949e">{profile.bio}</Typography>

                                <Box p={2} mt={2} sx={{ bgcolor: "#0d1117", display: "flex", alignItems: "center" }}>
                                    <Avatar sx={{ backgroundColor: "#161b22" }}>
                                        <IoLocationSharp />
                                    </Avatar>
                                    <Typography variant='subtitle1' color={textColor} sx={{ ml: 1 }}>{profile.location}</Typography>
                                </Box>
                                <Box p={2} mt={2} sx={{ bgcolor: "#0d1117", display: "flex", alignItems: "center" }}>
                                    <Avatar sx={{ backgroundColor: "#161b22" }}>
                                        <HiOutlineBuildingOffice2 />
                                    </Avatar>
                                    <Typography variant='subtitle1' color={textColor} sx={{ ml: 1 }}>{profile.company}</Typography>
                                </Box>
                                <Box p={2} mt={2} sx={{ bgcolor: "#0d1117", display: "flex", alignItems: "center" }}>
                                    <Avatar sx={{ backgroundColor: "#161b22" }}>
                                        <FaLink />
                                    </Avatar>
                                    <Typography variant='subtitle1' sx={{ ml: 1 }}>
                                        <Link underline='hover' href={profile.blog} target="_blank" color={textColor}>{profile.blog}</Link>
                                    </Typography>
                                </Box>
                                <Box p={2} mt={2} sx={{ bgcolor: "#0d1117", display: "flex", alignItems: "center" }}>
                                    <Avatar sx={{ backgroundColor: "#161b22" }}>
                                        <FaTwitter />
                                    </Avatar>
                                    <Typography variant='subtitle1' color={textColor} sx={{ ml: 1 }}>{profile.twitter_username}</Typography>
                                </Box>
                                <Grid container spacing={2} mt={2}>
                                    <Grid item xs={12} sm={12} md={6} lg={6}>
                                        <Box p={2} sx={{ bgcolor: "#dee2e6", display: "flex", alignItems: "center" }}>
                                            <FaRegClock fontSize={20} />
                                            <Typography variant='subtitle1' color="#161b22" sx={{ ml: 1 }}>Created at: {createdDate}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6}>
                                        <Box p={2} sx={{ bgcolor: "#dee2e6", display: "flex", alignItems: "center" }}>
                                            <FaRegClock fontSize={20} />
                                            <Typography variant='subtitle1' color="#161b22" sx={{ ml: 1 }}>Updated at: {updatedDate}</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Home;