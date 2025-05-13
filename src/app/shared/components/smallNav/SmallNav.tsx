"use client";
import Link from "next/link";
import { useState } from "react";
const navLinksStyle = "text-lg hover:text-primary";

export default function SmallNav() {
  const [showSideNav, setShowSideNav] = useState(false);
  return (
    <div className="sm:hidden">
      <button
        onClick={() => {
          setShowSideNav((prev) => !prev);
        }}
      >
        {showSideNav ? (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
          </svg>
        ) : (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
          </svg>
        )}
      </button>
      <div
        className={` px-6   py-2 fixed z-10 start-0  top-10 h-full bg-primary-bg  w-full flex flex-col  ${
          showSideNav ? "translate-0" : "-translate-x-full"
        }  duration-100 `}
      >
        <Link
          onClick={() => setShowSideNav(false)}
          href={"/#about"}
          className={navLinksStyle}
        >
          About
        </Link>
        <Link
          onClick={() => setShowSideNav(false)}
          className={navLinksStyle}
          href={"/#projects"}
        >
          Projects
        </Link>
        <Link
          onClick={() => setShowSideNav(false)}
          className={navLinksStyle}
          href="/#contact"
        >
          Contact
        </Link>
        <Link
          onClick={() => setShowSideNav(false)}
          target="_blank"
          className={navLinksStyle}
          href="https://drive.google.com/file/d/1lsQAqjSET3J0bnvlH24wWcpMzwncQ1JP/view?usp=sharing"
        >
          Resume
        </Link>
      </div>
    </div>
  );
}
