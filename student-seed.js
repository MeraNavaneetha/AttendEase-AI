// 🔥 Replace with your Firebase Config
const firebaseConfig = {
  apiKey: 
  authDomain:
  projectId: 
  storageBucket:
  messagingSenderId: 
  appId: 
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ---------------------------------------------------
// ✨ STEP 1: ADD ALL YOUR STUDENTS INSIDE THIS ARRAY
// ---------------------------------------------------

const students = [
{ name: "Abbadi Prathipa", roll: "238R1A0401" },
{ name: "Kavya Sri Adusumilli", roll: "238R1A0402" },
{ name: "Harshitha Vyshnavi Annam", roll: "238R1A0403" },
{ name: "Krishnaveni Byna", roll: "238R1A0404" },
{ name: "Sriman Baina", roll: "238R1A0405" },
{ name: "Kavya Bandari", roll: "238R1A0406" },
{ name: "Akhil Batchu", roll: "238R1A0407" },
{ name: "Raju Bijju", roll: "238R1A0408" },
{ name: "Siddartha Boini", roll: "238R1A0409" },
{ name: "Laxmi Sai Burle", roll: "238R1A0410" },
{ name: "Sai Santhosh Ch", roll: "238R1A0411" },
{ name: "Ruthik Kumar Chekka", roll: "238R1A0412" },
{ name: "Srikanth Chengoli", roll: "238R1A0413" },
{ name: "Mahesh Chennaboina", roll: "238R1A0414" },
{ name: "Bhuvaneshwar Reddy Danda", roll: "238R1A0415" },
{ name: "Gopichand Dontharaboina", roll: "238R1A0416" },
{ name: "Raghu Gadepaka", roll: "238R1A0417" },
{ name: "Reddy Lahari Gangi", roll: "238R1A0418" },
{ name: "Vaibhav Laxmi Goskewar", roll: "238R1A0419" },
{ name: "Akshay Gudipelli", roll: "238R1A0420" },
{ name: "Vinay Gummala", roll: "238R1A0421" },
{ name: "Yashwanth Gunjari", roll: "238R1A0422" },
{ name: "Venkatesh Gunti", roll: "238R1A0423" },
{ name: "Chandra Mogili Jakkula", roll: "238R1A0424" },
{ name: "Tejavardhan Reddy Kandhuri", roll: "238R1A0426" },
{ name: "Suvarna Raju K", roll: "238R1A0427" },
{ name: "Sai Sathwik Kamchetty", roll: "238R1A0428" },
{ name: "Gagana Kasu", roll: "238R1A0429" },
{ name: "Vinitha K", roll: "238R1A0430" },
{ name: "Vikas Kota", roll: "238R1A0431" },
{ name: "Saicharan Kotte", roll: "238R1A0432" },
{ name: "Manoj Kumar L", roll: "238R1A0433" },
{ name: "Shashi Vardhan Reddy Mannam", roll: "238R1A0434" },
{ name: "Guru Charan Reddy Marthala", roll: "238R1A0435" },
{ name: "Srihari Methuku", roll: "238R1A0436" },
{ name: "Abhishek Musudi", roll: "238R1A0437" },
{ name: "Shashikanth N", roll: "238R1A0438" },
{ name: "Venkat Padhimala", roll: "238R1A0439" },
{ name: "Venkata Bharathi Panbillapalli", roll: "238R1A0440" },
{ name: "Sai Chran Pandi", roll: "238R1A0441" },
{ name: "Raj Kumar Panikara", roll: "238R1A0442" },
{ name: "Nagaraju Panuganti", roll: "238R1A0443" },
{ name: "Srinidhi Paruchuri", roll: "238R1A0444" },
{ name: "P A Swaroopa", roll: "238R1A0445" },
{ name: "Sai Kumar Peddasaale", roll: "238R1A0446" },
{ name: "Mahalaxmi Polepally", roll: "238R1A0447" },
{ name: "Praveen R", roll: "238R1A0448" },
{ name: "Pallavi Puppala", roll: "238R1A0449" },
{ name: "RAJU SAI KESARI", roll: "238R1A0450" },
{ name: "Vishnuvardhan Reddy Ravula", roll: "238R1A0451" },
{ name: "Sharath Sadige", roll: "238R1A0452" },
{ name: "Bhairava Teja Shivva", roll: "238R1A0453" },
{ name: "Vamshi Sonagoni", roll: "238R1A0454" },
{ name: "Macharla Sricharan", roll: "238R1A0455" },
{ name: "R Priya S", roll: "238R1A0456" },
{ name: "Sumera S", roll: "238R1A0457" },
{ name: "Kishore Thadde", roll: "238R1A0458" },
{ name: "Vishal Singh Thakur", roll: "238R1A0459" },
{ name: "Kullai Yasaswini Thimmareddy", roll: "238R1A0460" },
{ name: "Bhuvaneshwari Tondapally", roll: "238R1A0461" },
{ name: "Ganesh Vallamdasu", roll: "238R1A0462" },
{ name: "Vasamsetti Navya", roll: "238R1A0463" },
{ name: "Rohith Yenagandula", roll: "238R1A0464" },
{ name: "Vaishnavi Bamini", roll: "238R1A0465" },
{ name: "Uma Shankar Bandaru", roll: "238R1A0466" },
{ name: "Chaithanya Sri Ram Bandla", roll: "238R1A0467" },
{ name: "Diengdoh Batngenlang", roll: "238R1A0468" },
{ name: "Vamshikrishna Bhoomani", roll: "238R1A0469" },
{ name: "Jagadeesh Boddupally", roll: "238R1A0470" },
{ name: "Charan Teja Bommina", roll: "238R1A0471" },
{ name: "Ashish Kumar Burry", roll: "238R1A0472" },
{ name: "Shiva Kumar Cheerla", roll: "238R1A0473" },
{ name: "Bhavana Chiraboyena", roll: "238R1A0474" },
{ name: "Harish Chukka", roll: "238R1A0475" },
{ name: "Manoj Kumar Donthulaboin", roll: "238R1A0476" },
{ name: "Jitendra Gadi", roll: "238R1A0477" },
{ name: "Nishanth Kumar Gajula", roll: "238R1A0478" },
{ name: "Nikhil Gandla", roll: "238R1A0479" },
{ name: "Akshaya Goud Gouraram", roll: "238R1A0480" },
{ name: "Krishna Guguloth", roll: "238R1A0481" },
{ name: "Prashanth Gurrala", roll: "238R1A0483" },
{ name: "Sidhartha Gurram", roll: "238R1A0484" },
{ name: "Kadudhula Rishitha", roll: "238R1A0485" },
{ name: "Shivashankar Kamatala", roll: "238R1A0486" },
{ name: "Srishanth Kammari", roll: "238R1A0487" },
{ name: "Dharani Kamreddy", roll: "238R1A0488" },
{ name: "Priya Kaveti Girini", roll: "238R1A0489" },
{ name: "Sriram Keerthi", roll: "238R1A0490" },
{ name: "Bunny Kokkeragadda", roll: "238R1A0491" },
{ name: "Vinay Kumar Kolli", roll: "238R1A0492" },
{ name: "Saicharan Reddy Kondra", roll: "238R1A0493" },
{ name: "V S Manohar Raju M", roll: "238R1A0494" },
{ name: "Abhishek Malipatlolla", roll: "238R1A0495" },
{ name: "Akshay Kumar Mallepogu", roll: "238R1A0496" },
{ name: "Pavithra Manda", roll: "238R1A0497" },
{ name: "Ishwarya Mangali", roll: "238R1A0498" },
{ name: "Nanda Kumar M", roll: "238R1A0499" },
{ name: "Keerthi Marri", roll: "238R1A04A0" },
{ name: "Navaneetha Mera", roll: "238R1A04A1" },
{ name: "Shreshta Mesa", roll: "238R1A04A2" },
{ name: "Harika Olapu", roll: "238R1A04A3" },
{ name: "Kalyani Pasagodugu", roll: "238R1A04A5" },
{ name: "Pranay Kumar Perala", roll: "238R1A04A6" },
{ name: "Avinash Potharaveni", roll: "238R1A04A8" },
{ name: "Suhasini Pottipally", roll: "238R1A04A9" },
{ name: "Patil Pradeep", roll: "238R1A04B0" },
{ name: "Kavya Sri Pulagam", roll: "238R1A04B1" },
{ name: "Karthik Puligilla", roll: "238R1A04B2" },
{ name: "Akshay Reddy R", roll: "238R1A04B3" },
{ name: "Akhil Ramavath", roll: "238R1A04B4" },
{ name: "Mahesh Reddy Ramireddy", roll: "238R1A04B5" },
{ name: "Murali Saidugari", roll: "238R1A04B6" },
{ name: "Vajid Shaik", roll: "238R1A04B7" },
{ name: "Madhu S", roll: "238R1A04B8" },
{ name: "Yathiraju Suraj", roll: "238R1A04B9" },
{ name: "Yashwanth Reddy Sura", roll: "238R1A04C0" },
{ name: "Sricharan Tedla", roll: "238R1A04C1" },
{ name: "Prudhvi Therala", roll: "238R1A04C2" },
{ name: "Siddharth T", roll: "238R1A04C3" },
{ name: "Dinvesh Tiruveedhula", roll: "238R1A04C4" },
{ name: "Trisha", roll: "238R1A04C5" },
{ name: "Goud Uma", roll: "238R1A04C6" },
{ name: "Dinesh Vislavath", roll: "238R1A04C7" },
{ name: "Deepika Madasu", roll: "238R1A04C8" },

// 248 series
{ name: "KARTHIK KUMAR ARNAGI", roll: "248R5A0401" },
{ name: "RISHITHA BINGI", roll: "248R5A0402" },
{ name: "SWATHI DAPPU", roll: "248R5A0403" },
{ name: "SAMATHA JATOTH", roll: "248R5A0404" },
{ name: "VAMSHI K", roll: "248R5A0405" },
{ name: "HARISHANKAR REEDDY KONKALA", roll: "248R5A0406" },
{ name: "VAISHNAVI KOTLA", roll: "248R5A0407" },
{ name: "R K LIKIL KUNNATHU", roll: "248R5A0408" },
{ name: "GOUTHAM KUMAR MADGULA", roll: "248R5A0409" },
{ name: "YUGENDER MYADARA", roll: "248R5A0410" },
{ name: "RAJ KUMAR NALLURI", roll: "248R5A0411" },
{ name: "SAMREEN S", roll: "248R5A0412" },
{ name: "CHOTU SHAIK", roll: "248R5A0413" },
{ name: "ANKITHA THAMMALI", roll: "248R5A0414" }
];

// ---------------------------------------------------
// ✨ STEP 2: UPLOAD STUDENTS INTO FIRESTORE
// ---------------------------------------------------

students.forEach(async (student) => {
  try {
    await db.collection("students").doc(student.roll).set(student);
    console.log(`Uploaded: ${student.name}`);
  } catch (e) {
    console.error("Error uploading", student.name, e);
  }
});
