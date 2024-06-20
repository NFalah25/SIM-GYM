import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        '!./resources/js/Pages/Transaksi/PrintPDF.jsx',
        "./resources/js/**/*.jsx",
    ],

    // darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#AC1929",
                "hover-primary": "#930010",
            },
        },
    },

    plugins: [forms, require("daisyui")],
};
