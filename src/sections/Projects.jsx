import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="pt-32">
      <div>
        <h1 className="text-sectionfcolor font-bold text-center text-7xl sm:text-8xl md:text-[120px] px-2.5">
          PROJECTS
        </h1>
      </div>
      <div className="px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-5 border rounded-lg border-black  shadow-[0_-5px_24px_rgba(22,25,58,1)]  px-5 py-8">
          {/* bsenik */}
          <div className="hover:shadow-lg/40 shadow-amber-50 rounded-md">
            <img
              className="rounded-md transition-transform duration-500 hover:scale-105"
              src="./images/besnik.png"
              alt="besnik"
            />
          </div>
          {/* todolist */}
          <div className="hover:shadow-lg/40 shadow-amber-50 rounded-md">
            <img
              className="rounded-md transition-transform duration-500 hover:scale-105"
              src="./images/todolist.png"
              alt="todo list"
            />
          </div>
          {/* Linkedhub */}
          <div className="hover:shadow-lg/40 shadow-amber-50 rounded-md">
            <img
              className="rounded-md transition-transform duration-500 hover:scale-105"
              src="./images/linkedhub.png"
              alt="linked hub"
            />
          </div>
          {/* deupload */}
          <div className="hover:shadow-lg/40 shadow-amber-50 rounded-md">
            <img
              className="rounded-md transition-transform duration-500 hover:scale-105"
              src="./images/deupload.png"
              alt="deupload"
            />
          </div>
          {/* moviemaniax */}
          <div className="lg:col-span-2 lg:row-span-2 hover:shadow-lg/40 shadow-amber-50 rounded-md">
            <img
              className="rounded-md transition-transform duration-500 hover:scale-105"
              src="./images/moviemaniax.png"
              alt="moviemaniax"
            />
          </div>
          {/* biontix */}
          <div className="hover:shadow-lg/40 shadow-amber-50 rounded-md">
            <img
              className="rounded-md transition-transform duration-500 hover:scale-105"
              src="./images/biontix.png"
              alt="biontix"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
