document.addEventListener("DOMContentLoaded", function() {
    const featuresContainer = document.querySelector(".features");
    const featureItems = document.querySelectorAll(".feat");

    featureItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            const topPosition = `${index * 100 / 3}%`;

            featuresContainer.style.setProperty("--filled-top-position", topPosition);

            featureItems.forEach(feat => feat.classList.remove("active-feat"));
            item.classList.add("active-feat");
        });
    });
});

// Active quote Style
const quotes = document.querySelectorAll('.quotes-group .quote');

quotes.forEach(quote => {
    quote.addEventListener('click', () => {
        quotes.forEach(quote => quote.classList.remove('active'));

        quote.classList.add('active');
    });
});
