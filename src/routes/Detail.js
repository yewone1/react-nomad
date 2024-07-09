import "./Detail.css"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
function Detail(){
  const {id} = useParams()
  const [loading, setLoading] = useState(true)
  const [detail, setDetail] = useState(null)
  const getMovie = async () =>{
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json()
    console.log(json.data.movie)
    setDetail(json.data.movie)
    setLoading(false)
  }

  useEffect(() =>{
   getMovie();
  }, [])


  return (
    <div>
      <h1>Detail</h1>
      {loading ? <p>loading ..</p> :
        <div className="detail-container" style={{ backgroundImage: `url(${detail.background_image_original})`}}>
          <img src={detail.medium_cover_image} alt="bgImg" style={{margin: "3%"}}/>
          <div className="detail-info">
            <h1>{detail.title}</h1>
            <h4>genre : {detail.genres.join('   ')}</h4>
            <p>rating : {detail.rating}</p>
            <p>runtime : {detail.runtime}</p>
            <p>uploaded : {detail.date_uploaded.split(' ')[0]}</p>
            <p>{detail.description_full}</p>
            
          </div>
        </div>
      }

    </div>
  )
}

export default Detail;