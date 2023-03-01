import React from "react";

export default function Contact() {
  return (
    // "mt-24" prevents content being covered by sticky header.  If this is bugged, verify that current "mt" value matched the "h" value in navigation.jsx
    <div className="mt-24">
      <p>Contact Me</p>
    </div>
  );
}
