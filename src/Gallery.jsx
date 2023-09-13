import axios from "axios"
import { useGlobalContext } from "./context"
import { useQuery } from "@tanstack/react-query"
import customFetch from "./utils"
const Gallery = () => {
  const {itemsImg}=useGlobalContext()
  // console.log(searchTerm)
  const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`; 
  console.log(import.meta.env.VITE_API_KEY)
     const response = useQuery({
      queryKey:['img',itemsImg],
      queryFn:async () =>{
        const result = await axios.get(`${url}&query=${itemsImg}`)
        return result
      }
    })
     if(response.isLoading){
      return (
        <section className="image-container">
          <h4>Loading...</h4>
        </section>
      )
    }
    if(response.isError){
      return (
        <section className="image-container">
          <h4>There was an Error...</h4>
        </section>
      )
    }
    const res = response.data.data.results
    if(res.length < 1){
      <section className="image-container">
      <h4>No results Found...</h4>
    </section>
    }
  return (
    <section className="image-container">
        {res.map((item)=>{
          const url=item?.urls?.regular
          return(
            <img src={url} key={item.id} alt={item.alt_description} className="img"/>
          )
        })}
    </section>
  )
}

export default Gallery