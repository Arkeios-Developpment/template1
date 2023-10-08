import React from "react";
import DAElement from "@/components/DesktopApp/DAElement";

export default function DesktopApp() {

    return (
        <div
            style={{
                backgroundColor: "white",
                background: "linear-gradient(150deg, rgba(3,0,51,1) 0%, rgba(0,75,170,1) 25%, rgba(93,0,215,1) 50%, rgba(164,44,255,1) 75%, rgba(223,74,74,1) 100%)",
                width: "100vw",
                height: "500vh",
                overflow: "hidden",
                position: "relative",
                top: "20px",
            }}
        >
            <DAElement
                title={"Applications de bureau"}
                description={"Découvrez nos compétences"}
                image={"/6495315.png"}
                leftRight={false}
            />
            <DAElement
                title={"Cloud"}
                description={"Utilisez le cloud pour interconnecté tous vos appareils"}
                image={"/2111.i101.015.F.m004.c9.digital transformation digitization isometric.png"}
                leftRight={true}
            />
            <DAElement
                title={"Personnalisation"}
                description={"Faites nous parts de toute vos envies et créez les applications de vos rêves"}
                image={"/2175134.png"}
                leftRight={false}
            />
            <DAElement
                title={"Compatibilité"}
                description={"Utilisez une seule application pour tous vos appareils"}
                image={"/2108.w013.n001.517B.p30.517.png"}
                leftRight={true}
            />
            <DAElement
                title={"Méthode agile"}
                description={"Faites nous des retours réguliers pour que vos applications soit parfaites"}
                image={"/1.png"}
                leftRight={false}
            />
        </div>
    )
}