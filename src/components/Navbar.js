import Link from 'next/link';

export default function Navbar() {
  let signedIn = false;
  return (
    <div className="h-14 p-4 flex flex-row justify-between items-center bg-[#202020]">
      <div className="flex flex-row ">
        <div className="w-10 h-10 p-2 box-border">
          <button id="Guide" className="align-middle cursor-pointer">
            <svg className="items-center justify-center relative align-middle flex-inline inline-flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
              <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z" fill="#FFF" />
            </svg>
          </button>
        </div>
        <Link href='/' className="text-4xl ml-7 cursor-pointer">Wyvern</Link>
      </div>
      <div className="flex flex-row items-center min-w-0 basis-[728px] flex-shrink flex-grow-0">
        <div id="search" className="flex flex-grow flex-shrink basis-[1e-9px] py-1 ml-10">
          <form action="/results" id="search-form" className="flex h-10 relative flex-grow flex-shrink basis-[1e-9px] flex-row">
            <div className="relative items-center bg-[#121212] border rounded-l-sm border-[#303030] shadow-inner text-white py-0.5 px-1.5 ml-[34px] flex flex-grow flex-shrink basis-[1e-9px] flex-row focus-within:border-[#f46904]">
              <div id="search input" className="w-full">
                <input placeholder="Search" id="search box" type="search" name="search_query" required className="outline-none box-border px-[1px] text-base font-normal leading-6 bg-transparent max-w-full w-full flex-1 basis-[1e-9px]" />
              </div>
            </div>
            <button id="Submit" type="submit" className="border border-solid rounder-r-sm cursor-pointer h-10 w-16 border-[#303030] bg-[#333333]">
              <div className="w-6 h-6 opacity-100 inline-flex items-center justify-center align-middle">
                <svg viewBox="0 0 24 24" focusable="false" className="pointer-events-none block w-full h-full">
                  <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z" fill="#FFF" />
                </svg>
              </div>
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-row items-centerjustify-end">
        <div className="">
          <button id="settings" type="button" className="align-middle cursor-pointer p-2 w-10 h-10">
            <div className="w-full h-full opacity-100 inline-flex">
              <svg viewBox="0 0 24 24" focusable="false" className="pointer-events-none block w-full h-full">
                <path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z" fill="#FFF" />
              </svg>
            </div>
          </button>
        </div>
        {!signedIn && 
        <div className="flex flex-1 flex-row basis-[1e-9px] px-4 h-9 border-[1px] text-[14px] leading-9 rounded-2xl align-middle" >
          <button className="flex flex-row flex-1 align-middle justify-center basis-[1e-9px] cursor-pointer">
            <div className="mt-1.5 mr-1.5 -ml-1.5 w-6 h-6">
              <svg viewBox="0 0 24 24" focusable="false" className="pointer-events-none block w-full h-full">
                <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,3c4.96,0,9,4.04,9,9 c0,1.42-0.34,2.76-0.93,3.96c-1.53-1.72-3.98-2.89-7.38-3.03C14.57,12.6,16,10.97,16,9c0-2.21-1.79-4-4-4C9.79,5,8,6.79,8,9 c0,1.97,1.43,3.6,3.31,3.93c-3.4,0.14-5.85,1.31-7.38,3.03C3.34,14.76,3,13.42,3,12C3,7.04,7.04,3,12,3z M9,9c0-1.65,1.35-3,3-3 s3,1.35,3,3c0,1.65-1.35,3-3,3S9,10.65,9,9z M12,21c-3.16,0-5.94-1.64-7.55-4.12C6.01,14.93,8.61,13.9,12,13.9 c3.39,0,5.99,1.03,7.55,2.98C17.94,19.36,15.16,21,12,21z" fill="#FFF" />
              </svg>
            </div>
            <div className="text-ellipsis overflow-hidden" >
              <span className="whitespace-nowrap">Sign In</span>
            </div>
          </button>
        </div>}
        {signedIn &&
        <div>
          
        </div>
        }
      </div>
    </div>
  )
}