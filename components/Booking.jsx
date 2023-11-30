import React, { useRef, useState } from "react"

import Image from "next/image"
import { toast, Toaster } from "react-hot-toast"
import emailjs from "@emailjs/browser"

const Booking = ({ selectedCard }) => {
  const formRef = useRef()

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const handleFormSubmit = event => {
    event.preventDefault()
    emailjs
      .send(
        "service_b7aditv",
        "template_5g1rffi",
        {
          from_name: formData.name,
          to_name: "Sanin",
          from_email: formData.email,
          to_email: "destinations132@gmail.com",
          phone: formData.phone,
          email: formData.email,
        },
        "hQBCj-2MI90tn5j5B"
      )
      .then(result => {
        if (formData.name && formData.phone && formData.email) {
          toast.success("Booking request submitted successfully!")
        } else {
          toast.error("Please fill out all required fields.")
        }
        setFormData({
          name: "",
          phone: "",
          email: "",
        })
      })
  }
  // service_b7aditv
  // hQBCj-2MI90tn5j5B
  // template_5g1rffi

  const handleInputChange = event => {
    const { id, value } = event.target
    setFormData({
      ...formData,
      [id]: value,
    })
  }

  return (
    <>
      {selectedCard && (
        <div id="booking">
          <div className="booking-wrapper">
            <div>
              <h1 className="title">Booking section</h1>
              <p className="desc">- FullFill your dream</p>
            </div>
            <div className="booking-body">
              {/* <div class="card-container">
                <div class="card-image">
                  <Image
                    src={`https://firebasestorage.googleapis.com/v0/b/destinations-6c6a6.appspot.com/o/${selectedCard.image}`}
                    width={150}
                    height={150}
                    objectFit="cover"
                    alt="Circular Image"
                  />
                </div>
                <div class="card-content">
                  <h1 class="card-title">{selectedCard.name}</h1>
                  <div class="rating">
                    {selectedCard.rating} <span>&#9733;</span>{" "}
                  </div>
                  <p class="card-description">{selectedCard.desc}</p>
                </div>
              </div> */}
              <div className="booking-card">
                <div className="card-image">
                  <Image
                    src={`https://firebasestorage.googleapis.com/v0/b/destinations-6c6a6.appspot.com/o/${selectedCard.image}`}
                    width={150}
                    height={150}
                    objectFit="cover"
                    alt="Circular Image"
                  />
                </div>
                <div className="booking-content">
                  <div class="rating">
                    {selectedCard.rating} <span>&#9733;</span>{" "}
                  </div>
                  <p style={{ fontSize: "15px", color: "" }}>Details :</p>
                  {/* <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      textAlign: "left",
                    }}
                  >
                    <li style={{ marginBottom: "10px", fontSize: "12px" }}>
                      Destination:{" "}
                      <span
                        style={{
                          fontWeight: "600",
                          marginLeft: "5px",
                          fontSize: "20px",
                          backgroundColor: "black",
                          padding: "5px",
                          backgroundColor: "#0056b3",
                          borderRadius: "5px",
                          textTransform: "uppercase",
                        }}
                      >
                        {selectedCard.name}
                      </span>
                    </li>
                    <li style={{ marginBottom: "10px", fontSize: "12px" }}>
                      Adults:
                      <span
                        style={{
                          fontWeight: "600",
                          marginLeft: "5px",
                          fontSize: "20px",
                          backgroundColor: "black",
                          padding: "5px",
                          backgroundColor: "#0056b3",
                          borderRadius: "5px",
                          textTransform: "uppercase",
                        }}
                      >
                        2
                      </span>
                    </li>{" "}
                    <li style={{ marginBottom: "10px", fontSize: "12px" }}>
                      Destination:{" "}
                      <span
                        style={{
                          fontWeight: "600",
                          marginLeft: "5px",
                          fontSize: "20px",
                          backgroundColor: "black",
                          padding: "5px",
                          backgroundColor: "#0056b3",
                          borderRadius: "5px",
                          textTransform: "uppercase",
                        }}
                      >
                        {selectedCard.name}
                      </span>
                    </li>{" "}
                    <li style={{ marginBottom: "10px", fontSize: "12px" }}>
                      Destination:{" "}
                      <span
                        style={{
                          fontWeight: "600",
                          marginLeft: "5px",
                          fontSize: "20px",
                          backgroundColor: "black",
                          padding: "5px",
                          backgroundColor: "#0056b3",
                          borderRadius: "5px",
                          textTransform: "uppercase",
                        }}
                      >
                        {selectedCard.name}
                      </span>
                    </li>{" "}
                    <li style={{ marginBottom: "10px", fontSize: "12px" }}>
                      Destination:{" "}
                      <span
                        style={{
                          fontWeight: "600",
                          marginLeft: "5px",
                          fontSize: "20px",
                          backgroundColor: "black",
                          padding: "5px",
                          backgroundColor: "#0056b3",
                          borderRadius: "5px",
                          textTransform: "uppercase",
                        }}
                      >
                        {selectedCard.name}
                      </span>
                    </li>
                  </ul> */}
                  <table>
                    <tr>
                      <th>Destination: </th>
                      <td
                        style={{
                          fontWeight: "600",
                          marginLeft: "5px",
                          fontSize: "15px",
                          backgroundColor: "black",
                          padding: "5px",
                          backgroundColor: "#0056b3",
                          borderRadius: "5px",
                          textTransform: "uppercase",
                        }}
                      >
                        {selectedCard.name}
                      </td>
                    </tr>
                    <tr>
                      <th>Adults: </th>
                      <td>2</td>
                    </tr>
                    <tr>
                      <th>Date: </th>
                      <td>29 September 2009</td>
                    </tr>
                  </table>
                </div>
              </div>

              <div style={{ height: 100, backgroundColor: "black" }}></div>
              <div className="pb-5">
                <div className="text-center">
                  <h4>Contact us</h4>
                </div>
                <div className="container mt-5">
                  <form ref={formRef} onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-group">
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="phone">Phone Number</label>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
// template_ioy40ac
// service_bhwfq4p
export default Booking
