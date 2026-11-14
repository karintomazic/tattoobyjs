export const svgIcon = `
  <svg
    class="mt-1 w-5 h-5 flex-none text-[#FF6F61]"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fill-rule="evenodd"
      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
      clip-rule="evenodd"
    />
  </svg>
`;

/** Adds a check icon in front of every list item in PocketBase rich text. */
export function preprocessRichText(content: string | undefined): string {
  if (!content) return "";
  return content
    .replace(/<li>/g, `<li class="flex gap-x-3">${svgIcon}<span>`)
    .replace(/<\/li>/g, `</span></li>`);
}
