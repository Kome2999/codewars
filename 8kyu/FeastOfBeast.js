function feast(beast, dish) {

    return beast[0].toLowerCase() === dish[0].toLowerCase() && beast[beast.length -1].toLowerCase() === dish[dish.length - 1].toLowerCase() ? true : false;
  }