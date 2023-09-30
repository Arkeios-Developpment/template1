import React from "react";
import Banner from "@/components/HomePage/Banner";
import Blurb from "@/components/HomePage/Blurb";
import Services from "@/components/HomePage/Services";

const HomePage = () => {
    return (
        <div>
            <div style={{position: "relative", backgroundColor: "lightcoral"}}>
                <Banner/>
                <Blurb/>
            </div>
            <Services/>
        </div>
    );
};

export default HomePage;
