import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="flex flex-row">
        <div className="relative flex items-center flex-col w-[72px] bg-[#202020] h-screen max-h-screen	">
          <div className="mt-2">
            <Link href="/" className="pt-4 pb-3 flex flex-col items-center justify-center hover:bg-neutral-700 w-[72px] h-[74px]">
              <svg className="items-center justify-center relative align-middle flex-inline inline-flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                <path d="M12,4.33l7,6.12V20H15V14H9v6H5V10.45l7-6.12M12,3,4,10V21h6V15h4v6h6V10L12,3Z" fill="#FFF"/>
              </svg>
              <p className="text-xs">Home</p>
            </Link>
            <Link href="/explore" className="pt-4 pb-3 flex flex-col items-center justify-center hover:bg-neutral-700 w-[72px] h-[74px]">
              <svg className="items-center justify-center relative align-middle flex-inline inline-flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                <path d="M11.23,13.08c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99c0.21-0.29,0.51-0.48,0.86-0.54 c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86c0.06,0.35-0.02,0.71-0.23,0.99c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02C11.72,13.33,11.45,13.25,11.23,13.08z M22,12c0,5.52-4.48,10-10,10S2,17.52,2,12 C2,6.48,6.48,2,12,2S22,6.48,22,12z M18.03,5.97L9.8,9.8l-3.83,8.23l8.23-3.83L18.03,5.97z" fill="#FFF"/>
              </svg>
              <p className="text-xs">Explore</p>
            </Link>
            <Link href="/following" className="pt-4 pb-3 flex flex-col items-center justify-center hover:bg-neutral-700 w-[72px] h-[74px]">
              <svg className="items-center justify-center relative align-middle flex-inline inline-flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                <path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z" fill="#FFF"/>
              </svg>
              <p className="text-xs">Following</p>
            </Link>
            <Link href="/library" className="pt-4 pb-3 flex flex-col items-center justify-center hover:bg-neutral-700 w-[72px] h-[74px]">
              <svg className="items-center justify-center relative align-middle flex-inline inline-flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z" fill="#FFF"/>
              </svg>
              <p className="text-xs">Library</p>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center flex-wrap">
          explore
        </div>
      </div>
    </main>
  )
}
