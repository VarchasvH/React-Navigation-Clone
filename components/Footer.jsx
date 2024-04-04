import Link from "next/link"
const Footer = () => {
  return (
    <footer className="h-auto md:h-[15rem] w-full flex flex-col justify-around items-start p-10 md:flex-row bg-gray-bg">
          <div className="pt-3 pb-10">
            <ul>
              <p className="text-slate-100 font-bold pb-4">Docs</p>
              <li className="text-zinc-300 text-md font-semibold pb-2 cursor-pointer hover:text-violet-500 hover:underline">
                <Link href='https://reactnavigation.org/docs/getting-started'>Getting Started</Link>
              </li>
              <li className="text-zinc-300 text-md font-semibold pb-2 cursor-pointer hover:text-violet-500 hover:underline">
              <Link href='https://reactnavigation.org/docs/custom-navigators'>Building your own Navigator</Link>
              </li>
              <li className="text-zinc-300 text-md font-semibold pb-2 cursor-pointer hover:text-violet-500 hover:underline">
              <Link href ='https://reactnavigation.org/docs/contributing'>Contributing</Link>
              </li>
            </ul>
          </div>
          <div className="pt-3 pb-5">
            <ul>
              <p className="text-slate-100 font-bold pb-4">Support</p>
              <li className="text-zinc-300 text-md font-semibold pb-2 cursor-pointer hover:text-violet-500 hover:underline">
                <Link href='https://discord.com/invite/reactiflux'>Chat in our Discord channel</Link>
              </li>
              <li className="text-zinc-300 text-md font-semibold pb-2 cursor-pointer hover:text-violet-500 hover:underline">
              <Link href ='https://stackoverflow.com/questions/tagged/react-navigation'>Get help on Stack Overflow</Link>
              </li>
              <li className="text-zinc-300 text-md font-semibold pb-2 cursor-pointer hover:text-violet-500 hover:underline">
              <Link href='https://react-navigation.canny.io/feature-requests'>Request a feature on Canny</Link>
              </li>
              <li className="text-zinc-300 text-md font-semibold pb-2 cursor-pointer hover:text-violet-500 hover:underline">
              <Link href='https://github.com/react-navigation/react-navigation/issues/new/choose'>Report a bug on GitHub</Link>
              </li>
            </ul>
          </div>
          <div className="pt-3 pb-5">
            <ul>
              <p className="text-slate-100 font-bold pb-4">Social</p>
              <li className="text-zinc-300 text-md font-semibold pb-2 cursor-pointer hover:text-violet-500 hover:underline">
                <Link href='https://reactnavigation.org/blog'>Blog</Link>
              </li>
              <li className="text-zinc-300 text-md font-semibold pb-2 cursor-pointer hover:text-violet-500 hover:underline">
              <Link href='https://github.com/react-navigation/react-navigation'>GitHub</Link>
              
              </li>
              <li className="text-zinc-300 text-md font-semibold pb-2 cursor-pointer hover:text-violet-500 hover:underline">
              <Link href='https://twitter.com/reactnavigation'>Twitter</Link>
              </li>
            </ul>
          </div>
          <div className="pt-3 pb-5">
            <ul>
              <p className="text-slate-100 font-bold pb-4">Built with</p>
              <li className="text-zinc-300 text-md font-semibold pb-2 cursor-pointer hover:text-violet-500 hover:underline">
              <Link href='https://docusaurus.io/'>Docusaurus</Link>
              </li>
              <li className="text-zinc-300 text-md font-semibold pb-2 cursor-pointer hover:text-violet-500 hover:underline">
              <Link href='https://pages.github.com/'>GitHub Pages</Link>
              </li>
              <li className="text-zinc-300 text-md font-semibold pb-2 cursor-pointer hover:text-violet-500 hover:underline">
              <Link href='https://www.netlify.com/'>Netlify</Link> 
              </li>
            </ul>
          </div>
          
    </footer>
  )
}

export default Footer