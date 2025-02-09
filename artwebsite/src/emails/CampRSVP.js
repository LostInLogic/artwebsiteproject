import React from "react";

const CampRSVP = () => {
  const email = "artwithlarisse@gmail.com";
  const subject = "Art Camp RSVP Request";
  const body = `Dear Art With Larisse Team,

I want to RSVP for your summer art camp and would like to check availability. Below are the details of my request:

Student Information:
- Student Name(s): [Student Name(s)]
- Birth Date(s): [Birth Date(s)]
- Parents' Name(s): [Parent 1, Parent 2]
- Primary Phone Number: [Your Contact Number]
- Email: [Your Email]

Emergency Contact:
- Emergency Contact Name (Other than Parents): [Emergency Contact Name]
- Emergency Phone Number: [Emergency Contact Phone]

Camp Details:
- Preferred Camp Date: [Selected Camp Date]
- Studio Location: [Bonita, Santee, or La Mesa]

I understand that submitting this RSVP request does not guarantee a spot in the camp. Once availability is confirmed, I will receive a follow-up email with details on how to finalize my registration.

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

export default CampRSVP;
