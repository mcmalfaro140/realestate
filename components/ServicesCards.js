import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class ServicesCards extends React.Component{

    constructor(){
        super()
        this.state={

        }
    }

    render(){

        return(
            
            <CardDeck className="servicecards" >
                <Card >
                    <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                    <Card.Body>
                    <Card.Title>For Buyers</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                
                </Card>
                <Card >
                    <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                    <Card.Body>
                    <Card.Title>For Sellers</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card >
                    <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                    <Card.Body>
                    <Card.Title>For Renters</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
            </CardDeck>
            
        )
    }

}