import Logo from '../../Components/Logo'
import User from '../User'

export default function Header() {
  return (
    <div className='text-white flex flex-col px-2 py-6'>
      <div className='max-w-5xl w-full my-0 mx-auto flex flex-row items-center justify-between'>
        <Logo />
        <User name="Rodrigo" />
      </div>
    </div>
  )
}
