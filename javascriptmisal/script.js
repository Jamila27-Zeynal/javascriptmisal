const athletes = [
  {
    name: "Usain Bolt",
    sport: "Track and Field",
    hasWorldRecord: true,
    gender: "Male",
    age: 35,
    totalMedals: 8,
    country: "Jamaica",
  },
  {
    name: "Simone Biles",
    sport: "Gymnastics",
    hasWorldRecord: false,
    gender: "Female",
    age: 25,
    totalMedals: 12,
    country: "United States",
  },
  {
    name: "Michael Phelps",
    sport: "Swimming",
    hasWorldRecord: true,
    gender: "Male",
    age: 37,
    totalMedals: 28,
    country: "United States",
  },
  {
    name: "Katie Ledecky",
    sport: "Swimming",
    hasWorldRecord: true,
    gender: "Female",
    age: 25,
    totalMedals: 10,
    country: "United States",
  },
  {
    name: "Allyson Felix",
    sport: "Track and Field",
    hasWorldRecord: false,
    gender: "Female",
    age: 36,
    totalMedals: 9,
    country: "United States",
  },
  {
    name: "Nadia Comăneci",
    sport: "Gymnastics",
    hasWorldRecord: true,
    gender: "Female",
    age: 60,
    totalMedals: 9,
    country: "Romania",
  },
  {
    name: "Birgit Fischer",
    sport: "Canoeing",
    hasWorldRecord: true,
    gender: "Female",
    age: 60,
    totalMedals: 12,
    country: "Germany",
  },
  {
    name: "Mariana Pajón",
    sport: "Cycling",
    hasWorldRecord: false,
    gender: "Female",
    age: 30,
    totalMedals: 4,
    country: "Colombia",
  },
  {
    name: "Wayne Gretzky",
    sport: "Ice Hockey",
    hasWorldRecord: false,
    gender: "Male",
    age: 61,
    totalMedals: 4,
    country: "Canada",
  },
  {
    name: "Yuna Kim",
    sport: "Figure Skating",
    hasWorldRecord: false,
    gender: "Female",
    age: 31,
    totalMedals: 6,
    country: "South Korea",
  },
];

// 1. Dünya rekordu olan atletlərdən ibarət array yaradın.
//   function newArr(athletes){
//       let recordmens=[];
//       athletes.forEach(atlet => {
//           if (atlet.hasWorldRecord){
//               recordmens.push(atlet);
//           }
//       });
//       return recordmens;
//   }
//   console.log(newArr(athletes));

//2 Medallarin sayi 10 ve daha artiq olan qadin atletlerden ibaret array yaradin
//    function newArr(athletes){
//     let recordmens=[];
//     athletes.forEach(atlet => {
//         if(atlet.totalMedals >=10 && atlet.gender === "Female"){
//             recordmens.push(atlet);
//         }

//     });
//     return recordmens;
//    }
//    console.log(newArr(athletes));



// 3. Atletlərin adlarından ibarət array yaradın.
// function newArr(athletes){
//     let recordmens=[];
//     athletes.forEach(name => {
//         recordmens.push(name);


//     });
//     return recordmens;
// }
// console.log(newArr(athletes))



//task 4
// function namesCountries(athletes){
//     let newArr=[];
//     athletes.forEach(element => {
//         newArr.push({name:element.name,country:element.country})
//     });
//     return newArr;
// }
// console.log(namesCountries(athletes))


//task 5 butun medallarin sayini hesablayan
//     function totalMedal(athlet){
//   let total=0;
//   athlet.forEach((element) => {
//     total += element.totalMedals
//   });
//   return total
//     }
//     console.log(totalMedal(athletes))



//task 6 Atletin adına əsasən spesifik obyekti tapıb console-a yazın.
// function atlet (name,athlet){
//   let athletName=[]
//   athlet.forEach(element => {
//     if(element.name === name){
//      athletName.push(element)
//     }
//   });
//   return athletName
// }
// console.log(atlet(`Yuna Kim`,athletes));



//task7 Hər hansı bir kişi atletin dünya rekordu olub olmamasını yoxlayın.
// function atlet(athletes) {
//   let recordmens=[];
//   athletes.forEach(athlete => {
//     if (athlete.hasWorldRecord) {
//       console.log(`${athlete.name}`)
//       recordmens.push(athlete);

//     }
//   });
//   return recordmens
// }


//task8. Amerikalı və dünya rekordu olan atletlərin adlarından ibarət array yaradın.
// const atlete=[];
// athletes.forEach((athlete) => {
//   if (athlete.country ==="United States" && athlete.hasWorldRecord){
//     atlete.push(athlete.name);
//   }
// });
// console.log(atlete);
