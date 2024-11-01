import Header from "./components/Header"
import Messages from "./components/columnOne/Messages"
import { useState } from "react"
import { RiMenu3Fill } from "react-icons/ri"
import SocialMedia from './components/columnThree/SocialMedia'
import ChatMessage from './components/columnTwo/ChatMessage'

function App() {

  const [showMenu, setSHowMenu] = useState(false)

  const toggleMenu =()=> {
    setSHowMenu(!showMenu)
  }

  return (
    <div className="h-screen flex flex-col bg-[#242422bd]">
      <Header/>
      <main className="h-[92vh] md:h-[94vh] grid grid-cols-1 lg:grid-cols-8 overflow-hidden">
        {/* *****************************   Messages   Column 1     *********************************************** */}
        <button onClick={toggleMenu} className="lg:hidden fixed bottom-4 right-2 bg-purple-600 p-3 rounded-full text-white z-50">
          <RiMenu3Fill />
        </button>
        <Messages toggleMenu={showMenu}/>
        {/* ***************************    Chat Messages  Column 2       ***************************************** */}
        <ChatMessage />
        {/* *********************************     Social  Media    Column 3      ******************************** */}
        <SocialMedia />
      </main>
    </div>
  )
}

export default App
