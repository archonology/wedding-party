import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import styles from "../styles.module.css";

const Home = () => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <>
      <div className="home-box">
        <div
          className={styles.container}
          onClick={() => set((state) => !state)}
        >
          <a.div
            className={`${styles.c} ${styles.back}`}
            style={{ opacity: opacity.to((o) => 1 - o), transform }}
          />
          <a.div
            className={`${styles.c} ${styles.front}`}
            style={{
              opacity,
              transform,
              rotateX: "180deg",
            }}
          />
        </div>
        <div>
          {/* <a href="https://buy.stripe.com/3csbIR2S89s03oA002">
            <button id="gift-btn">Give a Gift</button>
          </a> */}
        </div>
      </div>
    </>
  );
};

export default Home;
