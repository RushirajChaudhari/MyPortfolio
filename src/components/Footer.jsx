import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://t4.ftcdn.net/jpg/03/22/27/15/360_F_322271599_m6B4XfH1Y2k72n5Kk34Q1KfX7oz3GlQs.jpg"}
          alt="Founder"
        />

        <h2>Rushiraj Chaudhari</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://youtube.com/RushirajCHaudhari" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com/hey.rushiii" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/RushirajChaudhari" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;