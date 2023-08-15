// import {Link} from "react-router-dom"
const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[60vh] custom-error-page mt-28 ">
        {/* <h1 className=" text-3xl text-neutral-200 sm:text-6xl font-bold ">404 - Página não encontrada</h1> */}
        {/* <Link className="mb-5" to="/Home">Você sera redirecionado em: </Link> */}
        <div className="animate-spin rounded-full border-t-8 shadow-sm border-yellow-500 border-solid h-64 w-64 m-auto flex">
          <div className="animate-spin rounded-full border-t-4 shadow-md border-yellow-800 border-solid h-32 w-32 m-auto flex">
          <div className="animate-spin rounded-full border-t-2 shadow-md border-yellow-900 border-solid h-16 w-16 m-auto flex"></div>
          </div>
        </div>
    </div>
   
  )
}

export default Loading