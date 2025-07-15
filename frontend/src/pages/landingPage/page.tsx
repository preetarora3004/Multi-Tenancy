import { AppBar } from "../../components/pageComponent/appBar/appBar";
import { Banner } from "../../components/pageComponent/appBar/banner";
import { Feature } from "../../components/pageComponent/appBar/feature";
import { HeroSection } from "../../components/pageComponent/appBar/hero";
import { Offering } from "../../components/pageComponent/appBar/offering";

export const LandingPage = () => {
    return (
        <div>
            <div className="fixed bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/100
                transition-all backdrop-blur-0 top-0 z-50">
                <AppBar />
            </div>

            <div className="mt-38 pb-3">
                <HeroSection />
            </div>

            <div>
                <Banner />
            </div>

            <div className="pt-20">
                <Offering/>
            </div>

            <div>
                <Feature/>
            </div>

        </div>
    );
};
