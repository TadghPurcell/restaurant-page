export default function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact", "hidden");

  const locationDetails = document.createElement("div");
  locationDetails.classList.add("location-details");

  const addressDetails = document.createElement("div");
  addressDetails.classList.add("address-details");

  const addressHeader = document.createElement("h3");
  addressHeader.classList.add("address-header");
  addressHeader.textContent = "Address";

  const addressContent = document.createElement("p");
  addressContent.classList.add("address-content");

  const addressSpan1 = document.createElement("span");
  addressSpan1.textContent = "158 Tulip Inn Street,";
  const addressSpan2 = document.createElement("span");
  addressSpan2.textContent = "Kilkenny,";
  const addressSpan3 = document.createElement("span");
  addressSpan3.textContent = "Co. Kilkenny,";
  const addressSpan4 = document.createElement("span");
  addressSpan4.textContent = "R95 E3792X";

  addressContent.appendChild(addressSpan1);
  addressContent.appendChild(addressSpan2);
  addressContent.appendChild(addressSpan3);
  addressContent.appendChild(addressSpan4);

  addressDetails.appendChild(addressHeader);
  addressDetails.appendChild(addressContent);

  const map = document.createElement("div");
  map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19362.3471865442!2d-7.2489604110001835!3d52.6546779169583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sie!4v1679380918545!5m2!1sen!2sie" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  locationDetails.appendChild(addressDetails);
  locationDetails.appendChild(map);

  const informationDetails = document.createElement("div");
  informationDetails.classList.add("information-details");

  const hoursDetails = document.createElement("div");
  hoursDetails.classList.add("hours-details");

  const hoursHeader = document.createElement("h3");
  hoursHeader.classList.add("hours-header");
  hoursHeader.textContent = "Hours";

  const hoursContent = document.createElement("p");
  hoursContent.classList.add("hours-content");

  const hoursSpan1 = document.createElement("span");
  hoursSpan1.textContent = "Monday-Friday: 07:30 - 16:00";
  const hoursSpan2 = document.createElement("span");
  hoursSpan2.textContent = "Saturday: 08:30 - 15:00";
  const hoursSpan3 = document.createElement("span");
  hoursSpan3.textContent = "Sunday: 9:30 - 16:00";

  hoursContent.appendChild(hoursSpan1);
  hoursContent.appendChild(hoursSpan2);
  hoursContent.appendChild(hoursSpan3);

  hoursDetails.appendChild(hoursHeader);
  hoursDetails.appendChild(hoursContent);

  const contactDetails = document.createElement("div");
  contactDetails.classList.add("contact-details");

  const contactHeader = document.createElement("h3");
  contactHeader.classList.add("contact-header");
  contactHeader.textContent = "Contact Us";

  const contactNumber = document.createElement("p");
  contactNumber.classList.add("number");
  contactNumber.textContent = " +353 20 919 2682";

  const contactEmail = document.createElement("p");
  contactEmail.classList.add("email");
  contactEmail.textContent = " TheButterSlip@fakeemail.com";

  contactDetails.appendChild(contactHeader);
  contactDetails.appendChild(contactNumber);
  contactDetails.appendChild(contactEmail);

  informationDetails.appendChild(hoursDetails);
  informationDetails.appendChild(contactDetails);

  contact.appendChild(locationDetails);
  contact.appendChild(informationDetails);

  return contact;
}
