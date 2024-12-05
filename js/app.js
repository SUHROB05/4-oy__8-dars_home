// //////////////////////////////////  1  M  /////

// let yonalish = prompt("Robot yo‘nalishini kiriting (S-shimol, J-janub, Q-sharq, G-g‘arb):").toUpperCase();
// let komanda = parseInt(prompt("Komandani kiriting (0-harakatni davom ettir, 1-chapga buril, 2-o‘ngga buril):"));

// if (komanda === 0) {
//     console.log(`Robotning yo‘nalishi o‘zgarmadi: ${yonalish}`);
// } else if (komanda === 1) {
//     switch (yonalish) {
//         case "S": yonalish = "G"; break;
//         case "J": yonalish = "Q"; break;
//         case "Q": yonalish = "S"; break;
//         case "G": yonalish = "J"; break;
//     }
//     console.log(`Robot chapga burildi, yangi yo‘nalish: ${yonalish}`);
// } else if (komanda === 2) {
//     switch (yonalish) {
//         case "S": yonalish = "Q"; break;
//         case "J": yonalish = "G"; break;
//         case "Q": yonalish = "J"; break;
//         case "G": yonalish = "S"; break;
//     }
//     console.log(`Robot o‘ngga burildi, yangi yo‘nalish: ${yonalish}`);
// } else {
//     console.log("Noto‘g‘ri komanda!");
// }



// //////////////////////////////////  2  M  /////

// let yonTomon = parseFloat(prompt("Kubning yon tomonini kiriting:"));

// let hajm = Math.pow(yonTomon, 3);
// let sirtYuzi = 6 * Math.pow(yonTomon, 2);

// console.log(`Kubning hajmi: ${hajm}`);
// console.log(`Kubning to‘la sirt yuzasi: ${sirtYuzi}`);


// //////////////////////////////////  3  M  /////

// let x = parseInt(prompt("X koordinatasini kiriting (1-8):"));
// let y = parseInt(prompt("Y koordinatasini kiriting (1-8):"));


// if (x >= 1 && x <= 8 && y >= 1 && y <= 8) {
//     let x1 = x % 2
//     let y1 = x % 2
//     if (x1 == 0 && y1 == 1 || x1 == 0 && y1 == 1) {
//         console.log(`${x} , ${y} maydon oq`);
//     } else {
//         console.log(`${x} , ${y} maydon qora`);
//     }
// } else {
//     console.log("Koordinatalar noto‘g‘ri kiritilgan.");
// }


// //////////////////////////////////  4  M  /////

// let A = parseFloat(prompt("A nuqtasini kiriting:"));
// let B = parseFloat(prompt("B nuqtasini kiriting:"));
// let C = parseFloat(prompt("C nuqtasini kiriting:"));

// let masofaAB = Math.abs(A - B);
// let masofaAC = Math.abs(A - C);

// if (masofaAB < masofaAC) {
//   console.log(`Eng yaqin nuqta B, masofa: ${masofaAB}`);
// } else {
//   console.log(`Eng yaqin nuqta C, masofa: ${masofaAC}`);
// }


// //////////////////////////////////  5  M  /////

// let x1 = parseFloat(prompt("1-to‘rtburchakning birinchi uchi X1:"));
// let y1 = parseFloat(prompt("1-to‘rtburchakning birinchi uchi Y1:"));
// let x2 = parseFloat(prompt("1-to‘rtburchakning ikkinchi uchi X2:"));
// let y2 = parseFloat(prompt("1-to‘rtburchakning ikkinchi uchi Y2:"));
// let x3 = parseFloat(prompt("1-to‘rtburchakning uchinchi uchi X3:"));
// let y3 = parseFloat(prompt("1-to‘rtburchakning uchinchi uchi Y3:"));

// let x4 = x1 === x2 ? x3 : x1 === x3 ? x2 : x1;
// let y4 = y1 === y2 ? y3 : y1 === y3 ? y2 : y1;

// console.log(`To‘rtburchakning to‘rtinchi ${x4, y4}`);


// //////////////////////////////////  6  M  /////

// let son1 = parseInt(prompt("Birinchi sonni kiriting: "));
// let son2 = parseInt(prompt("Ikkinchi sonni kiriting: "));
// let ishora = prompt("Bajarmoqchi bo'lgan amalni kiriting (/ * - + ): ");

// switch (ishora) {
//     case '/':
//         if (son2 === 0) {
//             console.log("Xatolik: Nolga bo'lish mumkin emas.");
//         } else {
//             console.log(`Natija: ${son1} / ${son2} = ${son1 / son2}`);
//         }
//         break;
//     case '*':
//         console.log(`Natija: ${son1} * ${son2} = ${son1 * son2}`);
//         break;
//     case '-':
//         console.log(`Natija: ${son1} - ${son2} = ${son1 - son2}`);
//         break;
//     case '+':
//         console.log(`Natija: ${son1} + ${son2} = ${son1 + son2}`);
//         break;
//     default:
//         console.log("Xatolik: Noto‘g‘ri amal kiritildi.");
// }


// //////////////////////////////////  7  M  /////

// let elementTuri = prompt(
//     "Qaysi elementni kirityapsiz? (radius, diametr, uzunlik, yuz): "
// ).toLowerCase();
// let qiymat = parseFloat(prompt("Qiymatini kiriting: "));
// const pi = 3.14;

// switch (elementTuri) {
//     case "radius":
//         let R = qiymat;
//         console.log(`Radius (R): ${R}`);
//         console.log(`Diametr (D): ${2 * R}`);
//         console.log(`Aylana uzunligi (L): ${2 * pi * R}`);
//         console.log(`Doira yuzi (S): ${pi * R ** 2}`);
//         break;
//     case "diametr":
//         let D = qiymat;
//         R = D / 2;
//         console.log(`Radius (R): ${R}`);
//         console.log(`Diametr (D): ${D}`);
//         console.log(`Aylana uzunligi (L): ${2 * pi * R}`);
//         console.log(`Doira yuzi (S): ${pi * R ** 2}`);
//         break;
//     case "uzunlik":
//         let L = qiymat;
//         R = L / (2 * pi);
//         console.log(`Radius (R): ${R}`);
//         console.log(`Diametr (D): ${2 * R}`);
//         console.log(`Aylana uzunligi (L): ${L}`);
//         console.log(`Doira yuzi (S): ${pi * R ** 2}`);
//         break;
//     case "yuz":
//         let S = qiymat;
//         R = Math.sqrt(S / pi);
//         console.log(`Radius (R): ${R}`);
//         console.log(`Diametr (D): ${2 * R}`);
//         console.log(`Aylana uzunligi (L): ${2 * pi * R}`);
//         console.log(`Doira yuzi (S): ${S}`);
//         break;
//     default:
//         console.log("Xato: Noto'g'ri element turi kiritildi.");
// }


