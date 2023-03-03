import React, { useState } from "react";
import { validateEmail } from "../../helpers/helpers";

/* TODO:
1) set state to render error messages
  * if email invalid, render message
  * if text field = '', render "<missing field> is required!"
1) make it look good
2) set it up to be hooked up to Nodemailer
*/

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleInputChange(e) {
    const { target } = e;
    const type = target.name;
    const value = target.value;

    if (type === "name") {
      setName(value);
    } else if (type === "email") {
      setEmail(value);
    } /* message */ else {
      setMessage(value);
    }
    return;
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address!");
      return;
    }
    if (!name && !message) {
      setError("Please leave a name and message!");
      return;
    }
    if (!name) {
      setError("Please enter your name!")
      return
    }
    if (!message) {
      setError("Please leave a message!")
      return
    }
    setName("");
    setEmail("");
    setMessage("");

    // removes the error message if user fills out the form correctly
    setError("Thank you for your message!  I will respond within 72 hours.");
    return;
  }

  return (
    // "mt-24" prevents content being covered by sticky header.  If this is bugged, verify that current "mt" value matched the "h" value in navigation.jsx
    <main className="overflow-auto">
      <h1 className="text-center font-bold text-4xl m-5">Contact Me!</h1>
      {/* render error message if user clicks outside form without inputting all fields */}
      <form action="send-to-nodemailer" className="flex flex-col w-1/4 xs:w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/5 xl:1/3 mx-auto">
        <label className="my-2">Name:</label>
        <input
          className="placeholder:text-white placeholder:opacity-75 bg-stone-500 rounded-lg p-2"
          type="text"
          value={name}
          name="name"
          placeholder="Enter your name..."
          onChange={handleInputChange}
        />
        <label className="my-2">Email:</label>
        {/* refactor to use custom error handling */}
        <input
          className="placeholder:text-white placeholder:opacity-75 bg-stone-500 rounded-lg  p-2"
          type="email"
          value={email}
          name="email"
          placeholder="Enter your email..."
          onChange={handleInputChange}
        />
        <label className="my-2">Message:</label>
        <textarea
          className="placeholder:text-white placeholder:opacity-75 bg-stone-500 rounded-lg h-56 p-2"
          type="text"
          value={message}
          name="message"
          placeholder="Leave me a message!"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-stone-600 hover:bg-stone-500 rounded-full w-24 h-12 mt-3"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
      {error && <p className="text-center text-red-500 ">{error}</p>}
    </main>
  );
}
