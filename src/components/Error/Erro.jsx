import { Link } from "react-router-dom"

// import { RiBubbleChartLine } from 'react-icons/ri';
// import { motion } from 'framer-motion';

function Erro(){
  
  return (
    <div className="custom-error-page ">
      <h1 className=" text-4xl sm:text-6xl font-bold mb-5">404 - Página não encontrada</h1>
      <Link to="/Home">Você sera redirecionado em: </Link>
      {/* <div className="relative">
        <motion.div
          initial={{ y: -20 }}
         animate={{ y: 100 }}
         transition={{
           repeat: Infinity,
           duration: 2,
           repeatType: 'reverse',
         }}
        >
         <RiBubbleChartLine className="text-red-500 text-[3rem] " />
        </motion.div>
        <motion.div
         initial={{ y: 50 }}
         animate={{ y: -10 }}
         transition={{
           repeat: Infinity,
           duration: 3,
           repeatType: 'reverse',
         }}
       >
         <RiBubbleChartLine className="text-purple-400 text-[5rem]" />
        </motion.div>
        <motion.div
         initial={{ y: 50 }}
         animate={{ y: 150 }}
         transition={{
           repeat: Infinity,
           duration: 2.5,
           repeatType: 'reverse',
         }}
       >
          <RiBubbleChartLine className="text-orange-500 text-[4rem]" />
        </motion.div>
      </div> */}
    </div>
  )
}

export default Erro;