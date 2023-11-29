import React, { useState } from "react"
import { IoIosArrowForward } from "react-icons/io"

const Enquiry = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleSidebar = () => {
    setIsActive(!isActive)
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  })

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // You can handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
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
        <form>
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
