import styles from "../styles/Login.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Form, Input } from "antd";
import Footer from "../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";

const handleFinish = (data) => {
  window.open('/home','_SELF')
};
// REGISTER PAGE
const Register = function ({ goToHome }) {
  return (
    <div className={styles.formreg}>
      <Form onFinish={handleFinish} autoComplete="off">
        {/* EMAIL */}
        <Form.Item
          name="email"
          size="70px"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
            { type: "email" },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        {/* PASSWORD */}
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
            { min: 8 },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        {/* USERNAME */}
        <Form.Item
          name="username"
          size="70px"
          rules={[
            {
              required: true,
              message: "Username is not filled yet!",
            },
          ]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item>
          <button
            className={styles.masukreg}
            type="submit"
          >
            DAFTAR
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

// LOGIN PAGE
const Login = function ({ goToHome }) {
  return (
    <div className={styles.formlog}>
      <Form onFinish={handleFinish}>
        {/* EMAIL */}
        <Form.Item
          name="email"
          size="70px"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
            { type: "email" },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        {/* PASSWORD */}
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
            { min: 8 },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <button
            className={styles.masuklog}
            type="submit"
          >
            MASUK
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default function LoginPage() {
  const [onLogin, setLogin] = useState();
  return (
    <>
      {/* TITLE */}
      <Head>
        <title> Waroenk Top Up</title>
        <link rel="icon" href="/logo.svg"></link>
      </Head>

      {/* LOGO */}
      <div className={styles.wrapper}>
        <div className={styles["container-bg"]}>
          <div className={styles.image}>
            <Image src={"/logo.svg"} width={620} height={300} />
          </div>
          <footer
            style={{ position: "absolute", bottom: "0", fontSize: "15px" }}
          >
            <Footer />
          </footer>
        </div>

        {/* WELCOME */}
        <main className={styles.container}>
          <div className={styles.welcome}>
            <h1>WELCOME GAMERS</h1>
          </div>

          {/* MOVE BUTTON */}
          <span className={styles.movebtn}>
            <div
              id={styles.left}
              className={onLogin ? styles["focus"] : styles["not"]}
            >
              <a>
                <h2
                  onClick={() => setLogin(true)}
                  className={onLogin ? styles["focus"] : styles["not"]}
                >
                  LOGIN
                </h2>
              </a>
            </div>
            <div
              id={styles.right}
              className={onLogin ? styles["not"] : styles["focus"]}
            >
              <a>
                <h2
                  onClick={() => setLogin(false)}
                  className={onLogin ? styles["not"] : styles["focus"]}
                >
                  REGISTER
                </h2>
              </a>
            </div>
          </span>
          {onLogin ? (
            <Login />
          ) : (
            <Register />
          )}

          {/* QUICK ACCESS REG */}
          {onLogin ? (
            <div className={styles.linkregister}>
              <p>
                Belum punya akun?{" "}
                <a
                  onClick={() => setLogin(false)}
                  className={onLogin ? styles["not"] : styles["focus"]}
                >
                  Daftar sekarang!
                </a>
              </p>
            </div>
          ) : null}
        </main>
      </div>
    </>
  );
}
