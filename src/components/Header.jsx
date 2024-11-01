import {RiArrowDownSLine, RiNotification3Fill, RiSearchLine} from 'react-icons/ri'

const Header =()=> {
  return(
    <header className="h-[8vh] bg-[#1c1e20] md:h-[6vh] flex items-center justify-between px-5 w-full">
        <span className=" text-white cursor-pointer border border-solid border-white rounded-2xl p-1 transition-[0.5s] -rotate-45 hover:rotate-0 hover:text-[#6e84cc] hover:border-[#6e84cc]">MF</span>
        <form className='hidden sm:block'>
          <div className='relative'>
            <input type="text" placeholder="Search" className="bg-[#050505] rounded pl-2 pr-7 text-white outline-none"/>
            <RiSearchLine className='absolute right-2 bottom-[2px] text-gray-300'/>
          </div>
        </form>
        <div className="flex items-center gap-6">
          <div className='relative cursor-pointer'>
            <RiNotification3Fill className='text-gray-300'/>
            <span className='bg-purple-600 rounded-full absolute text-[8px] left-2 bottom-2 text-white px-1'>2</span>
          </div>
          <div className='flex items-center gap-2'>
            <img src="https://img.freepik.com/free-photo/confident-handsome-guy-posing-against-white-wall_176420-32936.jpg?t=st=1730242676~exp=1730246276~hmac=3d3aef17fbbc904f024ced15486f4ff9541ea8e23f13345251b35d55adb88400&w=740" alt="photograph" className='w-6 h-6 object-cover rounded-full cursor-pointer ring-2 ring-white'/>
            <RiArrowDownSLine className='text-gray-300 cursor-pointer'/>
          </div>
        </div>
      </header>
  )
}

export default Header