import MenuOne from './Menu'

export default function MegaMenu() {
   return (
      <div className="text-slate-900">
         <h3 className="text-lg font-black p-1 mb-1">Example Mega Menu.</h3>
         <p className="text-sm text-slate-500 px-1 mb-3 pb-1">
            You can put whatever you like in here as dropdown contents are not
            controlled by the parent component.
         </p>
         <div className="grid grid-cols-3 gap-4 pt-4 pb-3 px-1 border-t">
            <div>
               <h4 className="font-bold text-sm uppercase p-1 mb-1">
                  Column #1
               </h4>
               <MenuOne />
            </div>
            <div>
               <h4 className="font-bold text-sm uppercase p-1 mb-1">
                  Column #2
               </h4>
               <MenuOne />
            </div>
            <div>
               <h4 className="font-bold text-sm uppercase p-1 mb-1">
                  Column #3
               </h4>
               <MenuOne />
            </div>
         </div>
      </div>
   )
}
