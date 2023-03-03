import React from "react";


export default function ProjectCards({ projectData }) {
  // for bluring image on hover - false by default = do not blur

  return (
    /* className refactor:  add classes to tailwind config with assigned name in first argument */
    <div className="container flex flex-wrap justify-center mx-auto">
      {projectData.map((obj) => {
        return (
          <div key={obj.id} className="card m-4 text-center relative w-[40%]">
            {/* name of project */}
            {/* <h2 className="font-medium text-xl">{obj.projectName}</h2> */}
            {/* button link to repo */}
            <img
              className="block w-full h-full rounded-xl object-cover object-center ease-in-out duration-300 bg-stone-600"
              style={{}}
              src={obj.projectImg}
              alt="Link to project repository"
            />
            {/* container for displaying content after hover */}
            <div className="absolute inset-0 flex flex-col justify-center  rounded-xl ease-in-out duration-300 bg-black bg-opacity-90 opacity-0 hover:opacity-100">
              <button type="click" className="hover:text-gray-300 my-1 text-2xl ">
                <a href={obj.githubLink}>{obj.projectName}</a>
              </button>
              <p className='my-1'>{obj.description}</p>
              <button type="click" className="hover:text-gray-300 my-5">
                <a href={obj.githubLink}>
                  <p>
                    <span className="text-green-500 font-semibold">{`${String.fromCodePoint(0x3c)}`}</span>
                    ViewCode
                    <span className="text-green-500 font-semibold">{`/${String.fromCodePoint(0x3e)}`}</span>
                  </p>
                </a>
              </button>
              <p className="mb-1">Tech Used:</p>
              <p className="my-1">{obj.tech}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
