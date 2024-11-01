import { BiMicrophone, BiMap } from "react-icons/bi"
import { RiAddLine, RiMore2Fill,RiImage2Line,RiEmotionHappyLine,RiSendPlaneLine } from "react-icons/ri"

const ChatMessage =()=> {

  return(
    <section className="bg-[#1E1F24] col-span-4 p-2 md:p-8 h-full relative overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800 scrollbar-thumb-rounded-md"> 
      <div className="pb-12"> 
        {/* Info Group */}
        <header className="absolute top-0 left-0 w-full flex items-center gap-8 px-4 py-2 md:p-8 border-b border-gray-800">
          <aside>
          <img
              src="https://img.freepik.com/foto-gratis/retrato-joven-alegre-camisa-blanca_171337-17467.jpg"
              className="w-[60px] md:w-20 h-[60px] md:h-20 object-cover rounded-full"
            />
          </aside>
          <aside className="flex-1 flex flex-col gap-2 md:flex-row items-center justify-between">
            {/* Header */}
            <div>
              <h1 className="text-xl text-gray-300 md:text-3xl">Design Team</h1>
              <p className="text-gray-500 text-sm md:text-base">60 members, 10 online</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-start">
                <img
                src="https://img.freepik.com/foto-gratis/retrato-joven-alegre-camisa-blanca_171337-17467.jpg"
                className="w-9 h-9 object-cover rounded-full"
                />
                <img
                src="https://img.freepik.com/foto-gratis/abuelos-felices-usando-su-computadora-portatil-digital_329181-14741.jpg"
                className="w-9 h-9 object-cover rounded-full"
                />
                <img
                src="https://img.freepik.com/foto-gratis/pareja-tiro-medio-pasar-tiempo-naturaleza_23-2149021649.jpg"
                className="w-9 h-9 object-cover rounded-full"
                />
              </div>
              <button className="bg-[#050505] p-2.5 rounded-full text-gray-300">
                <RiAddLine />
              </button>
            </div>
          </aside>
        </header>
        {/* Content Messages */}
        <aside className="mt-32 px-2 relative">
          {/* Message user */}
          <div className="flex gap-4">
            <img
              src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
              className="w-10 h-10 object-cover rounded-full mt-1"
            />
            <div className="text-gray-300 font-semibold">
              <h4 className="mb-2">Killan James <span className="text-gray-500 ml-8 font-normal text-sm">10:12 AM</span></h4>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-gray-500 text-sm font-semibold bg-[#292A30] px-4 py-2 rounded-tr-lg rounded-br-lg rounded-bl-lg">Hi, Are you still Web Designer</p>
                <button><RiMore2Fill /></button>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-gray-500 text-sm font-semibold bg-[#292A30] px-4 py-2 rounded-tr-lg rounded-br-lg rounded-bl-lg">Would love to see some design 😀</p>
                <button><RiMore2Fill /></button>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="my-6 relative">
            <p className="absolute bg-[#1E1F24] px-4 text-gray-700 text-sm font-semibold ml-[50%] -translate-x-[50%] -bottom-[8px]">Today, March 24</p>
            <hr className="border-gray-700" />
          </div>
          {/* Message user */}
          <div className="flex gap-4 pb-4 lg:pb-1">
            <img
              src="https://img.freepik.com/foto-gratis/abuelos-felices-usando-su-computadora-portatil-digital_329181-14741.jpg"
              className="w-10 h-10 object-cover rounded-full mt-1"
            />
            <div className="text-gray-300 font-semibold">
              <h4 className="mb-2">Claudia Maudi<span className="text-gray-500 ml-8 font-normal text-sm">10:30 AM</span></h4>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-gray-500 text-sm font-semibold bg-[#292A30] px-4 py-2 rounded-tr-lg rounded-br-lg rounded-bl-lg">Lorem Ipsum ha sido el texto de relleno estándar de las
                industrias desde el año 1500</p>
                <button><RiMore2Fill /></button>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-gray-500 text-sm font-semibold bg-[#292A30] px-4 py-2 rounded-tr-lg rounded-br-lg rounded-bl-lg">Lorem Ipsum ha sido el texto 😀</p>
                <button><RiMore2Fill /></button>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <img src="https://img.freepik.com/foto-gratis/retrato-feliz-mediados-mujer-adulta-abrazando-su-madre-senior_1262-18557.jpg" alt="image" className="w-32 h-40 object-cover rounded-lg" />
                <img
                  src="https://img.freepik.com/foto-gratis/pareja-sonriente-tiro-medio-fuera_23-2148984226.jpg"
                  className="w-32 h-40 object-cover rounded-lg"
                />
                <button><RiMore2Fill /></button>
              </div>
            </div>
          </div>
          {/* Message user main */}
          <aside className="flex justify-end gap-4 pb-4 lg:pb-1">
            <img
              src="https://img.freepik.com/foto-gratis/abuelo-humoristico-amistoso-barba-blanca-sonriendo-alegria-camara-elegante-ordenado-hombre-negocios-mayor-gafas-regocijandose-resultados-exitosos-trabajo-efectivo-posando-aislado-estudio_343059-4215.jpg"
              className="w-10 h-10 object-cover rounded-full order-1"
            />
            <div>
              <h4 className="text-gray-300 text-normal font-semibold mb-2 text-right">
                <span className="text-gray-500 font-normal text-sm mr-8">
                  10:12 AM
                </span>
                Distin Watson{" "}
              </h4>
              <div className="flex items-center justify-end gap-2 mb-2">
                <p className="bg-purple-500 py-2 px-4 text-sm rounded-tl-lg rounded-bl-lg rounded-br-lg text-white order-1">
                  Hi, Are you still Web Designer{" "}
                </p>
                <button className="text-gray-500">
                  <RiMore2Fill />
                </button>
              </div>
            </div>
          </aside>
          {/* Message user */}
          <aside className="flex gap-4 pb-4 lg:pb-1">
            <img
              src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div>
              <h4 className="text-gray-300 font-semibold mb-2">
                Killan James{" "}
                <span className="text-gray-500 font-normal text-sm ml-8">
                  10:12 AM
                </span>
              </h4>
              <div className="flex items-center gap-2 mb-2">
                <p className="bg-[#292A30] py-2 px-4 rounded-tr-lg rounded-br-lg rounded-bl-lg text-gray-500">
                  Hi, Are you still Web Designer{" "}
                </p>
                <button className="text-gray-500">
                  <RiMore2Fill />
                </button>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <p className="bg-[#292A30] py-2 px-4 rounded-tr-lg rounded-br-lg rounded-bl-lg text-gray-500">
                  Would love to see some design 🙂
                </p>
                <button className="text-gray-500">
                  <RiMore2Fill />
                </button>
              </div>
            </div>
          </aside>
        </aside>
      </div>
      {/* Footer - Send Message */}  
      <div className="lg:fixed lg:left-1/4 lg:w-1/2 bg-[#22222A] left-0 bottom-0 px-3 py-2">
        <form className="relative w-full">
          <BiMicrophone className="absolute left-4 top-[10px] text-gray-300 text-xl hover:cursor-pointer" />
          <input
            type="text"
            className="bg-[#1E1F24] py-2 pl-10 pr-28 outline-none w-full rounded-full text-gray-300"
          />
          {/* Icons message */}
          <div className="absolute right-4 top-3 flex items-center gap-2 text-gray-300">
            <RiImage2Line className="hover:cursor-pointer" />
            <RiEmotionHappyLine className="hover:cursor-pointer" />
            <RiSendPlaneLine className="hover:cursor-pointer" />
            <BiMap className="hover:cursor-pointer" />
          </div>
        </form>
      </div> 
    </section>
  )

}

export default ChatMessage