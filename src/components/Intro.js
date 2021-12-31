export default function Intro() {
   return (
      <>
         <h1 className="text-4xl font-black mb-2 pt-6">React A11y DropDown</h1>
         <h2 className="text-2xl font-thin opacity-75 pb-5 border-b mb-5">
            An accessible and unopinionated dropdown component for{' '}
            <a
               href="https://www.reactjs.org"
               className="underline hover:no-underline text-sky-700"
            >
               React
            </a>{' '}
            with full keyboard support.
         </h2>
         <p className="font-normal mb-6">
            Use the tab key in combination with your keyboard up/down arrows to
            navigate through the drop menu's and content.
            <br />
            &rarr;{' '}
            <a
               href="https://github.com/dcooney/react-a11y-dropdown"
               className="font-semibold text-sky-700 hover:underline inline-block py-1"
            >
               View on Github
            </a>
         </p>
      </>
   )
}
