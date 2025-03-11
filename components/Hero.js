import Image from "next/image";
import config from "@/config";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20 hero__background">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Be Inventive – The <span className="hero-gradient bg-clip-text">Ultimate Web Solutions</span> for Scalable Growth
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          At Be Inventive, we craft cutting-edge web solutions powered by AI technologies. We specialize in creating dynamic, user-focused websites and applications that harness the latest in artificial intelligence, providing smarter, faster, and more scalable digital experiences. Let us bring your ideas to life with modern web development techniques and innovative AI-driven features.        </p>
        <button className="btn btn-primary btn-wide">
          Get {config.appName}
        </button>
      </div>
      <div className="lg:w-full">
        <Image
          src= "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
