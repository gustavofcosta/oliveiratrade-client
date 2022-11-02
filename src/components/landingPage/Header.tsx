import Link from "next/link";
import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
  YoutubeLogo,
} from "phosphor-react";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <header className="w-screen h-screen bg-black">
      <video
        src="/video/video.mp4"
        className="w-full h-full object-cover bg-black_500 opacity-20"
        autoPlay
        loop
        muted
      />
      <section className="absolute top-0 h-full w-screen ">
        <div className="container h-full flex justify-center items-center">
          <h1 className="text-left max-w-5xl text-white font-bold text-3xl md:text-6xl tracking-wide leading-10">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "Lorem ipsum dolor, sit amet consectetur. Contatos no mercado"
                  )
                  .pauseFor(2000)
                  .deleteChars(19)
                  .typeString("Ótimos investimentos")
                  .pauseFor(2000)
                  .deleteChars(20)
                  .typeString("Sucesso")
                  .pauseFor(2000)
                  .start();
              }}
              options={{
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        <div className="absolute -bottom-14 bg-white w-full md:w-3/4 p-2 md:p-4 space-y-4 font-bold">
          <div className="">
            FAÇA O SEU{" "}
            <Link
              className="text-primary_500 hover:text-primary_600 transition-all ease-linear duration-300"
              href=""
            >
              CADASTRO GRATUITAMENTE
            </Link>{" "}
          </div>
          <div className="flex justify-start items-center gap-3 ">
            <p className="text-base md:text-lg  flex-1">Nossas redes sociais</p>
            <div>
              <ul className="flex gap-6 px-6">
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <InstagramLogo className="h-6 w-6 text-black_500 hover:text-primary_500 transition-all ease-linear duration-300" />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <YoutubeLogo className="h-6 w-6 text-black_500 hover:text-primary_500 transition-all ease-linear duration-300" />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FacebookLogo className="h-6 w-6 text-black_500 hover:text-primary_500 transition-all ease-linear duration-300" />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <WhatsappLogo className="h-6 w-6 text-black_500 hover:text-primary_500 transition-all ease-linear duration-300" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};
export default Header;
