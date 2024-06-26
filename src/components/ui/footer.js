import Image from "next/image";
import React from "react";
import logo from "../../assets/images/logo.png";
import linkedin from "../../assets/images/Vector.png";
import facebook from "../../assets/images/facebook.svg";
import viktory from "../../assets/images/viktory.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="footer  p-10 bg-[#ECF5FF]  ">
        <aside className="p-5 md:ms-[5rem]">
          <Image src={logo} width={"53"} height={"80"}></Image>
          <p>
            Design amazing digital experiences <br /> that create more happy in
            the world.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Overview</a>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Solutions</a>
          <a className="link link-hover">Tutorials</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Releases</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href="/about" className="link link-hover">
            About us
          </Link>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
          <a className="link link-hover">News</a>
          <a className="link link-hover">Media kit</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Newsletter</a>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">Help center</a>
          <a className="link link-hover">Tutorials</a>
          <a className="link link-hover">Support</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">LinkedIn</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Github</a>
          <a className="link link-hover">AngleList</a>
          <a className="link link-hover">Dribble</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms</a>
          <a className="link link-hover">Privacy</a>
          <a className="link link-hover">Cookies</a>
          <a className="link link-hover">Licenses</a>
          <a className="link link-hover">Settings</a>
          <a className="link link-hover">Contact</a>
        </nav>
      </footer>
      <hr className="mx-[8rem] " />
      <footer className="footer bg-[#ECF5FF] items-center p-4  text-neutral-content">
        <aside className="items-center grid-flow-col">
          <p className="text-black md:ms-[8rem]">
            © 2024 Heritage- Nest . All rights reserved.
          </p>
        </aside>
        <nav className="grid-flow-col me-[5rem] gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-[#0059B1]"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <Image src={linkedin} width={"24"} height={"20"}></Image>
          </a>
          <a>
            <Image src={facebook} width={"24"} height={"20"}></Image>
          </a>
          <a>
            <Image src={viktory} width={"23"} height={"20"}></Image>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
