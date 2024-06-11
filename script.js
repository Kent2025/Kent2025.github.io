document.addEventListener("DOMContentLoaded", function() {
    const quotes = [
        "Das Leben ist schön mit dir",
        "Jeder Tag mit dir ist ein Geschenk",
        "Ein Lächeln kostet nichts :)",
        "Sowie in guten und in schlechten Zeiten",
        "Bin verloren...tief in deinen Augen",
        "Unsere Liebe, ein Feuer...der ewig brennt",
        "Kalbimin tek sahibi sensin",
        "Deine Stimme so sanft wie die Wellen, so süß wie Zucker",
        "Meine Liebe zu dir unbeschreiblich",
        "Du machst mich verrückt",
        "ich brauche keine Sonne, wenn du bei mir bist",
        "Wer sucht, findet nicht, aber wer nicht sucht, wird gefunden",
        "Ich vermisse dich so sehr",
        "Ich habe die Liebe erfahren und verstehe jetzt den Sinn des Lebens",
        "Für die Welt bist du irgendjemand, aber für mich bist du die Welt",
        "Mit dir gehe ich überall hin, lass mich nur nie wieder los",
        "Habe dich in der Mitte meines Herzens graviert",
        "Du + Ich = Wir♥️",
        "Entfernung kann nur Körper trennen, aber niemals unsere Herzen",
        "An dich denken ist schön, doch noch schöner ist dich zu hören"
    ];

    const quoteBox = document.getElementById("quoteBox");
    quoteBox.addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        this.textContent = quotes[randomIndex];
    });
});
