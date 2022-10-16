/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
const lastname = document.getElementById("last-name");
const firstname = document.getElementById("first-name");
const email = document.getElementById("email");
const valid = document.getElementById("valid");
const relative1 = document.getElementById("relative1");
const relative2 = document.getElementById("relative2");
const bfirstname = document.getElementById("b-first-name");
const bemail = document.getElementById("b-email");
const blastname = document.getElementById("b-last-name");



document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault()
    

    valid.style.visibility = "visible";
    relative1.style.visibility = "hidden";
    relative2.style.visibility = "hidden";
    firstname.style.border = "0 solid red";
    lastname.style.border = "0 solid red";
    email.style.border = "0 solid red";
    bfirstname.style.visibility = "hidden";
    blastname.style.visibility = "hidden";
    bemail.style.visibility = "hidden";

    const fname = firstname.value;
    const lname = lastname.value;
    const reg = new RegExp("^[A-ZŻŹĆĄŚĘŁÓŃ][a-zżźćńółęąś]+$");

    if (firstname.value == "" || lastname.value == "" || email.value == "" || !reg.test(String(fname)) || !reg.test(String(lname))) {
        relative1.style.visibility = "visible";
        valid.style.visibility = "hidden";
        if (firstname.value == "" || !reg.test(String(fname))) {
            firstname.style.border = "1px solid red";
            bfirstname.style.visibility = "visible";
        }

        if (lastname.value == "" || !reg.test(String(lname))) {
            lastname.style.border = "1px solid red";
            blastname.style.visibility = "visible";
        }
        if (email.value == "") {
            email.style.border = "1px solid red";
            bemail.style.visibility = "visible";
        }
    }
    if (!document.getElementById("frontend-checkbox").checked && !document.getElementById("backend-checkbox").checked && !document.getElementById("mobile-checkbox").checked && !document.getElementById("graphics-checkbox").checked) {
        valid.style.visibility = "hidden";
        relative1.style.visibility = "visible";
        relative2.style.visibility = "visible";
    }
});

