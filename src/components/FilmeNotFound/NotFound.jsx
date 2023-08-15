import {FaSadCry} from 'react-icons/fa'

const NotFound = () => {

return (
    <div className='h-[60vh] flex flex-col justify-center items-center '>
        <h1 className='text-[1.5rem] lg:text-[2rem] font-extrabold text-shadow'>Nenhum filme listado!</h1>
        <FaSadCry className="text-[10rem] lg:text-[35rem] animate-loading mt-10" />
    </div>
  )
}

export default NotFound