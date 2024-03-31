// Write Code Here

// Functional Scope
function myNumbers(start, end) {
    let range = [];

    // Block Scope 
    if (start === -4 && end === 7) {
        for (let i = -4; i <= end; i++) {
            range.push(i);
        }
    } else {
        for (let i = start; i <= end; i++) {
            range.push(i);
        }
    }
    return range;
}
console.log(myNumbers(4, 7));