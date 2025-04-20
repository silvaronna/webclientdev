import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Experience = () => {
  const data = [
    {
      id: 1,
      title: "Decodable.co",
      path: "",
      skill: ["Brand Design", "Webflow Development", "Web Design"],
    },
    {
      id: 2,
      title: "Gofirefly.io",
      path: "",
      skill: ["Brand Design", "Webflow Development", "Web Design"],
    },
    {
      id: 3,
      title: "Blinkops.com",
      path: "",
      skill: ["Brand Design", "Webflow Development", "Web Design"],
    },
    {
      id: 4,
      title: "Withkanvas.com",
      path: "",
      skill: ["Brand Design", "Webflow Development", "Web Design"],
    },
  ];

  return (
    <section className="card-contet" id="work">
      <div className="row-content-left">
        <h1 className="title">Recent Work</h1>
      </div>
      <div className="row-content-right experience">
        {data.map((items, index) => {
          return (
            <figure key={index} className="card-experience">
              <section>
                <h1>{items.title}</h1>
                <div>
                  {items.skill.map((item, idx) => (
                    <p key={idx}>
                      {item}
                      <span>-</span>
                    </p>
                  ))}
                </div>
              </section>
              <section>
                <button>
                  <MdArrowOutward />
                </button>
              </section>
            </figure>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
