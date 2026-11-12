function armstrongSon(n) {
  let raqamlarSoni = 0;
  let nusxa = n;
  while (nusxa > 0) {
    raqamlarSoni++;
    nusxa = Math.floor(nusxa / 10);
  }

  let yigindi = 0;
  nusxa = n;
  while (nusxa > 0) {
    const raqam = nusxa % 10;
    let daraja = 1;
    for (let i = 0; i < raqamlarSoni; i++) {
      daraja *= raqam;
    }
    yigindi += daraja;
    nusxa = Math.floor(nusxa / 10);
  }

  return yigindi === n;
}

// Tekshiruvlar
console.log(armstrongSon(153)); 
console.log(armstrongSon(154)); 
console.log(armstrongSon(9474)); 
console.log(armstrongSon(370));
console.log(armstrongSon(5)); 
