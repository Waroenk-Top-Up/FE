import { React } from "react";
import Head from "next/head";
import styles from "../styles/Lastpayment.module.css";
import Image from "next/image";

export default function lastpayment() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image src={"/verified.svg"} width={100} height={100} />
          </div>
          <div className={styles.succes}>
            <p>Berhasil</p>
          </div>
          <div className={styles.title}>
            <p>Detail Pembelian</p>
          </div>
          <div className={styles.token}>
            <div className={styles.id}>
              <p>ID Game</p>
              <div className={styles.proof1}></div>
            </div>
            <div className={styles.id}>
              <p>ID Game</p>
              <div className={styles.proof2}></div>
            </div>
            <div className={styles.id}>
              <p>ID Game</p>
              <div className={styles.proof3}></div>
            </div>
            <div className={styles.id}>
              <p>ID Game</p>
              <div className={styles.proof4}></div>
            </div>
            <button className={styles.back} type="submit">
                <a href="home">Oke, back to Home</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
