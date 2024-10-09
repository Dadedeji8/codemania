
import { Link } from 'react-router-dom'
const ErrorPage = () => {
    return (
        <div className='mt-10'>
            PATH NOT FOUND <Link to={'/'}>            <button className='bg-blue-800 text-white py-3 px-6 rounded-lg hover:bg-green-700'>
                GO HOME
            </button></Link>

        </div>
    )
}

export default ErrorPage
