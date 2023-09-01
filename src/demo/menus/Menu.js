export default function Menu() {
   const links = [
      {
         label: 'React NPM Starter',
         href: 'https://github.com/dcooney/react-npm-starter'
      },
      {
         label: 'React Use Arrows',
         href: 'https://github.com/dcooney/react-use-arrows'
      },
      {
         label: 'React A11y Dropdown',
         href: 'https://github.com/dcooney/reacta11y-dropdown'
      },
      {
         label: 'Instant Images',
         href: 'https://github.com/dcooney/instant-images'
      },
      {
         label: 'Ajax Load More',
         href: 'https://github.com/dcooney/ajax-load-more'
      }
   ]
   return (
      <>
         <ul className="text-sm px-1">
            {links.map((link, index) => (
               <li className={index !== 0 ? 'border-t' : null} key={index}>
                  <a href={link.href} className="link-style">
                     {link.label}
                  </a>
               </li>
            ))}
         </ul>
      </>
   )
}
