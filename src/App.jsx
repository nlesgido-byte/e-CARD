import React, { useState } from 'react';
import { User, Mail, Smartphone, Map, Briefcase, GraduationCap,Clipboard ,UserPlus} from 'lucide-react';

export default function App() {
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);
  const [showEmailOptions, setShowEmailOptions] = useState(false);

  const eCardData = {
    companyName: "OncoLYT",
    companySub: "THERAPEUTICS",
    name: "Nastazia Lesgidou",
  role: "Co-founder",
  position: "Post Doctoral Researcher",
  field: "Computational Drug Design & AI",
  institution: "University of West Attica",
    email: "nlesgido@gmail.com",
    phone: "+30 698 409 5440",
    country: "Greece",
    linkedInUrl: "https://www.linkedin.com/in/nastazia-lesgidou-723179106/",
  };

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${eCardData.name}
ORG:${eCardData.companyName}
TITLE:${eCardData.role}, ${eCardData.position}
TEL;TYPE=CELL:${eCardData.phone}
EMAIL:${eCardData.email}
ADR;TYPE=WORK:;;;;;;${eCardData.country}
URL:${eCardData.linkedInUrl}
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${eCardData.name.replace(' ', '_')}_Contact.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowPhoneOptions(false);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(eCardData.email);
    setShowEmailOptions(false);
  };
const menuStyle = "absolute bottom-full left-0 mb-2 w-full bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden";
  const optionStyle = "flex items-center gap-3 w-full px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors text-left";
  return (
  <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4 font-sans">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-visible"> {/* Changed overflow-hidden to visible */}

    {/* === Header Section === */}
        <div className="flex justify-between items-start p-6 bg-gray-50 border-b border-gray-100">
          
          {/* Far Left: Company Info & Logo */}
          <div className="flex-1 flex flex-col items-start w-1/2 pr-2">
            <h1 className="text-2xl font-black text-black leading-tight">
              {eCardData.companyName}
            </h1>
            <h2 className="text-sm text-gray-500 font-medium mb-3 ml-1">
              {eCardData.companySub}
            </h2>
            {/* Note: Vite serves files in /public automatically at the root path '/' */}
            <img 
              src="/Logo.svg" 
              alt="Company Logo" 
              className="h-35 object-contain -mt-10 -ml-5 -mb-10 opacity-70" 
            />
          </div>

          {/* Far Right: University Logo */}
          <div className="flex-1 flex justify-end items-start w-1/2 pl-2">
            <img 
              src="/UnivercityLogo.svg" 
              alt="University Logo" 
              className="h-30 object-contain"
            />
          </div>
        </div>

        {/* List Section */}
      <div className="p-6 flex flex-col gap-4">
          
          {/* Role */}
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-2 rounded-full"><Briefcase size={20} className="text-gray-700" /></div>
            <div>
              <div className="font-semibold text-gray-800">{eCardData.role}</div>
              <div className="text-sm text-gray-500">{eCardData.position}</div>
            </div>
          </div>

          {/* Education */}
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-2 rounded-full"><GraduationCap size={20} className="text-gray-700" /></div>
            <div>
              <div className="text-sm font-semibold text-gray-800">{eCardData.field}</div>
              <div className="text-xs text-gray-500">{eCardData.institution}</div>
            </div>
          </div>

          {/* User/LinkedIn */}
          <a href={eCardData.linkedInUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-2 -ml-2 rounded-lg hover:bg-blue-50 transition-colors">
            <div className="bg-gray-100 p-2 rounded-full"><User size={20} className="text-gray-700" /></div>
            <span className="font-semibold text-gray-800">{eCardData.name}</span>
          </a>

        {/* Email */}
          <div className="relative">
            <button 
              onClick={() => { setShowEmailOptions(!showEmailOptions); setShowPhoneOptions(false); }} 
              className="w-full flex items-center gap-4 p-2 -ml-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="bg-gray-100 p-2 rounded-full"><Mail size={20} className="text-gray-700" /></div>
              <span className="text-gray-600">{eCardData.email}</span>
            </button>
            {showEmailOptions && (
              <div className={menuStyle}>
                <a href={`mailto:${eCardData.email}`} className={`${optionStyle} border-b border-gray-100`}>
                  <Mail size={18} /> Send Email
                </a>
                <button onClick={handleCopyEmail} className={optionStyle}>
  <Clipboard size={18} className="text-gray-800" /> 
  <span>Copy to Clipboard</span>
</button>
              </div>
            )}
          </div>

          {/* Phone */}
          <div className="relative">
            <button 
              onClick={() => { setShowPhoneOptions(!showPhoneOptions); setShowEmailOptions(false); }} 
              className="w-full flex items-center gap-4 p-2 -ml-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="bg-gray-100 p-2 rounded-full"><Smartphone size={20} className="text-gray-700" /></div>
              <span className="text-gray-600">{eCardData.phone}</span>
            </button>
            {showPhoneOptions && (
              <div className={menuStyle}>
                <a href={`tel:${eCardData.phone.replace(/[^0-9+]/g, '')}`} className={`${optionStyle} border-b border-gray-100`}>
                  <Smartphone size={18} /> Call Number
                </a>
                <button onClick={handleSaveContact} className={optionStyle}>
                  <UserPlus size={18} className="text-gray-800" /> 
  <span>Save to Contacts</span>
</button>
              </div>
            )}
          </div>

          {/* Country */}
          <div className="flex items-center gap-4 p-2 -ml-2">
            <div className="bg-gray-100 p-2 rounded-full"><Map size={20} className="text-gray-700" /></div>
            <span className="text-gray-600">{eCardData.country}</span>
          </div>

        </div>
      </div>
    </div>
  );
}