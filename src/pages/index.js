import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import CreativeAgencyAbout from "@/components/about/CreativeAgencyAbout";
import CreativeAgencyAward from "@/components/award/CreativeAgencyAward";
import CreativeAgencyPortfolio from "@/components/portfolio/CreativeAgencyPortfolio";
import CreativeAgencyTeam from "@/components/team/CreativeAgencyTeam";
import CreativeAgencyBrand from "@/components/brand/CreativeAgencyBrand";
import CreativeAgencyBlog from "@/components/blog/CreativeAgencyBlog";
import CreativeAgencyCTA from "@/components/cta/CreativeAgencyCTA";
import ServiceElementV2 from "@/components/service/ServiceElementV2";
import StartupAgencyHero from "@/components/hero/StartupAgencyHero";
import StartupAgencyService from "@/components/service/StartupAgencyService";
import Holistic from "@/components/LandingPage/Holistic";
import StartupAgencyWorkflow from "@/components/workflow/StartupAgencyWorkflow";

const CreativeAgencyDark = () => {
  return (
    <div>
      <Head>
        <title>Creative Agency Dark</title>
        <meta name="description" content="Creative Agency Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header4" footer="footer4" defaultMode="dark">
          <StartupAgencyHero />
          <CreativeAgencyAbout />
          <StartupAgencyService />
          <CreativeAgencyTeam />
          <Holistic />
          <StartupAgencyWorkflow />
          <ServiceElementV2 />
          <CreativeAgencyBrand />
          <CreativeAgencyBlog />
          <CreativeAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default CreativeAgencyDark;
