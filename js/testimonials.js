const testimonials = [
  {
    stars: "★★★★★",
    text: "Aarav made me feel so comfortable during my headshot session. The photos turned out amazing and I use them everywhere now!",
    name: "Sarah Chen",
    role: "Marketing Professional",
  },
  {
    stars: "★★★★",
    text: "We booked Aarav for our engagement photos and couldn't be happier. He captured genuine moments that feel so 'us'.",
    name: "James & Emily",
    role: "Couple",
  },
  {
    stars: "★★★★",
    text: "Professional, creative, and super easy to work with. The candid shots from our event are my absolute favorites!",
    name: "Michael Brown",
    role: "Event Host",
  },
  {
    stars: "★★★★★",
    text: "Aarav has an incredible eye for detail. My portrait session was fun and the results were stunning.",
    name: "Priya Singh",
    role: "Student",
  },
  {
    stars: "★★★★",
    text: "Amazing experience! The lifestyle shoot captured my personality perfectly. Highly recommended.",
    name: "Daniel Roberts",
    role: "Fitness Coach",
  },
  {
    stars: "★★★★★",
    text: "Aarav is patient, talented, and truly passionate about his craft. The photos exceeded expectations.",
    name: "Lina Martinez",
    role: "Entrepreneur",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("testimonialsContainer");

  testimonials.forEach((item) => {
    const box = document.createElement("div");
    box.classList.add("testimonial-box");

    box.innerHTML = `
      <div class="stars">${item.stars}</div>
      <p class="testimonial-text">"${item.text}"</p>
      <h4 class="client-name">${item.name}</h4>
      <p class="client-role">${item.role}</p>
    `;

    container.appendChild(box);
  });
});
