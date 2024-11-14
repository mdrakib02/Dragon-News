import userImg from '../assets/user.png'
export default function NavBar() {
  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-3'>Right site bar</div>
        <div className='col-span-6'>Main Content</div>
        <div className='col-span-3'>
            <div className='flex justify-center items-center gap-2'>
                <img className='object-cover' src={userImg} alt="" />
                <button className='btn'>Login</button>
            </div>
        </div>
    </div>
  )
}
