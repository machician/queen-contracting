// app/join/page.tsx - Dual form with toggle (FIXED)
"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

type ContractorFormData = {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  yearsInBusiness: string;
  certifications: string;
  naicsCodes: string;
  contractTypes: string[];
  experience: string;
};

type TraineeFormData = {
  fullName: string;
  email: string;
  phone: string;
  zipCode: string;
  dateOfBirth: string;
  education: string;
  currentlyEmployed: string;
  industryInterests: string[];
  previousExperience: string;
  heardAbout: string;
  workEligibility: boolean;
};

type FormType = "contractor" | "trainee";

export default function JoinNetwork() {
  const [formType, setFormType] = useState<FormType>("contractor");
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const contractorForm = useForm<ContractorFormData>();
  const traineeForm = useForm<TraineeFormData>();

  const onSubmitContractor = async (data: ContractorFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "contractor", ...data }),
      });
      
      if (response.ok) {
        setSubmittedData({ type: "contractor", ...data });
        setSubmitted(true);
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmitTrainee = async (data: TraineeFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "trainee", ...data }),
      });
      
      if (response.ok) {
        setSubmittedData({ type: "trainee", ...data });
        setSubmitted(true);
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="container-custom py-20 text-center max-w-2xl mx-auto">
        <div className="border border-gray-200 p-12">
          <h2 className="text-2xl font-light mb-3">Application Received</h2>
          {submittedData?.type === "contractor" ? (
            <p className="text-gray-500">Thank you for your interest in joining our contractor network. Our team will review and contact you within 3-5 business days.</p>
          ) : (
            <>
              <p className="text-gray-500 mb-4">Thank you for applying to our training program.</p>
              <p className="text-sm text-gray-400">No experience required. Training is free or low-cost for eligible applicants. We'll contact you within 3 business days.</p>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-20 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-gray-400 text-sm uppercase tracking-wider">Join</span>
        <h1 className="text-4xl md:text-5xl font-light text-blue-500">The Network</h1>
        <p className="text-gray-500 mt-2">Whether you're an experienced contractor or just starting out, we have opportunities for you.</p>
      </div>

      {/* Toggle Switch */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex border border-gray-200 rounded-none p-1">
          <button
            onClick={() => setFormType("contractor")}
            className={`px-8 py-2 text-sm uppercase tracking-wider transition ${
              formType === "contractor"
                ? "bg-black text-white"
                : "bg-white text-gray-500 hover:text-black"
            }`}
          >
            Skilled Contractor
          </button>
          <button
            onClick={() => setFormType("trainee")}
            className={`px-8 py-2 text-sm uppercase tracking-wider transition ${
              formType === "trainee"
                ? "bg-black text-white"
                : "bg-white text-gray-500 hover:text-black"
            }`}
          >
            Trainee
          </button>
        </div>
      </div>

      {/* Contractor Form */}
      {formType === "contractor" && (
        <form onSubmit={contractorForm.handleSubmit(onSubmitContractor)} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Full Name *</label>
              <input {...contractorForm.register("fullName", { required: true })} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition" />
              {contractorForm.formState.errors.fullName && <span className="text-red-500 text-xs">Required</span>}
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Email *</label>
              <input type="email" {...contractorForm.register("email", { required: true })} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Phone</label>
              <input {...contractorForm.register("phone")} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Company Name *</label>
              <input {...contractorForm.register("companyName", { required: true })} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Years in Business</label>
              <select {...contractorForm.register("yearsInBusiness")} className="w-full border-b border-gray-300 py-2 bg-white focus:outline-none">
                <option value="">Select</option>
                <option>Less than 1 year</option>
                <option>1-3 years</option>
                <option>4-10 years</option>
                <option>10+ years</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Certifications</label>
              <input {...contractorForm.register("certifications")} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black" placeholder="8(a), HUBZone, WOSB, OSHA, etc." />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">NAICS / PSC Codes</label>
            <input {...contractorForm.register("naicsCodes")} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black" />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-4">Contract Types Interested In *</label>
            <div className="grid md:grid-cols-3 gap-3">
              {["Federal", "State/Local", "Commercial", "Subcontracting", "Construction", "IT", "Logistics"].map(type => (
                <label key={type} className="flex items-center gap-2 text-sm">
                  <input type="checkbox" value={type} {...contractorForm.register("contractTypes")} /> {type}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Previous Contract Experience</label>
            <textarea {...contractorForm.register("experience")} rows={4} className="w-full border border-gray-200 p-3 focus:outline-none focus:border-black transition" placeholder="Describe past government or commercial contracts..." />
          </div>

          <button 
            type="submit" 
            className="btn-primary w-full hover:bg-blue-500" 
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit Contractor Application"}
          </button>
        </form>
      )}

      {/* Trainee Form */}
      {formType === "trainee" && (
        <form onSubmit={traineeForm.handleSubmit(onSubmitTrainee)} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Full Name *</label>
              <input {...traineeForm.register("fullName", { required: true })} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition" />
              {traineeForm.formState.errors.fullName && <span className="text-red-500 text-xs">Required</span>}
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Email *</label>
              <input type="email" {...traineeForm.register("email", { required: true })} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Phone *</label>
              <input {...traineeForm.register("phone", { required: true })} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Zip Code *</label>
              <input {...traineeForm.register("zipCode", { required: true })} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition" placeholder="Determine local training options" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Date of Birth *</label>
              <input type="date" {...traineeForm.register("dateOfBirth", { required: true })} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Highest Education Completed</label>
              <select {...traineeForm.register("education")} className="w-full border-b border-gray-300 py-2 bg-white focus:outline-none">
                <option value="">Select</option>
                <option>No diploma</option>
                <option>High school diploma</option>
                <option>Some college</option>
                <option>Associate degree</option>
                <option>Bachelor's degree</option>
                <option>Master's degree</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Currently Employed?</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-sm"><input type="radio" value="Yes" {...traineeForm.register("currentlyEmployed")} /> Yes</label>
              <label className="flex items-center gap-2 text-sm"><input type="radio" value="No" {...traineeForm.register("currentlyEmployed")} /> No</label>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-4">Industry Interest (select top 2) *</label>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Advanced manufacturing",
                "Energy infrastructure",
                "AI data centers / telecommunications",
                "Shipbuilding / defense",
                "Healthcare / lab tech",
                "Skilled trades (electrical, plumbing, HVAC)",
                "Other"
              ].map(industry => (
                <label key={industry} className="flex items-center gap-2 text-sm">
                  <input type="checkbox" value={industry} {...traineeForm.register("industryInterests")} /> {industry}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Previous Experience (if any)</label>
            <textarea {...traineeForm.register("previousExperience")} rows={3} className="w-full border border-gray-200 p-3 focus:outline-none focus:border-black transition" placeholder="Optional—capture prior work history..." />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">How did you hear about us?</label>
            <select {...traineeForm.register("heardAbout")} className="w-full border-b border-gray-300 py-2 bg-white focus:outline-none">
              <option value="">Select</option>
              <option>Google / Search</option>
              <option>LinkedIn</option>
              <option>TikTok</option>
              <option>Instagram / Facebook</option>
              <option>Referral from friend or family</option>
              <option>Job fair</option>
              <option>Community organization</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="flex items-start gap-3 text-sm">
              <input type="checkbox" {...traineeForm.register("workEligibility", { required: true })} className="mt-0.5" />
              <span>I certify that I am legally eligible to work in the United States <span className="text-red-500">*</span></span>
            </label>
            {traineeForm.formState.errors.workEligibility && <span className="text-red-500 text-xs">You must certify eligibility to proceed</span>}
          </div>

          <div className="bg-gray-50 p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Queen Contracting training programs are funded through federal workforce development grants. Eligible students pay $0 for tuition, books, and certification exams. We'll help you determine your eligibility when you apply.</p> 
            <br />
            <p className="text-sm text-gray-600">We can help you get WIOA Individual Training Accounts, Workforce Pell Grants (effective July 2026), and state workforce development funds. If you qualify, your training is fully covered.</p> 
            <br />
            <p className="text-sm text-gray-600">No experience required. Training is free or low-cost for eligible applicants. We'll contact you within 3 business days.</p>
          </div>

          <button 
            type="submit" 
            className="btn-primary w-full hover:bg-blue-500" 
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit Trainee Application"}
          </button>
        </form>
      )}
    </div>
  );
}