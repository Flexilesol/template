import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import CreativeAgencyHero from "@/components/hero/CreativeAgencyHero";
import CreativeAgencyAbout from "@/components/about/CreativeAgencyAbout";
import CreativeAgencyService from "@/components/service/CreativeAgencyService";
import CreativeAgencyAward from "@/components/award/CreativeAgencyAward";
import CreativeAgencyPortfolio from "@/components/portfolio/CreativeAgencyPortfolio";
import CreativeAgencyTeam from "@/components/team/CreativeAgencyTeam";
import CreativeAgencyBrand from "@/components/brand/CreativeAgencyBrand";
import CreativeAgencyBlog from "@/components/blog/CreativeAgencyBlog";
import CreativeAgencyCTA from "@/components/cta/CreativeAgencyCTA";
import Service1 from "@/components/service/Service1";
import ServiceElementV2 from "@/components/service/ServiceElementV2";
import StartupAgencyHero from "@/components/hero/StartupAgencyHero";

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
          {/* <CreativeAgencyHero /> */}
          <StartupAgencyHero />
          <CreativeAgencyAbout />
          <CreativeAgencyService />
          <CreativeAgencyAward />
          <CreativeAgencyPortfolio />
          {/* <Service1 /> */}
          {/* <CreativeAgencyTeam /> */}
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
