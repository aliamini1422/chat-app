import Pattern from "../ChatPattern.png";
import Chat from "../components/Chat";
import Conversation from "../components/Conversation";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default function Home(){

  return (
    <>
      <Nav loggedIn={true}/>

      <div className="relative w-screen h-[600px] flex items-start justify-center gap-6 shrink-0 mt-8">

        <div className="w-screen h-screen -z-10 absolute -top-16 right-0 ">
          <img className="w-full" src={Pattern} alt="pattern" />
        </div>

        <div className="card max-h-[517px] overflow-y-scroll">
          <Chat />
        </div>

        <div className="h-[517px] w-[384px] overflow-y-scroll bg-white flex flex-col items-start p-4 gap-2  rounded-lg
        shadow-[0_0_32px_0_rgba(125,109,114,0.12)]">
          <Conversation />
        </div>
      </div>

      <Footer />
    </>

  )
}


