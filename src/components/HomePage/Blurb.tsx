'use client';
import React from "react";
import styles from "@/components/HomePage/Blurb.module.scss";
import Image from "next/image";

const Blurb = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h4>
          A.M.K. Dev est votre solution globale en développement informatique.
          De la conception de logiciels à la création de sites web, notre équipe
          experte donne vie a vos projets digitaux.
        </h4>
        <div className={styles.imageContainer}>
          <Image src="/images/amk_logo.png" alt="AMK Logo" fill className={styles.styledImage} />
        </div>
      </div>
    </div>
  );
};

export default Blurb;
