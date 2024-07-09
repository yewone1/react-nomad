import PropTypes from "prop-types"
import {Link} from "react-router-dom"

function Movie({id, title, medium_cover_image, summary, genres}){

  return <div>
  <h2>
    <Link to={`/movie/${id}`}>{title}</Link>
  </h2>
  <img src={medium_cover_image} alt={title}/>
  <p>{summary.length > 235 ? `${summary.slice(0,235)} ...` : summary}</p>
  <ul>
     {Array.isArray(genres) ? (
        genres.map((g) => <li key={g}>{g}</li>)
      ) : (
        <li>장르 정보 없음</li>
      )}
  </ul>
</div>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;