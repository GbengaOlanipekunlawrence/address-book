### PROJECT NAME:ADDRESSBOOK

### A demonstration project for Object-Oriented Programming in Intermediate JavaScript (AddressBook)

### Technology use

- HTML
- CSS
- JQuery
- JavaScript

* Git

### Explanation of project directory

- main project folder/directory on my desktop git bash here and using the mkdir git command for:

  1.ADDRESS-BOOK CD INTO THE ADDRESS-BOOK AND MKDIR FOR THE FOLLOWING:

  2.CSS-TOUCH TO CREATE STYLES.CSS FILE FOR MY CUSTOM CSS FILE (inside this folder goes my bootstrap.css file)

  3.JS-TOUCH to create scripts.js (inside this folder goes my jquery local library file)

  4.touch to create index.html file for my DOM

### Explanation of the code

###### Constructor:

- A constructor is the blueprint that specifies how to create an object

###### Prototype

- A prototype is just an object from which other objects inherit methods.

  1.add Contact constructor and prototype

  - // a contructor function that specifies how to create Contact in an addressBook

function Contact(firstName, lastName, phoneNumber) {

this.firstName = firstName;

this.lastName = lastName;

this.phoneNumber = phoneNumber;

}

- // a custom method to my Contact.prototype

Contact.prototype.fullName = function() {

return this.firstName + " " + this.lastName;

}

2.add objects_within_objects content (line 32 through 53 in my business logic for AddressBook)

3.unique_ids (line 4,8,12,13,14 and more in my business logic for Contact)

4.add method for finding and deleting contacts (line 17 and 24 in my business logic for AddressBook)

5.addressbook user interface code (line 55 ---- in my custom scripts.js)

6.adding basic interactivity (line 58----in my user interface logic of my custom scripts.js)

7.add listener on parent element (I add a form submission event listener, with the standard event.preventDefault() included.Line 108 in the custom scripts.js file, user interface logic section )

8.add event delegation code
9.add semis for consistency
