/* =========================================================
   TRIP2DESTINATION JAVASCRIPT
========================================================= */


/* ================= TRIP DATA ================= */

const trips = [

    {
        id: "manali",

        name: "Manali Mountain Escape",

        location: "Himachal Pradesh",

        category: "mountains",

        duration: "4 Days / 3 Nights",

        price: 8999,

        rating: "4.9",

        image:
            "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=85",

        description:
            "Experience the beauty of the Himalayas with snow-covered mountains, peaceful valleys, adventure activities and charming cafes.",

        highlights: [
            "Solang Valley",
            "Hadimba Temple",
            "Mall Road",
            "Rohtang / Atal Tunnel",
            "Mountain sightseeing"
        ]
    },


    {
        id: "goa",

        name: "Goa Beach Holiday",

        location: "Goa",

        category: "beach",

        duration: "4 Days / 3 Nights",

        price: 7499,

        rating: "4.8",

        image:
            "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=85",

        description:
            "Relax beside beautiful beaches, explore Portuguese heritage and enjoy Goa's famous food, sunsets and coastal experiences.",

        highlights: [
            "Baga Beach",
            "Calangute Beach",
            "Fort Aguada",
            "Old Goa",
            "Sunset cruise"
        ]
    },


    {
        id: "jaipur",

        name: "Royal Jaipur Experience",

        location: "Rajasthan",

        category: "heritage",

        duration: "3 Days / 2 Nights",

        price: 6999,

        rating: "4.8",

        image:
            "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=85",

        description:
            "Explore the Pink City and discover majestic forts, royal palaces, colorful markets and authentic Rajasthani culture.",

        highlights: [
            "Amber Fort",
            "Hawa Mahal",
            "City Palace",
            "Jantar Mantar",
            "Local markets"
        ]
    },


    {
        id: "kerala",

        name: "Kerala Backwater Escape",

        location: "Kerala",

        category: "nature",

        duration: "4 Days / 3 Nights",

        price: 12999,

        rating: "4.9",

        image:
            "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=85",

        description:
            "Cruise through Kerala's peaceful backwaters, enjoy lush landscapes and experience the culture and cuisine of God's Own Country.",

        highlights: [
            "Alleppey Houseboat",
            "Munnar",
            "Tea plantations",
            "Kerala cuisine",
            "Backwater cruise"
        ]
    },


    {
        id: "varanasi",

        name: "Spiritual Varanasi",

        location: "Uttar Pradesh",

        category: "heritage",

        duration: "3 Days / 2 Nights",

        price: 5999,

        rating: "4.7",

        image:
            "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=1000&q=85",

        description:
            "Experience the spiritual atmosphere of Varanasi, ancient temples, river ghats and the famous Ganga Aarti.",

        highlights: [
            "Ganga Aarti",
            "Dashashwamedh Ghat",
            "Boat ride",
            "Kashi Vishwanath",
            "Sarnath"
        ]
    },


    {
        id: "ladakh",

        name: "Ladakh Adventure",

        location: "Ladakh",

        category: "mountains",

        duration: "6 Days / 5 Nights",

        price: 15999,

        rating: "4.9",

        image:
            "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=85",

        description:
            "Ride through dramatic Himalayan landscapes, high-altitude passes, monasteries and crystal-clear mountain lakes.",

        highlights: [
            "Pangong Lake",
            "Nubra Valley",
            "Khardung La",
            "Thiksey Monastery",
            "Leh Market"
        ]
    }

];


/* ================= INITIALIZATION ================= */

document.addEventListener("DOMContentLoaded", () => {

    loadTrips();

});


/* ================= SCREEN NAVIGATION ================= */

function showScreen(screenId) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {
            screen.classList.add("hidden");
        });


    document
        .getElementById(screenId)
        .classList.remove("hidden");

}


function loginUser() {

    document
        .getElementById("loginScreen")
        .classList.add("hidden");


    document
        .getElementById("mainApp")
        .classList.remove("hidden");


    showToast("Welcome to Trip2Destination ✈️");

}


function logoutUser() {

    document
        .getElementById("mainApp")
        .classList.add("hidden");


    document
        .getElementById("loginScreen")
        .classList.remove("hidden");

}


/* ================= NAVIGATION ================= */

