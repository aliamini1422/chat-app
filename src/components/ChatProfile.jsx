
export default function ChatProfile({user}){
  console.log(user)
  return(
    <div className="w-full flex justify-between items-center p-2 rounded-md">

      <div className="w-[30px] p-2 flex items-center justify-center rounded-s bg-[#F5F5F5] text-[#FD2F70]">
        {user?.count}
      </div>

      <div className="flex items-center justify-end gap-2 self-stretch h-[48px]">
        <div className="flex flex-col items-end gap-[7px]">
          <text className="text-[#4F4F4F] text-[14px] font-bold">{user?.name}</text>
          <text className="text-[#7D7D7D] text-[12px] font-medium">{user?.date} | {user?.time}</text>
        </div>

        <div className="w-[48px] h-[48px] rounded-lg bg-gray-500">
          <img width={48} height={48} className="rounded-lg" src={user?.img} alt="User avatar" ></img>
        </div>
      </div>

    </div>
  )
}