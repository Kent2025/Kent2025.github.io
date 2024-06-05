document.addEventListener("DOMContentLoaded", function() {
    const quotes = [
        "Das Leben ist schön mit dir",
        "Jeder Tag mit dir ist ein Geschenk",
        "Ein Lächeln kostet nichts :)",
        "Sowie in guten und in schlechten Zeiten",
        "Bin verloren...tief in deinen Augen",
        "Unsere Liebe, ein Feuer...der ewig brennt",
        "Kalbimin tek sahibi sensin",
        
    ];

    const quoteBox = document.getElementById("quoteBox");
    quoteBox.addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        this.textContent = quotes[randomIndex];
    });
});
