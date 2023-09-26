export default function formattedDate(date) {
  if (!date) return;

  const newDate = date.split("T")[0].replaceAll("-", "/");
  return newDate;
}
