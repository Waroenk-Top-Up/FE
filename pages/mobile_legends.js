import { React } from "react";
import Head from "next/head";
import styles from "../styles/MobileLegends.module.css";
import Image from "next/image";
import { Form, Input } from "antd";
const handleFinish = (data) => {
  console.log(data);
};
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
              <Form onFinish={handleFinish} autoComplete="off">
                <Form.Item
                  name="id"
                  size="70px"
                  rules={[
                    {
                      required: true,
                      message: "ID is not filled yet!",
                    },
                    { min: 8 },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item>
                  <button className={styles.buttonid} type="submit">
                    OKE
                  </button>
                </Form.Item>
              </Form>
            </div>
            <div className={styles.note1}>
              <p>*ID yang tertera pada profil game Anda</p>
            </div>
          </div>

          <div className={styles.coloumn2}>
            <p>Pilih sesuai yang Anda inginkan</p>
            <main className={styles.container3}>
              <div className={styles.diamond1}>
                <div className={styles.diamond}>
                  <Image
                    src={"/diamond.svg"}
                    fill
                    className={styles.diamondA}
                  />
                  <p>5 Diamond</p>
                </div>
              </div>

              <div className={styles.diamond1}>
                <div className={styles.diamond}>
                  <Image
                    src={"/diamond.svg"}
                    fill
                    className={styles.diamondA}
                  />
                  <p>10 Diamond</p>
                </div>
              </div>

              <div className={styles.diamond1}>
                <div className={styles.diamond}>
                  <Image
                    src={"/diamond.svg"}
                    fill
                    className={styles.diamondA}
                  />
                  <p>20 Diamond</p>
                </div>
              </div>

              <div className={styles.diamond1}>
                <div className={styles.diamond}>
                  <Image
                    src={"/diamond.svg"}
                    fill
                    className={styles.diamondA}
                  />
                  <p>30 Diamond</p>
                </div>
              </div>

              <div className={styles.diamond1}>
                <div className={styles.diamond}>
                  <Image
                    src={"/diamond.svg"}
                    fill
                    className={styles.diamondA}
                  />
                  <p>40 Diamond</p>
                </div>
              </div>

              <div className={styles.diamond1}>
                <div className={styles.diamond}>
                  <Image
                    src={"/diamond.svg"}
                    fill
                    className={styles.diamondA}
                  />
                  <p>60 Diamond</p>
                </div>
              </div>

              <div className={styles.diamond1}>
                <div className={styles.diamond}>
                  <Image
                    src={"/diamond.svg"}
                    fill
                    className={styles.diamondA}
                  />
                  <p>120 Diamond</p>
                </div>
              </div>

              <div className={styles.diamond1}>
                <div className={styles.diamond}>
                  <Image
                    src={"/diamond.svg"}
                    fill
                    className={styles.diamondA}
                  />
                  <p>200 Diamond</p>
                </div>
              </div>
            </main>
          </div>

          <div className={styles.coloumn3}>
            <p>Pilih metode pembayaran</p>
            <main className={styles.container4}>
              <div className={styles.bank}>
                <Image src={"/bri.svg"} fill className={styles.bri} />
              </div>

              <div className={styles.bank}>
                <Image src={"/bca.svg"} fill className={styles.bva} />
              </div>
            </main>
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
              "atas", "tengah" dan "bawah", yang menghubung ke setiap markas. Di
              masing-masing tim, ada lima pemain yang mengendalikan avatar
              sendiri-sendiri, yang dikenal sebagai "hero", dari perangkat
              mereka sendiri. Karakter lemah yang dikendalikan komputer disebut
              "minion", yang bersarang di markas tim lalu menyebar ke tiga jalur
              dan melawan menara serta lawan yang menghadang. Mengumpulkan EXP
              berguna untuk menaikkan level hero saat permainan berlangsung.
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
                <p><a href="lastpayment">Beli sekarang!</a></p>
              </button>
            </Form.Item>
          </div>
        </div>
      </div>
    </>
  );
}
