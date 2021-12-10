import Image from "./img/Group 52.svg";

const Section2 = () => {
    return ( 
        <>
        {/* section 2 */}

      <section className="section2">
        <div className="container">
          <h1>Why do people get involved with Cryptocurrencies?</h1>
          <div class="grid">
            <div>
              <img src={Image} alt="" />
              <h2>Easy Mode of Payment</h2>
              <p>
                People can now easily send and receive money from anywhere in
                the world to purchase goods and pay for services.
              </p>
            </div>

            <div>
              <img src={Image} alt="" />
              <h2>Financial Freedom</h2>
              <p>
                Just like the internet no single entity controls the Crypto
                network which provides users transparency and privacy, which
                puts you in absolute control of your money.
              </p>
            </div>

            <div>
              <img src={Image} alt="" />
              <h2>Investment</h2>
              <p>
                The constant demand as made Cryptocurrecies a Digital Gold used
                for alternative store of wealth on long term investments.
              </p>
            </div>
          </div>
          <div className="btn">
            <button>Learn More</button>
          </div>
        </div>
      </section>

        </>
     );
}
 
export default Section2;