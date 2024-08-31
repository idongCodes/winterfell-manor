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