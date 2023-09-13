import { useState } from "react"
import { useGlobalContext } from "./context"

const SearchForm = () => {
  const {setItemImg}=useGlobalContext()
  const handleSubmit = (e)=>{
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    if(searchValue === undefined) return 
    setItemImg(searchValue)
  }
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" className="form-input search-input" name="search"
        placeholder="cat"/>
        <button type="submit" className="btn">search</button>
      </form>
      </section>
  )
}

export  default SearchForm