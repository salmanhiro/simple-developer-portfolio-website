import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-4xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-2xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}. Currently working on{" "}
            <a
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any sort help / enquiry, shoot a{" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  mail
                </a>{" "}
                and I'll get back.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For partnership, IT consultancy and opportunities, 
                check my{" "}
                <a
                  href={userData.linkedin}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  LinkedIn
                </a>{" "}
                and hopefully I'd love to work with you.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">

              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Twitter
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </div>
                </a>
              </div>

            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}
            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50 mt-4">
              Skill and Domain Expertise
            </h1>
            <div className="flex flex-row flex-wrap mt-8 mb-8 text-lg text-gray-500 mt-4 dark:text-gray-300">
            Computer Vision, Machine Learning, Deep Learning, Natural Language Processing, Data Science, Project Management, Data Engineering, Data Security, DevOps, API, Backend Software Development, Augmented Reality,
            Research, Statistics, Mathematical Modelling, Mathematical Simulation and Computation. 
            </div>
            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                className="h-10 w-10 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                className="h-10 w-10 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/667px-Matlab_Logo.png"
                className="h-10 w-10 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png"
                className="h-10 w-10 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/640px-PyTorch_logo_icon.svg.png"
                className="h-10 w-10 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png"
                className="h-10 w-10 mx-4 my-4"
              />
              <img
                src="https://www.pngfind.com/pngs/m/597-5975946_microsoft-azure-logo-svg-hd-png-download.png"
                className="h-10 w-10 mx-4 my-4"
              />
              <img
                src="https://www.ucloudstore.com/wp-content/uploads/2021/09/gcp-02.png"
                className="h-10 w-10 mx-4 my-4"
              />
              <img
                src="https://devclass.com/wp-content/uploads/2018/10/MLflow-logo.png"
                className="h-10 w-10 mx-4 my-4"
              />
              <img
                src="https://repository-images.githubusercontent.com/154739597/90607180-e100-11e9-8642-c65819bec604"
                className="h-10 w-10 mx-4 my-4"
              />
                            <img
                src="https://e7.pngegg.com/pngimages/989/396/png-clipart-apache-spark-hadoop-yarn-big-data-apache-hadoop-apache-http-server-data-text-orange.png"
                className="h-10 w-10 mx-4 my-4"
              />
                <img
                src="https://www.saashub.com/images/app/service_logos/93/65e31dd03ee5/large.png?1571723209"
                className="h-10 w-10 mx-4 my-4"
              />
              <img
                src="https://seeklogo.com/images/F/fastapi-logo-541BAA112F-seeklogo.com.png"
                className="h-10 w-10 mx-4 my-4"
              />
              <img
                src="https://cwiki.apache.org/confluence/download/attachments/145723561/airflow_transparent.png?api=v2"
                className="h-10 w-10 mx-4 my-4"
              />
              <img
                src="https://beam.apache.org/images/logos/full-color/name-right/beam-logo-full-color-name-right-1000.png"
                className="h-10 w-10 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/2109px-Kubernetes_logo_without_workmark.svg.png"
                className="h-10 w-10 mx-4 my-4"
              />
              <img
                src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png"
                className="h-10 w-10 mx-4 my-4"
              />
              <img
                src="https://wandb.ai/logo.png"
                className="h-10 w-10 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png"
                className="h-10 w-10 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                className="h-10 w-10 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png"
                className="h-10 w-10 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
                className="h-10 w-10 mx-4 my-4"
              />
              <img
                src="https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png"
                className="h-10 w-10 mx-4 my-4"
              />
              <img
                src="https://www.clipartmax.com/png/full/307-3077761_other-technologies-postgresql-logo-png.png"
                className="h-10 w-10 mx-4 my-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
