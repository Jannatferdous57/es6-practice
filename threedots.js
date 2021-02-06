// const ages = [12,14,16,13,17];
// const ages2=[15,16,12];
// const allAges = ages.concat(ages2);
// console.log(allAges);

// const ages = [12,14,16,13,17];
// const ages2=[15,16,12];
// const ages3=[25,36,42];
// const allAges = ages.concat(ages2).concat([5]).concat(ages3);
// console.log(allAges);

// const ages = [12,14,16,13,17];
// const ages2=[15,16,12];
// const ages3=[25,36,42];
// const allAges2 = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges2);


// const bussiness = 650;
// const ministar = 450;
// const sochib = 250;
// const maximum = Math.max( bussiness,ministar,sochib);
// console.log(maximum);

const bussiness = 650;
const ministar = 450;
const sochib = 250;
const takaPoisha = [650, 450, 250];
const maximum = Math.max(...takaPoisha);
console.log(maximum);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax