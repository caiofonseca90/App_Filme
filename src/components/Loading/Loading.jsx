import {Link} from "react-router-dom"
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen custom-error-page ">
        <h1 className=" text-3xl sm:text-6xl font-bold mb-5">404 - Página não encontrada</h1>
        <Link className="mb-5" to="/Home">Você sera redirecionado em: </Link>
        <div className="animate-spin rounded-full border-t-2 border-neutral-900 border-solid h-28 w-28"></div>
    </div>
  )
}

export default Loading