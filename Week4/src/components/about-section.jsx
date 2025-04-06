export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-amber-800">About</h2>
        </div>
        <div className="md:col-span-2">
          <p className="text-gray-700 text-xl leading-relaxed mb-8">
            Hello I'm Azka, a College student as well as IT staff, who has a deep interest in network and server
            engineering. I am ready to work and be a source of joy and inspiration in every task I take on.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-amber-200">
              <h3 className="text-2xl font-semibold mb-4 text-amber-700">Cloud Infrastructure</h3>
              <p className="text-gray-700">
                Experienced in deploying and managing cloud solutions on AWS, Biznet Gio Cloud
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-amber-200">
              <h3 className="text-2xl font-semibold mb-4 text-amber-700">Network Engineering</h3>
              <p className="text-gray-700">
                Skilled in designing and implementing secure and efficient network architectures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

