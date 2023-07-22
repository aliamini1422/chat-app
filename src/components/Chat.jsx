import MyMessage from "./MyMessage";
import Message from "./Message";

export default function Chat() {
  // @ts-ignore
  return (
    <div className="w-[792px] h-[517px] relative flex flex-col flex-1 p-8
      items-start self-stretch rounded-lg shadow-[0px 0px 32px 0px rgba(125, 109, 114, 0.12)]
        z-10 p-6 gap-6">
      <div className="flex items-center justify-end gap-2 self-stretch h-[48px]">
        <div className="flex flex-col items-end gap-[7px]">
          <text className="text-[#4F4F4F] text-[14px] font-bold ">مرجان خلیل پور</text>
          <text className="text-[#7D7D7D] text-[12px] font-medium">سطح 2 کاربری</text>
        </div>

        <div className="w-[48px] h-[48px] rounded-lg bg-gray-500">
          <img
            className="rounded-lg"
            src="https://s3-alpha-sig.figma.com/img/e2ee/da53/740ff13009e75e860810da076ba07d6b?Expires=1690761600&Signature=f3t4ZI~eJiLbYwjTDZ5ytl~PM4KX7V9FDdYlvaFbONG3LrahAadzz00X1CUVL9UajvpgVlFZOLExZqre-hImbaf7Y~td-CxB6XMCjmgTBawIaqsTJcZa83YEKwlEEPdQKmBP6WicxiTkaV3I4Me6n9mYYu90kTfyeBS2f8~ilNnjLCK-xSt5jIuDS5mnY-Zw2uBbNAK9TpHZpGXyZgacC1aUFDWUuSj0KrlZdQujECwQENjMZOCkUwsD1wUE5N8LMFvrouyBsjM5S5~vNlokqU3p9Qma~e9t-WsvEZezECx5rAz~gNXP6vAIJp~jM8MiUQXYMW5w1Uzi8eAZdbPnAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="User avatar"/>
        </div>
      </div>
      {/*CHAT MAIN */}
      <div className="flex flex-col w-full h-[320px] gap-3 overflow-y-scroll ">
        <div className=" flex flex-col justify-center items-end gap-2 self-stretch">
          <MyMessage>
            سلام!
            لطفا رسید پرداختتون رو برام ارسال کنید
          </MyMessage>
        </div>
        <div className=" flex flex-col justify-center items-start gap-2 self-stretch">
          <Message>
            !!سلاممم
          </Message>
          <Message>
            !!چشم حتما
          </Message>
          <Message>
            <img
              className="rounded-lg"
              width={150}
              height={150}
              src="https://s3-alpha-sig.figma.com/img/b7ec/0b84/f72b9b49625aacf3095459b70d652933?Expires=1690761600&Signature=BtaF8ESb65z~1xSzZnwZLgwoMsfjQFIWupQ6ozI7pIYHRNgKHlN8laDW5TAQKMdPCTEMLhPOrwpZO-MblqcgihcODO55Cqs6y5rYgeiTrKW2RE6w-wjwGtUFb7Pp~~s8YOEnoWvXExGh9nMyBUor1AaesmLm7Q5HAN-vnMyXAcksy7GO4Aclbr6HyRHcfuxrpXi74UC4Y1rco2puzKbMi5Y0jfqynXNdssQ7XqL6guyrAkRcJVSMvz4UEyIsMh4DUFo4xqCIRGahttDqlQCV5eNREwsHbdzInil7Aok-Vpe6HNBo62PINGs0sVsk4pcKWVPq-qlcffHVTZF4y3uCiA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="sss"/>
          </Message>
        </div>
      </div>


      <div className="w-[744px] flex items-center absolute bottom-8 gap-2">
        <div className="relative w-full">
          <div className="absolute inset-y-0 right-11 flex items-center pr-3 pointer-events-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.9846 8.74075C22.593 8.35126 21.9599 8.35299 21.5704 8.74455L9.5491 20.8308C7.98948 22.3905 5.45644 22.3905 3.89392 20.8287C2.33257 19.2666 2.33257 16.7335 3.89411 15.172L16.2712 2.72988C17.2449 1.75621 18.828 1.75621 19.8045 2.73199C20.7808 3.70823 20.7808 5.29109 19.8043 6.26762L9.55097 16.5208C9.55032 16.5215 9.54975 16.5222 9.5491 16.5229C9.15848 16.9114 8.5272 16.9108 8.13738 16.521C7.7469 16.1305 7.7469 15.4977 8.13738 15.1072L13.0866 10.157C13.477 9.7664 13.477 9.1332 13.0864 8.74272C12.6958 8.35224 12.0626 8.35229 11.6722 8.74286L6.72303 13.693C5.55155 14.8645 5.55155 16.7637 6.72313 17.9352C7.89465 19.1067 9.79388 19.1067 10.9655 17.9352C10.9668 17.9339 10.9679 17.9324 10.9692 17.931L21.2185 7.68177C22.9761 5.9242 22.9761 3.07498 21.2185 1.31741C19.4607 -0.439135 16.6116 -0.439135 14.8551 1.31741L2.47798 13.7596C0.137268 16.1003 0.137268 19.8994 2.47967 22.243C4.82361 24.5857 8.62273 24.5857 10.9653 22.2432L22.9885 10.155C23.3779 9.7634 23.3762 9.13025 22.9846 8.74075Z"
                fill="#BDBDBD"/>
            </svg>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M23.9315 1.69956C24.2675 0.69149 23.3085 -0.267595 22.3005 0.068384L0.881754 7.20805C-0.321049 7.60893 -0.283763 9.32299 0.935233 9.67121L11.3524 12.6477L14.3287 23.0648C14.677 24.2839 16.391 24.3212 16.7919 23.1183L23.9315 1.69956ZM22.2523 2.6596L15.5686 22.7106L12.598 12.3137L22.2523 2.6596ZM21.3404 1.74774L11.6863 11.4019L1.28958 8.4314L21.3404 1.74774Z"
                    fill="#FD2F70"/>
            </svg>
          </div>

          <input type="text" id="message" dir="rtl"
                 className="block w-full p-3 pr-24 text-right text-sm text-[#333333] bg-[#EDEDED] rounded-lg self-stretch border border-transparent
                          rounded-md h-[48px] p-3 outline outline-transparent focus:border-[#4ec083] duration-700 "/>

        </div>
      </div>
    </div>
  )
}