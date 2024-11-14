import logo from '../assets/logo.png'

export default function Header() {
  return (
    <div>
        <div className="logo py-2 flex justify-center flex-col items-center gap-2">
            <img className='w-[300px] mx-auto object-cover' src={logo} alt="" />
            <h1 className='text-gray-400 text-center'>Journalism Without Fear or Favour</h1>
        </div>
    </div>
  )
}
