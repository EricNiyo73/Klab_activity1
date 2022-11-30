const item = [
    { name: "Bike", price: 100 },
    { name: "TV", price: 200 },
    { name: "Album", price: 10 },
    { name: "Book", price: 5 },
    { name: "Phone", price: 500 },
    { name: "Computer", price: 1000 },
  ];
  
  let arr = [];
  
  item.forEach((Element) => {
    arr.push(Element.price);
  });
  arr.sort((a, b) => a - b);
  
  //   Object of cheapest product
  //the product that will be bought when you don't have much money I mean Cheap one
  const cheapItem = item.filter((e) => {
    return e.price === arr[0];
  });
  
  console.log(cheapItem);
  //========================================================
  // the product that will be expensive in the array
  //   Object of expensive product
  
  const expensiveItem = item.filter((e) => {
    return e.price === arr[arr.length - 1];
  });
  console.log(expensiveItem);
//=======================================================
//function to remove product that are under the 10 dollar
  const Remove10 = item.filter((e) => {
    return e.price !== 10;
  });
  
  function total(sum) {
    let additon = 0;
    sum.forEach((e) => {
      additon += e.price;
    });
    return additon;
  }
  
  //   full price of all product combined
  
  let combinedproducts = total(item);
  
  console.log(combinedproducts);
  //   full price of all product combined and remove product that are under the 10 dollar
  
  let sumexceptunder10dollar= total(Remove10);
  
  console.log( sumexceptunder10dollar);