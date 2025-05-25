const doctorsData = [
    {
        id: 1,
        name: "Dr. Emily Carter",
        photo: "assets/images/placeholder_doctor_1.png",
        speciality: "Cardiology",
        subSpeciality: "N/A", 
        type: "Resident",
        qualifications: "MD (Harvard), FACC",
        languages: ["English", "Spanish"],
        location: "Gleneagles Hospital Penang, Suite 101",
        phone: "+604-222-9101",
        email: "emily.carter@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday",    slot1: true,  slot2: true, slot3: false },
            { day: "Tuesday",   slot1: false, slot2: true, slot3: false },
            { day: "Wednesday", slot1: true,  slot2: false, slot3: false },
            { day: "Thursday",  slot1: true,  slot2: true, slot3: false },
            { day: "Friday",    slot1: false, slot2: true, slot3: false },
            { day: "Saturday",  slot1: true,  slot2: false, slot3: false },
            { day: "Sunday",    slot1: false, slot2: false, slot3: false }
        ]
    },
    {
        id: 2,
        name: "Dr. Benjamin Lee",
        photo: "assets/images/placeholder_doctor_2.png",
        speciality: "Neurology",
        subSpeciality: "N/A", 
        type: "Sessional",
        qualifications: "MBBS (King's College), MRCP (UK)",
        languages: ["English", "Mandarin", "Malay"],
        location: "Gleneagles Hospital Penang, Suite 205",
        phone: "+604-222-9205",
        email: "benjamin.lee@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday",    slot1: true,  slot2: false, slot3: false },
            { day: "Tuesday",   slot1: true,  slot2: true, slot3: false },
            { day: "Wednesday", slot1: false, slot2: true, slot3: false },
            { day: "Thursday",  slot1: true,  slot2: false, slot3: false },
            { day: "Friday",    slot1: true,  slot2: true, slot3: false },
            { day: "Saturday",  slot1: false, slot2: false, slot3: false },
            { day: "Sunday",    slot1: false, slot2: false, slot3: false }
        ]
    },
    {
        id: 3,
        name: "Dr. Aisha Khan",
        photo: "assets/images/placeholder_doctor_3.png",
        speciality: "Pediatrics",
        subSpeciality: "N/A", 
        type: "Resident",
        qualifications: "MBChB (Edinburgh), DCH",
        languages: ["English", "Urdu"],
        location: "Gleneagles Hospital Penang, Suite 312",
        phone: "+604-222-9312",
        email: "aisha.khan@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday",    slot1: true, slot2: true, slot3: false },
            { day: "Tuesday",   slot1: true, slot2: true, slot3: false },
            { day: "Wednesday", slot1: true, slot2: true, slot3: false },
            { day: "Thursday",  slot1: false, slot2: true, slot3: false },
            { day: "Friday",    slot1: true, slot2: false, slot3: false },
            { day: "Saturday",  slot1: false, slot2: false, slot3: false },
            { day: "Sunday",    slot1: false, slot2: false, slot3: false }
        ]
    },
    {
        id: 4,
        name: "Dr. David Tan",
        photo: "assets/images/placeholder_doctor_4.png",
        speciality: "Orthopedics",
        subSpeciality: "N/A", 
        type: "Sessional",
        qualifications: "MBBS (NUS), FRCS (Orth)",
        languages: ["English", "Mandarin", "Hokkien"],
        location: "Gleneagles Hospital Penang, Suite 115",
        phone: "+604-222-9115",
        email: "david.tan@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday",    slot1: false, slot2: true, slot3: false },
            { day: "Tuesday",   slot1: true,  slot2: false, slot3: false },
            { day: "Wednesday", slot1: false, slot2: true, slot3: false },
            { day: "Thursday",  slot1: true,  slot2: false, slot3: false },
            { day: "Friday",    slot1: true,  slot2: true, slot3: false },
            { day: "Saturday",  slot1: true,  slot2: false, slot3: false },
            { day: "Sunday",    slot1: false, slot2: false, slot3: false }
        ]
    },
    {
        id: 5,
        name: "Dr. Sarah Chen",
        photo: "assets/images/placeholder_doctor_1.png",
        speciality: "Pediatrics",
        subSpeciality: "Pediatric Cardiology", 
        type: "Sessional",
        qualifications: "MBBS (University Malaya), MRCPCH (UK)",
        languages: ["English", "Mandarin", "Malay"],
        location: "Gleneagles Hospital Penang, Suite 206",
        phone: "+604-222-9206",
        email: "sarah.chen@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: false, slot3: false },
            { day: "Tuesday", slot1: true, slot2: true, slot3: false },
            { day: "Wednesday", slot1: false, slot2: false, slot3: false },
            { day: "Thursday", slot1: true, slot2: true, slot3: false },
            { day: "Friday", slot1: true, slot2: false, slot3: false },
            { day: "Saturday", slot1: false, slot2: false, slot3: false },
            { day: "Sunday", slot1: false, slot2: false, slot3: false }
        ]
    },
    {
        id: 6,
        name: "Dr. Michael Raj",
        photo: "assets/images/placeholder_doctor_2.png",
        speciality: "Oncology",
        subSpeciality: "N/A", 
        type: "Resident",
        qualifications: "MD (UPM), MRCP (UK)",
        languages: ["English", "Tamil", "Malay"],
        location: "Gleneagles Hospital Penang, Suite 301",
        phone: "+604-222-9301",
        email: "michael.raj@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: true, slot3: false },
            { day: "Tuesday", slot1: true, slot2: true, slot3: false },
            { day: "Wednesday", slot1: true, slot2: true, slot3: false },
            { day: "Thursday", slot1: true, slot2: true, slot3: false },
            { day: "Friday", slot1: true, slot2: false, slot3: false },
            { day: "Saturday", slot1: false, slot2: false, slot3: false },
            { day: "Sunday", slot1: false, slot2: false, slot3: false }
        ]
    },
    {
        id: 7,
        name: "Dr. Fiona Lim",
        photo: "assets/images/placeholder_doctor_3.png",
        speciality: "Dermatology",
        subSpeciality: "Cosmetic Dermatology", 
        type: "Sessional",
        qualifications: "MBBS (Sydney), DipDerm (Cardiff)",
        languages: ["English", "Mandarin"],
        location: "Gleneagles Hospital Penang, Suite 402",
        phone: "+604-222-9402",
        email: "fiona.lim@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: false, slot2: true, slot3: false },
            { day: "Tuesday", slot1: false, slot2: true, slot3: false },
            { day: "Wednesday", slot1: true, slot2: false, slot3: false },
            { day: "Thursday", slot1: false, slot2: true, slot3: false },
            { day: "Friday", slot1: true, slot2: false, slot3: false },
            { day: "Saturday", slot1: true, slot2: false, slot3: false },
            { day: "Sunday", slot1: false, slot2: false, slot3: false }
        ]
    },
    {
        id: 8,
        name: "Dr. Kevin O'Connell",
        photo: "assets/images/placeholder_doctor_4.png",
        speciality: "General Surgery",
        subSpeciality: "Colorectal Surgery", 
        type: "Resident",
        qualifications: "MB BCh BAO (NUI), FRCSI",
        languages: ["English"],
        location: "Gleneagles Hospital Penang, Suite 108",
        phone: "+604-222-9108",
        email: "kevin.oconnell@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: true, slot3: false },
            { day: "Tuesday", slot1: true, slot2: false, slot3: false },
            { day: "Wednesday", slot1: true, slot2: true, slot3: false },
            { day: "Thursday", slot1: true, slot2: false, slot3: false },
            { day: "Friday", slot1: true, slot2: true, slot3: false },
            { day: "Saturday", slot1: true, slot2: true, slot3: false }, 
            { day: "Sunday", slot1: true, slot2: true, slot3: false }
        ]
    },
    {
        id: 9,
        name: "Dr. Siti Fatimah",
        photo: "assets/images/placeholder_doctor_1.png",
        speciality: "Obstetrics & Gynaecology",
        subSpeciality: "N/A", 
        type: "Resident",
        qualifications: "MD (UKM), MOG (UKM)",
        languages: ["Malay", "English"],
        location: "Gleneagles Hospital Penang, Suite 210",
        phone: "+604-222-9210",
        email: "siti.fatimah@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: true, slot3: false },
            { day: "Tuesday", slot1: true, slot2: true, slot3: false },
            { day: "Wednesday", slot1: false, slot2: true, slot3: false },
            { day: "Thursday", slot1: true, slot2: true, slot3: false },
            { day: "Friday", slot1: true, slot2: false, slot3: false },
            { day: "Saturday", slot1: true, slot2: false, slot3: false },
            { day: "Sunday", slot1: false, slot2: false, slot3: false }
        ]
    },
    {
        id: 10,
        name: "Dr. Alan Wong",
        photo: "assets/images/placeholder_doctor_2.png",
        speciality: "Psychiatry",
        subSpeciality: "N/A", 
        type: "Sessional",
        qualifications: "MBBS (HKU), MMed (Psych)",
        languages: ["English", "Cantonese", "Mandarin"],
        location: "Gleneagles Hospital Penang, Suite 315",
        phone: "+604-222-9315",
        email: "alan.wong@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: false, slot3: false },
            { day: "Tuesday", slot1: false, slot2: true, slot3: false },
            { day: "Wednesday", slot1: true, slot2: false, slot3: false },
            { day: "Thursday", slot1: false, slot2: true, slot3: false },
            { day: "Friday", slot1: true, slot2: false, slot3: false },
            { day: "Saturday", slot1: false, slot2: false, slot3: false },
            { day: "Sunday", slot1: false, slot2: false, slot3: false }
        ]
    },
    {
        id: 11,
        name: "Dr. Isabella Rossi",
        photo: "assets/images/placeholder_doctor_3.png",
        speciality: "Endocrinology",
        subSpeciality: "N/A", 
        type: "Resident",
        qualifications: "MD (Pavia), Specialist in Endocrinology",
        languages: ["English", "Italian"],
        location: "Gleneagles Hospital Penang, Suite 405",
        phone: "+604-222-9405",
        email: "isabella.rossi@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: true, slot3: false },
            { day: "Tuesday", slot1: true, slot2: true, slot3: false },
            { day: "Wednesday", slot1: true, slot2: false, slot3: false },
            { day: "Thursday", slot1: true, slot2: true, slot3: false },
            { day: "Friday", slot1: true, slot2: false, slot3: false },
            { day: "Saturday", slot1: false, slot2: false, slot3: false },
            { day: "Sunday", slot1: false, slot2: false, slot3: false }
        ]
    },
    {
        id: 12,
        name: "Dr. Kenji Tanaka",
        photo: "assets/images/placeholder_doctor_4.png",
        speciality: "Urology",
        subSpeciality: "N/A", 
        type: "Sessional",
        qualifications: "MD (Tokyo), PhD",
        languages: ["English", "Japanese"],
        location: "Gleneagles Hospital Penang, Suite 120",
        phone: "+604-222-9120",
        email: "kenji.tanaka@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: false, slot2: true, slot3: false },
            { day: "Tuesday", slot1: true, slot2: false, slot3: false },
            { day: "Wednesday", slot1: false, slot2: true, slot3: false },
            { day: "Thursday", slot1: true, slot2: false, slot3: false },
            { day: "Friday", slot1: false, slot2: true, slot3: false },
            { day: "Saturday", slot1: true, slot2: false, slot3: false },
            { day: "Sunday", slot1: false, slot2: false, slot3: false }
        ]
    },
    {
        id: 13,
        name: "Dr. Olivia Ng",
        photo: "assets/images/placeholder_doctor_1.png",
        speciality: "Rheumatology",
        subSpeciality: "N/A", 
        type: "Resident",
        qualifications: "MBBS (Monash), FRACP",
        languages: ["English", "Mandarin"],
        location: "Gleneagles Hospital Penang, Suite 222",
        phone: "+604-222-9222",
        email: "olivia.ng@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: false, slot3: false },
            { day: "Tuesday", slot1: true, slot2: false, slot3: false },
            { day: "Wednesday", slot1: true, slot2: true, slot3: false },
            { day: "Thursday", slot1: true, slot2: false, slot3: false },
            { day: "Friday", slot1: true, slot2: true, slot3: false },
            { day: "Saturday", slot1: false, slot2: false, slot3: false },
            { day: "Sunday", slot1: false, slot2: false, slot3: false }
        ]
    },
    {
        id: 14,
        name: "Dr. Ahmed Hassan",
        photo: "assets/images/placeholder_doctor_2.png",
        speciality: "Nephrology",
        subSpeciality: "N/A", 
        type: "Sessional",
        qualifications: "MBChB (Cairo), MRCP (UK)",
        languages: ["English", "Arabic", "Malay"],
        location: "Gleneagles Hospital Penang, Suite 325",
        phone: "+604-222-9325",
        email: "ahmed.hassan@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: true, slot3: false },
            { day: "Tuesday", slot1: false, slot2: true, slot3: false },
            { day: "Wednesday", slot1: true, slot2: true, slot3: false },
            { day: "Thursday", slot1: false, slot2: true, slot3: false },
            { day: "Friday", slot1: true, slot2: false, slot3: false },
            { day: "Saturday", slot1: false, slot2: true, slot3: false },
            { day: "Sunday", slot1: false, slot2: false, slot3: false }
        ]
    },
    {
        id: 15,
        name: "Dr. Chloe Dubois",
        photo: "assets/images/placeholder_doctor_3.png",
        speciality: "Geriatrics",
        subSpeciality: "N/A", 
        type: "Resident",
        qualifications: "MD (Sorbonne), Specialist in Geriatric Medicine",
        languages: ["English", "French"],
        location: "Gleneagles Hospital Penang, Suite 410",
        phone: "+604-222-9410",
        email: "chloe.dubois@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: true, slot3: false },
            { day: "Tuesday", slot1: true, slot2: true, slot3: false },
            { day: "Wednesday", slot1: true, slot2: true, slot3: false },
            { day: "Thursday", slot1: true, slot2: true, slot3: false },
            { day: "Friday", slot1: true, slot2: true, slot3: false },
            { day: "Saturday", slot1: false, slot2: false, slot3: false },
            { day: "Sunday", slot1: false, slot2: false, slot3: false }
        ]
    },
    {
        id: 16,
        name: "Dr. Marcus Yeoh",
        photo: "assets/images/placeholder_doctor_4.png",
        speciality: "Sports Medicine",
        subSpeciality: "N/A", 
        type: "Sessional",
        qualifications: "MBBS (Melbourne), MSpMed",
        languages: ["English", "Malay"],
        location: "Gleneagles Hospital Penang, Suite 125",
        phone: "+604-222-9125",
        email: "marcus.yeoh@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: false, slot2: true, slot3: false },
            { day: "Tuesday", slot1: true, slot2: true, slot3: false },
            { day: "Wednesday", slot1: false, slot2: true, slot3: false },
            { day: "Thursday", slot1: true, slot2: true, slot3: false },
            { day: "Friday", slot1: false, slot2: true, slot3: false },
            { day: "Saturday", slot1: true, slot2: false, slot3: false },
            { day: "Sunday", slot1: false, slot2: false, slot3: false }
        ]
    },
    {
        id: 17,
        name: "Dr. Priya Sharma",
        photo: "assets/images/placeholder_doctor_1.png",
        speciality: "Ophthalmology",
        subSpeciality: "N/A", 
        type: "Resident",
        qualifications: "MBBS (Delhi), MS (Ophth)",
        languages: ["English", "Hindi"],
        location: "Gleneagles Hospital Penang, Suite 230",
        phone: "+604-222-9230",
        email: "priya.sharma@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: true, slot3: false },
            { day: "Tuesday", slot1: true, slot2: false, slot3: false },
            { day: "Wednesday", slot1: true, slot2: true, slot3: false },
            { day: "Thursday", slot1: true, slot2: false, slot3: false },
            { day: "Friday", slot1: true, slot2: true, slot3: false },
            { day: "Saturday", slot1: true, slot2: false, slot3: false },
            { day: "Sunday", slot1: false, slot2: false, slot3: false }
        ]
    },
    {
        id: 18,
        name: "Dr. Ivan Petrov",
        photo: "assets/images/placeholder_doctor_2.png",
        speciality: "Plastic Surgery",
        subSpeciality: "N/A", 
        type: "Sessional",
        qualifications: "MD (Moscow), Board Certified Plastic Surgeon",
        languages: ["English", "Russian"],
        location: "Gleneagles Hospital Penang, Suite 333",
        phone: "+604-222-9333",
        email: "ivan.petrov@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: false, slot3: false },
            { day: "Tuesday", slot1: false, slot2: true, slot3: false },
            { day: "Wednesday", slot1: true, slot2: false, slot3: false },
            { day: "Thursday", slot1: false, slot2: true, slot3: false },
            { day: "Friday", slot1: true, slot2: true, slot3: false },
            { day: "Saturday", slot1: false, slot2: false, slot3: false },
            { day: "Sunday", slot1: false, slot2: false, slot3: false }
        ]
    },
    {
        id: 19,
        name: "Dr. Ananya Rao",
        photo: "assets/images/placeholder_doctor_3.png",
        speciality: "Infectious Diseases",
        subSpeciality: "N/A", 
        type: "Resident",
        qualifications: "MBBS (Bangalore), DTM&H (London)",
        languages: ["English", "Kannada", "Malay"],
        location: "Gleneagles Hospital Penang, Suite 415",
        phone: "+604-222-9415",
        email: "ananya.rao@gleneaglespenang.com.my",
        clinicalHours: [
            { day: "Monday", slot1: true, slot2: true, slot3: false },
            { day: "Tuesday", slot1: true, slot2: true, slot3: false },
            { day: "Wednesday", slot1: true, slot2: true, slot3: false },
            { day: "Thursday", slot1: true, slot2: true, slot3: false },
            { day: "Friday", slot1: false, slot2: true, slot3: false },
            { day: "Saturday", slot1: false, slot2: false, slot3: false },
            { day: "Sunday", slot1: false, slot2: false, slot3: false }
        ]
    },
    {
        id: 20,
        name: "Dr. Charles Brown",
        photo: "assets/images/placeholder_doctor_4.png",
        speciality: "Emergency Medicine",
        subSpeciality: "N/A", 
        type: "Resident",
        qualifications: "MD (Johns Hopkins), FACEP",
        languages: ["English"],
        location: "Gleneagles Hospital Penang, Emergency Dept",
        phone: "+604-222-9199", 
        email: "charles.brown@gleneaglespenang.com.my",
        clinicalHours: [ 
            { day: "Monday", slot1: true, slot2: true, slot3: false },
            { day: "Tuesday", slot1: false, slot2: true, slot3: false },
            { day: "Wednesday", slot1: true, slot2: true, slot3: false },
            { day: "Thursday", slot1: true, slot2: false, slot3: false },
            { day: "Friday", slot1: true, slot2: true, slot3: false },
            { day: "Saturday", slot1: true, slot2: true, slot3: false },
            { day: "Sunday", slot1: true, slot2: true, slot3: false }
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
    const allDoctorsListContainer = document.getElementById('all-doctors-list-container');
    const allSpecialitiesListContainer = document.getElementById('all-specialities-list-container');

    // Centralized function to perform search and render cards
    function filterAndRenderDoctors() {
        const nameQuery = searchNameInput.value.toLowerCase();
        const specialityQuery = searchSpecialityInput.value.toLowerCase();

        const filteredDoctors = doctorsData.filter(doctor => {
            const nameMatch = doctor.name.toLowerCase().includes(nameQuery);
            const specialityMatch = doctor.speciality.toLowerCase().includes(specialityQuery);
            return nameMatch && specialityMatch;
        });
        renderDoctorCards(filteredDoctors);
    }


    function renderDoctorCards(doctors) {
        if (!doctorCardsContainer) return;
        doctorCardsContainer.innerHTML = ''; 

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

        const viewProfileButtons = document.querySelectorAll('.view-profile-btn');
        viewProfileButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const doctorId = event.target.dataset.doctorid;
                window.location.href = `doctor_detail.html?id=${doctorId}`;
            });
        });
    }

    function renderAllDoctorsList(doctors) {
        if (!allDoctorsListContainer) return;
        allDoctorsListContainer.innerHTML = ''; 

        if (doctors.length === 0) {
            allDoctorsListContainer.style.display = 'none';
            return;
        }

        doctors.forEach(doctor => {
            const listItem = document.createElement('div');
            listItem.classList.add('doctor-list-item');
            listItem.setAttribute('data-doctorid', doctor.id);
            
            const nameSpan = document.createElement('span');
            nameSpan.classList.add('item-name');
            nameSpan.textContent = doctor.name;
            listItem.appendChild(nameSpan);

            const specialitySpan = document.createElement('span');
            specialitySpan.classList.add('item-speciality');
            specialitySpan.textContent = doctor.speciality;
            listItem.appendChild(specialitySpan);

            listItem.addEventListener('click', () => {
                window.location.href = `doctor_detail.html?id=${doctor.id}`;
                allDoctorsListContainer.style.display = 'none';
            });
            allDoctorsListContainer.appendChild(listItem);
        });
    }

    function getUniqueSpecialities(doctors) {
        const specialities = new Set();
        doctors.forEach(doctor => {
            specialities.add(doctor.speciality);
        });
        return Array.from(specialities).sort(); // Return sorted array
    }

    function renderSpecialitiesList(specialities) {
        if (!allSpecialitiesListContainer) return;
        allSpecialitiesListContainer.innerHTML = '';

        if (specialities.length === 0) {
            allSpecialitiesListContainer.style.display = 'none';
            return;
        }

        specialities.forEach(speciality => {
            const listItem = document.createElement('div');
            listItem.classList.add('speciality-list-item'); 
            listItem.textContent = speciality;
            
            listItem.addEventListener('click', () => {
                searchSpecialityInput.value = speciality;
                filterAndRenderDoctors(); 
                allSpecialitiesListContainer.style.display = 'none';
            });
            allSpecialitiesListContainer.appendChild(listItem);
        });
    }


    if (searchForm) {
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            if (allDoctorsListContainer) allDoctorsListContainer.style.display = 'none';
            if (allSpecialitiesListContainer) allSpecialitiesListContainer.style.display = 'none';
            filterAndRenderDoctors();
        });
    }

    // Name input dropdown
    if (searchNameInput && allDoctorsListContainer) {
        searchNameInput.addEventListener('focus', () => {
            renderAllDoctorsList(doctorsData); 
            allDoctorsListContainer.style.display = 'block';
        });
        searchNameInput.addEventListener('blur', () => {
            setTimeout(() => {
                allDoctorsListContainer.style.display = 'none';
            }, 150); 
        });
        searchNameInput.addEventListener('keyup', () => {
            const query = searchNameInput.value.toLowerCase();
            const filteredForDropdown = doctorsData.filter(doctor => 
                doctor.name.toLowerCase().includes(query)
            );
            renderAllDoctorsList(filteredForDropdown);
            if (allDoctorsListContainer.children.length > 0) {
                 allDoctorsListContainer.style.display = 'block';
            } else {
                 allDoctorsListContainer.style.display = 'none';
            }
        });
    }

    // Speciality input dropdown
    if (searchSpecialityInput && allSpecialitiesListContainer) {
        searchSpecialityInput.addEventListener('focus', () => {
            const uniqueSpecialities = getUniqueSpecialities(doctorsData);
            renderSpecialitiesList(uniqueSpecialities);
            allSpecialitiesListContainer.style.display = 'block';
        });
        searchSpecialityInput.addEventListener('blur', () => {
            setTimeout(() => {
                allSpecialitiesListContainer.style.display = 'none';
            }, 150);
        });
        searchSpecialityInput.addEventListener('keyup', () => {
            const query = searchSpecialityInput.value.toLowerCase();
            const uniqueSpecialities = getUniqueSpecialities(doctorsData);
            const filteredForDropdown = uniqueSpecialities.filter(speciality => 
                speciality.toLowerCase().includes(query)
            );
            renderSpecialitiesList(filteredForDropdown);
            if (allSpecialitiesListContainer.children.length > 0) {
                allSpecialitiesListContainer.style.display = 'block';
            } else {
                allSpecialitiesListContainer.style.display = 'none';
            }
        });
    }

    renderDoctorCards(doctorsData); 
}

