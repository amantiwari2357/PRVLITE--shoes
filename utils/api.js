import { API_URL, STRAPI_API_TOKEN } from "./urls";

// API se data fetch karne ka function
export const fetchDataFromApi = async (endpoint) => {
    try {
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${STRAPI_API_TOKEN}`,
            },
        };

        const res = await fetch(`${API_URL}${endpoint}`, options);

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();

        // Development mode me logging
        if (process.env.NODE_ENV === "development") {
            console.log("Fetched Data:", data);
        }

        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null; // Agar error aaye toh null return kare
    }
};

// Payment request karne ka function
export const makePaymentRequest = async (endpoint, payload) => {
    try {
        const res = await fetch(`${API_URL}${endpoint}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${STRAPI_API_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();

        // Development mode me logging
        if (process.env.NODE_ENV === "development") {
            console.log("Payment Response:", data);
        }

        return data;
    } catch (error) {
        console.error("Error making payment request:", error);
        return null; // Agar error aaye toh null return kare
    }
};
