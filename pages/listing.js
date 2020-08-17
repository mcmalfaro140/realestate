import Layout from '../components/layout';
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar';
import Card from '../components/Card'


class Listing extends React.Component{
    constructor(){
        super()
        this.state = {
            listings: [
                {
                    address: "345 W Windsor Rd",
                    city: "Glendale",
                    state: "CA",
                    zip: "91204",
                    country: "USA",
                    price: 1300000,
                    size: 1100,
                    beds: 5,
                    baths: 4,
                    img_url:"/images/slide.jpg"
                },
                {
                    address: "1425 The Real Rd",
                    city: "Glendale",
                    state: "CA",
                    zip: "91230",
                    country: "USA",
                    price: 34000,
                    size: 100,
                    beds: 2,
                    baths: 4,
                    img_url:"/images/slide4.jpg"
                },
                {
                    address: "89 E Los Angeles St",
                    city: "Los Angeles",
                    state: "CA",
                    zip: "90211",
                    country: "USA",
                    price: 4000000,
                    size: 2100,
                    beds: 6,
                    baths: 8,
                    img_url:"/images/slide3.jpg"
                }
            ]
        }
    }
    render(){
        const items = this.state.listings.map((item, i) => {
            return(
                <Card key={i} properties={item} />
            )
        })
        return(
            <Layout>
                <div className="listings">
                    <div><span></span>Search All Our Properties</div>
                    <SearchBar/>
                    <div><span></span>Results for Glendale</div>
                    <div id="container">
                        {items}
                        {items}
                        {items}
                    </div>
                    <div>
                        <ul className="pagination">
                            <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </div>
                </div>
                <Footer/>
            </Layout>
        )
    }
}

export default Listing;