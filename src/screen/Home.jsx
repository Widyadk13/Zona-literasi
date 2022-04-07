import React from "react";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import Teams from "../components/OurTeam";
import Trending from "../components/Trending";

const Home = () => {
    return (
    <>
        <LandingPage />
        <Header />
        <Trending />
        <Teams />
    </>
    )
}

export default Home;
