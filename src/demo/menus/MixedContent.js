export default function MixedContent() {
   const links = [
      {
         label: 'About Us',
         href: '/'
      },
      {
         label: 'Our Team',
         href: '/'
      },
      {
         label: 'Philosophy',
         href: '/'
      },
      {
         label: 'Contact Us',
         href: '/'
      }
   ]

   return (
      <>
         <p className="text-xs p-1">
            This dropdown contains a mix of links and form elements.
         </p>
         <ul className="text-sm px-1">
            {links.map((link, index) => (
               <li className="border-t" key={index}>
                  <a
                     href={link.href}
                     className="block w-full text-left py-2 px-0.5 hover:underline"
                  >
                     {link.label}
                  </a>
               </li>
            ))}
         </ul>
         <div className="mt-1.5 p-2.5 bg-gray-50 rounded-[3px] border border-opacity-50 shadow-sm">
            <label
               htmlFor="input"
               className="block uppercase font-semibold text-xs m-0 mb-1"
            >
               Search Form
            </label>
            <div className="flex w-full border rounded-sm bg-white">
               <input
                  id="input"
                  type="text"
                  className="w-full py-1 px-2 rounded-l-sm bg-transparent"
               />
               <button
                  type="button"
                  className="rounded-r-sm py-1 px-2 text-sm font-semibold bg-slate-500 text-white hover:bg-slate-700 transition-all"
                  onClick={() => alert('Form submit')}
               >
                  Search
               </button>
            </div>
         </div>
      </>
   )
}
