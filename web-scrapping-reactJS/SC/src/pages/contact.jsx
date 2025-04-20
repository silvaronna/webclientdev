import React from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Profile from "../layout/profile";
import Form from "../layout/form";

const Contact = () => {
  return (
    <main>
      <Nav />
      <section className="page-about">
        <Profile />
        <Form />
      </section>
      <Footer isShow={true} />
    </main>
  );
};

export default Contact;
