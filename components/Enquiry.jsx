import React, { useState, useRef } from "react"
import { IoIosArrowForward } from "react-icons/io"
import { toast, Toaster } from "react-hot-toast"
import emailjs from "@emailjs/browser"

const Enquiry = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleSidebar = () => {
    setIsActive(!isActive)
  }

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
    <div className={`sidebar-contact ${isActive ? "active" : ""}`}>
      <div
        className={`toggle ${isActive ? "active" : ""}`}
        onClick={toggleSidebar}
      >
        <IoIosArrowForward />
      </div>
      <h2>Contact Us</h2>
      <div className="scroll">
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
  )
}

export default Enquiry
