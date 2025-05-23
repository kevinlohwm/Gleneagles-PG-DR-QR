# Gleneagles Hospital Penang - Mini Doctor Search Website

This project is a mini website designed for Gleneagles Hospital Penang, allowing patients to search for doctors by name or speciality. It also provides detailed profiles for each doctor, including a QR code to save their contact information.

## Features

*   Doctor listing page (`index.html`) with search functionality (by name and/or speciality).
*   Dynamic rendering of doctor cards based on search results.
*   Detailed doctor profile page (`doctor_detail.html`) showing:
    *   Photo
    *   Name, Type (Resident/Sessional), Speciality
    *   Qualifications, Languages Spoken
    *   Location/Suite No., Phone No.
    *   Clinical Hours table
    *   QR code (vCard) to save doctor details to a mobile device.
*   Responsive design for basic usability on desktop, tablet, and mobile.
*   Styling is based on placeholders, intended to mimic the Gleneagles Penang website's look and feel.

## How to View

1.  Clone or download the repository/files.
2.  Ensure all files and folders (`css`, `js`, `assets`) are in the same directory structure as in the repository.
3.  Open the `index.html` file in a modern web browser (e.g., Chrome, Firefox, Edge, Safari).

## Technologies Used

*   HTML5
*   CSS3
*   JavaScript (ES6+)
*   Qrious.js (for QR code generation)

## Project Structure

*   `index.html`: Main doctor listing and search page.
*   `doctor_detail.html`: Page for displaying detailed doctor profile.
*   `css/style.css`: Stylesheet for all HTML pages.
*   `js/script.js`: Core JavaScript for dynamic content, search, and QR code logic.
*   `js/qrious.min.js`: QR code generation library.
*   `assets/images/`: Contains the logo and placeholder doctor images.
