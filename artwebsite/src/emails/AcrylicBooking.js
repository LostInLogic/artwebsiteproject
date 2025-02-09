import React from "react";

const AcrylicBooking = () => {
  const email = "artwithlarisse@gmail.com";
  const subject = "Acrylic Painting Event Booking";
  const body = `Dear Art With Larisse Team,

I would love to schedule a group painting class! Please find the details of my request below:

Event Coordinator Information:
- Name: [Your Name]
- Phone Number: [Your Contact Number]
- Email: [Your Email]

Event Details:
- Preferred Dates (2-3 options): [Date 1, Date 2, Date 3]
- Preferred Time(s): [Preferred Times]
- Estimated Number of Students: [Number of Students]
- Preferred Studio Location: [Bonita, Santee, or La Mesa]
- Preferred Painting Subject (if any): [Landscape, animal, or object]

I understand that submitting this request does not guarantee a booking. Once availability is confirmed, I will be receiving a follow-up email with details on how to finalize my class.

Thank you!
Best regards,  
[Your Name]
  `.trim();

  const emailHref = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <a href={emailHref} className="email-link">
      artwithlarisse@gmail.com
    </a>
  );
};

export default AcrylicBooking;
