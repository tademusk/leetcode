/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
  const diffs = Array.from({ length: n + 1 }, () => 0);
  
  for(let i = 0; i < bookings.length; i ++){
    const [first, last, seats] = bookings[i];
    diffs[first] += seats;
    diffs[last + 1] -= seats;
  }
  
  for(let i = 1; i <= n; i ++){
    diffs[i] = diffs[i] + diffs[i - 1];
  }
  
  return diffs.slice(1, n + 1);
};
