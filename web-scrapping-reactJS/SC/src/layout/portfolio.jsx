import React from "react";
import work0 from "../assets/work-0.jpg";
import work1 from "../assets/work-1.jpg";
import work2 from "../assets/work-2.jpg";
import work3 from "../assets/work-3.jpg";
import work5 from "../assets/work-5.jpg";
import work6 from "../assets/work-6.jpg";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      images: [
        {
          name: "work 0",
          image: work0,
        },
        {
          name: "work 1",
          image: work1,
        },
        {
          name: "work 2",
          image: work2,
        },
        {
          name: "work 3",
          image: work3,
        },
        {
          name: "work 5",
          image: work5,
        },
        {
          name: "work 6",
          image: work6,
        },
      ],
    },
  ];

  return (
    <section className="card-images">
      <div className="marquee-track">
        {[...Array(2)].map((_, repeatIndex) => (
          <figure key={repeatIndex}>
            {data.map((items, index) =>
              items.images.map((item, subIndex) => (
                <div key={`${repeatIndex}-${index}-${subIndex}`}>
                  <img src={item.image} alt={item.name} />
                </div>
              ))
            )}
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
