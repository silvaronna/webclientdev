import { ArrowUpRight } from "lucide-react"

export default function WorkItem({ title, categories, index }) {
  return (
    <div
      className="border-t border-amber-900/30 py-12 group hover:bg-[#252525] transition-colors rounded-xl px-6 animate-on-scroll"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-3xl font-bold mb-3 group-hover:text-amber-400 transition-colors text-gray-200">
            {title}
          </h3>
          <p className="text-gray-400 text-lg">{categories}</p>
        </div>
        <button className="w-16 h-16 rounded-full border-2 border-amber-700/50 flex items-center justify-center group-hover:bg-gradient-gold group-hover:border-amber-600 group-hover:text-white transition-all duration-300 text-amber-500">
          <ArrowUpRight size={24} />
        </button>
      </div>
    </div>
  )
}

