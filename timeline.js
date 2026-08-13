const filterButtons = document.querySelectorAll("[data-filter]");
const timelineItems = document.querySelectorAll(".timeline-item");

const revealItem = (item) => {
  item.classList.add("timeline-visible");
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealItem(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 },
  );

  timelineItems.forEach((item) => {
    item.classList.add("timeline-pending");
    observer.observe(item);
  });
} else {
  timelineItems.forEach(revealItem);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((candidate) => {
      candidate.setAttribute("aria-pressed", String(candidate === button));
    });

    timelineItems.forEach((item) => {
      const matches =
        selectedFilter === "all" || item.dataset.category === selectedFilter;

      item.hidden = !matches;
      if (matches) {
        requestAnimationFrame(() => revealItem(item));
      }
    });
  });
});
