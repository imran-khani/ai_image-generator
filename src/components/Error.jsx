import { Link } from 'react-router-dom'

const error = () => {
  return (
    <div>
        <h1>page not found</h1>
        <Link to='/'>Go to Home</Link>
    </div>
  )
}

export default error