function setupDetailPage() {
    const doctorDetailPhoto = document.getElementById('doctor-detail-photo');
    const doctorDetailName = document.getElementById('doctor-detail-name');
    const doctorDetailType = document.getElementById('doctor-detail-type');
    const doctorDetailSpeciality = document.getElementById('doctor-detail-speciality');
    const doctorDetailSubSpeciality = document.getElementById('doctor-detail-subspeciality');
    const doctorDetailQualifications = document.getElementById('doctor-detail-qualifications');
    const doctorDetailLanguages = document.getElementById('doctor-detail-languages');
    const doctorDetailLocation = document.getElementById('doctor-detail-location');
    const doctorDetailPhone = document.getElementById('doctor-detail-phone');
    const detailRequestAppointmentBtn = document.getElementById('detail-request-appointment-btn');
    const clinicalHoursTableBody = document.querySelector('#clinical-hours-table tbody');
    
    const qrElement = document.getElementById('qrcode'); // Keep for potential "No doctor ID" message

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
            if (item.slot3) slots.push("1830-2030");
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
        
        if (doctorDetailSubSpeciality) {
            doctorDetailSubSpeciality.textContent = doctor.subSpeciality || "N/A";
            if (!doctor.subSpeciality || doctor.subSpeciality === "N/A") {
                doctorDetailSubSpeciality.parentElement.style.display = 'none';
            } else {
                doctorDetailSubSpeciality.parentElement.style.display = '';
            }
        }
        
        if (doctorDetailQualifications) doctorDetailQualifications.textContent = doctor.qualifications;
        if (doctorDetailLanguages) doctorDetailLanguages.textContent = doctor.languages.join(', ');
        if (doctorDetailLocation) doctorDetailLocation.textContent = doctor.location;
        if (doctorDetailPhone) doctorDetailPhone.textContent = doctor.phone;
        if (detailRequestAppointmentBtn) {
            detailRequestAppointmentBtn.href = `mailto:appointments@gleneaglespenang.com.my?subject=Appointment Request for ${doctor.name}`;
        }

        if (clinicalHoursTableBody) {
            clinicalHoursTableBody.innerHTML = ''; 
            doctor.clinicalHours.forEach(item => {
                const row = `
                    <tr>
                        <td>${item.day}</td>
                        <td>${item.slot1 ? '&#10004;' : ''}</td>
                        <td>${item.slot2 ? '&#10004;' : ''}</td>
                        <td>${item.slot3 ? '&#10004;' : ''}</td>
                    </tr>
                `;
                clinicalHoursTableBody.insertAdjacentHTML('beforeend', row);
            });
        }

        // QR Code generation using qrcode.js (davidshimjs)
        const qrContainer = document.getElementById('qrcode'); // Re-fetch for local scope
        if (qrContainer) {
            qrContainer.innerHTML = ''; // Clear any previous QR code or placeholder text

            if (typeof QRCode !== 'undefined') { // Check if the new library is loaded
                let noteContent = `Speciality: ${doctor.speciality}. `;
                if (doctor.subSpeciality && doctor.subSpeciality !== "N/A") {
                    noteContent += `Sub-Speciality: ${doctor.subSpeciality}. `;
                }
                noteContent += formatClinicalHoursForVCard(doctor.clinicalHours);

                const vCardString = `BEGIN:VCARD
VERSION:3.0
FN:${doctor.name}
ORG:Gleneagles Hospital Penang
TEL;TYPE=WORK,VOICE:${doctor.phone}
ADR;TYPE=WORK:;;${doctor.location.replace("Gleneagles Hospital Penang, ", "")};Gleneagles Hospital Penang;;;;
EMAIL:${doctor.email || 'appointments@gleneaglespenang.com.my'}
NOTE:${noteContent}
END:VCARD`;

                if (!vCardString || vCardString.trim() === '') {
                    if(qrContainer) qrContainer.innerHTML = '<p>Error: Could not generate vCard data.</p>';
                    return; 
                }
                
                new QRCode(qrContainer, {
                    text: vCardString,
                    width: 200,
                    height: 200,
                    colorDark : "#000000",
                    colorLight : "#ffffff",
                    correctLevel : QRCode.CorrectLevel.H
                });
            } else {
                qrContainer.innerHTML = '<p>Error: QR Code library (qrcode.js) not loaded.</p>';
                console.error("QRCode library (qrcode.js by davidshimjs) is not loaded.");
            }
        } else {
            console.error("Error: QR code target element #qrcode not found for davidshimjs usage!");
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
        if(qrElement) qrElement.innerHTML = '<p>No doctor ID provided.</p>'; // Update original qrElement reference
    }
}

console.log("script.js loaded.");
