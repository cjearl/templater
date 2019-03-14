var form = document.getElementById('form');
var output = document.getElementById('output');
var back = document.getElementById('back');

form.addEventListener('submit', function () {
  var name = document.getElementById('name').value;
  var title = document.getElementById('title').value;

  var res = window.template
    .replace('{{name}}', name)
    .replace('{{title}}', title)

  // Set output
  output.innerHTML = res;

  output.style.display = 'block';
  form.style.display = 'none';
  back.style.display = 'block';
});

back.addEventListener('click', function() {
  document.getElementById('name').value = '';
  document.getElementById('title').value = '';

  form.style.display = 'block';
  output.style.display = 'none';
  back.style.display = 'none';
});