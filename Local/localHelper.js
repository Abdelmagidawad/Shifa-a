export function getCookieValue(key) {
  const cookies = document.cookie.split(";"); // Get all cookies as an array of key-value pairs

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim(); // Remove leading/trailing spaces

    // Check if the cookie starts with the provided key
    if (cookie.startsWith(`${key}=`)) {
      // Extract the value by splitting the cookie at the equals sign and returning the second part
      return cookie.split("=")[1];
    }
  }

  return null; // Return null if the cookie with the provided key is not found
}
