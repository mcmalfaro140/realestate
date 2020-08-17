
class Card extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        const address = `${this.props.properties.address} ${this.props.properties.city}, ${this.props.properties.state} ${this.props.properties.zip}, ${this.props.properties.country}.`
        return(
            <div className="porp_card">
                <div><img src={this.props.properties.img_url} alt="house"></img></div>
                <div>
                    <div>{address}</div>
                    <div>$ {this.props.properties.price}</div>
                    <div><span>Property Size: </span>{this.props.properties.size} sqt ft</div>
                    <div>
                        <div><span>Bedrooms: </span>{this.props.properties.beds}</div>
                        <div><span>Bathrooms: </span>{this.props.properties.baths}</div>
                    </div>
                    <div><button>Schedule a visit</button></div>
                </div>
            </div>
        )
    }
}

export default Card;