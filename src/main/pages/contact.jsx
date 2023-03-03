import React from "react";

/* TODO:
1) set state to render error messages
  * if email invalid, render message
  * if text field = '', render "<missing field> is required!"
1) make it look good
2) set it up to be hooked up to Nodemailer
*/

export default function Contact() {
  return (
    // "mt-24" prevents content being covered by sticky header.  If this is bugged, verify that current "mt" value matched the "h" value in navigation.jsx
    <main className="overflow-auto">
      <h1 className="text-center font-bold text-4xl m-5">Contact Me!</h1>
      {/* render error message if user clicks outside form without inputting all fields */}
      <form action="send-to-nodemailer" className="flex flex-col w-1/4 mx-auto">
        <label className="my-2">Name:</label>
        <input className="bg-stone-500 rounded-lg  p-2" type="text" />
        <label className="my-2">Email:</label>
        {/* refactor to use custom error handling */}
        <input className="bg-stone-500 rounded-lg  p-2" type="email" />
        <label className="my-2">Message:</label>
        <textarea className="bg-stone-500 rounded-lg h-56 p-2" type="text" />
        <button type="submit" className="bg-stone-600 hover:bg-stone-500 rounded-full w-24 h-12 mt-3">Submit</button>
      </form>
    </main>
  );
}
