var form = document.getElementById('form');
var output = document.getElementById('output');
var raw = document.getElementById('raw');
var copy = document.getElementById('copy');

// Hold temp
var res;

// Handle Submit
form.addEventListener('submit', function (e) {
  e.preventDefault();

  var name = document.getElementById('name');
  var title = document.getElementById('title');

  var name = name.value;
  var title = title.value;

  res = window.template
    .replace('{{name}}', name)
    .replace('{{title}}', title);

  // Set output
  output.innerHTML = res;
});

// Copy to clipboard
copy.addEventListener('click', function(){
  const el = document.createElement('textarea');
  el.value = res;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  window.alert('Copied!');
})