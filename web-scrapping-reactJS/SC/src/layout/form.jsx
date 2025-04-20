import React from "react";
import Button from "../components/button";

const Form = () => {
  const data = [
    {
      id: 1,
      title: "name",
      placeholder: "James Robert",
      type: "text",
    },
    {
      id: 2,
      title: "email",
      placeholder: "ayush.barnwal@brightscout.com",
      type: "email",
    },
    {
      id: 3,
      title: "subject",
      placeholder: "For web design work Enquire",
      type: "subject",
    },
    {
      id: 4,
      title: "Message",
      placeholder: "Type your Message",
      type: "textarea",
    },
  ];

  return (
    <form className="card-form">
      <h1>Let’s build something cool together</h1>

      {data.map((items, index) => {
        return items.type === "textarea" ? (
          <div key={index} className="input">
            <label htmlFor={items.id}>{items.title}</label>
            <textarea
              type={items.type}
              placeholder={items.placeholder}
              id={items.id}
            />
          </div>
        ) : (
          <div key={index} className="input">
            <label htmlFor={items.id}>{items.title}</label>
            <input
              type={items.type}
              placeholder={items.placeholder}
              id={items.id}
            />
          </div>
        );
      })}
      <Button type="dark" title="Submit" />
    </form>
  );
};

export default Form;
