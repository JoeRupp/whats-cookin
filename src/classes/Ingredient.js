class Ingredient {
  constructor(id = "no id provided", name = "no name provided", estCost = "no estimated cost provided", unit = "no unit provided") {
    this.id = id;
    this.name = name;
    this.estCost = estCost;
    this.unit = unit;
  }
}

export default Ingredient;