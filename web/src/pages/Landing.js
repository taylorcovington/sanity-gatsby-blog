import React from "react";
import LatestPosts from "../components/blog/LatestPosts";
import Hero from "../components/Hero";

const LandingPage = ({ pageData }) => {
  return (
    <>
      {pageData.content.map((data) => (
        <Hero key={data._key} pageData={data} />
      ))}
      <LatestPosts />
    </>
  );
};

export default LandingPage;
