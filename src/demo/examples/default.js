export default function defaultExample() {
   return (
      <section className="section-wrap sm:col-span-6 lg:col-span-6">
         <h3>Default Examples</h3>
         <p className="text-sm border-b border-opacity-50 pb-4">
            Basic component functionality without custom configuration or
            styling.
         </p>
         <div className="flex flex-wrap items-center gap-3 lg:gap-2 self-start">
            <DropDown label="Dropdown Menu">
               <Menu />
            </DropDown>
            <DropDown label="Mixed Content">
               <MixedContent />
            </DropDown>
         </div>
      </section>
   )
}
