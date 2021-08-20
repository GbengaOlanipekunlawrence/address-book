// Business Logic for AddressBook ---------
function AddressBook() {
    this.contacts = {};
    this.currentId = 0;
}

AddressBook.prototype.addContact = function (contact) {
    contact.id = this.assignId();
    this.contacts[contact.id] = contact;
};

AddressBook.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
};

AddressBook.prototype.findContact = function (id) {
    if (this.contacts[id] != undefined) {
        return this.contacts[id];
    }
    return false;
};

AddressBook.prototype.deleteContact = function (id) {
    if (this.contacts[id] === undefined) {
        return false;
    }
    delete this.contacts[id];
    return true;
};

// Business Logic for Contacts ---------
function Contact(
    firstName,
    lastName,
    phoneNumber,
    homeAddress,
    workAddress,
    homeEmailAddress,
    workEmailAddress
) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.homeAddress = homeAddress;
    this.workAddress = workAddress;
    this.homeEmailAddress = homeEmailAddress;
    this.workEmailAddress = workEmailAddress;
}

Contact.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
};

// User Interface Logic ---------
let addressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
    let contactsList = $("ul#contacts");
    let htmlForContactInfo = "";
    Object.keys(addressBookToDisplay.contacts).forEach(function (key) {
        const contact = addressBookToDisplay.findContact(key);
        htmlForContactInfo +=
            "<li id=" +
            contact.id +
            ">" +
            contact.firstName +
            " " +
            contact.lastName +
            "</li>";
    });
    contactsList.html(htmlForContactInfo);
}

function showContact(contactId) {
    const contact = addressBook.findContact(contactId);
    $("#show-contact").show();
    $(".first-name").html(contact.firstName);
    $(".last-name").html(contact.lastName);
    $(".phone-number").html(contact.phoneNumber);
    $(".home-address").html(contact.homeAddress);
    $(".work-address").html(contact.workAddress);
    $(".home-emailaddress").html(contact.homeEmailAddress);
    $(".work-emailaddress").html(contact.workEmailAddress);
    let buttons = $("#buttons");
    buttons.empty();
    buttons.append("<button class='deleteButton' id=" + + contact.id + ">Delete</button>");
    buttons.append(
        "<button class='deleteButton' id='+ contact.id +'>Done</button>"
    );
}

function attachContactListeners() {
    $("ul#contacts").on("click", "li", function () {
        showContact(this.id); // <--- This is new!
    });
    // Code below here is new!
    $("#buttons").on("click", ".deleteButton", function () {
        addressBook.deleteContact(this.id);
        $("#show-contact").hide();
        displayContactDetails(addressBook);
    });
}

$(document).ready(function () {
    attachContactListeners();
    $("form#new-contact").submit(function (event) {
        event.preventDefault();
        const inputtedFirstName = $("input#new-first-name").val();
        const inputtedLastName = $("input#new-last-name").val();
        const inputtedPhoneNumber = $("input#new-phone-number").val();
        const inputtedHomeAddress = $("input#new-homeaddress").val();
        const inputtedWorkAddress = $("input#new-workaddress").val();
        const inputtedHomeEmailAddress = $("input#new-homeemail").val();
        const inputtedWorkEmailAddress = $("input#new-workemailaddress").val();

        // The next seven lines are new:
        $("input#new-first-name").val("");
        $("input#new-last-name").val("");
        $("input#new-phone-number").val("");
        $("input#new-homeaddress").val("");
        $("input#new-workaddress").val("");
        $("input#new-homeemail").val("");
        $("input#new-workemailaddress").val("");
        let newContact = new Contact(
            inputtedFirstName,
            inputtedLastName,
            inputtedPhoneNumber,
            inputtedHomeAddress,
            inputtedWorkAddress,
            inputtedHomeEmailAddress,
            inputtedWorkEmailAddress
        );
        addressBook.addContact(newContact);
        displayContactDetails(addressBook);
    });
});












































































































































































































































































