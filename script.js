import { getCookie, createCookie, deleteCookie, retriveCookie} from './utils.js'

// Create a Cookie
document.getElementById("createButton").addEventListener("click", createCookie);

// Delete a Cookie
document.getElementById("deleteButton").addEventListener("click", () => deleteCookie(getCookie));

// Retrieve a Deleted Cookie
document.getElementById("retrieveButton").addEventListener("click", retriveCookie);
