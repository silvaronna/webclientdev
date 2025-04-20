import Button from "../components/button"

const Form = () => {
  const formFields = [
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
  ]

  return (
    <form className="card-form">
      <h1>Let's build something cool together</h1>

      {formFields.map((field) => (
        <div key={field.id} className="input">
          <label htmlFor={field.id}>{field.title}</label>
          {field.type === "textarea" ? (
            <textarea placeholder={field.placeholder} id={field.id} />
          ) : (
            <input type={field.type} placeholder={field.placeholder} id={field.id} />
          )}
        </div>
      ))}
      <Button type="dark" title="Submit" />
    </form>
  )
}

export default Form
