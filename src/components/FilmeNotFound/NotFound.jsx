import {FaSadCry} from 'react-icons/fa'

const NotFound = () => {
  return (
    <div className='h-[55vh] mt-28 flex flex-col justify-center gap-10 items-center'>
        <h1 className='text-[1.5rem] lg:text-[2rem] font-extrabold text-shadow'>Não há filmes favoritados!</h1>
        <FaSadCry className="text-[10rem] lg:text-[20rem] text-shadow text-white relative z-10 animate-loading" />
        
    </div>
  )
}

export default NotFound