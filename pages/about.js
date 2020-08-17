import Layout from '../components/layout';
import Footer from '../components/Footer'
import ServicesCards from '../components/ServicesCards'

const About = () => (
  <Layout>
    <div className="about">
      <div>
        <div>
          <div>
            About Us
            <div>Glendale</div>
            <div>Real State</div>
          </div>

          <div>
            <div>Who are we?</div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/agents.jpeg" />
        </div>
      </div>

      <div>
        <div>Our Services</div>
        <div>
          <ServicesCards />
        </div>
      </div>

      <div>
        <div>
          <img src="/images/agent2.jpg" />
        </div>
        <div>
          <div>Our Promise to you</div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </Layout>
);
export default About;
