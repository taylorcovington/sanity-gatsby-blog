import React from "react";
import LatestPosts from "../components/blog/LatestPosts";
import Hero from "../components/Hero";

const LandingPage = ({ pageData }) => {
  return (
    <>
      <Hero pageData={pageData} />
      <LatestPosts />
    </>
  );
};

export default LandingPage;
