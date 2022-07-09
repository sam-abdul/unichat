import React, { Component, useEffect } from "react";
import Layout from "../components/Layout";
import Chat from "../components/Chat";
import styles from "../styles/Styles.module.css";
import Link from "next/link";

class IndexPage extends Component {
  state = { user: null, show: true, closeB: false, closeF: false };

  handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      const user = evt.target.value;
      const show = false;
      this.setState({ user, show });
    }
  };

  componentDidMount() {
    const query = window.matchMedia("(max-width: 768px)");

    let stop = setInterval(() => {
      if (query.matches && !this.state.show) {
        this.setState({ closeB: true });
      } else {
        this.setState({ closeB: false });
      }
    }, 100);
  }

  componentDidUpdate() {
    const query = window.matchMedia("(max-width: 768px)");

    let stop = setInterval(() => {
      if (query.matches && !this.state.show) {
        this.setState({ closeB: true });
      } else {
        this.setState({ closeB: false });
      }
    }, 100);
  }

  handleClose = () => {
    this.setState({ closeF: true });
  };

  render() {
    const { user } = this.state;
    const { closeB } = this.state;
    const { show } = this.state;
    const { closeF } = this.state;

    const nameInputStyles = {
      background: "transparent",
      color: "white",
      border: 0,
      borderBottom: "1px solid #666",
      borderRadius: 0,
      fontSize: "3rem",
      fontWeight: 500,
      boxShadow: "none !important",
    };

    return (
      <>
        <title>{"UniChat"}</title>

        <Layout pageTitle="Realtime Chat">
          <main className={`container-fluid h-100 bg-dark `}>
            <div
              className={`row w-100 h-100 ${styles.position} ${
                closeF && styles.absolute
              }`}
            >
              <section
                className={`d-flex flex-row flex-wrap align-items-center align-content-center px-5 ${
                  styles.sec
                } ${closeF && styles.translateS}`}
              >
                <div className="px-5 mx-5">
                  <Link href="/home">
                    <div className={styles.layout}>Go to home</div>
                  </Link>
                  <span
                    className={`d-block w-200 text-light ${styles.userG}`}
                    style={{ marginTop: -70 }}
                  >
                    {user ? (
                      <span>
                        <span className={styles.hello}>Hello!</span> {user} tap
                        the Start button to begin
                        {closeB && (
                          <button
                            className={styles.closeBtn}
                            onClick={this.handleClose}
                          >
                            Start
                          </button>
                        )}
                      </span>
                    ) : (
                      <div className={styles.layoutName}>What is your name</div>
                    )}
                  </span>

                  {!user && (
                    <input
                      type="text"
                      className="form-control mt-3 px-3 py-2"
                      onKeyUp={this.handleKeyUp}
                      autoComplete="off"
                      style={nameInputStyles}
                    />
                  )}
                </div>
              </section>

              <section
                className={`position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0 ${
                  styles.main_chat
                } ${closeF && styles.opacity}`}
              >
                {user && <Chat activeUser={user} />}
              </section>
            </div>
          </main>
        </Layout>
      </>
    );
  }
}

export default () => <IndexPage />;
