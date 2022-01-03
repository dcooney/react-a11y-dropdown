export default function Intro() {
   return (
      <header className="text-slate-800">
         <h1 className="text-3xl sm:text-4xl font-black mb-2 pt-6">
            React A11y DropDown
         </h1>
         <div className="block sm:flex justify-between gap-2 pb-5 border-b mb-5">
            <h2 className="text-slate-600	text-xl font-light pr-2 mb-4 sm:mb-0">
               An accessible and unopinionated dropdown component for{' '}
               <a
                  href="https://www.reactjs.org"
                  className="underline hover:no-underline text-sky-700"
               >
                  React
               </a>{' '}
               with full keyboard support.
            </h2>
            <a
               className="self-start inline-block sm:flex gap-1 items-center text-sm text-slate-700 rounded-sm bg-slate-100 border border-slate-300 hover:border-slate-400 px-3 py-2 -mt-1"
               href="https://github.com/dcooney/react-a11y-dropdown"
               target="_blank"
            >
               <span className="flex gap-1 items-center">
                  GitHub
                  <svg
                     version="1.1"
                     width="16"
                     height="16"
                     viewBox="0 0 16 16"
                     aria-hidden="true"
                  >
                     <path
                        fillRule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                     ></path>
                  </svg>
               </span>
            </a>
         </div>
         <p className="mb-5 text-sm">
            Use the tab key along with your keyboard up/down arrows to navigate
            through the example dropdown menu's below &darr;
         </p>
      </header>
   )
}
