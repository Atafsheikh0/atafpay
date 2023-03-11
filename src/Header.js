import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
              {/* main-header left-side */}

              <h1 className="display-2">
                Online Payment Made <br /> Easy For You.
              </h1>
              <p className="main-hero-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                natus non assumenda beatae aspernatur perferendis. Quas,
                explicabo. Doloremque, nemo vitae autem perspiciatis praesentium
                quia dolore optio aperiam magnam veniam inventore fuga pariatur
                sed non esse.
              </p>
              <h3>Get early access for you.</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="rounded-pill w-50 me-3 p-2 form-control-text"
                />
                <div className="input-group-text">Get it now</div>
              </div>
            </div>

            {/* main-header right-side */}
            <div className="col-lg-6 col-12 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="./images/hero1.jpg"
                className="img-fluid"
                alt="hero-img"
              />

              <img
                src="./images/hero4.jpg"
                className="img-fluid main-heroimg-2"
                alt="hero-img"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
