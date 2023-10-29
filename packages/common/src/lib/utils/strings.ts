/**
 * Return title case of a provided string
 */

export const toTitleCase = (value: string): string => {
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};

/**
 * Truncate a text when longer that provided limit
 */

export const truncateAfter = (text: string, limit: number): string => {
  if (text.length <= limit) return text;
  return text.slice(0, limit) + '...';
};

/**
 * Extracts the initials from a full name
 */

export const toInitials = (fullName: string): string => {
  if (!fullName) return '';
  const nameParts = fullName.split(' ');
  return nameParts.map(part => part.charAt(0).toUpperCase()).join('');
};

/**
 * Converts a string into a URL-friendly format, replacing spaces with hyphens and removing special characters.
 */

export const toUrlString = (input: string, useDashOfEight = false): string => {
  if (!input) return '';
  return input
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '') // Remove special characters
    .replace(/\s+/g, useDashOfEight ? '_' : '-') // Replace spaces with hyphens
    .replace(/[^\w-]+/g, '') // Remove non-word characters except hyphens
    .replace(/-+/g, '-'); // Remove consecutive hyphens

};
