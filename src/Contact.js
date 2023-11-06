import React, { useState } from "react";
import Header from "./ASSETS/Header";
import "./Contact.css";
import {db,firebase} from './Firebase'

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contacts").add({
      name: name,
      email: email,
      phone: phone,
      message: message,
    })
    .then(()=>{
      alert("Contact information has been submitted successfully");
    })
    .catch((error)=>{
      alert(error.message);
    })
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <>
      <section className="Contact">
        <Header />
        <div className="container">
          {/* <form className="form" onSubmit={handleSubmit}> */}
          <form className="form" onSubmit={handleSubmit}>
            <div className="c1">
              <label className="label" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
            </div>
            <br />
            <div className="c1">
              <label className="label" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="name"
                required
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
              />
              <br />
            </div>
            <br />

            <div className="c1">
              <label className="label" htmlFor="phone">
                Phone:
              </label>
              <input
                type="number"
                id="name"
                required
                 value={phone}
                 onChange={(e) => setPhone(e.target.value)}
              />
              <br />
            </div>
            <br />

            <div className="c1">
              <label className="label" htmlFor="message">
                Message:
              </label>
              <textarea
                required
                className="message"
                rows={5}
                cols={30}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <br />
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
