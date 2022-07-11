const DISCOVER = {
  name: "Discover",
  validate: function (description) {
    if (description.startsWith("directpay full ")) {
      return true;
    }
    return false;
  }
};

const CITI = {
  name: "CITI",
  validate: function (description) {
    if (description.startsWith("autopay") && description.endsWith("auto-pmt")) {
      return true;
    }
    return false;
  }
};

exports.AUTO_PAYMENT = {
  DISCOVER,
  CITI,
};