
function emailTekshir(email) {
  if (email.includes(" ")) {
    return false;
  }

  let kuchukchaSoni = 0;
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      kuchukchaSoni++;
    }
  }
  if (kuchukchaSoni !== 1) {
    return false;
  }

  const kuchukchaIndeksi = email.indexOf("@");
  if (kuchukchaIndeksi < 1) {
    return false;
  }

  const nuqtaIndeksi = email.lastIndexOf(".");
  if (nuqtaIndeksi < kuchukchaIndeksi) {
    return false;
  }
  if (nuqtaIndeksi === email.length - 1) {
    return false;
  }

  return true;
}

console.log(emailTekshir("talaba@urdu.uz")); 
console.log(emailTekshir("talaba@urdu")); 
console.log(emailTekshir("ta laba@urdu.uz")); 
console.log(emailTekshir("@urdu.uz")); 
console.log(emailTekshir("a@@urdu.uz")); 
console.log(emailTekshir("talaba@urdu.")); 
console.log(emailTekshir("")); 
