const doctorsData = [
    {
        id: 1,
        name: "Mr. Aaron Goh Yue Keng",
        photo: "assets/images/dr-aaron-goh-yee-king.png",
        speciality: "Urology",
        subspeciality: "",
        type: "Sessional",
        qualifications: "MBBS (IMU), MRCS (Ireland), FRCS Urology (Glasgow), Malaysian Board of Urology Certification",
        languages: ["English", "Malay", "Mandarin", "Hokkien"],
        location: "Gleneagles Hospital Penang, 218, 2nd Floor, Block B",
        phone: "+604-222 9024",
        email: "N/A",
        clinicalHours: [
            { day: "Monday",    slot1: false,  slot2: false },
            { day: "Tuesday",   slot1: false, slot2: false },
            { day: "Wednesday", slot1: false,  slot2: false },
            { day: "Thursday",  slot1: false,  slot2: false },
            { day: "Friday",    slot1: true, slot2: true },
            { day: "Saturday",  slot1: true,  slot2: false },
            { day: "Sunday",    slot1: false, slot2: false }
        ]
    },
    {
        id: 2,
        name: "Dato' Dr. Adel Zaatar",
        photo: "assets/images/dato'-dr--adel-zaatar.png",
        speciality: "Oncology",
        subspeciality: "Radiotherapy",
        type: "Resident",
        qualifications: "DSPN, PKT, MB Bch(Cairo), DMRT(Cairo), DMRO(London), AM",
        languages: ["English", "Arabic"],
        location: "Gleneagles Hospital Penang, 402, 4th Floor, Block B",
        phone: "+604-222 9196",
        email: "N/A",
        clinicalHours: [
            { day: "Monday",    slot1: true,  slot2: true },
            { day: "Tuesday",   slot1: true,  slot2: true },
            { day: "Wednesday", slot1: true, slot2: true },
            { day: "Thursday",  slot1: true,  slot2: true },
            { day: "Friday",    slot1: true,  slot2: true },
            { day: "Saturday",  slot1: true, slot2: false },
            { day: "Sunday",    slot1: false, slot2: false }
        ]
    },
    {
        id: 3,
        name: "Dr. Amelia Lim Lay Suan",
        photo: "assets/images/dr-amelia-lim-lay-suan.png",
        speciality: "Ophthalmology",
        subspeciality: "",
        type: "Resident",
        qualifications: "MD (UPM), MSURG OPHTHAL (UKM), CCFT (MAL)",
        languages: ["English", "Malay"],
        location: "Gleneagles Hospital Penang, 212, 2nd floor, Block A",
        phone: "+604-222 9360",
        email: "N/A",
        clinicalHours: [
            { day: "Monday",    slot1: true, slot2: true },
            { day: "Tuesday",   slot1: true, slot2: true },
            { day: "Wednesday", slot1: true, slot2: true },
            { day: "Thursday",  slot1: true, slot2: true },
            { day: "Friday",    slot1: true, slot2: true },
            { day: "Saturday",  slot1: true, slot2: false },
            { day: "Sunday",    slot1: false, slot2: false }
        ]
    },
    {
        id: 4,
        name: "Prof. Dr. Amir S. Khir",
        photo: "assets/images/prof-dr-amir-s-khir.png",
        speciality: "Endocrinology",
        subspeciality: "",
        type: "Sessional",
        qualifications: "MB ChB (Edin), MRCP (UK), FRCP (Edin), FRCP (Ire), DMed (hc NUI)",
        languages: ["English", "Malay"],
        location: "Gleneagles Hospital Penang, 118, 1st Floor, Block B",
        phone: "+604-222 9120",
        email: "N/A",
        clinicalHours: [
            { day: "Monday",    slot1: true, slot2: false },
            { day: "Tuesday",   slot1: true,  slot2: false },
            { day: "Wednesday", slot1: false, slot2: false },
            { day: "Thursday",  slot1: true,  slot2: false },
            { day: "Friday",    slot1: true,  slot2: false },
            { day: "Saturday",  slot1: true,  slot2: false },
            { day: "Sunday",    slot1: false, slot2: false }
        ]
    },
    {
        id: 5,
        name: "Dr. Ang Chee How",
        photo: "assets/images/dr-ang-chee-how.png",
        speciality: "Anaesthesiology",
        subspeciality: "",
        type: "Resident",
        qualifications: "MD(USM), MMed Anes(USM)",
        languages: ["English", "Malay", "Mandarin", "Hokkien"],
        location: "Gleneagles Hospital Penang",
        phone: "+604- 222 9292",
        email: "N/A",
        clinicalHours: [
            { day: "Monday", slot1: false, slot2: true },
            { day: "Tuesday", slot1: false, slot2: true },
            { day: "Wednesday", slot1: false, slot2: true },
            { day: "Thursday", slot1: false, slot2: true },
            { day: "Friday", slot1: false, slot2: true },
            { day: "Saturday", slot1: true, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 6,
        name: "Dr. Annamalar Muthu",
        photo: "assets/images/dr-annamalar-muthu.png",
        speciality: "Cardiology",
        subspeciality: "Interventional Cardiology",
        type: "Resident",
        qualifications: "MBBS (UM), MRCP (UK), Fellowship in Interventional Cardiology (Canada), Fellowship in Structural and Adult Congenital Heart Disease Intervention (Canada)",
        languages: ["English", "Malay", "Tamil"],
        location: "Gleneagles Hospital Penang, 238, 2nd Floor, Block B",
        phone: "+604-222 9126",
        email: "N/A",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: true },
            { day: "Tuesday", slot1: true, slot2: false },
            { day: "Wednesday", slot1: true, slot2: true },
            { day: "Thursday", slot1: true, slot2: true },
            { day: "Friday", slot1: true, slot2: true },
            { day: "Saturday", slot1: true, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 7,
        name: "Mr. Buvanesvaran Tachina Moorthi",
        photo: "assets/images/dr-buvanesvaran-tachina-moorthi.png",
        speciality: "General Surgery",
        subspeciality: "Colorectal Surgery",
        type: "Resident",
        qualifications: "MBBS(Mal), MS(UKM), MRCS(Ire) FELLOWSHIP IN COLORECTAL SURGERY (Hull, England)",
        languages: ["English", "Malay", "Indonesia", "Tamil", "Hokkien"],
        location: "Gleneagles Hospital Penang, 211, 2nd Floor, Block A",
        phone: "+604-222 9226",
        email: "N/A",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: true },
            { day: "Tuesday", slot1: "Surgery and Emergency Consultation only", slot2: "Surgery and Emergency Consultation only" },
            { day: "Wednesday", slot1: true, slot2: true },
            { day: "Thursday", slot1: "Surgery and Emergency Consultation only", slot2: "Surgery and Emergency Consultation only" },
            { day: "Friday", slot1: true, slot2: "Emergency Consultation only" },
            { day: "Saturday", slot1: "Surgery and Emergency Consultation only", slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 8,
        name: "Mr. Chan Kok Yu",
        photo: "assets/images/dr-chan-kok-yu.png",
        speciality: "Orthopaedic & Advanced Trauma Surgery",
        subspeciality: "",
        type: "Resident",
        qualifications: "MBBS (Mal), MS.Orth. (UM), Fellowship in Joint Replacement & Sports Surgery (S'pore)",
        languages: ["English", "Malay", "Mandarin", "Indonesia", "Hokkien", "Cantonese"],
        location: "Gleneagles Hospital Penang, 110, 1st Floor, Block A",
        phone: "+604-222 9152",
        email: "N/A",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: "OT" },
            { day: "Tuesday", slot1: true, slot2: true },
            { day: "Wednesday", slot1: true, slot2: true },
            { day: "Thursday", slot1: true, slot2: "OT" },
            { day: "Friday", slot1: true, slot2: true },
            { day: "Saturday", slot1: "OT", slot2: true }, // On call
            { day: "Sunday", slot1: false, slot2: true }  // On call
        ]
    },
    {
        id: 9,
        name: "Dato' Dr. Chen Tse Peng",
        photo: "assets/images/dato'-dr-chen-tse-peng.png",
        speciality: "Internal Medicine",
        subspeciality: "Nephrology",
        type: "Resident",
        qualifications: "DSPN, MBBS(Mal), FRCP(Lond), FRCP (Edin), AM    ",
        languages: ["English", "Malay", "Indonesia", "Mandarin", "Hokkien", "Hakka", "Cantonese", "Teochew"],
        location: "Gleneagles Hospital Penang, 120, 1st Floor, Block B",
        phone: "+604-222 9148",
        email: "N/A",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: true },
            { day: "Tuesday", slot1: true, slot2: true },
            { day: "Wednesday", slot1: true, slot2: true },
            { day: "Thursday", slot1: true, slot2: true },
            { day: "Friday", slot1: true, slot2: true },
            { day: "Saturday", slot1: true, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 10,
        name: "Dr. Chiah Cheun Hui",
        photo: "assets/images/dr-chiah-cheun-hui.png",
        speciality: "Paediatrics",
        subspeciality: "",
        type: "Resident",
        qualifications: "MD(UKM), MRCPCH(UK), Diploma in Family Practice Dermatology (S'pore)",
        languages: ["English", "Malay", "Mandarin", "Hokkien"],
        location: "Gleneagles Hospital Penang, 125, 1st Floor, Block B",
        phone: "+604-222 9143    ",
        email: "N/A",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: true },
            { day: "Tuesday", slot1: true, slot2: false },
            { day: "Wednesday", slot1: true, slot2: true },
            { day: "Thursday", slot1: true, slot2: true },
            { day: "Friday", slot1: true, slot2: true },
            { day: "Saturday", slot1: true, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 11,
        name: "Dr. Chin Jin Chew",
        photo: "assets/images/dr-chin-jin-chew.png",
        speciality: "Anaesthesiology",
        subspeciality: "",
        type: "Resident",
        qualifications: "MBBS (Australia), MMed Anaes (IIUM)",
        languages: ["English", "Italian"],
        location: "Gleneagles Hospital Penang",
        phone: "+604-2229292",
        email: "N/A",
        clinicalHours: [
            { day: "Monday", slot1: false, slot2: false },
            { day: "Tuesday", slot1: false, slot2: false },
            { day: "Wednesday", slot1: false, slot2: false },
            { day: "Thursday", slot1: false, slot2: false },
            { day: "Friday", slot1: false, slot2: false },
            { day: "Saturday", slot1: false, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 12,
        name: "Dr. Chong Yew Thong",
        photo: "assets/images/dr-chong-yew-thong.png",
        speciality: "Dermatology",
        subspeciality: "",
        type: "Sessional",
        qualifications: "MD (USM), MRCP (UK), Adv M Derm (UKM), AM",
        languages: ["English", "Malay"],
        location: "Gleneagles Hospital Penang",
        phone: "N/A",
        email: "N/A",
        clinicalHours: [
            { day: "Monday", slot1: false, slot2: false },
            { day: "Tuesday", slot1: false, slot2: false },
            { day: "Wednesday", slot1: false, slot2: false },
            { day: "Thursday", slot1: false, slot2: false },
            { day: "Friday", slot1: false, slot2: false },
            { day: "Saturday", slot1: false, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 13,
        name: "Mr. Chong Yi Chin",
        photo: "assets/images/dr-chong-yi-chin.png",
        speciality: "General Surgery",
        subspeciality: "",
        type: "Resident",
        qualifications: "MD Universiti Kebangsaan Malaysia, Master of Medicine (SURGERY) Universiti Sains Malaysia, APHS/RCSEd Diploma in Hernia Essentials and Hernia Advanced",
        languages: ["English", "Malay", "Mandarin", "Hokkien", "Cantonese"],
        location: "Gleneagles Hospital Penang, 137, Block B",
        phone: "+604-222 9372",
        email: "N/A",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: true },
            { day: "Tuesday", slot1: true, slot2: true },
            { day: "Wednesday", slot1: true, slot2: true },
            { day: "Thursday", slot1: true, slot2: true },
            { day: "Friday", slot1: true, slot2: true },
            { day: "Saturday", slot1: true, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 14,
        name: "Dr. Chow Rhuen Chiou",
        photo: "assets/images/dr-chow_rhuen-chiou.png",
        speciality: "Ophthalmology",
        subspeciality: "",
        type: "Sessional",
        qualifications: "MBBS (UNSW, Australia), MS Ophthal. (UM), CCFT (MAL)",
        languages: ["English", "Malay"],
        location: "Gleneagles Hospital Penang, 216, 2nd floor, Block A",
        phone: "+604-222 9111",
        email: "N/A",
        clinicalHours: [
            { day: "Monday", slot1: false, slot2: false },
            { day: "Tuesday", slot1: false, slot2: false },
            { day: "Wednesday", slot1: false, slot2: true },
            { day: "Thursday", slot1: false, slot2: false },
            { day: "Friday", slot1: false, slot2: false },
            { day: "Saturday", slot1: false, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 15,
        name: "Dato' Dr. Chow Ting Soo",
        photo: "assets/images/dato'-dr-chow-ting-soo.png",
        speciality: "Internal Medicine",
        subspeciality: "",
        type: "Sessional",
        qualifications: "DSPN, DJN, MD(USM), MRCP(UK), FRCP (UK)",
        languages: ["English", "Malay", "Mandarin", "Hokkien", "Cantonese"],
        location: "Gleneagles Hospital Penang, 104, 1st Floor, Block A",
        phone: "+604-222 9291",
        email: "N/A",
        clinicalHours: [
            { day: "Monday", slot1: false, slot2: true },
            { day: "Tuesday", slot1: false, slot2: false },
            { day: "Wednesday", slot1: false, slot2: false },
            { day: "Thursday", slot1: false, slot2: false },
            { day: "Friday", slot1: false, slot2: false },
            { day: "Saturday", slot1: false, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 16,
        name: "Dr. Chua Yi Cheau",
        photo: "assets/images/dr-chua-yi-cheau.png",
        speciality: "Paediatrics",
        subspeciality: "",
        type: "Sessional",
        qualifications: "MBBS International Medical University (IMU), MALAYSIA, MRCPCH (UK), Paediatric Respiratory (HTA, UMMC, HPP and Royal Children’s Hospital Melbourne, Australia)",
        languages: ["English", "Malay", "Mandarin", "Hokkien"],
        location: "Gleneagles Hospital Penang, 127, 1 Floor, Block B",
        phone: "+604-222 9026",
        email: "N/A",
        clinicalHours: [
            { day: "Monday", slot1: false, slot2: false },
            { day: "Tuesday", slot1: false, slot2: false },
            { day: "Wednesday", slot1: false, slot2: false },
            { day: "Thursday", slot1: false, slot2: false },
            { day: "Friday", slot1: false, slot2: false },
            { day: "Saturday", slot1: false, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 17,
        name: "Dr. Chuah Kim Hua",
        photo: "assets/images/dr-chuah-kim-hua.png",
        speciality: "Anaesthesiology",
        subspeciality: "",
        type: "Resident",
        qualifications: "MBBS(U NSW), M Med(Anaesthesiology)",
        languages: ["English", "Malay", "Mandarin", "Hokkien", "Cantonese"],
        location: "Gleneagles Hospital Penang",
        phone: "+604-222 9292",
        email: "N/A",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: true },
            { day: "Tuesday", slot1: true, slot2: true },
            { day: "Wednesday", slot1: true, slot2: true },
            { day: "Thursday", slot1: true, slot2: true },
            { day: "Friday", slot1: true, slot2: true },
            { day: "Saturday", slot1: true, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 18,
        name: "Dr. Doreen Koh Soo Siang",
        photo: "assets/images/dr-doreen-koh.png",
        speciality: "Radiology",
        subspeciality: "",
        type: "Resident",
        qualifications: "MD (UNIMAS), FRCR (UK), MRAD (S'pore)",
        languages: ["English", "Malay"],
        location: "Gleneagles Hospital Penang",
        phone: "+604-222 9361",
        email: "N/A",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: true },
            { day: "Tuesday", slot1: true, slot2: true },
            { day: "Wednesday", slot1: true, slot2: true },
            { day: "Thursday", slot1: true, slot2: true },
            { day: "Friday", slot1: true, slot2: true },
            { day: "Saturday", slot1: true, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 19,
        name: "Dr. Fong Chin Heng",
        photo: "assets/images/dr-fong-chin-heng.png",
        speciality: "Oncology",
        subspeciality: "Radiotherapy",
        type: "Sessional",
        qualifications: "MD (USM), M.Clinical Oncology (UM), AM, Fellow (Princess Margaret Cancer Center, Toronto)",
        languages: ["English", "Malay", "Mandarin"],
        location: "Gleneagles Hospital Penang, 403, 4th Floor, Block A",
        phone: "+604-222 9359",
        email: "N/A",
        clinicalHours: [
            { day: "Monday", slot1: false, slot2: false },
            { day: "Tuesday", slot1: false, slot2: false },
            { day: "Wednesday", slot1: false, slot2: false },
            { day: "Thursday", slot1: false, slot2: true },
            { day: "Friday", slot1: true, slot2: false },
            { day: "Saturday", slot1: true, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 20,
        name: "Dr. Gan Hwa Wooi",
        photo: "assets/images/dr-gan-hwa-wooi.png",
        speciality: "Cardiology",
        subspeciality: "Interventional Cardiology",
        type: "Resident",
        qualifications: "MBBS(UM), MRCP(UK), AM(Malaysia), Board Cert - Cardiology(S’pore), FAMS Cardiology (S’pore), Fellowship - TRI & Interventional Cardiology (Taiwan), ACSM CES(USA), FAPSIC (Asia Pacific), FESC (Europe)",
        languages: ["English", "Malay", "Mandarin", "Indonesia", "Hokkien", "Cantonese"],
        location: "Gleneagles Hospital Penang, 237, 2nd Floor, Block B",
        phone: "+604-222 9187", 
        email: "N/A",
        clinicalHours: [ 
            { day: "Monday", slot1: true, slot2: true },
            { day: "Tuesday", slot1: true, slot2: true },
            { day: "Wednesday", slot1: true, slot2: true },
            { day: "Thursday", slot1: true, slot2: true },
            { day: "Friday", slot1: true, slot2: true },
            { day: "Saturday", slot1: true, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 21,
        name: "Dr. (Mrs) Gan Kam Ling",
        photo: "assets/images/dr-gan-kam-ling.png",
        speciality: "Obstetrics & Gynaecology (O&G)",
        subspeciality: "",
        type: "Resident",
        qualifications: "MBBS(S'pore), FRCOG(Lond)",
        languages: ["English", "Malay", "Mandarin", "Hokkien", "Cantonese"],
        location: "Gleneagles Hospital Penang, 115, 1st Floor, Block B",
        phone: "+604-222 9132", 
        email: "N/A",
        clinicalHours: [ 
            { day: "Monday", slot1: true, slot2: true },
            { day: "Tuesday", slot1: true, slot2: true },
            { day: "Wednesday", slot1: true, slot2: true },
            { day: "Thursday", slot1: true, slot2: true },
            { day: "Friday", slot1: true, slot2: true },
            { day: "Saturday", slot1: true, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const isIndexPage = document.getElementById('doctor-cards-container') !== null;
    const isDetailPage = document.getElementById('doctor-detail-name') !== null;

    if (isIndexPage) {
        setupIndexPage();
    } else if (isDetailPage) {
        setupDetailPage();
    }
});

function setupIndexPage() {
    const doctorCardsContainer = document.getElementById('doctor-cards-container');
    const searchForm = document.getElementById('search-form');
    const searchNameInput = document.getElementById('search-name');
    const searchSpecialityInput = document.getElementById('search-speciality');

    function renderDoctorCards(doctors) {
        if (!doctorCardsContainer) return;
        doctorCardsContainer.innerHTML = ''; // Clear previous cards

        if (doctors.length === 0) {
            doctorCardsContainer.innerHTML = '<p>No doctors found matching your criteria.</p>';
            return;
        }

        doctors.forEach(doctor => {
            const card = `
                <div class="doctor-card">
                    <img src="${doctor.photo}" alt="${doctor.name}" class="doctor-photo">
                    <h3 class="doctor-name">${doctor.name}</h3>
                    <p class="doctor-speciality">${doctor.speciality}</p>
                    <p class="doctor-type">${doctor.type}</p>
                    <div class="doctor-card-buttons">
                        <button class="view-profile-btn" data-doctorid="${doctor.id}">View Profile</button>
                        <a href="mailto:appointments@gleneaglespenang.com.my?subject=Appointment Request for ${doctor.name}" class="request-appointment-btn">Request an Appointment</a>
                    </div>
                </div>
            `;
            doctorCardsContainer.insertAdjacentHTML('beforeend', card);
        });

        // Add event listeners to newly created buttons
        const viewProfileButtons = document.querySelectorAll('.view-profile-btn');
        viewProfileButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const doctorId = event.target.dataset.doctorid;
                window.location.href = `doctor_detail.html?id=${doctorId}`;
            });
        });
    }

    if (searchForm) {
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const nameQuery = searchNameInput.value.toLowerCase();
            const specialityQuery = searchSpecialityInput.value.toLowerCase();

            const filteredDoctors = doctorsData.filter(doctor => {
                const nameMatch = doctor.name.toLowerCase().includes(nameQuery);
                const specialityMatch = doctor.speciality.toLowerCase().includes(specialityQuery);
                return nameMatch && specialityMatch;
            });
            renderDoctorCards(filteredDoctors);
        });
    }

    // Initial render of all doctors
    renderDoctorCards(doctorsData);
}

function setupDetailPage() {
    const doctorDetailPhoto = document.getElementById('doctor-detail-photo');
    const doctorDetailName = document.getElementById('doctor-detail-name');
    const doctorDetailType = document.getElementById('doctor-detail-type');
    const doctorDetailSpeciality = document.getElementById('doctor-detail-speciality');
    const doctorDetailQualifications = document.getElementById('doctor-detail-qualifications');
    const doctorDetailLanguages = document.getElementById('doctor-detail-languages');
    const doctorDetailLocation = document.getElementById('doctor-detail-location');
    const doctorDetailPhone = document.getElementById('doctor-detail-phone');
    const detailRequestAppointmentBtn = document.getElementById('detail-request-appointment-btn');
    const clinicalHoursTableBody = document.querySelector('#clinical-hours-table tbody');
    const qrCodeContainer = document.getElementById('qrcode');

    function getDoctorIdFromURL() {
        const params = new URLSearchParams(window.location.search);
        return params.get('id');
    }

    function formatClinicalHoursForVCard(clinicalHours) {
        let note = "Clinical Hours: ";
        clinicalHours.forEach(item => {
            let slots = [];
            if (item.slot1) slots.push("0830-1300");
            if (item.slot2) slots.push("1400-1630");
            if (slots.length > 0) {
                note += `${item.day.substring(0,3)} (${slots.join(', ')}); `;
            }
        });
        return note.trimEnd();
    }

    function displayDoctorDetails(doctorId) {
        const doctor = doctorsData.find(d => d.id === parseInt(doctorId));

        if (!doctor) {
            const mainContainer = document.querySelector('main.container');
            if (mainContainer) {
                mainContainer.innerHTML = '<h1>Doctor Not Found</h1><p>The requested doctor profile could not be found.</p><a href="index.html">Back to search</a>';
            }
            return;
        }

        if (doctorDetailPhoto) {
            doctorDetailPhoto.src = doctor.photo;
            doctorDetailPhoto.alt = doctor.name;
        }
        if (doctorDetailName) doctorDetailName.textContent = doctor.name;
        if (doctorDetailType) doctorDetailType.textContent = doctor.type;
        if (doctorDetailSpeciality) doctorDetailSpeciality.textContent = doctor.speciality;
        if (doctorDetailQualifications) doctorDetailQualifications.textContent = doctor.qualifications;
        if (doctorDetailLanguages) doctorDetailLanguages.textContent = doctor.languages.join(', ');
        if (doctorDetailLocation) doctorDetailLocation.textContent = doctor.location;
        if (doctorDetailPhone) doctorDetailPhone.textContent = doctor.phone;
        if (detailRequestAppointmentBtn) {
            detailRequestAppointmentBtn.href = `mailto:appointments@gleneaglespenang.com.my?subject=Appointment Request for ${doctor.name}`;
        }


        // Populate Clinical Hours
        if (clinicalHoursTableBody) {
            clinicalHoursTableBody.innerHTML = ''; // Clear existing rows
            doctor.clinicalHours.forEach(item => {
                const row = `
                    <tr>
                        <td>${item.day}</td>
                        <td>${item.slot1 ? '&#10004;' : ''}</td>
                        <td>${item.slot2 ? '&#10004;' : ''}</td>
                    </tr>
                `;
                clinicalHoursTableBody.insertAdjacentHTML('beforeend', row);
            });
        }

        // Generate QR Code
        if (qrCodeContainer && typeof QRious !== 'undefined') {
            const vCardString = `BEGIN:VCARD
VERSION:3.0
FN:${doctor.name}
ORG:Gleneagles Hospital Penang
TEL;TYPE=WORK,VOICE:${doctor.phone}
ADR;TYPE=WORK:;;${doctor.location.replace("Gleneagles Hospital Penang, ", "")};Gleneagles Hospital Penang;;;;
EMAIL:${doctor.email || 'appointments@gleneaglespenang.com.my'}
NOTE:Speciality: ${doctor.speciality}. ${formatClinicalHoursForVCard(doctor.clinicalHours)}
END:VCARD`;

            qrCodeContainer.innerHTML = ''; // Clear placeholder or previous QR
            new QRious({
                element: qrCodeContainer,
                value: vCardString,
                size: 200,
                level: 'H', // High error correction level
                padding: 10,
                background: '#f9f9f9', // Match the CSS placeholder background
                foreground: '#333'
            });
        } else if (qrCodeContainer) {
            qrCodeContainer.innerHTML = '<p>QR code generation failed. Library not loaded.</p>';
        }
    }

    const doctorId = getDoctorIdFromURL();
    if (doctorId) {
        displayDoctorDetails(doctorId);
    } else {
        const mainContainer = document.querySelector('main.container');
        if (mainContainer) {
            mainContainer.innerHTML = '<h1>No Doctor ID Provided</h1><p>Please select a doctor from the listing page.</p><a href="index.html">Back to search</a>';
        }
    }
}

// Helper to ensure placeholder images exist (conceptually, actual file creation is manual or backend)
// For this project, we assume images are manually placed in assets/images/
// e.g., placeholder_doctor_1.png, placeholder_doctor_2.png, etc.
console.log("script.js loaded. Placeholder images like 'assets/images/placeholder_doctor_1.png' should be manually created.");
