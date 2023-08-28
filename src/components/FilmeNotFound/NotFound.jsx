// import {FaSadCry} from 'react-icons/fa'


const NotFound = () => {

return (
    <div className='h-[60vh] flex flex-col justify-center items-center '>
        <h1 className='text-yellow-500 text-[1.5rem] lg:text-[2rem] font-extrabold text-shadow'>Nenhum filme encontrado!</h1>
        <img className="sm:h-[30rem] mt-10 shadow-xl" src="src/assets/img/sademoji3d.png" alt="3demoji" />
        {/* <FaSadCry className="text-[10rem] lg:text-[35rem] animate-loading mt-10" /> */}
    </div>
  )
}

export default NotFound