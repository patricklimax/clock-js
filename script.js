
const clockSpace = document.getElementById("clock");

const clock = () => {
  let dateDay = new Date();
  let hh = dateDay.getHours();
  let mm = dateDay.getMinutes();
  let ss = dateDay.getSeconds();

  hh = hh < 10 ? `0${hh}` : hh;
  mm = mm < 10 ? `0${mm}` : mm;
  ss = ss < 10 ? `0${ss}` : ss;

  let clockTime = `${hh} : ${mm} : ${ss}`;
  clockSpace.textContent = clockTime;
  
};

clock();
setInterval(clock, 1000);


