import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import CreativeAgencyTeam from "@/components/team/CreativeAgencyTeam";
import CreativeAgencyBrand from "@/components/brand/CreativeAgencyBrand";
import CreativeAgencyCTA from "@/components/cta/CreativeAgencyCTA";
import ServiceElementV2 from "@/components/service/ServiceElementV2";
import StartupAgencyHero from "@/components/hero/StartupAgencyHero";
import StartupAgencyService from "@/components/service/StartupAgencyService";
import Holistic from "@/components/LandingPage/Holistic";
import StartupAgencyWorkflow from "@/components/workflow/StartupAgencyWorkflow";
import DesignStudioProtfolio from "@/components/portfolio/DesignStudioProtfolio";
import DigitalAgencyRoll from "@/components/roll/DigitalAgencyRoll";
import Faq1 from "@/components/faq/Faq1";

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
          <StartupAgencyService />
          <CreativeAgencyTeam />
          <Holistic />
          <StartupAgencyWorkflow />
          <DesignStudioProtfolio />

          <DigitalAgencyRoll />
          <CreativeAgencyBrand />
          <CreativeAgencyCTA />

          <ServiceElementV2 />
          <Faq1 />
        </RootLayout>
      </main>
    </div>
  );
};

export default CreativeAgencyDark;
