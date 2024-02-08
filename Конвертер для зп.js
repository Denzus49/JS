let brutt = {x: 216406, y: 13}
let proc= (brutt.x/100*brutt.y)
let nettoRu= (brutt.x-proc)
async function fetchCurrencyRate() {
    try {
      const response = await fetch('https://api.nbrb.by');
  
      const data = await response.json();
      const currencyRate = data.Cur_QuotName; 
      console.log('Текущий курс валюты:', cource);
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  }
  fetchCurrencyRate();
  let nettoBy= (nettoRu*cource).toFixed(2)
alert(nettoBy);