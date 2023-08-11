// Function to get the value of a specific cookie
export const getCookie = (name) => {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');

    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return { cookieName, cookieValue };
        }
    }

    return null;
}

// Function to create cookie
export const createCookie = () => {

    // get cookie name and value from input 
    const cookieName = document.getElementById("cookieName").value;
    const cookieValue = document.getElementById("cookieValue").value;

    // set cookie 
    document.cookie = `${cookieName} = ${cookieValue}`;
}

// Function to delete cookie
export const deleteCookie = (getCookie) => {

    // get deleted cookie name from input
    const deletedCookieName = document.getElementById("cookieName").value;
    if (!deletedCookieName) {
        alert("please enter the name of the cookie you want to delete");

        return;
    }

    // get deleted cookie 
    const deletedCookie = getCookie(deletedCookieName);

    if (deletedCookie) {
        // get the old deleted cookies from local storage
        const oldDeletedCookies = JSON.parse(localStorage.getItem("deletedCookies"));


        // create new deleted coookies 
        let newDeletedCookies = [];
        if (oldDeletedCookies) {
            newDeletedCookies = oldDeletedCookies;
        }

        // Push the new deleted cookie to the old deleted cookies
        newDeletedCookies.push(deletedCookie);

        // set new deleted cookies to the local storage 
        localStorage.setItem('deletedCookies', JSON.stringify(newDeletedCookies));

        // Delete the cookie
        document.cookie = `${deletedCookie?.cookieName} =; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }

}

// Function to retrive cookie
export const retriveCookie = () => {

    // get retrived cookie name from input 
    const retrievedCookieNameInput = document.getElementById("cookieName").value;
    if (!retrievedCookieNameInput) {
        alert("please enter the name of the cookie you want to retrieve");

        return;
    }

    // get all deleted cookies from local storage 
    const allDeletedCookies = JSON.parse(localStorage.getItem("deletedCookies"));

    // Find retrieved cookie 
    const retrivedCookie = allDeletedCookies.find(cookie => cookie.cookieName === retrievedCookieNameInput)

    // get retrided cookie name and value 
    const retrievedCookieName = retrivedCookie?.cookieName;
    const retrievedCookieValue = retrivedCookie?.cookieValue;

    // retrieve the cookie
    document.cookie = `${retrievedCookieName} = ${retrievedCookieValue};`

    // get rest deleted cookies
    const restDeletedCookies = allDeletedCookies.filter(cookie => cookie.cookieName !== retrievedCookieNameInput)

    // get rest deleted cookies to the local storage
    localStorage.setItem('deletedCookies', JSON.stringify(restDeletedCookies));
}