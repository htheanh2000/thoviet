export function formatDate(dateObj: Date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    // Extract the day, date, month, and year
    const day = days[dateObj.getDay()];
    const date = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();
  
    // Format the date as 'Weekday - DD MMM YYYY'
    const formattedDate = `${day} - ${date.toString().padStart(2, '0')} ${month} ${year}`;
  
    return formattedDate;
  }
  