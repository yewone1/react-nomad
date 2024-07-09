import "./Detail.css"
import { useParams, Link } from "react-router-dom"
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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>Detail</h1>
        <Link to={'/'}>
          <button style={{ marginLeft: '10px', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>Home</button>
        </Link>
      </div>
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