export default function Footer(){
    return(
        <>
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                © {new Date().getFullYear()} Copyright  
                <a className="grey-text text-lighten-4 right" href="https://t.me/nodejs5">Owner</a>
                </div>
            </div>
        </footer>
        </>
    )
}