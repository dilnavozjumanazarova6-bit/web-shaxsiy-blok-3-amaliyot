
function engUzunSoz(s) {
  const sozlar = s.split(" ");
  let engUzun = "";

  for (let i = 0; i < sozlar.length; i++) {
    if (sozlar[i].length > engUzun.length) {
      engUzun = sozlar[i];
    }
  }

  return engUzun;
}

// Tekshiruvlar
console.log(engUzunSoz("veb dasturlash juda qiziqarli")); 
console.log(engUzunSoz("bir ikki uch")); 
console.log(engUzunSoz("  salom   dunyo  ")); 
console.log(engUzunSoz("kitob")); 
console.log(engUzunSoz("")); 
