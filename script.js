// dynamically set current date to text in footer span element
const footerSpan = document.querySelector("#currentMonthYear");
const date = new Date();
const year = date.getFullYear();
const currentMonth = date.getMonth() + 1;

const monthString = () => {
    let monthStr = "";

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    months.forEach((mon) => {
        if (months.indexOf(mon) === currentMonth - 1) {
            monthStr += months[months.indexOf(mon)];
        }
    });  
    
    return monthStr;
};

footerSpan.textContent = `${monthString()} ${year}`;

// Read text from input on home page
// Create an element to hold that text
// Display that element to main feed
const postInputElement = document.querySelector("#post-text");
const postInputElementText = postInputElement.value;
const mainFeedContainer = document.querySelector("#feed");
const submitPostButton = document.querySelector("#submit-post");

const postObject = {
    postId: `${year}-${currentMonth}-${postInputElementText.split(",").splice(0,3).join("")}`,
    postText: postInputElementText,
};

const mainFeedPosts = [];

const setToFeedArray = () => {};

const displayPosts = () => {
    const postContainer = document.createElement("div");
    postContainer.classList.add("post-container");
    mainFeedContainer.appendChild(postContainer);
    
    if (postInputElementText === null) {
        alert("No text entered. Create a post first.");
    } else {
        postContainer.innerHTML = `
            <p>${postInputElementText}<p>
        `;
    } 
};

submitPostButton.addEventListener("click", displayPosts);