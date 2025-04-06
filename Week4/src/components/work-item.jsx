import { ArrowUpRight } from "lucide-react"

export default function WorkItem({ title, categories }) {
  return (
    <div className="border-t border-gray-200 py-8">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-medium mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{categories}</p>
        </div>
        <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
          <ArrowUpRight size={20} />
        </button>
      </div>
    </div>
  )
}