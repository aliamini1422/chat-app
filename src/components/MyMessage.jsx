export default function MyMessage({children}){
  return(
    <div className="flex flex-col px-4 pb-1 pt-3 gap-3 rounded-lg rounded-br-none bg-[#ffeef4]">
      <div className="bg-[#ffeef4]">
        {children}
      </div>
      <div>
        <p className="text-[#7D7D7D] text-[10px] text-right">22:34 am</p>
      </div>
    </div>
  )
}