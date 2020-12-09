import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, setState } from "react";

export default function Home() {
  const [sessionID, setSessionID] = useState("");

  const onSubmitAction = async () => {
    PF.initialize({
      onFinish: function (params) {
        const { sessionId } = params;
        setSessionID(sessionId);

        sendNewPaymentToAPI(sessionId);
      },
    });
  };

  const sendNewPaymentToAPI = (sessionId) => {
    const payment = {
      amount: 300,
      card: 42343242343,
      sessionId,
    };
    console.log(payment);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://checkout.paguelofacil.com/pf_collect.min.js">
          {" "}
        </script>
      </Head>
      <h1>simple</h1>
      <form className="kaxsdc" data-event="load"></form>
      <form id="myForm">
        <input type="button" value="Enviar" onClick={onSubmitAction} />
      </form>
      <p>PagueloFacil sessionID: {sessionID} </p>
    </div>
  );
}
