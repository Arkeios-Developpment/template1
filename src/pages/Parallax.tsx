import React from "react";
import {ParallaxTitleComponent} from "@/components/Parallax/Title";
import {ScrollAppear} from "@/components/Parallax/ScrollAppear";

export default function Parallax() {
    return (
        <div style={{backgroundColor: "black"}}>
            <ParallaxTitleComponent backgroundImage={"/Test.png"} logoImage={"/Logo.png"} />
            <ParallaxTitleComponent backgroundImage={"/Test.png"} logoImage={"/Logo.png"} />
            <ScrollAppear direction={"left"}>
                <div style={{
                    height: "100vh",
                    width: "100vw",
                    backgroundImage: `url('https://image.service.ros-cloud.io/Ux_sW7i169SjSjS7lmIVNgu5Q8o=/3000x500/aubade/1801181/AUBADE_SLIDER_PUB_06_1B10B_AB27_NOIR_482.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: 'no-repeat',
                }}>
                </div>
            </ScrollAppear>
            <ScrollAppear direction={"right"}>
                <div style={{
                    height: "100vh",
                    width: "100vw",
                    backgroundImage: `url('https://image.service.ros-cloud.io/Ux_sW7i169SjSjS7lmIVNgu5Q8o=/3000x500/aubade/1801181/AUBADE_SLIDER_PUB_06_1B10B_AB27_NOIR_482.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: 'no-repeat',
                }}>
                </div>
            </ScrollAppear>
            <ScrollAppear direction={"top"}>
                <div style={{
                    height: "100vh",
                    width: "100vw",
                    backgroundImage: `url('https://image.service.ros-cloud.io/Ux_sW7i169SjSjS7lmIVNgu5Q8o=/3000x500/aubade/1801181/AUBADE_SLIDER_PUB_06_1B10B_AB27_NOIR_482.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: 'no-repeat',
                }}>
                </div>
            </ScrollAppear>
            <ScrollAppear direction={"bottom"}>
                <div style={{
                    height: "100vh",
                    width: "100vw",
                    backgroundImage: `url('https://image.service.ros-cloud.io/Ux_sW7i169SjSjS7lmIVNgu5Q8o=/3000x500/aubade/1801181/AUBADE_SLIDER_PUB_06_1B10B_AB27_NOIR_482.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: 'no-repeat',
                }}>
                </div>
            </ScrollAppear>
        </div>
    )
}