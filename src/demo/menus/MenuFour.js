export default function MenuFour() {
   const linkStyle =
      'block w-full hover:border-slate-400 border border-slate-200 p-2 rounded-sm bg-slate-100 text-sm transition-all'
   return (
      <ul className="text-sm text-center">
         <li className="border-opacity-30 mb-1">
            <a href="#" className={linkStyle}>
               Link One
            </a>
         </li>
         <li className="mb-1">
            <a href="#" className={linkStyle}>
               Link Two
            </a>
         </li>
         <li className="mb-1">
            <a href="#" className={linkStyle}>
               Link Three
            </a>
         </li>
         <li className="mb-1">
            <a href="#" className={linkStyle}>
               Link Four
            </a>
         </li>
         <li className="mb-1">
            <a href="#" className={linkStyle}>
               Link Five
            </a>
         </li>
      </ul>
   )
}
