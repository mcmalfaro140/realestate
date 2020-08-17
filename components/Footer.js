import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component{
  render(){
    return(
      <div className="footer">
        <div>{!this.props.contact ? "Have any questions about a property?" : "Have you seen our properties?"}<span><button type="button" className="btn btn-outline-secondary">{!this.props.contact ? "CONTACT US" : "SEE PROPERTIES"}</button></span></div>
        <div>
          <div>
            <h3>COMPANY</h3>
            <div>About Us</div>
            <div>Our Services</div>
            <div>Listings</div>
          </div>
          <div>
            <h3>CONTACT</h3>
            <div>realstate@gmail.com</div>
            <div>+ 1 800 803 6035</div>
            <div>
              <span><FontAwesomeIcon icon={faFacebook} /></span>
              <span><FontAwesomeIcon icon={faInstagram} /></span>
              <span><FontAwesomeIcon icon={faTwitter } /></span>
            </div>
          </div>
          <div>
            <h3>ADDRESS</h3>
            <div>101 The Real Road</div>
            <div>Glendale, CA.</div>
            <div>91204</div>
          </div>
        </div>
        <div>MWDesign 202. All Right Reserved.</div>
      </div>
    )
  }
}

export default Footer;