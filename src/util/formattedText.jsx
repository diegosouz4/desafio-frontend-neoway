export default function formattedText(text, limit = 50) {
  if (!text || text.length < limit) return text;
  let formattedText = text.substring(0, limit);
  formattedText = `${formattedText}...`;
  return formattedText;
}
