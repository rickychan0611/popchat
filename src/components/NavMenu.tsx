import { useRouter } from "next/router"

const NavMenu = () => {
  const router = useRouter()
  
  return (
    <div className='flex flex-1 flex-row justify-center items-center mx-8 z-10 gap-10 mb-8 text-[#3ECFEF] sm:hidden'>
      <div className='tracking-wide text-[16px] cursor-pointer '
        onClick={() => router.push('/why-aime')}>WHY AI ME</div>
      <div className='tracking-wide text-[16px] cursor-pointer '
        onClick={() => router.push('/pricing')}>PRICING</div>

    </div>
  )
}

export default NavMenu