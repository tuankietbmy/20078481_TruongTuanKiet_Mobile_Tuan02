// Arrow function to calculate average
console.log('Cau1-----------------------');
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Calculate average scores for Data 1
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

// Calculate average scores for Data 2
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

// Function to check and log the winner
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins.toFixed(1)} vs. ${avgKoalas.toFixed(1)})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas.toFixed(1)} vs. ${avgDolphins.toFixed(1)})`);
    } else {
        console.log("No team wins");
    }
};

// Determine and log the winner for both Data 1 and Data 2
console.log('Data1');
checkWinner(avgDolphins1, avgKoalas1);
console.log('Data2');
checkWinner(avgDolphins2, avgKoalas2);

console.log('Cau2---------------------------');

// Function to calculate the tip
const calcTip = (bill) => {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
};

// Test data
const bills = [125, 555, 44];

// Calculate tips for each bill
const tips = bills.map(calcTip);

// Calculate total (bill + tip) for each bill
const total = bills.map((bill, index) => bill + tips[index]);

// Output results
console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Total:', total);

console.log('Cau3------------------------');
// Create objects for Mark and John with properties and BMI calculation method
const mark = {
    fullName: 'Mark Miller',
    mass: 78, // in kg
    height: 1.69, // in meters
    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92, // in kg
    height: 1.95, // in meters
    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
};

// Calculate BMI for both Mark and John
const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();

// Compare and log the result
if (markBMI > johnBMI) {
    console.log(`${mark.fullName}'s BMI (${markBMI.toFixed(1)}) is higher than ${john.fullName}'s (${johnBMI.toFixed(1)})!`);
} else if (johnBMI > markBMI) {
    console.log(`${john.fullName}'s BMI (${johnBMI.toFixed(1)}) is higher than ${mark.fullName}'s (${markBMI.toFixed(1)})!`);
} else {
    console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${markBMI.toFixed(1)})!`);
}

console.log('Cau4--------------------');
// Function to calculate the tip
const calcTip4 = (bill) => {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
};

// Test data
const billsArray = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Arrays to store tips and totals
const tipsArray = [];
const totalsArray = [];

// Calculate tips and totals using a for loop
for (let i = 0; i < billsArray.length; i++) {
    const bill = billsArray[i];
    const tip = calcTip4(bill);
    const total = bill + tip;
    
    tipsArray.push(tip);
    totalsArray.push(total);
}

// Log results
console.log('Bills:', billsArray);
console.log('Tips:', tipsArray);
console.log('Totals:', totalsArray);

// Function to calculate the average
const calcAverage4 = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

// Calculate the average of totals
const averageTotal = calcAverage4(totalsArray);

// Log the average
console.log('Average Total:', averageTotal.toFixed(2));

