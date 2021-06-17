function sleep(ms) {
  //block all action until sleep is done
  var waitTill = new Date(new Date().getTime() + ms);
  while (waitTill > new Date()) {}
}

module.exports = {
  sleep: (ms) => {
    return sleep(ms);
  },
};
