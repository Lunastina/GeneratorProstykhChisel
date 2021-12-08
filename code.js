
document.getElementById("generate").onclick = function() {
    let num = document.getElementById("num").value;

    document.getElementById("primes").value = getPrimes(num);
}

function getPrimes(num) {
    const seive = [];
    const primes = [];
    
    for (let i = 2; i <= num; i++) {
      if (!seive[i]) {
        primes.push(i);
        for (let j = i * i; j <= num; j += i) {
          seive[j] = true;
        } 
      }
    }
    return primes;
  }