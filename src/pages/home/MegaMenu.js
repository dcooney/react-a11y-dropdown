import MenuOne from './MenuOne'

export default function MegaMenu() {
   return (
      <div className="text-slate-900">
         <h3 className="text-md font-bold p-1">This is a Mega Menu</h3>
         <p className="text-xs text-slate-700 px-1 mb-2 pb-2">
            You can put whatever you'd like here as it's not controlled by the
            component at all.
         </p>
         <div className="grid grid-cols-3 gap-5 py-3 px-1 border-t">
            <div>
               <h4 className="font-bold text-xs uppercase p-1 mb-1">
                  Column #1
               </h4>
               <MenuOne />
            </div>
            <div>
               <h4 className="font-bold text-xs uppercase p-1 mb-1">
                  Column #2
               </h4>
               <MenuOne />
            </div>
            <div>
               <h4 className="font-bold text-xs uppercase p-1 mb-1">
                  Column #3
               </h4>
               <MenuOne />
            </div>
         </div>
      </div>
   )
}
