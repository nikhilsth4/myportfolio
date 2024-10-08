import React from "react";
import Link from "./Link";
import HeaderTitle from "./HeaderTitle";
import { socialLinks } from "@/data/data";

const Contact = () => {
  const { email, linkedin } = socialLinks;
  return (
    <div className="padding-container" id="contact">
      <div className="mb-16">
        <HeaderTitle word1="Contact" word2="me" />
        <p className="mt-8">
          Are you interested in collaborating or want to connect or chat?
          Contact me via
          <Link href={linkedin} className="inline-block mx-1">
            LinkedIn
          </Link>
          or
          <Link href={`mailto:${email}`} className="inline-block mx-1">
            Email me
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Contact;
