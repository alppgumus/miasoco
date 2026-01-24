'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProveIt() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    role: '',
    explanation: '',
    proofLink: '',
    agreeNDA: false,
    agreePrivacy: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Your application has been submitted successfully!');
        setFormData({
          name: '',
          email: '',
          location: '',
          role: '',
          explanation: '',
          proofLink: '',
          agreeNDA: false,
          agreePrivacy: false
        });
        router.push('/');
      } else {
        alert('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-black" style={{
      background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,20,0,1) 100%)'
    }}>
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-mono text-white mb-16 whitespace-nowrap">
          # You are <span className="text-[#00ed64]">{'{'}  extraordinary {'}'}</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-mono text-white mb-8">Application</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-white font-mono mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-black border border-gray-800 text-white font-mono p-3 rounded focus:border-[#00ed64] focus:outline-none"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>

              <div>
                <label className="block text-white font-mono mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-black border border-gray-800 text-white font-mono p-3 rounded focus:border-[#00ed64] focus:outline-none"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>

              <div>
                <label className="block text-white font-mono mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  className="w-full bg-black border border-gray-800 text-white font-mono p-3 rounded focus:border-[#00ed64] focus:outline-none"
                  placeholder="City, Country"
                  onChange={handleChange}
                  value={formData.location}
                />
              </div>

              <div>
                <label className="block text-white font-mono mb-2">
                  Select the option that best describes you
                </label>
                <select
                  name="role"
                  className="w-full bg-black border border-gray-800 text-white font-mono p-3 rounded focus:border-[#00ed64] focus:outline-none"
                  onChange={handleChange}
                  value={formData.role}
                >
                  <option value="">Select...</option>
                  <option value="developer">Software Developer</option>
                  <option value="designer">Designer</option>
                  <option value="manager">Project Manager</option>
                  <option value="marketer">Marketing Specialist</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-mono mb-2">
                  Explain your choice in a few sentences <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="explanation"
                  required
                  rows={4}
                  className="w-full bg-black border border-gray-800 text-white font-mono p-3 rounded focus:border-[#00ed64] focus:outline-none"
                  onChange={handleChange}
                  value={formData.explanation}
                />
              </div>

              <div>
                <label className="block text-white font-mono mb-2">
                  Share a link to prove it <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  name="proofLink"
                  required
                  className="w-full bg-black border border-gray-800 text-white font-mono p-3 rounded focus:border-[#00ed64] focus:outline-none"
                  placeholder="E.g. Personal website, GitHub profile, Portfolio"
                  onChange={handleChange}
                  value={formData.proofLink}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="agreeNDA"
                    required
                    className="border-gray-800 rounded text-[#00ed64] focus:ring-[#00ed64]"
                    onChange={handleChange}
                    checked={formData.agreeNDA}
                  />
                  <label className="text-white font-mono">
                    I have read and accept the confidentiality agreement
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="agreePrivacy"
                    required
                    className="border-gray-800 rounded text-[#00ed64] focus:ring-[#00ed64]"
                    onChange={handleChange}
                    checked={formData.agreePrivacy}
                  />
                  <label className="text-white font-mono">
                    I have read and accept the Privacy Policy
                  </label>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="px-8 py-3 bg-[#00ed64] text-black rounded hover:bg-[#00c853] transition-colors font-mono font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}