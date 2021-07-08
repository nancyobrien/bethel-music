function sleep(ms) {
  //block all action until sleep is done
  var waitTill = new Date(new Date().getTime() + ms);
  while (waitTill > new Date()) {}
}

const formatDate = (dateTicks) => {
  const dateObj = new Date(dateTicks);
  return `${dateObj.getMonth() +
    1}/${dateObj.getDate()}/${dateObj.getFullYear()}`;
};

module.exports = {
  sleep: (ms) => {
    return sleep(ms);
  },
  formatDate: (dateTicks) => {
    return formatDate(dateTicks);
  },
};
