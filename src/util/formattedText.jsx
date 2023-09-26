export default function formattedText(text) {
  if (!text || text.length < 50) return text;
  let formattedText = text.substring(0, 50);
  formattedText = `${formattedText}...`;
  return formattedText;
}
