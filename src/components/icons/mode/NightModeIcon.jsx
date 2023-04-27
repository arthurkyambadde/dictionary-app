import React from "react";

function NightModeIcon() {
  return (
    <div>
      <svg
        width="81"
        height="22"
        viewBox="0 0 81 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="1" width="40" height="20" rx="10" fill="#A445ED" />
        <circle cx="30" cy="11" r="7" fill="white" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="green"
          viewBox="0 0 32 32"
          strokeWidth="1.5"
          stroke="#A445ED"
          class="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      </svg>
    </div>
  );
}

export default NightModeIcon;
