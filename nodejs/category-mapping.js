const TOOLS = {
  name: "Tools",
  validate: function (description) {
    if (description.includes("harbor freight")
      || description.includes("home depot")
      || description.includes("homedepot.com")) {
      return true;
    }
    return false;
  }
};

const FUN = {
  name: "Fun",
  validate: function (description) {
    if (description.includes("starbucks")
      || description.includes("mcdonald")
      || description.includes("youtubepremium")
      || description.includes("milklab")
      || description.startsWith("moge tee")
      || description.includes("rakuten")) {
      return true;
    }
    return false;
  }
};

const FOOD = {
  name: "Food",
  validate: function (description) {
    if (description.includes("chipotle")
      || description.startsWith("popeyes")
      || description.includes("costco whse")
      || description.includes("sams club")
      || description.includes("today asia")
      || description.includes("trader joe")
      || description.includes("subway")
      || description.includes("grand asia")
      || description.includes("food from ")
      || (description.startsWith("walmart") && description.endsWith("raleigh nc"))) {
      return true;
    }
    return false;
  }
};

const CAR_REGISTRATION = {
  name: "Car-Registration",
  validate: function (description) {
    if (description.includes("ncdmv")) {
      return true;
    }
    return false;
  }
};

const CAR_INSURANCE = {
  name: "Car-Insurance",
  validate: function (description) {
    if (description.includes("geico")) {
      return true;
    }
    return false;
  }
};

const CAR_GAS = {
  name: "Car-Gas",
  validate: function (description) {
    if (description.includes("gas ")) {
      return true;
    }
    return false;
  }
};

const CAR_PARTS = {
  name: "Car-Parts",
  validate: function (description) {
    if (description.includes("carparts")
      || description.includes("rockauto")) {
      return true;
    }
    return false;
  }
};

const TRAVEL = {
  name: "Travel",
  validate: function (description) {
    if ((description.startsWith("walmart") && !description.endsWith("raleigh nc"))) {
      return true;
    }
    return false;
  }
};

const GIFT = {
  name: "Gift",
  validate: function (description) {
    return false;
  }
};

exports.CATEGORY = {
  TOOLS,
  FOOD,
  FUN,
  CAR_REGISTRATION,
  CAR_INSURANCE,
  CAR_GAS,
  CAR_PARTS,
  TRAVEL,
  GIFT
};