// import '../scss/App.scss';
import Layout from '../components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


class Home extends React.Component{
    constructor(){
        super()
    }
                    
    componentDidMount(){
        let topbar = document.getElementById("top-bar");
        topbar.classList.add("main_page_nav")
    }
    
    render(){
        return(
            <Layout>
                <div className="landing">
                    <div>
                        <div>DISCOVER YOUR DREAM HOME</div>
                        <div>
                            <input placeholder="ENTER CITY OR ZIP CODE"></input><span><FontAwesomeIcon icon={faSearch } /></span>
                        </div>
                        <div>
                            <span><FontAwesomeIcon icon={faFacebook} /></span>
                            <span><FontAwesomeIcon icon={faInstagram} /></span>
                            <span><FontAwesomeIcon icon={faTwitter } /></span>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Home;