function navigate(pageId, navButton) {

    document
        .querySelectorAll(".page")
        .forEach(page => {
            page.classList.remove("active");
        });


    document
        .getElementById(pageId)
        .classList.add("active");


    document
        .querySelectorAll(".nav-item")
        .forEach(item => {
            item.classList.remove("active");
        });


    if (navButton) {
        navButton.classList.add("active");
    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function openTrips() {

    const navItems =
        document.querySelectorAll(".nav-item");


    navItems.forEach(item =>
        item.classList.remove("active")
    );


    navItems[1].classList.add("active");


    navigate(
        "tripsPage",
        navItems[1]
    );

}


/* ================= LOAD TRIPS ================= */

function loadTrips(category = "all") {

    const container =
        document.getElementById("tripList");


    if (!container) return;


    let filteredTrips = trips;


    if (category !== "all") {

        filteredTrips =
            trips.filter(
                trip =>
                    trip.category === category
            );

    }


    container.innerHTML = "";


    if (filteredTrips.length === 0) {

        container.innerHTML = `
            <div style="
                text-align:center;
                padding:50px 20px;
                color:#78847d;
            ">
                No trips found.
            </div>
        `;

        return;
    }


    filteredTrips.forEach(trip => {

        const card =
            document.createElement("article");


        card.className = "trip-card";


        card.onclick = () =>
            showTrip(trip.id);


        card.innerHTML = `

            <img
                src="${trip.image}"
                alt="${trip.name}"
            >

            <div class="trip-info">

                <span class="tag">
                    ${trip.category.toUpperCase()}
                </span>

                <h3>
                    ${trip.name}
                </h3>

                <p>
                    📍 ${trip.location}
                </p>

                <div class="trip-meta">

                    <span>
                        🗓 ${trip.duration}
                    </span>

                    <span>
                        ⭐ ${trip.rating}
                    </span>

                </div>

                <div class="trip-price">
                    ₹${formatPrice(trip.price)}
                </div>

            </div>

        `;


        container.appendChild(card);

    });

}


/* ================= FILTER CATEGORY ================= */

function filterCategory(category, button) {

    document
        .querySelectorAll(".category")
        .forEach(btn =>
            btn.classList.remove("active")
        );


    button.classList.add("active");


    loadTrips(category);

    openTrips();

}


/* ================= SEARCH ================= */

function searchTrips() {

    const query =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    if (!query) return;


    const results =
        trips.filter(trip =>

            trip.name
                .toLowerCase()
                .includes(query)

            ||

            trip.location
                .toLowerCase()
                .includes(query)

            ||

            trip.category
                .toLowerCase()
                .includes(query)

        );


    const container =
        document.getElementById("tripList");


    container.innerHTML = "";


    results.forEach(trip => {

        const card =
            document.createElement("article");


        card.className = "trip-card";


        card.onclick =
            () => showTrip(trip.id);


        card.innerHTML = `

            <img
                src="${trip.image}"
                alt="${trip.name}"
            >

            <div class="trip-info">

                <span class="tag">
                    ${trip.category.toUpperCase()}
                </span>

                <h3>
                    ${trip.name}
                </h3>

                <p>
                    📍 ${trip.location}
                </p>

                <div class="trip-meta">
                    <span>
                        🗓 ${trip.duration}
                    </span>

                    <span>
                        ⭐ ${trip.rating}
                    </span>
                </div>

                <div class="trip-price">
                    ₹${formatPrice(trip.price)}
                </div>

            </div>

        `;


        container.appendChild(card);

    });


    openTrips();

}


/* ================= TRIP DETAILS ================= */

function showTrip(id) {

    const trip =
        trips.find(
            item => item.id === id
        );


    if (!trip) return;


    const details =
        document.getElementById(
            "tripDetails"
        );


    details.innerHTML = `

        <img
            class="detail-image"
            src="${trip.image}"
            alt="${trip.name}"
        >

        <div class="detail-content">

            <span class="tag">
                ${trip.category.toUpperCase()}
            </span>

            <h1>
                ${trip.name}
            </h1>

            <div class="detail-location">
                📍 ${trip.location}
                &nbsp; • &nbsp;
                ⭐ ${trip.rating}
            </div>

            <p class="detail-description">
                ${trip.description}
            </p>

            <div class="package-box">

                <h3>
                    What's Included
                </h3>

                <ul class="package-list">

                    ${trip.highlights
                        .map(
                            item =>
                                `<li>✓ ${item}</li>`
                        )
                        .join("")}

                    <li>
                        ✓ Comfortable accommodation
                    </li>

                    <li>
                        ✓ Local transportation
                    </li>

                </ul>

                <div class="package-price">

                    <div>
                        <small>
                            Starting from
                        </small>

                        <strong>
                            ₹${formatPrice(trip.price)}
                        </strong>

                        <small>
                            / person
                        </small>
                    </div>

                    <span>
                        ${trip.duration}
                    </span>

                </div>

            </div>

            <button
                class="primary-btn full"
                onclick="openBooking('${trip.id}')"
            >
                Book This Trip →
            </button>

        </div>
    `;


    document
        .querySelectorAll(".page")
        .forEach(page =>
            page.classList.remove("active")
        );


    details.closest(".page")
        .classList.add("active");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ================= BOOKING ================= */

let selectedTrip = null;

let travelers = 2;


function openBooking(id) {

    selectedTrip =
        trips.find(
            trip => trip.id === id
        );


    if (!selectedTrip) return;


    travelers = 2;


    document
        .getElementById("bookingTripName")
        .textContent =
            selectedTrip.name;


    updateBookingPrice();


    document
        .getElementById("bookingModal")
        .classList.remove("hidden");

}


function closeBooking() {

    document
        .getElementById("bookingModal")
        .classList.add("hidden");

}


function changeTravelers(amount) {

    travelers += amount;


    if (travelers < 1)
        travelers = 1;


    if (travelers > 12)
        travelers = 12;


    updateBookingPrice();

}


function updateBookingPrice() {

    document
        .getElementById("travelerCount")
        .textContent =
            travelers;


    if (!selectedTrip) return;


    const total =
        selectedTrip.price *
        travelers;


    document
        .getElementById("totalPrice")
        .textContent =
            "₹" + formatPrice(total);

}


function confirmBooking() {

    closeBooking();


    showToast(
        "Booking request received! 🎉"
    );

}


/* ================= PASSWORD ================= */

function togglePassword() {

    const input =
        document.getElementById(
            "password"
        );


    if (input.type === "password") {

        input.type = "text";

    } else {

        input.type = "password";

    }

}


/* ================= HELPERS ================= */

function formatPrice(price) {

    return price.toLocaleString(
        "en-IN"
    );

}


function showToast(message) {

    const toast =
        document.getElementById("toast");


    toast.textContent = message;


    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2800);

}


function showComingSoon(feature) {

    showToast(
        `${feature} section coming soon 🚀`
    );

}