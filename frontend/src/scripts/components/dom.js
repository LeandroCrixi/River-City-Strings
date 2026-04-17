const currentYear = () => {
  const year = new Date().getFullYear();
  const current_year = document.getElementById("current-year");
  current_year.textContent = year;
};

const animation = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  const elements = document.querySelectorAll(".animate");
  elements.forEach((el) => observer.observe(el));
};

export { currentYear, animation };
