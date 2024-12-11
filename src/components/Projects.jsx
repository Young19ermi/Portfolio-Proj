import React from "react";
import { ArrowUpRight, Star, Download, ArrowRight } from "lucide-react";
import recipe from "../assets/images/recipe.jpg";
import portfolio from "../assets/images/portfolio.jpg";
import nasa from "../assets/images/nasa.jpg";
import fingpt from "../assets/images/fingpt.jpg";

const projects = () => {
  return (
    <div
      id="projects"
      className=" grid grid-col space-y-6 lg:space-y-9 text-white px-4 scroll-mt-16 "
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h1 className="text-sm font-bold uppercase tracking-widest lg:sr-only sm:px-6">
          Projects
        </h1>
      </div>
      <div className="grid grid-col xl:flex gap-7 lg:gap-9 lg:w-[450px] xl:w-[630px] lg:h-[290px] xl:h-[260px] py-5 lg:py-8 lg:px-2 sm:px-7 px-4 rounded-lg hover:border hover:text-[#45aea4] hover:border-slate-800/50 hover:border-t-teal-500/70 hover:bg-slate-800/50">
        <div className="w-[120px]">
          <img src={recipe} alt="" />
        </div>
        <div>
          <a
            href="https://github.com/RealEskalate/a2sv-g5-project-phase-starter-project/tree/aastu.web.g3.main/web/AASTU-web-group-3/bank-dashboard"
            className="font-bold flex gap-1 hover:text-[#45aea4]"
          >
            BankDash: Fully Integrated Banking Management System <ArrowUpRight size={17} className="mt-2" />
          </a>

          <h2 className="text-gray-500 font-semibold lg:w-[430px] py-2">
          BankDash is a fully integrated banking management system that I developed to streamline and automate various banking operations. The platform features user-friendly interfaces for account management, transaction tracking, and making banking processes more efficient. 
          </h2>
          <div className="flex flex-wrap text-[#45aea4] text-center text-sm font-bold gap-2 py-2">
            <div className="w-[70px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              React
            </div>
            <div className="w-[110px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              TailwindCSS
            </div>
            <div className="w-[80px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Next.JS
            </div>
            <div className="w-[80px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Vercel
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-col xl:flex gap-7 lg:gap-9 lg:w-[450px] xl:w-[630px] lg:h-[290px] xl:h-[260px] py-5 lg:py-8 lg:px-2 sm:px-7 px-4 rounded-lg hover:border hover:text-[#45aea4] hover:border-slate-800/50 hover:border-t-teal-500/70 hover:bg-slate-800/50">
        <div className="w-[120px] ">
          <img src={portfolio} alt="" />
        </div>
        <div>
          <a
            href="https://hahu-globes.vercel.app/"
            className="font-bold flex gap-1 hover:text-[#45aea4]"
          >
            Hahu-Globes <ArrowUpRight size={17} className="mt-2" />
          </a>
          <h2 className="text-gray-500 font-semibold lg:w-[430px] py-2">
          Built an immersive 3D planet visualizer using Three.js, enabling students to explore the solar system with interactive models and real-time planet facts. Boosted user engagement by 30% through dynamic animations and interactive educational content.
          </h2>

          <div className="flex flex-wrap text-[#45aea4] text-center text-sm font-bold gap-2 py-4">
            <div className="w-[70px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              React
            </div>
            <div className="w-[110px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              TailwindCSS
            </div>
            <div className="w-[80px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Vercel
            </div>
            <div className="w-[80px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Three.JS
            </div>
            <div className="w-[80px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              GSAP
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-col xl:flex gap-7 lg:gap-9 lg:w-[450px] xl:w-[630px] lg:h-[290px] xl:h-[260px] py-5 lg:py-8 lg:px-2 sm:px-7 px-4 rounded-lg hover:border hover:text-[#45aea4] hover:border-slate-800/50 hover:border-t-teal-500/70 hover:bg-slate-800/50">
        <div className="w-[120px]">
          <img src={nasa} alt="" />
        </div>
        <div>
          <a
            href="https://www.grabtern.in/"
            className="font-bold flex gap-1 hover:text-[#45aea4]"
          >
            GrabTern: Mentorship Platform{" "}
            <ArrowUpRight size={17} className="mt-2" />
          </a>
          <h2 className="text-gray-500 font-semibold lg:w-[430px] py-2">
          GrabTern is a platform that connects students with mentors from leading internships and hackathons. It provides one-on-one mentorship, career guidance, and access to global internship opportunities.
          </h2>

          <div className="flex flex-wrap text-[#45aea4] text-center text-sm font-bold gap-2 py-4">
          <div className="w-[70px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              React
            </div>
            <div className="w-[70px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Next.JS
            </div>
            <div className="w-[110px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              TailwindCSS
            </div>
            <div className="w-[80px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Vercel
            </div>
          </div>
        </div>
      </div>
      
      {/* <h2 className="font-bold flex gap-1 hover:text-[#45aea4] h-[70px]">
        View Full Project Archive
        <ArrowRight size={17} className="mt-2" />
      </h2> */}
    </div>
  );
};

export default projects;
