import React from "react";
import LatestPosts from "../components/blog/LatestPosts";
import Hero from "../components/Hero";
import FeatureList from "../components/FeatureList";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/Contact";

const LandingPage = ({ pageData }) => {
  console.log("page data: ", pageData.content);
  return (
    <>
      {pageData ? (
        pageData?.content.map((data) => {
          if (data.__typename === "SanityHero") {
            return <Hero key={data._key} pageData={data} />;
          }
        })
      ) : (
        <></>
      )}
      <LatestPosts />
      <FeatureList />
      {pageData ? (
        pageData?.content.map((data) => {
          if (data.__typename === "SanityAbout") {
            return <AboutMe key={data._key} pageData={data} />;
          }
        })
      ) : (
        <></>
      )}
      <ContactMe />
    </>
  );
};

export default LandingPage;
