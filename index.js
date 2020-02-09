const stlAttractions = {
    art: "STL Art Museum",
    history: "STL History Museum",
    outdoor: "Go Ape Tree Obstacle Course",
    animals: {
        arctic: "Penguin and Puffin Coast",
        monkey: "Historic Hill Primate House",
        birds: "Bird Garden",
        reptiles: "Historic Hill Herpetarium",
        bugs: "Discovery Corner Monsanto Insectarium",
        kids: "Discovery Corner Children's Zoo",
        cat: "Red Rock Big Cat Country",
        bears: "The Wild Bear Pits",
        food: "Lakeside Crossing Caribbean Cove",
        shop: "Safari Gift Shop"
    }
};

// console.log(stlAttractions)

stlAttractions.animals.fish = "Union Station Aquarium";

// console.log(stlAttractions.animals.fish);

stlAttractions.animals.bugs = "The Botanical Garden";

// console.log(stlAttractions.animals.bugs);

const faveAttraction = `My favorite STL attraction is ${(stlAttractions.animals.bears = [
  "The St Louis Zoo's Bear Exhibit"
])}!`;

console.log(faveAttraction);