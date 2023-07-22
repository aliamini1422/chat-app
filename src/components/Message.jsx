export default function Message({children} : {children: any}){
  return(
    <div className="flex flex-col px-4 pb-1 pt-3 gap-3 rounded-lg rounded-bl-none bg-[#EDEDED]">
      <div className="relative bg-[#EDEDED]">
        {children}
      </div>
      <div>
        <p className="text-[#7D7D7D] text-[10px] text-right">22:34 am</p>
      </div>
    </div>
  )
}