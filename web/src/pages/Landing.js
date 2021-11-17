import React from "react";
import LatestPosts from "../components/blog/LatestPosts";
import Hero from "../components/Hero";
import FeatureList from "../components/FeatureList";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/Contact";

const LandingPage = ({ pageData }) => {
  return (
    <>
      {pageData?.content.map((data) => (
        <Hero key={data._key} pageData={data} />
      ))}
      <LatestPosts />
      <FeatureList />
      <AboutMe />
      <ContactMe />
    </>
  );
};

export default LandingPage;
