import React from "react";

const ScoutBooking = () => {
  const email = "artwithlarisse@gmail.com";
  const subject = "Acrylic Painting Event Booking";
  const body = `Dear Art With Larisse Team,

I am interested in scheduling a scout group class and would like to check availability. Below are the details of our request:

Scout Group Information:
- Estimated Number of Scouts: [Number of Scouts]
- Troop Leader's Name: [Leader's Name]
- Ages of Scouts: [Age Range]
- Primary Phone Number: [Your Contact Number]
- Email: [Your Email]

Event Details:
- Preferred Dates (2-3 options): [Date 1, Date 2, Date 3]
- Studio Location of Choice: [Bonita, Santee, or La Mesa]
- Will You Be Purchasing $2 Patches? [Yes/No]

I understand that submitting this request does not guarantee a booking. Once availability is confirmed, I will receive a follow-up email with details on how to confirm our group class.


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

export default ScoutBooking;
