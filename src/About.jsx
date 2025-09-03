function About() {
  return (
    <section
      id="about"
      className="about-section"
      style={{ backgroundImage: `url('./about_section.jpeg')` }}
    >
      <div className="about-content">
        <h1>About us</h1>
        <p>
          This site is used for calculation to get an estimated amount of
          ready-mix concrete you need for your project with our easy-to-use SLAB
          CALCULATOR.
          <br />
          Basically this site is creted for those people who have zero knowledge
          about SLAB calculation. This site give you the facility of calculating
          the RMC mixture material,Total area of your slab in sqft,total
          material need in your slab,and estimated over all cost
          <br />
          यह साइट आपकी सुविधा के लिए बनायीं गयी है। इसकी मदद से आप अपने घरो में
          पड़ने वाले स्लैब (छत) के विषय में पूरी जानकारी प्राप्त कर सकते है। जैसे
          की कुल लगत , कुल सामान ,मजदुर लागत ,RMC (pressure pipe) के विषय में
          जानकारी और उसकी कुल लागत , लिफ्ट के द्वारा स्लैब पड़ने की कुल लागत
          इत्यादि।
        </p>
      </div>
    </section>
  );
}
export default About;
