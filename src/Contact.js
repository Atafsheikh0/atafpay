import React, { useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connecting with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;
    if (firstName && lastName && phone && email && address && message) {
      const res = fetch(
        "https://ataf-react-firebase-project-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );
      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("Please fill the Data");
      }
    } else {
      alert("Please fill the data");
    }
  };

  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contactus-leftside col-12 col-lg-5">
                  <h1 className="main-heading">
                    Connect with our <br /> Sales Team.
                  </h1>

                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veritatis ipsa quaerat aut omnis animi esse voluptatibus
                    quidem laborum dolorem?
                  </p>

                  <figure>
                    <img
                      src="./images/hero1.jpg"
                      className="img-fluid"
                      alt="contactus-img"
                    />
                  </figure>
                </div>

                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          id=""
                          name="firstName"
                          className="form-control"
                          placeholder="Full Name"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>

                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          id=""
                          name="lastName"
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.lastName}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          id=""
                          name="phone"
                          className="form-control"
                          placeholder="Phone Number"
                          value={userData.phone}
                          onChange={postUserData}
                        />
                      </div>

                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          id=""
                          name="email"
                          className="form-control"
                          placeholder="Your Email"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row contact-input-field">
                      <div className="col-12">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                          value={userData.address}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control "
                          placeholder="Enter Your Message"
                          value={userData.message}
                          onChange={postUserData}
                        />
                      </div>

                      <div class="form-check form-checkbox-style">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label
                          className="form-check-label main-hero-para"
                          for="flexCheckChecked"
                        >
                          I agree that the Lorem ipsum dolor sit amet
                          consectetur adipisicing elit.
                        </label>
                      </div>

                      <button
                        type="submit"
                        onClick={submitData}
                        className="btn btn-style w-100"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
