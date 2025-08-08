function rentalDays(date1, date2) {
  // Convert both dates to milliseconds since epoch
  const date1Ms = new Date(date1).getTime();
  const date2Ms = new Date(date2).getTime();

  // Calculate the difference in milliseconds
  const differenceMs = Math.abs(date2Ms - date1Ms);

  // Convert the difference from milliseconds to days
  // 1000 ms * 60 sec * 60 min * 24 hours = 86400000 ms in a day
  const daysDifference = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

  return daysDifference;
}

// Example usage
// const startDate = '2025-04-01';
// const endDate = '2025-04-05';
// console.log(`Days between: ${daysBetweenDates(startDate, endDate)}`); // Output: 4

function calculateRentalPrice(groupCode, PickupDate, dropOffDate) {
  // Define the price per day for each group code
  if (groupCode == "F") {
    return rentalDays(PickupDate, dropOffDate) * 40;
  } else if (groupCode == "I") {
    return rentalDays(PickupDate, dropOffDate) * 30;
  } else if (groupCode == "E") {
    return rentalDays(PickupDate, dropOffDate) * 20;
  }
}

function carCategoryMapper(groupCode) {
  if (groupCode == "F") {
    return 4;
  } else if (groupCode == "I") {
    return 3;
  } else if (groupCode == "E") {
    return 2;
  }
}

function carCategoryName(groupCode) {
  if (groupCode == "F") {
    return "Full Size or 7 seater";
  } else if (groupCode == "I") {
    return "Intermediate or 5 seater";
  } else if (groupCode == "E") {
    return "Compact or 4 seater";
  }
}

function deriveCarCategory(price) {
  let carCategory = 0;

  if (price >= 18 && price < 23) {
    carCategory = 1; // Mini
  } else if (price >= 23 && price < 30) {
    carCategory = 2; // Eco
  } else if (price >= 30 && price < 40) {
    carCategory = 3; // Intermediate
  } else if (price > 40) {
    carCategory = 4; // Full Size
  }
  return carCategory;
}

// function generateReferenceNumber(string prependix, string orderNumber) {
// const now = new Date();
// const year = now.getFullYear().toString().substr(-2);
// const month = String(now.getMonth() + 1).padStart(2, '0');
// const day = String(now.getDate()).padStart(2, '0');
// const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0');

//   return `${prepend}${year}${month}${day}${randomNum}`;

// }

module.exports = {
  rentalDays,
  calculateRentalPrice,
  carCategoryMapper,
  carCategoryName,
  deriveCarCategory,
};
