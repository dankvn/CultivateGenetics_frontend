import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-black pt-14 pb-3">
      <Wrapper className="flex justify-center">
        <div className="image-container mt-10">
          <Image
            src="/satanic.png"
            alt="Descripción de la imagen"
            width={150} // Ajusta el ancho deseado de la imagen
            height={100} // Ajusta la altura deseada de la imagen
          />
        </div>
      </Wrapper>

      <Wrapper className="flex justify-center flex-col md:flex-row gap-[50px] md:gap-0">
        {/* SOCIAL ICONS */}
        <div className="flex gap-4">
          <div
            onClick={() => window.open("https://facebook.com", "_blank")}
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaFacebookF size={20} />
          </div>
          <Link
            href="https://twitter.com"
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaTwitter size={20} />
          </Link>
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
            <FaYoutube size={20} />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
            <FaInstagram size={20} />
          </div>
        </div>
        <div>
          
        </div>
        
      </Wrapper>

      {/* COPYRIGHT */}
      <Wrapper className="flex justify-center mt-5">
        <div className="text-[12px] text-black hover:text-green-500 cursor-pointer">
          © 2023 CultivarteGenetics, Inc. All Rights Reserved
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;

