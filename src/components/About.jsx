import React from "react";

const about = () => {
  return (
    <div id="about" className="text-white px-4 scroll-mt-14 lg:mt-0 mt-20 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h1 className="text-sm font-bold uppercase tracking-widest lg:sr-only sm:px-6 ">
          About
        </h1>
      </div>
      <div className="lg:py-6 sm:px-7 lg:px-0 text-lg text-gray-500 lg:w-[450px] xl:w-[580px] lg:h-[500px] ">
        <h2>
          <p>
            {" "}
            I am a driven and passionate Software Engineer, Ermias Seleshi Endale, but people usually call me 'Jeremey.' With a relentless commitment to innovation and problem-solving, I have a strong foundation in full-stack development and scalable system design. I have built and contributed to impactful projects such as Mind Hub, BankDash, and Hahu Globes. My work reflects a deep understanding of modern web technologies, including React.js, Next.js, TypeScript, Three.js, and Flutter.

           {" "}
          </p>
          <br></br>

          <p>
          My technical journey extends beyond development, with over 800 algorithmic challenges solved on platforms like LeetCode and Codeforces. This experience has sharpened my problem-solving skills and enhanced my ability to tackle complex tasks with efficiency and precision. I take pride in transforming innovative ideas into seamless, scalable digital solutions.
          </p>
          <br></br>
          <p>

          Recognized for outstanding leadership and technical excellence, I thrive in dynamic, collaborative environments where complex challenges fuel creativity. 
          </p>
         
        </h2>
      </div>
    </div>
  );
};

export default about;
