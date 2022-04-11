import React from "react";
import Header from "../components/Home/Header";
import LandingPage from "../components/Home/LandingPage";
import Teams from "../components/Global/OurTeam";
import Trending from "../components/Home/Trending";

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
