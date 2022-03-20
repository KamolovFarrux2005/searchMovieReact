import Movie from "./Movie";
function Movies(props){
    const {movie = []} = props;
    
    return(
        <div className="movies">
            {movie.length ? movie.map(movie => (
                <Movie key={movie.imdbID} movie={movie} />
            )) : <h3>Not found</h3> }

        </div>
    )
}

export default Movies