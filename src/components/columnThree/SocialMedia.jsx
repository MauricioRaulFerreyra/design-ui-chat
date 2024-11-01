import { RiInstagramLine,RiTwitterLine, RiTwitchLine, RiFacebookLine } from "react-icons/ri"

const SocialMedia =()=> {

  return (
    <section className="hidden lg:block bg-[#22222A] col-span-2 overflow-y-auto h-full">
      <aside className="flex flex-col items-center justify-center text-center my-8 gap-2">
        <img src="https://img.freepik.com/fotos-premium/pasa-mucho-tiempo-pensando-apuesto-joven-mirando-otro-lado-pensativamente_590464-44681.jpg?uid=R46319876&ga=GA1.1.977438040.1730462763&semt=ais_hybrid" alt="image"
        className="w-24 h-24 object-cover rounded-full"
        />
        <div>
          <h2 className="text-gray-300 font-normal">Mauricio R Ferreyra</h2>
          <p className="text-gray-500 text-sm">mauricioraulferreyra0@gmail.com</p>
        </div>
      </aside>
      {/* Attachments */}
      <aside>
        {/* Social media */}
        <a href="#" className="flex items-center gap-4 mb-2 px-8 py-2 rounded-lg hover:bg-[#292A30] transition-colors">
          {/* Icon */}
          <div className="bg-[#1E1F24] p-2 text-xl rounded-lg text-purple-600"><RiInstagramLine /></div>
          <div>
            <span className="text-gray-300 text-sm font-normal">@mauriferreyra</span>
            <p className="text-gray-500 text-sm">150,000 followers</p>
          </div>
        </a>
        {/* Social media */}
        <a
          href="#"
          className="flex items-center gap-4 mb-2 px-8 py-2 rounded-lg hover:bg-[#292A30] transition-colors"
        >
          {/* Icon */}
          <div className="bg-[#1E1F24] p-2 text-xl rounded-lg text-purple-600">
            <RiTwitterLine />
          </div>
          <div>
            <sapn className="text-gray-300 text-sm font-normal">@mauriferreyra</sapn>
            <p className="text-gray-500 text-sm">150,000 followers</p>
          </div>
        </a>
        {/* Social media */}
        <a
          href="#"
          className="flex items-center gap-4 mb-2 px-8 py-2 rounded-lg hover:bg-[#292A30] transition-colors"
        >
          {/* Icon */}
          <div className="bg-[#1E1F24] p-2 text-xl rounded-lg text-purple-600">
            <RiTwitchLine />
          </div>
          <div>
            <sapn className="text-gray-300 text-sm font-normal">@mauriferreyra</sapn>
            <p className="text-gray-500 text-sm">150,000 followers</p>
          </div>
        </a>
        {/* Social media */}
        <a
          href="#"
          className="flex items-center gap-4 mb-2 px-8 py-2 rounded-lg hover:bg-[#292A30] transition-colors"
        >
          {/* Icon */}
          <div className="bg-[#1E1F24] p-2 text-xl rounded-lg text-purple-600">
            <RiFacebookLine />
          </div>
          <div>
            <sapn className="text-gray-300 text-sm font-normal">@mauriferreyra</sapn>
            <p className="text-gray-500 text-sm">150,000 followers</p>
          </div>
        </a>
      </aside>
    </section>
  )

}

export default SocialMedia