import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Flash Shopping',
      description: ' Flash Shopping is a grocery application  that allows users to search for products from a store and then organizes the products in their cart by aisle.',
      link: "https://github.com/RyanCarey18/grocery-application",
      repo: "https://vast-ocean-43647.herokuapp.com/"
    },
    {
      name: 'Tech blog',
      description: 'Tech Blog presents a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.',
      link: "https://guarded-reaches-18279.herokuapp.com/",
      repo: "https://github.com/MERYEM-AD/Tech-Blog"
    },
    {
      name: 'Food Tracker',
      description: ' Food tracker is a Web-based application that allows user to track calories on a daily basis through calculate the calories and will notify the user how many calories they need to maintain, lose, or gain weight.',
      link: "https://meryem-ad.github.io/food-tracker/",
      repo: "https://github.com/MERYEM-AD/food-tracker"
    },
    {
      name: 'Note Taker',
      description: 'Note Tacker Application can be used to write and save notes.',
      link: "https://notetaker200.herokuapp.com/",
      repo: "https://github.com/MERYEM-AD/Note-Taker"
    },
    {
      name: 'Day Planner',
      description: 'Scheduler is a calendar application that allows a user to save events for each hour of the day.',
      link: "https://meryem-ad.github.io/Day-Scheduler/Develop/index.html",
      repo: "https://github.com/MERYEM-AD/Day-Scheduler"
    },
    {
      name: 'Weather Dashboard',
      description: 'Weather Dashboard used to see the weather outlook for multiple cities.',
      link: "https://meryem-ad.github.io/Weather-Dashboard/Webpages/index.html",
      repo: "https://github.com/MERYEM-AD/Weather-Dashboard"
    },
    {
      name: 'Coding Quiz',
      description: 'Coding Quiz is a timed quiz application on JavaScript fundamentals that stores high scores.',
      link: "https://github.com/MERYEM-AD/Code-Quiz",
      repo: "https://meryem-ad.github.io/Code-Quiz/webpages/index.html"
    },
    {
      name: 'Password Generator',
      description: 'Password Generator is an application that enables employees to generate random passwords based on criteria that they’ve selected.',
      link: "https://meryem-ad.github.io/Password-Generator/Develop/index.html",
      repo: "https://github.com/MERYEM-AD/Password-Generator"
    },

  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
