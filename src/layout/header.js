export default function Header(){
    return(
        <>
            <nav>
               <div className="nav-wrapper header_nav">
                <a className="brand-logo">Movie.uz</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a>Movie</a></li>
                </ul>
               </div>
            </nav>
        </>
    )
}