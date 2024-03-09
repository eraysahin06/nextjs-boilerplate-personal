import React from "react";
import Image from "next/image";
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <Image src="https://images.pexels.com/photos/6957078/pexels-photo-6957078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="about image" fill />
    </div>
  );
};

export default AboutPage;
