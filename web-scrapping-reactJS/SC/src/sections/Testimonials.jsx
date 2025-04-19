const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: "/src/assets/test-1.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta, sint architecto maiores autem quis. Quae dolore, fugit numquam, maiores quis animi saepe exercitationem, impedit rerum necessitatibus repellat voluptatem itaque.",
      name: "Ayush Raj",
      position: "VP of Marketing @ Webflow",
    },
    {
      id: 2,
      image: "/src/assets/test-2.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta, sint architecto maiores autem quis. Quae dolore, fugit numquam, maiores quis animi saepe exercitationem, impedit rerum necessitatibus repellat voluptatem itaque.",
      name: "Alex Cattoni",
      position: "Founder @ CopyPossy",
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="text-3xl md:text-4xl font-bold">Testimonials</h2>
          </div>

          <div className="md:col-span-8">
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-6">{testimonial.text}</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
