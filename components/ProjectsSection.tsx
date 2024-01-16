import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Teletype",
    description:
      "Teletype is a platform for publishing and monetizing various types of content, including articles, notes, videos, photos, podcasts, or songs.",
    image: "/teletype.jpg",
    github: "https://github.com/dsabirbaev/TeletypeReact.git",
    link: "https://teletype-react.vercel.app/",
  },
  {
    name: "Stork Tour",
    description: "Stork Tour is a landing page website dedicated to the vibrant world of tourism in Uzbekistan. It showcases the best tours, captivating destinations, and unique cultural experiences that this beautiful country has to offer.",
    image: "/stork.jpg",
    github: "https://github.com/dsabirbaev/Stork-tour.git",
    link: "https://stork-tour-seven.vercel.app/",
  },
  {
    name: "Miyushi Sushi",
    description:
      "Miyushi is a user-friendly website for convenient and seamless online ordering of a diverse range of sushi products, ensuring an exceptional culinary experience delivered straight to your doorstep.",
    image: "/miyushi.jpg",
    github: "https://github.com/dsabirbaev/Miyushi.git",
    link: "https://miyushi.vercel.app/",
  },
  {
    name: "Najot Ta\'lim",
    description:
      "Najot Talim is an educational website affiliated with the IT Educational Center. Here, users can discover the various courses offered and obtain information about the cente.",
    image: "/najot_talim.jpg",
    github: "https://github.com/dsabirbaev/Najot-Ta-lim.git",
    link: "https://najot-ta-lim.vercel.app/",
  },
  {
    name: "Internet do'kon Bozor.com",
    description:
      "Bozor.com is an e-commerce website, it likely facilitates online buying and selling of various products. Common features of e-commerce websites include product listings, shopping carts, secure payment options, and order tracking.",
    image: "/bozor.jpg",
    github: "https://github.com/dsabirbaev/Bozor.com.git",
    link: "https://bozor-com.vercel.app/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-10">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70 h-full object-center object-fit"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
