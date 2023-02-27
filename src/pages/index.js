import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Andrzej Dawiec Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="About Andrzej Dawiec" />
        <InterestsSection sectionId="details" heading="Details" />
        <ProjectsSection sectionId="work" heading="Work & Projects" />
        <ContactSection sectionId="github" heading="Connect with Me!" />
      </Page>
    </>
  );
}
