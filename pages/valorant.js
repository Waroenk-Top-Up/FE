import { React, useState } from "react";
import Head from "next/head";
import styles from "../styles/GenshinImpact.module.css";
import Image from "next/image";
import { Form, Input } from "antd";
const data = require("../harga.json");

const handleFinish = (data) => {
  console.log(data);
};
export default function Payment() {
  const [price, setPrice] = useState(0);
  console.log(data);
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
              <section
                onClick={() => setPrice(data.currency5.price)}
                className={styles.diamond1}
              >
                <div className={styles.diamond}>
                  <Image src={"/point.svg"} fill className={styles.diamondA} />
                  <p>5 Point</p>
                </div>
              </section>

              <section
                onClick={() => setPrice(data.currency10.price)}
                className={styles.diamond1}
              >
                <div className={styles.diamond}>
                  <Image src={"/point.svg"} fill className={styles.diamondA} />
                  <p>10 Point</p>
                </div>
              </section>

              <section
                onClick={() => setPrice(data.currency20.price)}
                className={styles.diamond1}
              >
                <div className={styles.diamond}>
                  <Image src={"/point.svg"} fill className={styles.diamondA} />
                  <p>20 Point</p>
                </div>
              </section>

              <section
                onClick={() => setPrice(data.currency30.price)}
                className={styles.diamond1}
              >
                <div className={styles.diamond}>
                  <Image src={"/point.svg"} fill className={styles.diamondA} />
                  <p>30 Point</p>
                </div>
              </section>

              <section
                onClick={() => setPrice(data.currency40.price)}
                className={styles.diamond1}
              >
                <div className={styles.diamond}>
                  <Image src={"/point.svg"} fill className={styles.diamondA} />
                  <p>40 Point</p>
                </div>
              </section>

              <section
                onClick={() => setPrice(data.currency60.price)}
                className={styles.diamond1}
              >
                <div className={styles.diamond}>
                  <Image src={"/point.svg"} fill className={styles.diamondA} />
                  <p>60 Point</p>
                </div>
              </section>

              <section
                onClick={() => setPrice(data.currency120.price)}
                className={styles.diamond1}
              >
                <div className={styles.diamond}>
                  <Image src={"/point.svg"} fill className={styles.diamondA} />
                  <p>120 Point</p>
                </div>
              </section>

              <section
                onClick={() => setPrice(data.currency200.price)}
                className={styles.diamond1}
              >
                <div className={styles.diamond}>
                  <Image src={"/point.svg"} fill className={styles.diamondA} />
                  <p>200 Point</p>
                </div>
              </section>
            </main>
          </div>

          <div className={styles.coloumn3}>
            <p>Pilih metode pembayaran</p>
            <main className={styles.container4}>
              <div className={styles.bank}>
                <Image src={"/bri.svg"} fill className={styles.bri} />
                <h1>{price}</h1>
              </div>

              <div className={styles.bank}>
                <Image src={"/bca.svg"} fill className={styles.bca} />
                <h1>{price}</h1>
              </div>
            </main>
          </div>
        </div>

        <div className={styles.container2}>
          <div className={styles.game1}>
            <div className={styles.content}>
              <Image src={"/valo.svg"} fill className={styles.valo} />
            </div>
            <h1>GENSHIN IMPACT</h1>
            <p>
              Valorant adalah penembak taktis berbasis tim dan penembak orang
              pertama yang diatur dalam dekat masa depan. Pemain bermain sebagai
              salah satu dari sekumpulan agen, karakter yang dirancang
              berdasarkan beberapa negara dan budaya di seluruh dunia. Dalam
              mode permainan utama, pemain ditugaskan ke tim menyerang atau
              bertahan dengan masing-masing tim memiliki lima pemain di
              dalamnya. Senjata dan biaya kemampuan lainnya dapat dibeli
              menggunakan sistem ekonomi dalam permainan yang memberikan uang
              berdasarkan hasil putaran sebelumnya, pembunuhan apa pun yang
              menjadi tanggung jawab pemain, dan tindakan apa pun yang diambil
              dengan spike. Agen yang berbeda memungkinkan pemain menemukan
              lebih banyak cara untuk memasang Spike dan gaya pada musuh dengan
              scrappers, ahli strategi, dan pemburu dari setiap deskripsi. Saat
              ini, menawarkan 17 agen untuk dipilih. Mereka adalah Brimstone,
              Phoenix, Sage, Sova, Viper, Cypher, Reyna, Killjoy, Breach, Omen,
              Jett, Raze, Skye, Yoru, Astra, KAY/O, dan Chamber.
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
                <p>
                  <a href="lastpayment">Beli sekarang!</a>
                </p>
              </button>
            </Form.Item>
          </div>
        </div>
      </div>
    </>
  );
}



