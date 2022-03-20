export default function Movie({movie}){
    const {Poster, Title, Type, Year, imdbID}= movie;
    return(
        <div className="card movie">
            <div className="card-image waves-effect waves-block waves-light">
                <img alt={Title} className="activator" src={Poster}></img>
            </div>
            <div className="card-content">
                 <span className="card-title activator grey-text text-darken-4">{Title}
                 <i className="material-icons right"></i></span>
                 <p>{Year} <span className="right">{Type}</span></p>
            </div>
  </div>
)}