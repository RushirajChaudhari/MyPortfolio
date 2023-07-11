import React, { useState } from "react";
import vg from "../assets/vg.png";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const [ans , setAns] = useState("");

  const hName = (event) => {setName(event.target.value); }
  const hEmail = (event) => {setEmail(event.target.value); }
  const hQuery = (event) => {setQuery(event.target.value); }

  const save = (event) => {
    event.preventDefault();
    let data = {"from_name":name , "from_email":email , "message":query};
   
    // emailjs.send("service_id" , "tempelate_id" , data , "public key")
    emailjs.send("service_94r711w" , "template_gwuo9a4" , data , "5LAwxmb1gBENt_GFo")

    .then(res => setAns("we will get back to you in 2 hrs "))
    .catch(err => console.log(err));

}

  const animations = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };
  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={save} {...animations.form}>
          <h2>Contact Me</h2>
          <input
            type="text"
            value={name}
            onChange={hName} 
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={hEmail} 
          />
          <input
            type="text"
            placeholder="Your Message"
            required
            value={query}
            onChange={hQuery} 
          />

          <motion.button
            disabled={disableBtn}
            className={disableBtn ? "disableBtn" : ""}
            {...animations.button}
            type="submit"
          >
            Send
          </motion.button>
        </motion.form>
      </section>
      <h1>{ans}</h1>
      {/* <aside>
        <img src={vg} alt="Graphics" />
      </aside> */}
    </div>
  );
};

export default Contact;