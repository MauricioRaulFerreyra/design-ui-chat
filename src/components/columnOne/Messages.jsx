import { RiSearchLine, RiCheckboxBlankCircleFill, RiCheckDoubleFill, RiMessage2Line  } from "react-icons/ri"

// eslint-disable-next-line react/prop-types
const Messages =({toggleMenu})=> {

  return (

    <section className={`lg:col-span-2 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800 scrollbar-thumb-rounded-md bg-[#22212A] p-5 fixed lg:relative top-[8vh] md:top-[6vh] lg:top-0 w-[85%] lg:w-full h-full transition-all ${toggleMenu ? "left-0": "-left-full"} lg:left-0 z-40`}>
      {/* Title and Search */}
      <aside className="mb-4">
        <h1 className="text-white text-2xl mb-3">Messages</h1>
        <form className="hidden md:block">
          <div className='relative'>
            <input type="text" placeholder="Search" className="bg-[#050505] rounded pl-2 pr-7 text-white outline-none w-full py-1"/>
            <RiSearchLine className='absolute right-1 bottom-2 text-gray-300'/>
          </div>
        </form>
      </aside>
      {/* Users */}
      <aside>
        {/* User 1 */}
        <section className="flex w-full gap-2 bg-[#1E1F24] p-1 mb-2">
          {/* Image */}
        <div className="w-[15%] relative flex items-center justify-center">
          <img src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg" alt="image" 
          className="w-10 h-10 object-cover rounded-full"
          />
          <RiCheckboxBlankCircleFill className="absolute text-green-500 -right-1 top-[26px] rounded-full ring-1 ring-white"/>
        </div>
          {/* Name and Hour */}
        <aside className="flex justify-between w-[85%]">
          <div>
            <h3 className="text-white">Killian James</h3>
            <p className="text-green-500 text-[12px] ml-1">Typing...</p>
          </div>
          <div>
            <h3 className="text-[#575D69]">4:30 PM</h3>
            <span className="text-white bg-red-500 rounded-full px-1 text-[10px] float-right" >2</span> 
          </div>
        </aside>
        </section> 
      </aside>
      <aside>
        {/* User 2 */}
        <section className="flex w-full gap-2 p-1 mb-2">
          {/* Image */}
        <div className="w-[15%] flex items-center justify-center">
          <img src="https://img.freepik.com/foto-gratis/retrato-joven-alegre-camisa-blanca_171337-17467.jpg" alt="image" 
          className="w-10 h-10 object-cover rounded-full"
          />
        </div>
          {/* Name and Hour */}
        <aside className="flex justify-between w-[85%]">
          <div>
            <h3 className="text-white">Design Team</h3>
            <p className="text-[#575D69] text-[12px] ml-1">Hello! Everyone</p>
          </div>
          <div>
            <h3 className="text-[#575D69]">9:36 AM</h3>
            <span className="text-green-500 float-right" >
            <RiCheckDoubleFill />  
            </span> 
          </div>
        </aside>
        </section> 
      </aside>
      <aside>
        {/* User 3 */}
        <section className="flex w-full gap-2 p-1 mb-2">
          {/* Image */}
        <div className="w-[15%] relative flex items-center justify-center">
          <img src="https://img.freepik.com/foto-gratis/hermosa-mujer-mediana-edad-aspecto-amistoso-sonrisa-sincera-que-expresa-gratitud-siente-agradecida-muestra-su-corazon-lleno-amor-manteniendo-manos-pecho-sentimientos-humanos-genuinos-positivos_343059-2870.jpg"
            alt="image" 
          className="w-10 h-10 object-cover rounded-full"
          />
        </div>
          {/* Name and Hour */}
        <aside className="flex justify-between w-[85%]">
          <div>
            <h3 className="text-white">Ahmed Medi</h3>
            <p className="text-[#575D69] text-[12px] ml-1">Wow really cool 🔥</p>
          </div>
          <div>
            <h3 className="text-[#575D69]">9:36 AM</h3>
          </div>
        </aside>
        </section> 
      </aside>
      {/* All Messages */}
      <h5 className="text-white flex items-center gap-2 my-4">
      <RiMessage2Line /> All Messages
      </h5>
      <aside>
      <section className="flex w-full gap-2 p-1 mb-2">
          {/* Image */}
        <div className="w-[15%] relative flex items-center justify-center">
          <img src="https://img.freepik.com/foto-gratis/retrato-mujer-senior-sonriente-chaqueta-jean_23-2149082536.jpg" alt="image" 
          className="w-10 h-10 object-cover rounded-full"
          />
        </div>
          {/* Name and Hour */}
        <aside className="flex justify-between w-[85%]">
          <div>
            <h3 className="text-white">Killian James</h3>
            <p className="text-green-500 text-[12px] ml-1">Typing...</p>
          </div>
          <div>
            <h3 className="text-[#575D69]">4:30 PM</h3>
          </div>
        </aside>
        </section>
        <section className="flex w-full gap-2 p-1 mb-2">
          {/* Image */}
        <div className="w-[15%] flex items-center justify-center">
          <img src="https://img.freepik.com/foto-gratis/retrato-joven-alegre-camisa-blanca_171337-17467.jpg" alt="image" 
          className="w-10 h-10 object-cover rounded-full"
          />
        </div>
          {/* Name and Hour */}
        <aside className="flex justify-between w-[85%]">
          <div>
            <h3 className="text-white">Design Team</h3>
            <p className="text-[#575D69] text-[12px] ml-1">Hello! Everyone</p>
          </div>
          <div>
            <h3 className="text-[#575D69]">9:36 AM</h3>
            <span className="text-green-500 float-right" >
            <RiCheckDoubleFill />  
            </span> 
          </div>
        </aside>
        </section> 
        <section className="flex w-full gap-2 p-1 mb-2">
          {/* Image */}
        <div className="w-[15%] flex items-center justify-center">
          <img src="https://img.freepik.com/foto-gratis/abuelos-felices-usando-su-computadora-portatil-digital_329181-14741.jpg" alt="image" 
          className="w-10 h-10 object-cover rounded-full"
          />
        </div>
          {/* Name and Hour */}
        <aside className="flex justify-between w-[85%]">
          <div>
            <h3 className="text-white">Design Team</h3>
            <p className="text-[#575D69] text-[12px] ml-1">Hello! Everyone</p>
          </div>
          <div>
            <h3 className="text-[#575D69]">9:36 AM</h3>
            <span className="text-green-500 float-right" >
            <RiCheckDoubleFill />  
            </span> 
          </div>
        </aside>
        </section> 
        <section className="flex w-full gap-2 p-1 mb-2">
          {/* Image */}
        <div className="w-[15%] flex items-center justify-center">
          <img src="https://img.freepik.com/foto-gratis/pareja-tiro-medio-pasar-tiempo-naturaleza_23-2149021649.jpg" alt="image" 
          className="w-10 h-10 object-cover rounded-full"
          />
        </div>
          {/* Name and Hour */}
        <aside className="flex justify-between w-[85%]">
          <div>
            <h3 className="text-white">Design Team</h3>
            <p className="text-[#575D69] text-[12px] ml-1">Hello! Everyone</p>
          </div>
          <div>
            <h3 className="text-[#575D69]">9:36 AM</h3>
            <span className="text-green-500 float-right" >
            <RiCheckDoubleFill />  
            </span> 
          </div>
        </aside>
        </section> 
        <section className="flex w-full gap-2 p-1 mb-2">
          {/* Image */}
        <div className="w-[15%] flex items-center justify-center">
          <img src="https://img.freepik.com/foto-gratis/pareja-ancianos-mujer-sentada-skate-parque_181624-52490.jpg" alt="image" 
          className="w-10 h-10 object-cover rounded-full"
          />
        </div>
          {/* Name and Hour */}
        <aside className="flex justify-between w-[85%]">
          <div>
            <h3 className="text-white">Design Team</h3>
            <p className="text-[#575D69] text-[12px] ml-1">Hello! Everyone</p>
          </div>
          <div>
            <h3 className="text-[#575D69]">9:36 AM</h3>
            <span className="text-green-500 float-right" >
            <RiCheckDoubleFill />  
            </span> 
          </div>
        </aside>
        </section> 
        <section className="flex w-full gap-2 p-1 mb-2">
          {/* Image */}
        <div className="w-[15%] flex items-center justify-center">
          <img src="https://img.freepik.com/foto-gratis/retrato-joven-alegre-camisa-blanca_171337-17467.jpg" alt="image" 
          className="w-10 h-10 object-cover rounded-full"
          />
        </div>
          {/* Name and Hour */}
        <aside className="flex justify-between w-[85%]">
          <div>
            <h3 className="text-white">Design Team</h3>
            <p className="text-[#575D69] text-[12px] ml-1">Hello! Everyone</p>
          </div>
          <div>
            <h3 className="text-[#575D69]">9:36 AM</h3>
            <span className="text-green-500 float-right" >
            <RiCheckDoubleFill />  
            </span> 
          </div>
        </aside>
        </section> 
      </aside>
    </section>
  )

}

export default Messages