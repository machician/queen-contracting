// app/api/submit-form/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { formType, ...formData } = data;

    // Send to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,
        subject: formType === "contact" 
          ? `Queen Contracting: New Contact Form from ${formData.fullName}`
          : `Queen Contracting: New ${formType === "contractor" ? "Contractor" : "Trainee"} Application`,
        from_name: formData.fullName,
        from_email: formData.email,
        message: formType === "contact" 
          ? `
            CONTACT FORM:
            Name: ${formData.fullName}
            Email: ${formData.email}
            Message: ${formData.message}
          `
          : formType === "contractor"
          ? `
            CONTRACTOR APPLICATION:
            Name: ${formData.fullName}
            Email: ${formData.email}
            Phone: ${formData.phone || "Not provided"}
            Company: ${formData.companyName}
            Years in Business: ${formData.yearsInBusiness || "Not specified"}
            Certifications: ${formData.certifications || "None"}
            NAICS Codes: ${formData.naicsCodes || "Not provided"}
            Contract Types: ${formData.contractTypes?.join(", ") || "Not specified"}
            Experience: ${formData.experience || "None"}
          `
          : `
            TRAINEE APPLICATION:
            Name: ${formData.fullName}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Zip Code: ${formData.zipCode}
            Date of Birth: ${formData.dateOfBirth}
            Education: ${formData.education || "Not specified"}
            Currently Employed: ${formData.currentlyEmployed || "Not specified"}
            Industry Interests: ${formData.industryInterests?.join(", ") || "Not specified"}
            Previous Experience: ${formData.previousExperience || "None"}
            How Heard: ${formData.heardAbout || "Not specified"}
            Work Eligible: ${formData.workEligibility ? "Yes" : "No"}
          `,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      console.error("Web3Forms error:", result);
      throw new Error("Web3Forms submission failed");
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}