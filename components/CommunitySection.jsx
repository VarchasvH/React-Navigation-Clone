import Link from "next/link"
import { Avatar } from "@nextui-org/react";

const CommunitySection = () => {
  return (
    <section className="h-[35rem] md:h-[22rem] bg-community-purple flex flex-col justify-around items-center p-6 md:p-10 md:flex-row">
      <div className="gap-4 pt-7 md:pt-16 w-full md:w-auto">
        <p className="font-md p-2 text-center md:text-left">React Navigation is built by <Link className="hover:underline font-bold" href='https://expo.dev/'>Expo</Link>, <Link className="hover:underline font-bold" href='https://swmansion.com/'>Software Mansion</Link>, and <Link className="hover:underline font-bold" href='https://www.callstack.com/'>Callstack</Link>, with contributions from the <Link className="hover:underline font-bold" href='https://github.com/react-navigation/react-navigation/graphs/contributors'>community</Link> and <Link className="hover:underline font-bold" href='https://github.com/sponsors/react-navigation'>sponsors</Link>:</p>

        <div className="p-4 flex flex-wrap justify-center md:justify-start gap-4">
          <Link href='https://github.com/karszawa'><Avatar radius="sm" src="https://avatars.githubusercontent.com/u/1257695?v=4" /></Link>
          <Link href='https://github.com/getsentry'><Avatar radius="sm" src="https://avatars.githubusercontent.com/u/1396951?s=200&v=4" /></Link>
          <Link href='https://github.com/JonnyBurger'><Avatar radius="sm" src="https://avatars.githubusercontent.com/u/1629785?u=f91613c118bb1fcf442a71008dff1cd5f9b30411&v=4" /></Link>
          <Link href='https://github.com/markholland'><Avatar radius="sm" src="https://avatars.githubusercontent.com/u/1764217?u=5e2e591796f65dba2551966be41b18456262856e&v=4" /></Link>
          <Link href='https://github.com/toyokumo'><Avatar radius="sm" src="https://avatars.githubusercontent.com/u/2443340?v=4" /></Link>
          <Link href='https://github.com/Kasendwa'><Avatar radius="sm" src="https://avatars.githubusercontent.com/u/3114425?u=7e7d52adb13c4b775d2991f03f63988c1dfdbce4&v=4" /></Link>
          <Link href='https://github.com/itsrifat'><Avatar radius="sm" src="https://avatars.githubusercontent.com/u/4328772?u=c4e0fd72bd7cdb3751166c8ade8ef253e6f5ba67&v=4" /></Link>
          <Link href='https://github.com/kanzitelli'><Avatar radius="sm" src="https://avatars.githubusercontent.com/u/4402166?u=72e9b6fc75353ceda74d4bab7a5043c8e18c71e7&v=4" /></Link>
          <Link href='https://github.com/ryo-rm'><Avatar radius="sm" src="https://avatars.githubusercontent.com/u/6457344?u=47e100289441b7f4681a7809202ff683886e4f5e&v=4" /></Link>
          <Link href='https://github.com/Naturalclar'><Avatar radius="sm" src="https://avatars.githubusercontent.com/u/6936373?u=4edd14e6636c45d10ac6a3eecb4b3ffa6cc2bf5c&v=4" /></Link>
          <Link href='https://github.com/radko93'><Avatar radius="sm" src="https://avatars.githubusercontent.com/u/7029942?u=5eb1fed31f05fe97bcb07227268165c4028cc662&v=4" /></Link>
          <Link href='https://github.com/EvanBacon'><Avatar radius="sm" src="https://avatars.githubusercontent.com/u/9664363?u=46ba6d5fbd29729df2950b845c9ca2cd085a1c2b&v=4" /></Link>
          <Link href='https://github.com/monkey0722'><Avatar radius="sm" src="https://avatars.githubusercontent.com/u/12868063?u=bd60f0dc2fade84162e3e78fc6ddff01e6c04dbe&v=4" /></Link>
          <Link href='https://github.com/mrousavy'><Avatar radius="sm" src="https://avatars.githubusercontent.com/u/15199031?u=5a82dcb32237282ff576c0446567a1e2fe49b868&v=4" /></Link>
          <Link href='https://github.com/sayurimizuguchi'><Avatar radius="sm" src="https://avatars.githubusercontent.com/u/23122214?u=7b3231a177e5d661d55b2cee88ea69e1713eb695&v=4" /></Link>
          <Link href='https://github.com/bowen9284'><Avatar radius="sm" src="https://avatars.githubusercontent.com/u/46625943?u=63c9ed9017c34900df8b5ae2ed455ec4c82ef8aa&v=4" /></Link>
          <Link href='https://github.com/kim-jiha95'><Avatar radius="sm" src="https://avatars.githubusercontent.com/u/66008143?u=df20807f45e886661c2f73e1647e3d5b6a712de5&v=4" /></Link>
        </div>
        <p className="font-md p-2 text-center md:text-center">If React Navigation is helpful to you, <Link className="hover:underline font-bold" href='https://github.com/sponsors/react-navigation'>consider supporting the project by sponsoring it 💜</Link></p>
      </div>
    </section>
  )
}

export default CommunitySection;