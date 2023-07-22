import Pattern from "../Pattern.png";
import AuthWrapper from "../components/AuthWrapper";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Signup() {
  return (
    <>
      <Nav/>

      <main className="relative h-[600px] flex justify-between items-center">
        <div className="w-screen h-screen -z-10 absolute top-0 left-0">
          <img className="w-screen h-screen" src={Pattern} alt="pattern"/>
        </div>

        <div className="m-auto">
          <AuthWrapper>
            <section className="w-[384px] flex flex-col justify-between px-8">
              <div className="w-full flex flex-col items-center justify-between">

                <h1 className="text-[#fd2f70] text-[24px] font-bold mb-6">ثبت نام</h1>

                <div className="w-full flex flex-col items-center justify-center gap-4">
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M5.8327 17.7083H14.1661C17.2078 17.7083 18.9578 15.9583 18.9578 12.9166V7.08329C18.9578 4.04163 17.2078 2.29163 14.1661 2.29163H5.8327C2.79102 2.29163 1.04102 4.04163 1.04102 7.08329V12.9166C1.04102 15.9583 2.79102 17.7083 5.8327 17.7083ZM2.29102 7.08329C2.29102 4.69996 3.44936 3.54163 5.8327 3.54163H14.1661C16.5494 3.54163 17.7078 4.69996 17.7078 7.08329V12.9166C17.7078 15.3 16.5494 16.4583 14.1661 16.4583H5.8327C3.44936 16.4583 2.29102 15.3 2.29102 12.9166V7.08329ZM8.0492 10.0666C8.59087 10.5083 9.2992 10.7249 9.9992 10.7249C10.6992 10.7249 11.4075 10.5083 11.9409 10.0666L14.5492 7.98327C14.8242 7.77494 14.8659 7.37493 14.6492 7.10827C14.4409 6.83327 14.0409 6.7916 13.7742 7.00827L11.1659 9.0916C10.5325 9.59994 9.45753 9.59994 8.8242 9.0916L6.21586 7.00827C5.94919 6.7916 5.55752 6.8416 5.34085 7.10827C5.12419 7.37493 5.17418 7.7666 5.44085 7.98327L8.0492 10.0666Z"
                              fill="#7D7D7D"/>
                      </svg>
                    </div>
                    <input type="email" id="email" dir="rtl"
                           className="block w-full p-3 pr-10 text-right text-sm text-gray-900 bg-[#F2F2F2] rounded-lg self-stretch border border-transparent
                            outline outline-transparent focus:border-[#4ec083] duration-700"
                           placeholder="آدرس ایمیل" required/>
                  </div>

                  <div className="relative w-full">
                    <div className="absolute right-0 top-3 flex items-center justify-center pr-3 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M15 8.95829C14.6584 8.95829 14.375 8.67496 14.375 8.33329V6.66663C14.375 4.04163 13.6334 2.29163 10 2.29163C6.36668 2.29163 5.62501 4.04163 5.62501 6.66663V8.33329C5.62501 8.67496 5.34167 8.95829 5 8.95829C4.65833 8.95829 4.375 8.67496 4.375 8.33329V6.66663C4.375 4.24996 4.95834 1.04163 10 1.04163C15.0417 1.04163 15.6251 4.24996 15.6251 6.66663V8.33329C15.6251 8.67496 15.3417 8.95829 15 8.95829Z"
                          fill="#7D7D7D"/>
                        <path
                          d="M14.1661 18.9584H5.8327C2.15769 18.9584 1.04102 17.8417 1.04102 14.1667V12.5C1.04102 8.82504 2.15769 7.70837 5.8327 7.70837H14.1661C17.8411 7.70837 18.9578 8.82504 18.9578 12.5V14.1667C18.9578 17.8417 17.8411 18.9584 14.1661 18.9584ZM5.8327 8.95837C2.84936 8.95837 2.29102 9.52504 2.29102 12.5V14.1667C2.29102 17.1417 2.84936 17.7084 5.8327 17.7084H14.1661C17.1494 17.7084 17.7078 17.1417 17.7078 14.1667V12.5C17.7078 9.52504 17.1494 8.95837 14.1661 8.95837H5.8327Z"
                          fill="#7D7D7D"/>
                        <path
                          d="M6.66732 14.1667C6.55899 14.1667 6.45065 14.1417 6.35065 14.1001C6.24232 14.0584 6.15899 14 6.07566 13.925C5.92566 13.7667 5.83398 13.5584 5.83398 13.3334C5.83398 13.2251 5.85897 13.1167 5.90064 13.0167C5.94231 12.9084 6.00066 12.8251 6.07566 12.7417C6.15899 12.6667 6.24232 12.6084 6.35065 12.5667C6.65065 12.4334 7.02565 12.5084 7.25898 12.7417C7.33398 12.8251 7.39234 12.9167 7.434 13.0167C7.47567 13.1167 7.50066 13.2251 7.50066 13.3334C7.50066 13.5501 7.40898 13.7667 7.25898 13.925C7.10065 14.075 6.88399 14.1667 6.66732 14.1667Z"
                          fill="#7D7D7D"/>
                        <path
                          d="M9.99935 14.1667C9.78268 14.1667 9.56602 14.075 9.40769 13.925C9.25769 13.7667 9.16602 13.5583 9.16602 13.3333C9.16602 13.225 9.18267 13.1167 9.23267 13.0167C9.27434 12.9167 9.33269 12.825 9.40769 12.7417C9.59936 12.55 9.89102 12.4583 10.1577 12.5167C10.216 12.525 10.266 12.5417 10.316 12.5667C10.366 12.5833 10.416 12.6084 10.466 12.6417C10.5077 12.6667 10.5493 12.7083 10.591 12.7417C10.666 12.825 10.7244 12.9167 10.766 13.0167C10.8077 13.1167 10.8327 13.225 10.8327 13.3333C10.8327 13.5583 10.741 13.7667 10.591 13.925C10.5493 13.9583 10.5077 13.9917 10.466 14.025C10.416 14.0583 10.366 14.0834 10.316 14.1C10.266 14.125 10.216 14.1417 10.1577 14.15C10.1077 14.1584 10.0494 14.1667 9.99935 14.1667Z"
                          fill="#7D7D7D"/>
                        <path
                          d="M13.3333 14.1667C13.1083 14.1667 12.9 14.075 12.7417 13.925C12.6667 13.8417 12.6083 13.75 12.5667 13.65C12.525 13.55 12.5 13.4417 12.5 13.3333C12.5 13.1167 12.5917 12.9 12.7417 12.7417C12.7833 12.7083 12.825 12.675 12.8667 12.6417C12.9167 12.6084 12.9667 12.5833 13.0167 12.5667C13.0667 12.5417 13.1167 12.525 13.1667 12.5167C13.4417 12.4583 13.725 12.55 13.925 12.7417C14.075 12.9 14.1667 13.1083 14.1667 13.3333C14.1667 13.4417 14.1417 13.55 14.1 13.65C14.0584 13.7583 14 13.8417 13.925 13.925C13.7667 14.075 13.55 14.1667 13.3333 14.1667Z"
                          fill="#7D7D7D"/>
                      </svg>
                    </div>
                    <input type="text" id="password"
                           className="block w-full p-3 pr-10 text-right text-sm text-gray-900 bg-[#F2F2F2] rounded-lg self-stretch border border-transparent
                            outline outline-transparent focus:border-[#4ec083] duration-700"
                           placeholder="رمز عبور" required/>

                    <div
                      className="flex justify-end items-center gap-1.5 text-[#707070] text-[13px] font-medium mt-1.5">
                      <label htmlFor="rules">قوانین و مقررات سایت را می پذیرم</label>
                      <input type="checkbox" name="rules" id="rules" className="accent-transparent "/>
                    </div>
                  </div>

                  <div className="relative w-full">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M5.14037 6.26094H5.1237C3.62369 6.21094 2.44869 4.99427 2.44035 3.49427C2.44035 1.96093 3.69036 0.710938 5.21537 0.710938C6.74038 0.710938 7.99038 1.96094 7.99038 3.48594C7.99038 4.99427 6.81537 6.21094 5.31537 6.26094H5.1987H5.14037ZM5.2237 5.01094H5.22378C5.27374 5.01094 5.31539 5.01094 5.36537 5.01927C6.10704 4.98594 6.75704 4.31927 6.75704 3.49427C6.75704 2.6526 6.07371 1.96927 5.23204 1.96927C4.39036 1.96927 3.70703 2.6526 3.70703 3.49427C3.70703 4.31093 4.34036 4.96927 5.1487 5.01927C5.15703 5.01094 5.19033 5.01094 5.22365 5.01094H5.2237ZM15.0986 6.26116H15.1653C15.1694 6.26116 15.1715 6.26116 15.1726 6.2622C15.1736 6.26324 15.1736 6.26532 15.1736 6.26949C16.6736 6.21949 17.8486 5.00282 17.857 3.49448C17.857 1.96948 16.607 0.719482 15.0819 0.719482C13.5569 0.719482 12.3069 1.96115 12.3069 3.49448C12.3069 4.99448 13.4819 6.21116 15.0569 6.26116H15.0986ZM13.5569 3.48616C13.5569 2.64449 14.2403 1.96115 15.0819 1.96115C15.932 1.96115 16.6153 2.64449 16.6153 3.48616C16.607 4.30282 15.982 4.96949 15.1736 5.01116C15.0986 5.00282 15.0319 5.00282 15.0236 5.01116C14.1986 4.97782 13.5569 4.31116 13.5569 3.48616ZM14.1988 12.3194C14.5238 12.3777 14.8488 12.4027 15.1738 12.4027C16.1988 12.4027 17.1821 12.1277 17.9404 11.6277C18.6821 11.1277 19.0988 10.4194 19.0988 9.67772C19.0988 8.92772 18.6738 8.22772 17.9404 7.73606C16.9404 7.06939 15.5321 6.81106 14.1738 7.05273C13.8321 7.11106 13.6071 7.43606 13.6654 7.77773C13.7238 8.11939 14.0488 8.35273 14.3904 8.28606C15.4238 8.10273 16.5238 8.29439 17.2488 8.77772C17.6321 9.03606 17.8488 9.35273 17.8488 9.67772C17.8488 10.0027 17.6404 10.3277 17.2488 10.5861C16.5238 11.0694 15.4404 11.2611 14.4154 11.0861C14.0738 11.0277 13.7488 11.2527 13.6904 11.5944C13.6321 11.9361 13.8571 12.2611 14.1988 12.3194ZM2.36537 11.6277C3.12371 12.1277 4.10704 12.4027 5.13205 12.4027C5.45705 12.4027 5.78205 12.3777 6.10705 12.3194C6.44872 12.2611 6.67372 11.9361 6.61539 11.5944C6.55706 11.2611 6.23205 11.0277 5.89039 11.0861C4.86538 11.2611 3.78204 11.0694 3.05704 10.5861C2.67371 10.3277 2.45704 10.0027 2.45704 9.67772C2.45704 9.35273 2.66537 9.03606 3.05704 8.77772C3.79038 8.29439 4.88205 8.10273 5.91539 8.28606C6.25706 8.35273 6.58206 8.11939 6.64039 7.77773C6.69872 7.43606 6.47372 7.11106 6.13205 7.05273C4.77371 6.81106 3.36537 7.06939 2.36537 7.73606C1.63203 8.22772 1.20703 8.93606 1.20703 9.67772C1.20703 10.4277 1.63203 11.1361 2.36537 11.6277ZM10.1653 12.4859H10.0986H10.0569C8.48192 12.4359 7.30691 11.2193 7.30691 9.71926C7.30691 8.18592 8.55692 6.94425 10.0819 6.94425C11.6069 6.94425 12.8569 8.19426 12.8569 9.71926C12.8486 11.2276 11.6736 12.4443 10.1736 12.4943C10.1736 12.4901 10.1736 12.488 10.1726 12.487C10.1715 12.4859 10.1694 12.4859 10.1653 12.4859ZM10.0819 8.18593C9.24026 8.18593 8.55692 8.86926 8.55692 9.71093C8.55692 10.5359 9.19859 11.2026 10.0236 11.2359C10.0319 11.2276 10.0986 11.2276 10.1736 11.2359C10.9819 11.1943 11.6069 10.5276 11.6153 9.71093C11.6153 8.87759 10.9319 8.18593 10.0819 8.18593ZM7.39021 17.8528C8.16522 18.3778 9.16522 18.6361 10.1652 18.6361C11.1652 18.6361 12.1652 18.3695 12.9402 17.8528C13.6819 17.3611 14.0986 16.6445 14.0986 15.9028C14.0986 15.1528 13.6736 14.4528 12.9402 13.9611C11.3902 12.9278 8.94855 12.9278 7.39021 13.9611C6.64854 14.4528 6.23187 15.1695 6.23187 15.9111C6.23187 16.6611 6.65688 17.3611 7.39021 17.8528ZM7.48188 15.9195C7.48188 15.5945 7.69022 15.2695 8.08188 15.0111C9.21522 14.2611 11.1236 14.2528 12.2402 15.0111C12.6236 15.2695 12.8402 15.5861 12.8402 15.9111C12.8402 16.2361 12.6319 16.5611 12.2402 16.8195C11.1152 17.5778 9.20689 17.5778 8.08188 16.8195C7.69855 16.5611 7.48188 16.2445 7.48188 15.9195Z"
                              fill="#7D7D7D"/>
                      </svg>
                    </div>
                    <input type="text" id="code" dir="code"
                           className="block w-full p-3 pr-10 text-right text-sm text-gray-900 bg-[#F2F2F2] rounded-lg self-stretch border border-transparent
                            outline outline-transparent focus:border-[#4ec083] duration-700"
                           placeholder="کد دعوت(اختیاری)"/>
                  </div>

                  <div className="w-full">
                    <button className="w-full bg-[linear-gradient(44deg,#B51F4F_0%,#FD2F70_100%)] px-6 py-3 text-white
                  rounded-lg hover:bg-[linear-gradient(44deg,#FD2F70_0%,#B51F4F_100%)] transition-all duration-1000 ease-linear">
                      ثبت نام
                    </button>
                  </div>

                  <div className="w-full">
                    <button
                      className="w-full flex items-center justify-end gap-2 bg-[#F2F2F2] p-4 w-[84px] text-[#7D7D7D]
                      rounded-lg hover:text-[#4F4F4F] hover:border transition duration-700">
                      ثبت نام با حساب گوگل

                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" preserveAspectRatio="xMidYMid"
                           viewBox="0 0 256 262" id="google">
                        <path fill="#4285F4"
                              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                        <path fill="#34A853"
                              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                        <path fill="#FBBC05"
                              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
                        <path fill="#EB4335"
                              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                      </svg>
                    </button>
                  </div>

                  <div className="w-full flex justify-end gap-1.5 text-[#4F4F4F] text-[14px]">
                    <a href="/login" className="text-[#07bc93] underline">ورود</a>
                    <h3>حساب کاربری دارید؟</h3>
                  </div>
                </div>

              </div>
            </section>
          </AuthWrapper>
        </div>

      </main>

      <Footer/>
    </>
  )
}