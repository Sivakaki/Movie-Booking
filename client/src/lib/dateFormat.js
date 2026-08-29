export const dateFormat = (date) => {
  return new Date(date).toLocaleDateString("en-us", {
    weekday: "short",
    month: "long",
    day: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
};
