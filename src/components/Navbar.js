import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="h-14 p-4 flex flex-row justify-between items-center bg-[#202020]">
      <div className="flex flex-row ">
        <div className="w-10 h-10 p-2 box-border">
          <button id="Guide" className="align-middle cursor-pointer">
            <svg className="items-center justify-center relative align-middle flex-inline inline-flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
              <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z" fill="#FFF"/>
            </svg>
          </button>
        </div>
        <Link href='/' className="text-4xl ml-7 cursor-pointer">Wyvernaere</Link>
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
                  <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z" fill="#FFF"></path>
                </svg>
              </div>
            </button>
          </form>
        </div>
      </div>
      <div className="items-center justify-end">
        {/* {!user && (<p className="cursor-pointer" onClick={() => router.push('/auth')}>Login</p>)}
        {user && (<p className="cursor-pointer" onClick={() => logout()}>Logout</p>)} */}
      </div>
    </div>
  )
}