// src/pages/VendorRegistration.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const indianStates = {
  "Uttar Pradesh": [
  "Agra",
  "Aligarh",
  "Allahabad (Prayagraj)",
  "Amroha",
  "Ayodhya",
  "Azamgarh",
  "Bareilly",
  "Basti",
  "Bhadohi",
  "Bijnor",
  "Bulandshahr",
  "Chandauli",
  "Chitrakoot",
  "Deoria",
  "Etah",
  "Etawah",
  "Farrukhabad",
  "Fatehpur",
  "Firozabad",
  "Gautam Buddh Nagar (Noida, Greater Noida)",
  "Ghaziabad",
  "Ghazipur",
  "Gonda",
  "Gorakhpur",
  "Hamirpur",
  "Hapur",
  "Hardoi",
  "Hathras",
  "Jaunpur",
  "Jhansi",
  "Kannauj",
  "Kanpur",
  "Kasganj",
  "Kaushambi",
  "Kheri (Lakhimpur‑Kheri)",
  "Khushinagar",
  "Mahoba",
  "Mainpuri",
  "Mathura",
  "Mau",
  "Meerut",
  "Mirzapur",
  "Moradabad",
  "Muzaffarnagar",
  "Nagina",
  "Noida",  // part of Gautam Buddh Nagar but often listed separately
  "Prayagraj (Allahabad)",
  "Raebareli",
  "Rampur",
  "Saharanpur",
  "Sambhal",
  "Sant Kabir Nagar",
  "Shahjahanpur",
  "Shamli",
  "Shravasti",
  "Siddharthnagar",
  "Sitapur",
  "Sonbhadra",
  "Sultanpur",
  "Unnao",
  "Varanasi"
],
  "Maharashtra": [
  "Ahmednagar",
  "Akola",
  "Amravati",
  "Aurangabad",
  "Bhandara",
  "Beed",
  "Bhusawal",
  "Bhiwandi",
  "Bid (Beed)",
  "Buldhana",
  "Chandrapur",
  "Daulatabad",
  "Dhule",
  "Gondia",
  "Ichalkaranji",
  "Jalgaon",
  "Jalna",
  "Kalyan-Dombivli",
  "Karli",
  "Kolhapur",
  "Mahabaleshwar",
  "Malegaon",
  "Matheran",
  "Mumbai",
  "Mira-Bhayandar",
  "Mumbai Suburban",
  "Nashik",
  "Nagpur",
  "Nanded",
  "Navi Mumbai",
  "Osmanabad",
  "Pandharpur",
  "Panvel",
  "Parbhani",
  "Pune",
  "Ratnagiri",
  "Sangli-Miraj & Kupwad",
  "Satara",
  "Sevagram",
  "Shirdi",
  "Solapur",
  "Thane",
  "Ulhasnagar",
  "Vasai-Virar",
  "Wardha",
  "Yavatmal",
  "Achalpur",
  "Hinganghat",
  "Nandurbar",
  "Udgir"
],
  "Delhi": [
  "New Delhi",
  "Old Delhi",
  "Central Delhi",
  "East Delhi",
  "North Delhi",
  "North East Delhi",
  "North West Delhi",
  "South Delhi",
  "South East Delhi",
  "South West Delhi",
  "West Delhi",
  "Najafgarh",
  "Dwarka",
  "Rohini",
  "Karol Bagh",
  "Connaught Place",
  "Chandni Chowk",
  "Saket",
  "Vasant Kunj",
  "Mayur Vihar",
  "Lajpat Nagar",
  "Hauz Khas",
  "Janakpuri",
  "Tilak Nagar",
  "Patel Nagar",
  "Rajouri Garden",
  "Okhla",
  "Narela",
  "Palam",
  "Mehrauli",
  "Burari",
  "Kalkaji",
  "Khan Market",
  "Ashok Vihar",
  "Pitampura",
  "Shahdara",
  "Yamuna Vihar",
  "Vikas Puri",
  "Badarpur",
  "Moti Nagar",
  "Sonia Vihar",
  "Bhajanpura"
],
  "Bihar": [
  "Patna",
  "Gaya",
  "Bhagalpur",
  "Muzaffarpur",
  "Purnia",
  "Darbhanga",
  "Bihar Sharif",
  "Ara",
  "Begusarai",
  "Katihar",
  "Munger",
  "Chhapra",
  "Bettiah",
  "Saharsa",
  "Hajipur",
  "Sasaram",
  "Dehri",
  "Siwan",
  "Motihari",
  "Nawada",
  "Bagaha",
  "Buxar",
  "Kishanganj",
  "Sitamarhi",
  "Jamalpur",
  "Jehanabad",
  "Aurangabad"
],
  "Rajasthan": [
  "Jaipur",
  "Jodhpur",
  "Kota",
  "Bikaner",
  "Ajmer",
  "Udaipur",
  "Bhilwara",
  "Alwar",
  "Bharatpur",
  "Sikar",
  "Pali",
  "Ganganagar",
  "Tonk",
  "Kishangarh",
  "Beawar",
  "Hanumangarh",
  "Dhaulpur",
  "Sawai Madhopur",
  "Churu",
  "Baran",
  "Chittorgarh",
  "Nagaur",
  "Jaisalmer"
],
  "Uttarakhand": [
  "Dehradun",
  "Haridwar",
  "Haldwani",
  "Nainital",
  "Roorkee",
  "Rudrapur",
  "Kashipur",
  "Rishikesh",
  "Kotdwar",
  "Pithoragarh",
  "Almora",
  "Pauri Garhwal",
  "Uttarkashi",
  "Chamoli",
  "Mussoorie",
  "Ramnagar",
  "Manglaur",
  "Jaspur",
  "Laksar",
  "Landhaura",
  "Mahua Kheraganj"
],
  "Punjab": [
  "Ludhiana",
  "Amritsar",
  "Jalandhar",
  "Patiala",
  "Bathinda",
  "Mohali",
  "Hoshiarpur",
  "Pathankot",
  "Moga",
  "Batala",
  "Firozpur",
  "Abohar",
  "Malerkotla",
  "Khanna",
  "Phagwara",
  "Muktsar",
  "Barnala",
  "Kapurthala",
  "Rajpura",
  "Zirakpur",
  "Faridkot",
  "Sangrur",
  "Kot Kapura",
  "Kot‑kapura",
  "Chandigarh"
],
  "Karnataka": ["Bengaluru", "Mysuru", "Hubli"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior"]
  // Add more states/cities as needed
};

const VendorRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    shopName: '',
    address: '',
    state: '',
    city: '',
  });
  const [isVerified, setIsVerified] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isVerified) {
      setErrorMsg('❌ कृपया Captcha पर क्लिक करें / Please click the captcha to continue.');
      return;
    }
    alert("✅ Vendor Registered Successfully!");
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-orange-50 to-orange-100 px-4">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md space-y-6 border border-orange-200"
      >
        <h2 className="text-2xl font-bold text-center text-orange-600">Vendor Registration / विक्रेता पंजीकरण</h2>

        {[
          { label: 'Full Name / पूरा नाम *', name: 'name' },
          { label: 'Mobile Number / मोबाइल नंबर *', name: 'mobile', type: 'tel', pattern: '[0-9]{10}' },
          { label: 'Shop Name / दुकान का नाम *', name: 'shopName' },
          { label: 'Address / पता *', name: 'address' }
        ].map(({ label, name, type = 'text', pattern }) => (
          <div key={name}>
            <label className="block text-sm font-semibold mb-1">{label}</label>
            <input
              type={type}
              name={name}
              required
              pattern={pattern}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-orange-400 transition duration-300"
            />
          </div>
        ))}

        {/* State */}
        <div>
          <label className="block text-sm font-semibold mb-1">State / राज्य *</label>
          <select
            name="state"
            required
            onChange={(e) => {
              handleChange(e);
              setFormData((prev) => ({ ...prev, city: '' }));
            }}
            className="w-full border px-4 py-2 rounded-lg bg-white shadow-sm"
          >
            <option value="">Select State / राज्य चुनें</option>
            {Object.keys(indianStates).map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-semibold mb-1">City / शहर *</label>
          <select
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            disabled={!formData.state}
            className="w-full border px-4 py-2 rounded-lg bg-white shadow-sm"
          >
            <option value="">Select City / शहर चुनें</option>
            {formData.state &&
              indianStates[formData.state].map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
          </select>
        </div>

        {/* Captcha */}
        <motion.div
  whileTap={{ scale: 1.05 }}
  onClick={() => setIsVerified(!isVerified)}
  className={`w-full flex items-center justify-center border-2 rounded-lg px-4 py-3 mt-2 cursor-pointer transition-all duration-300 ${
    isVerified ? 'border-green-500 bg-green-100' : 'border-gray-300 bg-gray-50'
  }`}
>
  <p className="text-sm font-medium text-gray-700 text-center">
    {isVerified ? '✅ Verified as Human / सत्यापित उपयोगकर्ता' : '🔒 Click to verify you are human / मानव सत्यापन हेतु क्लिक करें'}
    <br />
    <span className="text-xs text-gray-500">
      (यह सुनिश्चित करता है कि आप असली उपयोगकर्ता हैं)
    </span>
  </p>
</motion.div>

        {errorMsg && <p className="text-red-600 text-sm mt-1">{errorMsg}</p>}

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={!isVerified}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={`w-full py-2 px-4 text-white font-semibold rounded-xl transition duration-300 ${
            isVerified ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Register / पंजीकरण करें
        </motion.button>
      </motion.form>
    </div>
  );
};

export default VendorRegistration;
