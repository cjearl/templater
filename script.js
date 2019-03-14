var form = document.getElementById('form');
var output = document.getElementById('output');
var resultTitle = document.getElementById('result-title');
var raw = document.getElementById('raw');
var copy = document.getElementById('copy');

copy.style.display = 'none';
output.style.display = 'none';
resultTitle.style.display = 'none';

// Hold temp
var res;

// Handle Submit
form.addEventListener('submit', function (e) {
  e.preventDefault();

  var name = document.getElementById('name');
  var title = document.getElementById('title');

  var name = name.value;
  var title = title.value;

  // Build template
  res = window.template
    .replace('{{name}}', name)
    .replace('{{title}}', title);

  // Set output
  output.innerHTML = res;

  // Display
  copy.style.display = 'block';
  output.style.display = 'block';
  resultTitle.style.display = 'block';
});

// Copy to clipboard
copy.addEventListener('click', function(){
  const el = document.createElement('textarea');
  el.value = res;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  // Alert
  if (res) {
    window.alert('Copied!');
  }
})