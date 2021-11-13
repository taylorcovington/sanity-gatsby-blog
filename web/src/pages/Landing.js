import React from "react";
import LatestPosts from "../components/blog/latest-posts";
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
