import {useNavigate} from "react-router-dom";

export default function Nav({loggedIn}) {
  const navigate = useNavigate()

  return (
    <nav className="w-full h-[72px] bg-white flex justify-between items-center py-[16px] px-[120px] max-h-full">

      {/*LEFT PART OF NAV FIRST CHECK IF USER LOGGED IN SHOW USER DROPDOWN IF NOT LOGGED IN SHOW LOGIN BUTTONS*/}

      <div className="flex items-center justify-center gap-[7px]">
        {
          loggedIn ?
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-4 p-2 pl-3 bg-[#F2F2F2] rounded-md text-[#7D7D7D]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.9937 10.3329C7.83793 10.3332 7.68697 10.279 7.56703 10.1796L3.56701 6.84624C3.43086 6.73308 3.34525 6.57047 3.32899 6.39419C3.31274 6.21791 3.36718 6.04238 3.48034 5.90624C3.5935 5.7701 3.75611 5.68448 3.93239 5.66823C4.10868 5.65197 4.2842 5.70641 4.42035 5.81957L7.9937 8.80624L11.567 5.92624C11.6352 5.87086 11.7137 5.82951 11.7979 5.80455C11.8822 5.7796 11.9705 5.77154 12.0578 5.78083C12.1452 5.79012 12.2298 5.81659 12.3069 5.8587C12.384 5.90082 12.452 5.95776 12.507 6.02624C12.5681 6.09479 12.6143 6.17521 12.6429 6.26245C12.6714 6.3497 12.6816 6.4419 12.6728 6.53328C12.6641 6.62466 12.6365 6.71324 12.592 6.79347C12.5474 6.87371 12.4867 6.94388 12.4137 6.99957L8.4137 10.2196C8.29031 10.3033 8.14243 10.3432 7.9937 10.3329Z" fill="#7D7D7D"/>
                </svg>

                <div className="flex items-center gap-1">
                  <text >مرجان خلیل پور</text>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1586 11.62C12.1286 11.62 12.1086 11.62 12.0786 11.62C12.0286 11.61 11.9586 11.61 11.8986 11.62C8.99859 11.53 6.80859 9.25 6.80859 6.44C6.80859 3.58 9.13859 1.25 11.9986 1.25C14.8586 1.25 17.1886 3.58 17.1886 6.44C17.1786 9.25 14.9786 11.53 12.1886 11.62C12.1786 11.62 12.1686 11.62 12.1586 11.62ZM11.9986 2.75C9.96859 2.75 8.30859 4.41 8.30859 6.44C8.30859 8.44 9.86859 10.05 11.8586 10.12C11.9086 10.11 12.0486 10.11 12.1786 10.12C14.1386 10.03 15.6786 8.42 15.6886 6.44C15.6886 4.41 14.0286 2.75 11.9986 2.75Z" fill="#7D7D7D"/>
                    <path d="M12.1696 22.55C10.2096 22.55 8.23961 22.05 6.74961 21.05C5.35961 20.13 4.59961 18.87 4.59961 17.5C4.59961 16.13 5.35961 14.86 6.74961 13.93C9.74961 11.94 14.6096 11.94 17.5896 13.93C18.9696 14.85 19.7396 16.11 19.7396 17.48C19.7396 18.85 18.9796 20.12 17.5896 21.05C16.0896 22.05 14.1296 22.55 12.1696 22.55ZM7.57961 15.19C6.61961 15.83 6.09961 16.65 6.09961 17.51C6.09961 18.36 6.62961 19.18 7.57961 19.81C10.0696 21.48 14.2696 21.48 16.7596 19.81C17.7196 19.17 18.2396 18.35 18.2396 17.49C18.2396 16.64 17.7096 15.82 16.7596 15.19C14.2696 13.53 10.0696 13.53 7.57961 15.19Z" fill="#7D7D7D"/>
                  </svg>
                </div>

              </div>

              <div className="bg-[#F2F2F2] p-2 flex items-center justify-center rounded-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.2191 20.1329C9.88909 20.1329 7.55909 19.7629 5.34909 19.0229C4.50909 18.7329 3.86909 18.143 3.58909 17.3729C3.29909 16.6029 3.39909 15.7529 3.85909 14.9929L5.00909 13.0829C5.24909 12.6829 5.46909 11.8829 5.46909 11.4129V8.52295C5.46909 4.80295 8.49909 1.77295 12.2191 1.77295C15.9391 1.77295 18.9691 4.80295 18.9691 8.52295V11.4129C18.9691 11.8729 19.1891 12.6829 19.4291 13.0929L20.5691 14.9929C20.9991 15.7129 21.0791 16.5829 20.7891 17.3729C20.4991 18.163 19.8691 18.7629 19.0791 19.0229C16.8791 19.7629 14.5491 20.1329 12.2191 20.1329ZM12.2191 3.27295C9.32909 3.27295 6.96909 5.62295 6.96909 8.52295V11.4129C6.96909 12.143 6.66909 13.2229 6.29909 13.8529L5.14909 15.7629C4.92909 16.1329 4.86909 16.5229 4.99909 16.8529C5.11909 17.1929 5.41909 17.4529 5.82909 17.5929C10.0091 18.9929 14.4391 18.9929 18.6191 17.5929C18.9791 17.4729 19.2591 17.2029 19.3891 16.8429C19.5191 16.4829 19.4891 16.0929 19.2891 15.7629L18.1391 13.8529C17.7591 13.2029 17.4691 12.1329 17.4691 11.4029V8.52295C17.4691 5.62295 15.1191 3.27295 12.2191 3.27295Z" fill="#7D7D7D"/>
                  <path d="M14.0798 3.5432C14.0098 3.5432 13.9398 3.5332 13.8698 3.5132C13.5798 3.4332 13.2998 3.3732 13.0298 3.3332C12.1798 3.2232 11.3598 3.2832 10.5898 3.5132C10.3098 3.6032 10.0098 3.5132 9.81982 3.3032C9.62982 3.0932 9.56982 2.7932 9.67982 2.5232C10.0898 1.4732 11.0898 0.783203 12.2298 0.783203C13.3698 0.783203 14.3698 1.4632 14.7798 2.5232C14.8798 2.7932 14.8298 3.0932 14.6398 3.3032C14.4898 3.4632 14.2798 3.5432 14.0798 3.5432Z" fill="#7D7D7D"/>
                  <path d="M12.2188 22.4131C11.2288 22.4131 10.2687 22.0131 9.56875 21.3131C8.86875 20.6131 8.46875 19.6531 8.46875 18.6631H9.96875C9.96875 19.2531 10.2088 19.8331 10.6288 20.2531C11.0488 20.6731 11.6288 20.9131 12.2188 20.9131C13.4588 20.9131 14.4688 19.9031 14.4688 18.6631H15.9688C15.9688 20.7331 14.2888 22.4131 12.2188 22.4131Z" fill="#7D7D7D"/>
                </svg>
              </div>

              <div className="bg-[#F2F2F2] p-2 flex items-center justify-center rounded-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.1992 22.353H3.19922C2.23922 22.353 1.44922 21.563 1.44922 20.603V7.60303C1.44922 3.18303 3.77922 0.853027 8.19922 0.853027H16.1992C20.6192 0.853027 22.9492 3.18303 22.9492 7.60303V15.603C22.9492 20.023 20.6192 22.353 16.1992 22.353ZM8.19922 2.35303C4.61922 2.35303 2.94922 4.02303 2.94922 7.60303V20.603C2.94922 20.743 3.05922 20.853 3.19922 20.853H16.1992C19.7792 20.853 21.4492 19.183 21.4492 15.603V7.60303C21.4492 4.02303 19.7792 2.35303 16.1992 2.35303H8.19922ZM17.1992 9.85303H7.19922C6.78922 9.85303 6.44922 9.51303 6.44922 9.10303C6.44922 8.69303 6.78922 8.35303 7.19922 8.35303H17.1992C17.6092 8.35303 17.9492 8.69303 17.9492 9.10303C17.9492 9.51303 17.6092 9.85303 17.1992 9.85303ZM7.19922 14.853H14.1992C14.6092 14.853 14.9492 14.513 14.9492 14.103C14.9492 13.693 14.6092 13.353 14.1992 13.353H7.19922C6.78922 13.353 6.44922 13.693 6.44922 14.103C6.44922 14.513 6.78922 14.853 7.19922 14.853Z" fill="#7D7D7D"/>
                </svg>
              </div>
            </div>
          :
            <>
              <button
                onClick={()=> navigate("/signup")}
                className="bg-[linear-gradient(44deg,#B51F4F_0%,#FD2F70_100%)] p-2 w-[84px] text-white rounded-lg
                hover:bg-[linear-gradient(44deg,#FD2F70_0%,#B51F4F_100%)] transition-all duration-1000 ease-linear">
                ثبت نام
              </button>

              <button
                onClick={()=> navigate("/login")}
                className="bg-white p-2 w-[84px] border text-[#FD2F70] border-[#FD2F70] rounded-lg"> ورود</button>
            </>
        }
      </div>

      <div className="flex justify-end items-center gap-[32px] text-[#4F4F4F] font-[400] text-[14px] font-bold">
        <a
          className="relative block
            after:block after:content-[''] after:absolute after:h-[1px] after:bg-[#FD2F70] after:w-full after:scale-x-0 after:transition after:duration-300
            after:hover:scale-x-100 hover:text-[#FD2F70]"
        >وبلاگ</a>

        <a
          className="relative block
              after:block after:content-[''] after:absolute after:h-[1px] after:bg-[#FD2F70] after:w-full after:scale-x-0 after:transition after:duration-300
              after:hover:scale-x-100 hover:text-[#FD2F70]">
          ثبت درخواست معامله
        </a>

        <a
          className="relative block
              after:block after:content-[''] after:absolute after:h-[1px] after:bg-[#FD2F70] after:w-full after:scale-x-0 after:transition after:duration-300
              after:hover:scale-x-100 hover:text-[#FD2F70]">
          درباره ما
        </a>

        <a
          className="relative block
              after:block after:content-[''] after:absolute after:h-[1px] after:bg-[#FD2F70] after:w-full after:scale-x-0 after:transition after:duration-300
              after:hover:scale-x-100 hover:text-[#FD2F70]">
          تماس با ما
        </a>

        <a
          className="relative block
              after:block after:content-[''] after:absolute after:h-[1px] after:bg-[#FD2F70] after:w-full after:scale-x-0 after:transition after:duration-300
              after:hover:scale-x-100 hover:text-[#FD2F70]">
          معامله سریع
        </a>

        <a
          className="relative block
            after:block after:content-[''] after:absolute after:h-[1px] after:bg-[#FD2F70] after:w-full after:scale-x-0 after:transition after:duration-300
            after:hover:scale-x-100 hover:text-[#FD2F70]">
           2P2 معامله
        </a>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M7 3.33338C7 2.78109 7.44772 2.33337 8 2.33337H48C48.5523 2.33337 49 2.78109 49 3.33337V43.3334C49 43.8857 48.5523 44.3334 48 44.3334H8C7.44772 44.3334 7 43.8857 7 43.3334V3.33338ZM15.6081 22.0142L15.6222 12.4011C18.1403 12.2346 25.0479 12.4008 28.1453 12.3791C32.7291 12.3471 35.8787 11.8897 38.0241 15.0498C40.1334 18.1565 38.8795 22.0407 36.2066 23.6826C34.832 24.5271 33.8946 24.5838 32.3595 24.595C31.6029 24.6007 31.6167 24.652 31.2209 24.2317C30.5951 23.5683 28.4216 21.5432 28.1076 21.0315C28.3492 20.55 30.8151 18.4977 31.1593 17.8119L21.0934 17.8177L21.0922 27.8812C21.5581 27.6742 24.2885 24.7229 24.3214 24.6788C25.0902 25.4443 29.1801 29.4594 29.7513 30.0034C28.9952 30.7691 27.0842 32.6156 26.4144 33.2172C25.241 32.0722 16.6209 23.0321 15.6081 22.0142ZM10.5098 40.0751L19.6223 40.0542C19.2325 39.6379 10.924 31.2274 10.5155 30.977L10.5098 40.0751ZM29.7513 30.0034C30.3444 30.4569 30.9705 31.1752 31.5148 31.7234C32.0983 32.3112 32.6048 32.8193 33.1932 33.4016L38.3201 38.5499C38.6342 38.8634 38.8807 39.1011 39.1878 39.4125C39.5061 39.735 39.6141 40.0307 40.146 40.0784L46.9969 40.0687C46.7936 39.6554 42.4819 35.4043 41.6851 34.6434L38.9468 31.9733C38.3074 31.3179 36.6191 29.7865 36.3303 29.2531L36.7147 29.0606C38.487 28.3042 39.7949 27.7252 41.2144 26.096C44.0658 22.823 45.114 18.2877 43.3031 14.1C42.4273 12.075 41.2693 10.7661 39.8691 9.63413C36.1617 6.63574 31.8521 7.28773 26.3067 7.29075C21.0578 7.29347 15.752 7.36618 10.5101 7.28623C10.5786 12.4995 10.4458 17.8065 10.5197 22.979C10.5475 24.9078 10.123 24.1714 12.3149 26.3687C15.812 29.8755 19.2062 33.3545 22.7456 36.8247C22.5917 37.1605 21.5354 38.1351 21.2177 38.4434C20.7247 38.9213 20.0199 39.525 19.6733 40.0739L29.7676 40.0675L29.7513 30.0034Z"
                  fill="#FD2F70"/>
          </svg>
        </div>

      </div>
    </nav>
  )
}