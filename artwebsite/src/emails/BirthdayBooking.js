import React from "react";

const BirthdayBooking = () => {
  const email = "artwithlarisse@gmail.com";
  const subject = "Birthday Party Request";
  const body = `Dear Art With Larisse Team,

I would like to check availability for a birthday party. Below are the details of my request:

Birthday Student Information:
- Student's Name: [Birthday Student’s Name]
- Birth Date: [MM/DD/YYYY]
- Parents' Names: [Parent 1, Parent 2]
- Primary Phone Number: [Your Contact Number]

Event Details:
- Preferred Studio Location: [Bonita, Santee, or La Mesa]
- Date of Event: [Preferred Date]
- Preferred Time: [Preferred Time] (must be after the current class schedule)
- Estimated Number of Students Attending: [Number of Students]

I understand that submitting this request does not guarantee a booking. Once availability is confirmed, I will receive a follow-up email with details on how to reserve the birthday party.

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

export default BirthdayBooking;
