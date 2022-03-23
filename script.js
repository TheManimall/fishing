function fish() {
  var h = 5;
  var m = 0
    var interval = setInterval(() => {
      var header = document.getElementsByTagName('h1')[0]
      header.innerText = `${h > 10 ? h : '0' + h}:${m} a.m.`
      m++
      if (m === 60) {
        m = 0
        h++
      }
    }, 1000)
  var a = document.getElementById('fishButton', interval)

  console.log('atgs', a, header)
  a.addEventListener('click', )
};

fish();