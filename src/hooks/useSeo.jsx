export default function useSeo(title, description) {
  if (title !== undefined && title !== null) {
    document.title = title;
  }

  if (description !== undefined && description !== null) {
    document.querySelector("meta[name='description']").content = description;
  }

  return [title, description];
}
