var image = document.getElementById('bg');

image.onload = function () {
  var options = {
    image: this,
    parentElement: document.getElementById('parentElement')
  };
  var rainyDay = new RainyDay(options);
  rainyDay.rain([
    [1, 2, 8000]
  ]);
  rainyDay.rain([
    [3, 3, 0.88],
    [5, 5, 0.9],
    [6, 2, 1]
  ], 100);
};
