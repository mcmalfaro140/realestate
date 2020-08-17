import Layout from '../components/layout';
import Footer from '../components/Footer'
import FormContact from '../components/FormContact'


const Contact = () => (
      <Layout>
        <div>
            <div className= "contact">
                <div >
                    <div>
                            <h1>Glendale</h1>
                            <h1>Real State</h1>
                            <p>101 The Real Road Glendale, 90017</p>
                    </div>
                </div>
                <div> 
                    <FormContact/>  
                </div>
            </div>
        <Footer contact={true}/>
        </div>
    </Layout>
     
);
export default Contact;