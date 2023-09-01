export default function MenuSearch() {
   const links = [
      {
         label: 'About Us',
         href: '/'
      },
      {
         label: 'Board of Directors',
         href: '/'
      },
      {
         label: 'Our Locations',
         href: '/'
      },
      {
         label: 'Contact Us',
         href: '/'
      },
      {
         label: 'Investor Relations',
         href: '/'
      }
   ]
   return (
      <ul className="text-sm">
         {links.map((link, index) => (
            <li className={index !== 0 ? 'border-t' : null} key={index}>
               <a href={link.href} className="link-style">
                  {link.label}
               </a>
            </li>
         ))}
      </ul>
   )
}
