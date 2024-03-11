

//               Задание 1


const array1 = [25,"Сапог", "Стол",42, 78, "Книга"];
let number = 1;
const res =(array1, number) => number = array1[number];
console.log(res(array1, number))




//               Задание 2

const weatherDescription = (weatherCode, decodeFunction) => {
    switch (weatherCode) {
      case "SQ":
        return decodeFunction("SQ") + " – шквал";
      case "PO":
        return decodeFunction("PO") + " – пыльный вихрь";
      case "FC":
        return decodeFunction("FC") + " – торнадо";
      case "BR":
        return decodeFunction("BR") + " – дымка (видимость от 1 до 9 км)";
      case "HZ":
        return decodeFunction("HZ") + " – мгла (видимость менее 10 км)";
      case "FU":
        return decodeFunction("FU") + " – дым (видимость менее 10 км)";
      case "DS":
        return decodeFunction("DS") + " – пыльная буря (видимость менее 10 км)";
      case "SS":
        return decodeFunction("SS") + " – песчаная буря (видимость менее 10 км)";
      default:
        return "Неизвестный код погоды";
    }
  };
  

  const decodeFunction = (decode) => {
    return "Расшифровка для " + decode;
  };
  
  const weatherCode = "FU";
  const result = weatherDescription(weatherCode, decodeFunction);
  console.log(result);
  