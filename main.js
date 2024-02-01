alert("Ayo bermain tebak angka\n 1 - 10");
let ulang = true;
let percobaan = 0;
let kesempatan = 3;
const batasAngka = 10;

let com = Math.random();

if (com < 0.2) {
  com = 1;
} else if (com >= 0.2 && com < 0.24) {
  com = 2;
} else if (com >= 0.24 && com < 0.25) {
  com = 3;
} else if (com >= 0.25 && com < 0.35) {
  com = 4;
} else if (com >= 0.35 && com < 0.39) {
  com = 5;
} else if (com >= 0.39 && com < 0.45) {
  com = 6;
} else if (com >= 0.45 && com < 0.55) {
  com = 7;
} else if (com >= 0.55 && com < 0.65) {
  com = 8;
} else if (com >= 0.79 && com < 0.85) {
  com = 9;
} else {
  com = 10;
}

while (ulang) {
  const hasil = "benar";
  let p = prompt("masukan angka 1 - 10 \n anda memiliki " + kesempatan-- + " kesempatan");

  if (percobaan < kesempatan) {
    if (p == com) {
      alert("jawaban anda " + hasil), (ulang = false);
    } else if (p < com) {
      alert("angka anda rendah");
    } else if (p > batasAngka) {
      alert("anda memasukkan angka diatas 10");
    } else {
      alert("angka anda tinggi");
    }
  } else if (p == com) {
    alert("jawaban anda " + hasil), (ulang = false);
  } else if (percobaan <= kesempatan) {
    alert("jawaban anda salah");
    alert("kesempatan anda habis"), (ulang = false);
  } else {
    alert("ada masalah");
  }
}

alert("angka yang dicari adalah " + com);
alert("terimakasih sudah bermain");
