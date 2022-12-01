import { React } from "react";
import Head from "next/head";
import styles from "../styles/Payment.module.css";
import Image from "next/image";
import { Form, Input } from "antd";

export default function Payment() {
  return (
    <>
      {/* head */}
      <Head>
        <title> Waroenk Top Up</title>
        <link rel="icon" href="/logo.svg"></link>
      </Head>

      {/* navbar */}
      <nav className={styles.navbar}>
        <div className={styles.image}>
          <Image src={"/logo.svg"} width={130} height={130} />
        </div>
        <div>
          <a href="home">HOME</a>
        </div>
      </nav>

      {/* payment  */}
      <div className={styles.wrapper}>
        <div className={styles.container1}>
          <div className={styles.coloumn1}>
            <p>Masukkan ID Game Anda</p>
            <div className={styles.id}>
              <Form.Item
                name="id"
                size="70px"
                rules={[
                  {
                    required: true,
                    message: "Username is not filled yet!",
                  },
                  { min: 8 },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className={styles.note1}>
              <p>*ID yang tertera pada profil game Anda</p>
            </div>
          </div>

          <div className={styles.coloumn2}>
            <p>Pilih diamond yang Anda inginkan</p>
          </div>

          <div className={styles.coloumn3}>
            <p>Pilih metode pembayaran</p>
          </div>
        </div>

        <div className={styles.container2}>
          <div className={styles.game1}>
            <div className={styles.content}>
              <Image src={"/ml.svg"} fill className={styles.ml} />
            </div>
            <h1>MOBILE LEGENDS</h1>
            <p>
              Mobile Legends adalah permainan MOBA yang dirancang untuk ponsel.
              Kedua tim masing-masing berisi lima orang berjuang untuk mencapai
              dan menghancurkan markas musuh sambil mempertahankan markas mereka
              sendiri untuk mengendalikan tiga jalur, yang dikenal sebagai jalur
              "atas", "tengah" dan "bawah", yang menghubung ke setiap markas.
              <br></br>
              <br></br>
              Pada dasarnya, karakter dalam Mobile Legends dibedakan menjadi 6
              peran (role) di antaranya: marksman, fighter, tank, mage, assassin
              dan support. Setiap peran mempunyai spesialisasi dan kemampuan
              yang unik. Total jumlah hero per November 2021, baik pada server
              orisinal (original server) maupun lanjutan (advance server) adalah
              107 hero.
            </p>
          </div>
          <div>
            <Form.Item>
              <button className={styles.button} type="submit">
                <Image
                  src={"/cart.svg"}
                  width={60}
                  height={60}
                  className={styles.cart}
                />
                <p>Beli sekarang!</p>
              </button>
            </Form.Item>
          </div>
        </div>
      </div>
    </>
  );
}
