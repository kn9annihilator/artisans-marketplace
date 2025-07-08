// src/pages/VendorRegistration.jsx

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebase';


const indianStates = 
{ 
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
  "Chandigarh"],
  
  "West Bengal": [
  "Kolkata",
  "Asansol",
  "Siliguri",
  "Durgapur",
  "Howrah",
  "Bardhaman",
  "Berhampore",
  "Malda",
  "Kharagpur",
  "Haldia",
  "Serampore",
  "Raiganj",
  "Baharampur",
  "Jalpaiguri",
  "Balurghat",
  "Cooch Behar",
  "Chandannagar",
  "Darjeeling",
  "Habra",
  "Kanchrapara"
],

"Jammu & Kashmir": [
  "Srinagar",
  "Jammu",
  "Baramulla",
  "Anantnag",
  "Udhampur",
  "Kupwara",
  "Kathua",
  "Pulwama",
  "Poonch",
  "Rajouri",
  "Sopore",
  "Kulgam",
  "Ganderbal",
  "Budgam",
  "Reasi",
  "Bandipora",
  "Handwara",
  "Doda",
  "Kishtwar",
  "Samba"
],

"Gujarat": [
  "Ahmedabad",
  "Surat",
  "Vadodara",
  "Rajkot",
  "Bhavnagar",
  "Jamnagar",
  "Gandhinagar",
  "Junagadh",
  "Gandhidham",
  "Anand",
  "Navsari",
  "Bharuch",
  "Nadiad",
  "Surendranagar",
  "Mehsana",
  "Vapi",
  "Porbandar",
  "Godhra",
  "Palanpur",
  "Morbi"
],

"Haryana": [
  "Faridabad",
  "Gurgaon",
  "Panipat",
  "Ambala",
  "Yamunanagar",
  "Rohtak",
  "Hisar",
  "Karnal",
  "Panchkula",
  "Bhiwani",
  "Sonipat",
  "Sirsa",
  "Bahadurgarh",
  "Jind",
  "Rewari",
  "Kaithal",
  "Palwal",
  "Kurukshetra",
  "Fatehabad",
  "Mahendragarh"
],
"Goa": [
  "Panaji",
  "Margao",
  "Vasco da Gama",
  "Mapusa",
  "Ponda",
  "Bicholim",
  "Curchorem",
  "Sanquelim",
  "Canacona",
  "Valpoi"
],

"Gujarat": [
  "Ahmedabad",
  "Surat",
  "Vadodara",
  "Rajkot",
  "Bhavnagar",
  "Jamnagar",
  "Gandhinagar",
  "Junagadh",
  "Gandhidham",
  "Nadiad",
  "Mehsana",
  "Bharuch",
  "Anand",
  "Navsari",
  "Surendranagar",
  "Morbi",
  "Valsad",
  "Vapi",
  "Patan",
  "Porbandar"
],

"Himachal Pradesh": [
  "Shimla",
  "Mandi",
  "Dharamshala",
  "Solan",
  "Kullu",
  "Hamirpur",
  "Bilaspur",
  "Chamba",
  "Una",
  "Nahan",
  "Kangra",
  "Sundernagar",
  "Palampur",
  "Nalagarh",
  "Paonta Sahib",
  "Baddi",
  "Rampur",
  "Reckong Peo",
  "Keylong",
  "Rohru"
]

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

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isHuman, setIsHuman] = useState(false);
  const recaptchaContainerRef = useRef(null);

  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        size: 'invisible',
        callback: () => console.log('Recaptcha Solved'),
        'expired-callback': () => setErrorMsg('Recaptcha expired. Please refresh.')
      }, auth);

      window.recaptchaVerifier.render().catch((err) => {
        console.error("Recaptcha render error:", err);
        setErrorMsg('Recaptcha render error. Please refresh.');
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!isHuman) {
      setErrorMsg('❌ Please verify you are human.');
      return;
    }

    const phoneNumber = `+91${formData.mobile}`;
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmation) => {
        setConfirmationResult(confirmation);
        setOtpSent(true);
        setSuccessMsg('✅ OTP sent successfully.');
      })
      .catch((error) => {
        console.error("OTP send error:", error);
        setErrorMsg('Failed to send OTP. Please try again.');
      });
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (!otp || !confirmationResult) return;

    confirmationResult.confirm(otp)
      .then((result) => {
        setSuccessMsg('✅ Vendor Registered Successfully!');
        setErrorMsg('');
        console.log('Vendor Data:', formData);
      })
      .catch((error) => {
        setErrorMsg('❌ Incorrect OTP.');
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-orange-50 to-orange-100 px-4">
      <motion.form
        onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6 border border-orange-200"
      >
        <h2 className="text-2xl font-bold text-center text-orange-600">Vendor Registration / विक्रेता पंजीकरण</h2>

        {['name', 'mobile', 'shopName', 'address'].map((field) => (
          <div key={field}>
            <label className="block text-sm font-semibold mb-1">
              {field === 'name' && 'Full Name / पूरा नाम *'}
              {field === 'mobile' && 'Mobile Number / मोबाइल नंबर *'}
              {field === 'shopName' && 'Shop Name / दुकान का नाम *'}
              {field === 'address' && 'Address / पता *'}
            </label>
            <input
              type={field === 'mobile' ? 'tel' : 'text'}
              name={field}
              required
              pattern={field === 'mobile' ? '[0-9]{10}' : undefined}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-orange-400"
            />
          </div>
        ))}

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
            {formData.state && indianStates[formData.state].map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {!otpSent && (
          <motion.div
            whileTap={{ scale: 1.05 }}
            onClick={() => setIsHuman(!isHuman)}
            className={`w-full flex items-center justify-center border-2 rounded-lg px-4 py-3 mt-2 cursor-pointer transition-all duration-300 ${isHuman ? 'border-green-500 bg-green-100' : 'border-gray-300 bg-gray-50'}`}
          >
            <p className="text-sm font-medium text-gray-700 text-center">
              {isHuman ? '✅ Verified as Human / सत्यापित उपयोगकर्ता' : '🔒 Click to verify you are human / मानव सत्यापन हेतु क्लिक करें'}<br />
              <span className="text-xs text-gray-500">(यह सुनिश्चित करता है कि आप असली उपयोगकर्ता हैं)</span>
            </p>
          </motion.div>
        )}

        {otpSent && (
          <div>
            <label className="block text-sm font-semibold mb-1">OTP / ओटीपी</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg shadow-sm"
              placeholder="Enter OTP"
              required
            />
          </div>
        )}

        <div id="recaptcha-container" ref={recaptchaContainerRef}></div>

        {errorMsg && <p className="text-red-600 text-sm mt-1">{errorMsg}</p>}
        {successMsg && <p className="text-green-600 text-sm mt-1">{successMsg}</p>}

        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={`w-full py-2 px-4 text-white font-semibold rounded-xl transition duration-300 ${isHuman || otpSent ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-400 cursor-not-allowed'}`}
        >
          {otpSent ? 'Verify OTP / ओटीपी सत्यापित करें' : 'Send OTP / ओटीपी भेजें'}
        </motion.button>
      </motion.form>
    </div>
  );
};

export default VendorRegistration;
