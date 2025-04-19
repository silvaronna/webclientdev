import test1 from "../assets/test-1.png"
import test2 from "../assets/test-2.png"

const Testimonial = () => {
  const data = [
    {
      id: 1,
      image: test1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta, sint architecto maiores autem quis. Quae dolore, fugit numquam, maiores quis animi saepe exercitationem, impedit rerum necessitatibus repellat voluptatem itaque.",
      name: "Ayush Raj",
      job: "VP of Marketing @ Webflow",
    },
    {
      id: 2,
      image: test2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta, sint architecto maiores autem quis. Quae dolore, fugit numquam, maiores quis animi saepe exercitationem, impedit rerum necessitatibus repellat voluptatem itaque.",
      name: "Alex Cattoni",
      job: "Founder @ CopyPossy",
    },
  ]

  return (
    <section className="card-contet">
      <div className="row-content-left">
        <div className="row-content-left">
          <h1 className="title">Testimonial</h1>
        </div>
      </div>
      <div className="row-content-right testimonial">
        {data.map((item, index) => {
          return (
            <figure key={index} className="card-testimonial">
              <p className="description">{item.desc}</p>
              <section>
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>{item.job}</p>
                </div>
              </section>
            </figure>
          )
        })}
      </div>
    </section>
  )
}

export default Testimonial
