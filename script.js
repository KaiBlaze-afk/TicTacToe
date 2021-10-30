let roll = "X";
let on = document.querySelector(".box:nth-child(1)");
let tw = document.querySelector(".box:nth-child(2)");
let th = document.querySelector(".box:nth-child(3)");
let fo = document.querySelector(".box:nth-child(4)");
let fi = document.querySelector(".box:nth-child(5)");
let si = document.querySelector(".box:nth-child(6)");
let se = document.querySelector(".box:nth-child(7)");
let ei = document.querySelector(".box:nth-child(8)");
let ni = document.querySelector(".box:nth-child(9)");
dice = () => {
  roll == "X" ? (roll = "O") : (roll = "X");
  document.getElementById("info").innerHTML = roll + "'s Turn";
};
one = () => {
  if (on.innerHTML == "") {
    on.innerHTML = roll;
    dice();
    check();
  } else {
    alert("Incorrect Move");
  }
};
two = () => {
  if (tw.innerHTML == "") {
    tw.innerHTML = roll;
    dice();
    check();
  } else {
    alert("Incorrect Move");
  }
};
three = () => {
  if (th.innerHTML == "") {
    th.innerHTML = roll;
    dice();
    check();
  } else {
    alert("Incorrect Move");
  }
};
four = () => {
  if (fo.innerHTML == "") {
    fo.innerHTML = roll;
    dice();
    check();
  } else {
    alert("Incorrect Move");
  }
};
five = () => {
  if (fi.innerHTML == "") {
    fi.innerHTML = roll;
    dice();
    check();
  } else {
    alert("Incorrect Move");
  }
};
six = () => {
  if (si.innerHTML == "") {
    si.innerHTML = roll;
    dice();
    check();
  } else {
    alert("Incorrect Move");
  }
};
seven = () => {
  if (se.innerHTML == "") {
    se.innerHTML = roll;
    dice();
    check();
  } else {
    alert("Incorrect Move");
  }
};
eight = () => {
  if (ei.innerHTML == "") {
    ei.innerHTML = roll;
    dice();
    check();
  } else {
    alert("Incorrect Move");
  }
};
nine = () => {
  if (ni.innerHTML == "") {
    ni.innerHTML = roll;
    dice();
    check();
  } else {
    alert("Incorrect Move");
  }
};
check = () => {
  if (
    (on.innerHTML == "X" && fi.innerHTML == "X" && ni.innerHTML == "X") ||
    (on.innerHTML == "X" && fo.innerHTML == "X" && se.innerHTML == "X") ||
    (on.innerHTML == "X" && tw.innerHTML == "X" && th.innerHTML == "X") ||
    (tw.innerHTML == "X" && fi.innerHTML == "X" && ei.innerHTML == "X") ||
    (th.innerHTML == "X" && fi.innerHTML == "X" && se.innerHTML == "X") ||
    (th.innerHTML == "X" && si.innerHTML == "X" && ni.innerHTML == "X") ||
    (fo.innerHTML == "X" && fi.innerHTML == "X" && si.innerHTML == "X") ||
    (ni.innerHTML == "X" && ei.innerHTML == "X" && se.innerHTML == "X")
  ) {
    alert("X Won");
  }
  if (
    (on.innerHTML == "O" && fi.innerHTML == "O" && ni.innerHTML == "O") ||
    (on.innerHTML == "O" && fo.innerHTML == "O" && se.innerHTML == "O") ||
    (on.innerHTML == "O" && tw.innerHTML == "O" && th.innerHTML == "O") ||
    (tw.innerHTML == "O" && fi.innerHTML == "O" && ei.innerHTML == "O") ||
    (th.innerHTML == "O" && fi.innerHTML == "O" && se.innerHTML == "O") ||
    (th.innerHTML == "O" && si.innerHTML == "O" && ni.innerHTML == "O") ||
    (fo.innerHTML == "O" && fi.innerHTML == "O" && si.innerHTML == "O") ||
    (ni.innerHTML == "O" && ei.innerHTML == "O" && se.innerHTML == "O")
  ) {
    alert("O Won");
  }
  if (
    on.innerHTML != "" &&
    tw.innerHTML != "" &&
    th.innerHTML != "" &&
    fo.innerHTML != "" &&
    fi.innerHTML != "" &&
    si.innerHTML != "" &&
    se.innerHTML != "" &&
    ei.innerHTML != "" &&
    ni.innerHTML != ""
  ) {
    alert("Match Draw");
  }
};
