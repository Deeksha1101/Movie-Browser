import Hero from "./Hero";
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const detailUrl = `/movies/${movie.id}`
  const Poster = `'https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg'`

  function RenderPoster() {
    if (movie.poster_path == null) {
      return (
        <img
          src={Poster}
          className='card-img-top my-5 py-2 mh-100'
          alt={movie.original_title}
          
        />
      )
    } else {
      return (
        <img
          src={posterUrl}
          className='card-img-top mh-100'
          alt={movie.original_title}
        />
      );
    }

    }
  

  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
      <RenderPoster />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">Show details</Link>
        </div>
      </div>
    </div>
  )
}


const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />
  })

  const RenderSearchResult = () => {
		if (searchResults.length > 0) {
			return (
				<div className='container'>
					<div className='row'>{resultsHtml}</div>
				</div>
			)
		} else {
			return (
				<>
					<h1 className='text-center mt-5'>
					No results found
					</h1>
          <h1 className='text-center mt-5'>
				try something else
					</h1>
				
				</>
			);
		}
	}

  return (
    <>
      <Hero text={title} />
      <RenderSearchResult />
      {resultsHtml &&
        <div className="container">
          <div className="row">
            {resultsHtml}
          </div>
        </div>
      }
    </>
  );
};

export default SearchView;
