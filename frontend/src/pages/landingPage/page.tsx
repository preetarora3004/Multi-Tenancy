import { AppBar } from "../../components/pageComponent/appBar/appBar";
import { Banner } from "../../components/pageComponent/appBar/banner";
import { HeroSection } from "../../components/pageComponent/appBar/hero";

export const LandingPage = () => {
    return (
        <div>
            <div className="fixed bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60
                transition-all backdrop-blur-0 top-0 z-50">
                <AppBar />
            </div>

            <div>
                <HeroSection />
            </div>

            <div>
                <Banner />
            </div>
        </div>
    );
};
