import {FiSearch} from 'react-icons/fi'
import './Form.css'
import { useState} from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!search) return

    navigate(`/search?q=${search}`, { replace: true })
    setSearch("")
  }
  return (
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <FiSearch/>
        </button>
      </form>
  )
}

export default Form