import React, { useState } from "react"
import Image from "next/image"
import { toast, Toaster } from "react-hot-toast"

const Booking = ({ selectedCard }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const handleFormSubmit = event => {
    event.preventDefault()
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
  }

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
              <div class="card-container">
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
              </div>
              <div>
                <div className="text-center">
                  <h4>Contact us</h4>
                </div>
                <div className="container mt-5">
                  <form onSubmit={handleFormSubmit}>
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
