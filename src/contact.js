export default function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact", "hidden");

  const locationDetails = document.createElement("div");
  locationDetails.classList.add("location-details");

  const createDetails = function (title, ...contents) {
    const details = document.createElement("div");
    details.classList.add(`${title}-details`);

    const header = document.createElement("h3");
    header.classList.add(`${title}-header`);
    header.textContent = title;
    header.style.textTransform = "Capitalize";

    const content = document.createElement("p");
    content.classList.add(`${title}-content`);

    const span1 = document.createElement("span");
    span1.textContent = contents[0];

    const span2 = document.createElement("span");
    span2.textContent = contents[1];

    const span3 = document.createElement("span");
    span3.textContent = contents[2];

    const span4 = document.createElement("span");
    span4.textContent = contents[3];

    console.log(contents[3]);

    if (contents[0]) content.appendChild(span1);
    if (contents[1]) content.appendChild(span2);
    if (contents[2]) content.appendChild(span3);
    if (contents[3]) content.appendChild(span4);

    details.appendChild(header);
    details.appendChild(content);

    return details;
  };

  const map = document.createElement("div");
  map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19362.3471865442!2d-7.2489604110001835!3d52.6546779169583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sie!4v1679380918545!5m2!1sen!2sie" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  locationDetails.appendChild(
    createDetails(
      "address",
      "158 Tulip Inn Street,",
      "158 Tulip Inn Street,",
      "Co. Kilkenny,",
      "R95 E3792X"
    )
  );
  locationDetails.appendChild(map);

  const informationDetails = document.createElement("div");
  informationDetails.classList.add("information-details");

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

  informationDetails.appendChild(
    createDetails(
      "hours",
      "Monday-Friday: 07:30 - 16:00",
      "Saturday: 08:30 - 15:00",
      "Sunday: 9:30 - 16:00"
    )
  );
  informationDetails.appendChild(contactDetails);

  contact.appendChild(locationDetails);
  contact.appendChild(informationDetails);

  return contact;
}
