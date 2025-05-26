const bill = 275;
const tip_1=0.15*bill;
const tip_2=0.2*bill;
const tip=bill>50 && bill<300 ?tip_1:tip_2;
const total=tip+bill;
console.log(`The bill was ${bill} , the tip was ${tip } and the total value ${total}`);
