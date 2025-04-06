import { ArrowUpRight } from "lucide-react"

export default function WorkItem({ title, categories }) {
  return (
    <div className="border-t border-amber-200 py-12 group hover:bg-amber-50 transition-colors rounded-xl px-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-3xl font-bold mb-3 group-hover:text-amber-700 transition-colors">{title}</h3>
          <p className="text-gray-600 text-lg">{categories}</p>
        </div>
        <button className="w-16 h-16 rounded-full border-2 border-amber-300 flex items-center justify-center group-hover:bg-gradient-gold group-hover:border-amber-600 group-hover:text-white transition-all duration-300">
          <ArrowUpRight size={24} />
        </button>
      </div>
    </div>
  )
}

