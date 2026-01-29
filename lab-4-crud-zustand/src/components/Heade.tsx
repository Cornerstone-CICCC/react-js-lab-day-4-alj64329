import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Heade = (props: Props) => {
  return (
        <header className="flex justify-between items-center p-2 bg-gray-200 mb-4">
      <div className="font-bold text-xl">LOGO</div>
      <nav>
        <menu className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </menu>
      </nav>
    </header>
  )
}

export default Heade