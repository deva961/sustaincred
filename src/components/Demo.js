import React, { useState } from "react";

const Demo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    enquiry: "",
  });

  const emailData = useState({
    to: 'allala.rajesh1998@gmail.com',
    subject: formData.companyName,
    message: formData.enquiry,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Email sent:", data);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div
      className="max-w-7xl mx-auto my-14 px-7 leading-relaxed tracking-wide"
      id="product"
    >
      <p className="font-bold max-w-xl xl:text-3xl text-softprimary">
        Begin your carbon credits journey with SustainCred
      </p>
      <p className="xl:text-4xl font-bold">Book a free demo now</p>

      <form className="my-5 space-y-5" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            className="rounded-full border border-black outline-none focus:outline-none p-2.5 w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="rounded-full border border-black outline-none focus:outline-none p-2.5 w-full"
          />
        </div>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleInputChange}
          className="rounded-full border border-black outline-none focus:outline-none p-2.5 w-full"
        />
        <input
          type="text"
          name="email"
          placeholder="Business Email ID"
          value={formData.email}
          onChange={handleInputChange}
          className="rounded-full border border-black outline-none focus:outline-none p-2.5 w-full"
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          className="rounded-full border border-black outline-none focus:outline-none p-2.5 w-full"
        />
        <textarea
          name="Enquiry"
          className="resize-none focus:outline-none outline-none border border-black w-full p-2.5 rounded-xl"
          id=""
          cols="30"
          rows="10"
          placeholder="What are you looking for?"
          value={formData.enquiry}
          onChange={handleInputChange}
        ></textarea>

        <button
          className="w-full bg-softprimary text-white rounded-full font-bold text-3xl py-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Demo;
