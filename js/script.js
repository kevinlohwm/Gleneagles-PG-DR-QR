const doctorsData = [
    {
        id: 1,
        name: "Dr. Emily Carter",
        photo: "assets/images/placeholder_doctor_1.png",
        speciality: "Cardiology",
        type: "Resident",
        qualifications: "MD (Harvard), FACC",
        languages: ["English", "Spanish"],
        location: "Gleneagles Hospital Penang, Suite 101",
        phone: "+604-222-9101",
        email: "emily.carter@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday",    slot1: true,  slot2: true },
            { day: "Tuesday",   slot1: false, slot2: true },
            { day: "Wednesday", slot1: true,  slot2: false },
            { day: "Thursday",  slot1: true,  slot2: true },
            { day: "Friday",    slot1: false, slot2: true },
            { day: "Saturday",  slot1: true,  slot2: false },
            { day: "Sunday",    slot1: false, slot2: false }
        ]
    },
    {
        id: 2,
        name: "Dr. Benjamin Lee",
        photo: "assets/images/placeholder_doctor_2.png",
        speciality: "Neurology",
        type: "Sessional",
        qualifications: "MBBS (King's College), MRCP (UK)",
        languages: ["English", "Mandarin", "Malay"],
        location: "Gleneagles Hospital Penang, Suite 205",
        phone: "+604-222-9205",
        email: "benjamin.lee@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday",    slot1: true,  slot2: false },
            { day: "Tuesday",   slot1: true,  slot2: true },
            { day: "Wednesday", slot1: false, slot2: true },
            { day: "Thursday",  slot1: true,  slot2: false },
            { day: "Friday",    slot1: true,  slot2: true },
            { day: "Saturday",  slot1: false, slot2: false },
            { day: "Sunday",    slot1: false, slot2: false }
        ]
    },
    {
        id: 3,
        name: "Dr. Aisha Khan",
        photo: "assets/images/placeholder_doctor_3.png",
        speciality: "Pediatrics",
        type: "Resident",
        qualifications: "MBChB (Edinburgh), DCH",
        languages: ["English", "Urdu"],
        location: "Gleneagles Hospital Penang, Suite 312",
        phone: "+604-222-9312",
        email: "aisha.khan@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday",    slot1: true, slot2: true },
            { day: "Tuesday",   slot1: true, slot2: true },
            { day: "Wednesday", slot1: true, slot2: true },
            { day: "Thursday",  slot1: false, slot2: true },
            { day: "Friday",    slot1: true, slot2: false },
            { day: "Saturday",  slot1: false, slot2: false },
            { day: "Sunday",    slot1: false, slot2: false }
        ]
    },
    {
        id: 4,
        name: "Dr. David Tan",
        photo: "assets/images/placeholder_doctor_4.png",
        speciality: "Orthopedics",
        type: "Sessional",
        qualifications: "MBBS (NUS), FRCS (Orth)",
        languages: ["English", "Mandarin", "Hokkien"],
        location: "Gleneagles Hospital Penang, Suite 115",
        phone: "+604-222-9115",
        email: "david.tan@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday",    slot1: false, slot2: true },
            { day: "Tuesday",   slot1: true,  slot2: false },
            { day: "Wednesday", slot1: false, slot2: true },
            { day: "Thursday",  slot1: true,  slot2: false },
            { day: "Friday",    slot1: true,  slot2: true },
            { day: "Saturday",  slot1: true,  slot2: false },
            { day: "Sunday",    slot1: false, slot2: false }
        ]
    },
    // Added Doctors (5-20)
    {
        id: 5,
        name: "Dr. Sarah Chen",
        photo: "assets/images/placeholder_doctor_1.png",
        speciality: "Pediatrics",
        type: "Sessional",
        qualifications: "MBBS (University Malaya), MRCPCH (UK)",
        languages: ["English", "Mandarin", "Malay"],
        location: "Gleneagles Hospital Penang, Suite 206",
        phone: "+604-222-9206",
        email: "sarah.chen@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: false },
            { day: "Tuesday", slot1: true, slot2: true },
            { day: "Wednesday", slot1: false, slot2: false },
            { day: "Thursday", slot1: true, slot2: true },
            { day: "Friday", slot1: true, slot2: false },
            { day: "Saturday", slot1: false, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 6,
        name: "Dr. Michael Raj",
        photo: "assets/images/placeholder_doctor_2.png",
        speciality: "Oncology",
        type: "Resident",
        qualifications: "MD (UPM), MRCP (UK)",
        languages: ["English", "Tamil", "Malay"],
        location: "Gleneagles Hospital Penang, Suite 301",
        phone: "+604-222-9301",
        email: "michael.raj@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: true },
            { day: "Tuesday", slot1: true, slot2: true },
            { day: "Wednesday", slot1: true, slot2: true },
            { day: "Thursday", slot1: true, slot2: true },
            { day: "Friday", slot1: true, slot2: false },
            { day: "Saturday", slot1: false, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 7,
        name: "Dr. Fiona Lim",
        photo: "assets/images/placeholder_doctor_3.png",
        speciality: "Dermatology",
        type: "Sessional",
        qualifications: "MBBS (Sydney), DipDerm (Cardiff)",
        languages: ["English", "Mandarin"],
        location: "Gleneagles Hospital Penang, Suite 402",
        phone: "+604-222-9402",
        email: "fiona.lim@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: false, slot2: true },
            { day: "Tuesday", slot1: false, slot2: true },
            { day: "Wednesday", slot1: true, slot2: false },
            { day: "Thursday", slot1: false, slot2: true },
            { day: "Friday", slot1: true, slot2: false },
            { day: "Saturday", slot1: true, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 8,
        name: "Dr. Kevin O'Connell",
        photo: "assets/images/placeholder_doctor_4.png",
        speciality: "General Surgery",
        type: "Resident",
        qualifications: "MB BCh BAO (NUI), FRCSI",
        languages: ["English"],
        location: "Gleneagles Hospital Penang, Suite 108",
        phone: "+604-222-9108",
        email: "kevin.oconnell@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: true },
            { day: "Tuesday", slot1: true, slot2: false },
            { day: "Wednesday", slot1: true, slot2: true },
            { day: "Thursday", slot1: true, slot2: false },
            { day: "Friday", slot1: true, slot2: true },
            { day: "Saturday", slot1: true, slot2: true }, // On call
            { day: "Sunday", slot1: true, slot2: true }  // On call
        ]
    },
    {
        id: 9,
        name: "Dr. Siti Fatimah",
        photo: "assets/images/placeholder_doctor_1.png",
        speciality: "Obstetrics & Gynaecology",
        type: "Resident",
        qualifications: "MD (UKM), MOG (UKM)",
        languages: ["Malay", "English"],
        location: "Gleneagles Hospital Penang, Suite 210",
        phone: "+604-222-9210",
        email: "siti.fatimah@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: true },
            { day: "Tuesday", slot1: true, slot2: true },
            { day: "Wednesday", slot1: false, slot2: true },
            { day: "Thursday", slot1: true, slot2: true },
            { day: "Friday", slot1: true, slot2: false },
            { day: "Saturday", slot1: true, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 10,
        name: "Dr. Alan Wong",
        photo: "assets/images/placeholder_doctor_2.png",
        speciality: "Psychiatry",
        type: "Sessional",
        qualifications: "MBBS (HKU), MMed (Psych)",
        languages: ["English", "Cantonese", "Mandarin"],
        location: "Gleneagles Hospital Penang, Suite 315",
        phone: "+604-222-9315",
        email: "alan.wong@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: false },
            { day: "Tuesday", slot1: false, slot2: true },
            { day: "Wednesday", slot1: true, slot2: false },
            { day: "Thursday", slot1: false, slot2: true },
            { day: "Friday", slot1: true, slot2: false },
            { day: "Saturday", slot1: false, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 11,
        name: "Dr. Isabella Rossi",
        photo: "assets/images/placeholder_doctor_3.png",
        speciality: "Endocrinology",
        type: "Resident",
        qualifications: "MD (Pavia), Specialist in Endocrinology",
        languages: ["English", "Italian"],
        location: "Gleneagles Hospital Penang, Suite 405",
        phone: "+604-222-9405",
        email: "isabella.rossi@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: true },
            { day: "Tuesday", slot1: true, slot2: true },
            { day: "Wednesday", slot1: true, slot2: false },
            { day: "Thursday", slot1: true, slot2: true },
            { day: "Friday", slot1: true, slot2: false },
            { day: "Saturday", slot1: false, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 12,
        name: "Dr. Kenji Tanaka",
        photo: "assets/images/placeholder_doctor_4.png",
        speciality: "Urology",
        type: "Sessional",
        qualifications: "MD (Tokyo), PhD",
        languages: ["English", "Japanese"],
        location: "Gleneagles Hospital Penang, Suite 120",
        phone: "+604-222-9120",
        email: "kenji.tanaka@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: false, slot2: true },
            { day: "Tuesday", slot1: true, slot2: false },
            { day: "Wednesday", slot1: false, slot2: true },
            { day: "Thursday", slot1: true, slot2: false },
            { day: "Friday", slot1: false, slot2: true },
            { day: "Saturday", slot1: true, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 13,
        name: "Dr. Olivia Ng",
        photo: "assets/images/placeholder_doctor_1.png",
        speciality: "Rheumatology",
        type: "Resident",
        qualifications: "MBBS (Monash), FRACP",
        languages: ["English", "Mandarin"],
        location: "Gleneagles Hospital Penang, Suite 222",
        phone: "+604-222-9222",
        email: "olivia.ng@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: false },
            { day: "Tuesday", slot1: true, slot2: false },
            { day: "Wednesday", slot1: true, slot2: true },
            { day: "Thursday", slot1: true, slot2: false },
            { day: "Friday", slot1: true, slot2: true },
            { day: "Saturday", slot1: false, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 14,
        name: "Dr. Ahmed Hassan",
        photo: "assets/images/placeholder_doctor_2.png",
        speciality: "Nephrology",
        type: "Sessional",
        qualifications: "MBChB (Cairo), MRCP (UK)",
        languages: ["English", "Arabic", "Malay"],
        location: "Gleneagles Hospital Penang, Suite 325",
        phone: "+604-222-9325",
        email: "ahmed.hassan@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: true },
            { day: "Tuesday", slot1: false, slot2: true },
            { day: "Wednesday", slot1: true, slot2: true },
            { day: "Thursday", slot1: false, slot2: true },
            { day: "Friday", slot1: true, slot2: false },
            { day: "Saturday", slot1: false, slot2: true },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 15,
        name: "Dr. Chloe Dubois",
        photo: "assets/images/placeholder_doctor_3.png",
        speciality: "Geriatrics",
        type: "Resident",
        qualifications: "MD (Sorbonne), Specialist in Geriatric Medicine",
        languages: ["English", "French"],
        location: "Gleneagles Hospital Penang, Suite 410",
        phone: "+604-222-9410",
        email: "chloe.dubois@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: true },
            { day: "Tuesday", slot1: true, slot2: true },
            { day: "Wednesday", slot1: true, slot2: true },
            { day: "Thursday", slot1: true, slot2: true },
            { day: "Friday", slot1: true, slot2: true },
            { day: "Saturday", slot1: false, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 16,
        name: "Dr. Marcus Yeoh",
        photo: "assets/images/placeholder_doctor_4.png",
        speciality: "Sports Medicine",
        type: "Sessional",
        qualifications: "MBBS (Melbourne), MSpMed",
        languages: ["English", "Malay"],
        location: "Gleneagles Hospital Penang, Suite 125",
        phone: "+604-222-9125",
        email: "marcus.yeoh@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: false, slot2: true },
            { day: "Tuesday", slot1: true, slot2: true },
            { day: "Wednesday", slot1: false, slot2: true },
            { day: "Thursday", slot1: true, slot2: true },
            { day: "Friday", slot1: false, slot2: true },
            { day: "Saturday", slot1: true, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 17,
        name: "Dr. Priya Sharma",
        photo: "assets/images/placeholder_doctor_1.png",
        speciality: "Ophthalmology",
        type: "Resident",
        qualifications: "MBBS (Delhi), MS (Ophth)",
        languages: ["English", "Hindi"],
        location: "Gleneagles Hospital Penang, Suite 230",
        phone: "+604-222-9230",
        email: "priya.sharma@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: true },
            { day: "Tuesday", slot1: true, slot2: false },
            { day: "Wednesday", slot1: true, slot2: true },
            { day: "Thursday", slot1: true, slot2: false },
            { day: "Friday", slot1: true, slot2: true },
            { day: "Saturday", slot1: true, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 18,
        name: "Dr. Ivan Petrov",
        photo: "assets/images/placeholder_doctor_2.png",
        speciality: "Plastic Surgery",
        type: "Sessional",
        qualifications: "MD (Moscow), Board Certified Plastic Surgeon",
        languages: ["English", "Russian"],
        location: "Gleneagles Hospital Penang, Suite 333",
        phone: "+604-222-9333",
        email: "ivan.petrov@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: false },
            { day: "Tuesday", slot1: false, slot2: true },
            { day: "Wednesday", slot1: true, slot2: false },
            { day: "Thursday", slot1: false, slot2: true },
            { day: "Friday", slot1: true, slot2: true },
            { day: "Saturday", slot1: false, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 19,
        name: "Dr. Ananya Rao",
        photo: "assets/images/placeholder_doctor_3.png",
        speciality: "Infectious Diseases",
        type: "Resident",
        qualifications: "MBBS (Bangalore), DTM&H (London)",
        languages: ["English", "Kannada", "Malay"],
        location: "Gleneagles Hospital Penang, Suite 415",
        phone: "+604-222-9415",
        email: "ananya.rao@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: true },
            { day: "Tuesday", slot1: true, slot2: true },
            { day: "Wednesday", slot1: true, slot2: true },
            { day: "Thursday", slot1: true, slot2: true },
            { day: "Friday", slot1: false, slot2: true },
            { day: "Saturday", slot1: false, slot2: false },
            { day: "Sunday", slot1: false, slot2: false }
        ]
    },
    {
        id: 20,
        name: "Dr. Charles Brown",
        photo: "assets/images/placeholder_doctor_4.png",
        speciality: "Emergency Medicine",
        type: "Resident",
        qualifications: "MD (Johns Hopkins), FACEP",
        languages: ["English"],
        location: "Gleneagles Hospital Penang, Emergency Dept",
        phone: "+604-222-9199", // ER Phone
        email: "charles.brown@gleneaglespenang.com.my",
        clinicalHours: [ // Typically shift-based, but for consistency:
            { day: "Monday", slot1: true, slot2: true },
            { day: "Tuesday", slot1: false, slot2: true },
            { day: "Wednesday", slot1: true, slot2: true },
            { day: "Thursday", slot1: true, slot2: false },
            { day: "Friday", slot1: true, slot2: true },
            { day: "Saturday", slot1: true, slot2: true },
            { day: "Sunday", slot1: true, slot2: true }
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
