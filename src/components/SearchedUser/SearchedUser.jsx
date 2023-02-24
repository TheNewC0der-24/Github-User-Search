import React from 'react';
import styles from './SearchUser.module.css';

import CountUp from 'react-countup';

import {
    Avatar,
    Box,
    Container,
    Typography,
    Link,
    Grid,
    Divider
} from '@mui/material';

import { FaStar, FaLink, FaExternalLinkAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { BiGitRepoForked } from 'react-icons/bi';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';

const SearchedUser = ({ searchUser, userRepo, userFollowers }) => {

    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 5 }}>
                <Box className={styles.box}>
                    <img className={styles.img} src={searchUser.avatar_url} alt={searchUser.name} />
                    <Box sx={{ display: 'flex', flexDirection: "column", gap: "0.5rem" }}>
                        <Box sx={{ display: 'flex', flexWrap: "wrap", flexDirection: "row", alignItems: "center", gap: "0.5rem" }}>
                            <Typography variant='h5' sx={{ fontWeight: "bold" }}>{searchUser.name}</Typography>
                            <Link href={searchUser.html_url} underline="hover" target="_blank">@{searchUser.login}</Link>
                        </Box>
                        <Typography variant='subtitle1'>{searchUser.bio}</Typography>

                        <Box sx={{ mt: 3, mb: 3 }}>
                            <Typography variant='subtitle1' sx={{ display: 'flex', alignItems: "center", gap: "0.5rem" }}><HiOutlineBuildingOffice2 />{searchUser.company ? searchUser.company : "NOT FOUND"}</Typography>
                            <Typography variant='subtitle1' sx={{ display: 'flex', alignItems: "center", gap: "0.5rem" }}><IoLocationSharp />{searchUser.location ? searchUser.location : "NOT FOUND"}</Typography>
                            <Link underline='hover' href={searchUser.blog} target="_blank" sx={{ display: 'flex', alignItems: "center", gap: "0.5rem" }}><FaLink style={{ color: "white" }} />{searchUser.blog ? searchUser.blog : "NOT FOUND"}</Link>
                        </Box>

                        <Box sx={{ display: "flex", gap: "2rem" }}>
                            <Box sx={{ display: 'flex', flexDirection: "column" }}>
                                <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}><CountUp end={searchUser.followers} /></Typography>
                                <Typography variant='h6' sx={{ fontWeight: "bold" }}>Followers</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: "column" }}>
                                <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}><CountUp end={searchUser.following} /></Typography>
                                <Typography variant='h6' sx={{ fontWeight: "bold" }}>Following</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: "column" }}>
                                <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}><CountUp end={searchUser.public_repos} /></Typography>
                                <Typography variant='h6' sx={{ fontWeight: "bold" }}>Repos</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Grid container spacing={5} sx={{ mt: 3, mb: 3 }}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography mb={3} variant='h5'>Repositories</Typography>
                        {userRepo.slice(0, 8).map((repo) => (
                            <Box key={repo.id} sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                                <Box>
                                    <Link href={repo.html_url} target="_blank" underline='hover' sx={{ fontSize: "20px" }}>{repo.name}</Link>
                                    <Typography variant='subtitle1'>{repo.description}</Typography>
                                </Box>
                                <Box mt={5} sx={{ display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem" }}>
                                        <Typography variant='subtitle1'><FaStar /> {repo.stargazers_count}</Typography>
                                        <Typography variant='subtitle1'><BiGitRepoForked /> {repo.fork === true ? "1" : "0"}</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Link href={repo.homepage} sx={{ color: "#fff" }}>{repo.homepage ? <FaExternalLinkAlt /> : ""}</Link>
                                    </Box>
                                </Box>
                                <Divider sx={{ backgroundColor: "#dee2e6", mt: 2, mb: 2 }} />
                            </Box>
                        ))}
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography mb={3} variant='h5'>Followers</Typography>
                        {userFollowers.slice(0, 8).map((follower) => (
                            <Box key={follower.id}>
                                <Box sx={{ display: "flex", gap: "1rem" }}>
                                    <Avatar
                                        sx={{ width: 100, height: 100 }}
                                        src={follower.avatar_url}
                                        alt={follower.login}
                                        variant="rounded"
                                    />
                                    <Link href={follower.html_url} underline="none" sx={{ fontSize: "20px", color: "#fff", '&:hover': { color: "#1976d2" } }} target="_blank">{follower.login}</Link>
                                </Box>
                                <Divider sx={{ backgroundColor: "#dee2e6", mt: 2, mb: 2 }} />
                            </Box>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default SearchedUser; 