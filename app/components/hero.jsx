"use client"
import React from 'react';
import YouTube from "react-youtube";

const Hero = () => {
  const videoOpts = {
    width: "140%", // Make the video responsive
    height: "340vh", // Set the height to full viewport height
    playerVars: {
      autoplay: 1,
    },
  };

  // Extract video ID from the URL
  const url = "https://youtu.be/ynUFPMoU3_w?si=Fq-qWXg0mZcLAV2T";
  const videoId = new URL(url).pathname.substring(1);

  return (
    <section className="bg-white dark:bg-gray-900 h-screen">
      <div className="container mx-auto px-4 py-8 lg:py-16 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center lg:pl-8"> {/* Added padding to the left */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">Payments tool for software companies</h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-400 mb-6">From checkout to global sales tax compliance, companies around the world use our wallet to simplify their payment stack.</p>
            <div className="flex space-x-4">
              <a href="#" className="inline-flex items-center justify-center px-4 sm:px-5 py-3 text-base sm:text-lg font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
              <a href="#" className="inline-flex items-center justify-center px-4 sm:px-5 py-3 text-base sm:text-lg font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
              </a>
            </div>
          </div>
          <div className="lg:flex justify-center">
            <div className="w-full lg:w-2/3">
              <YouTube videoId={videoId} opts={videoOpts} className="rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
