export default function MenuTwo() {
   return (
      <div>
         <ul className="mb-2">
            <li>
               <button className="w-full text-left p-1 hover:underline">
                  Item One
               </button>
            </li>
            <li>
               <button className="w-full text-left p-1 hover:underline">
                  Item Two
               </button>
            </li>
            <li>
               <button className="w-full text-left p-1 hover:underline">
                  Item Three
               </button>
            </li>
         </ul>
         <div className="mt-3 p-3 bg-gray-100 rounded-sm border">
            <label
               htmlFor="input"
               className="block uppercase font-bold text-xs m-0 mb-2"
            >
               Form Input
            </label>
            <input
               id="input"
               type="text"
               className="border w-full py-1 px-2 rounded-sm"
            />
         </div>
      </div>
   )
}
