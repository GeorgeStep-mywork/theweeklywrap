const card = document.querySelector('.card'),
      input = document.querySelector('.input'),
      line2 = document.querySelector('.line2');
document.querySelector('.form').addEventListener('submit', function(e) {
  input.blur();
  card.classList.add('saving');
  e.preventDefault();
});
line2.addEventListener('animationend', function(e) {
  setTimeout(() => {
    card.classList.add('done');
  }, 1000);
});

function ValidateForm(frm) {
if (frm.Name.value == "") {alert('Name is required.');frm.Name.focus();return false;}
if (frm.Organization.value == "") {alert('Organization is required.');frm.Organization.focus();return false;}
if (frm.FromEmailAddress.value == "") {alert('Email address is required.');frm.FromEmailAddress.focus();return false;}
if (frm.FromEmailAddress.value.indexOf("@") < 1 || frm.FromEmailAddress.value.indexOf(".") < 1) {alert('Please enter a valid email address.');frm.FromEmailAddress.focus();return false;}
if (frm.skip_CaptchaCode.value == "") {alert('Enter security code.');frm.skip_CaptchaCode.focus();return false;}
return true; }
function ReloadCaptchaImage(captchaImageId) {
var obj = document.getElementById(captchaImageId);
var src = '' + obj.src;
obj.src = '';
var date = new Date();
var pos = src.indexOf('&rad=');
if (pos >= 0) { src = src.substr(0, pos); }
obj.src = src + '&rad=' + date.getTime();
return false; }


var cta = document.querySelector(".cta");
var check = 0;

cta.addEventListener('click', function(e){
    var text = e.target.nextElementSibling;
    var loginText = e.target.parentElement;
    text.classList.toggle('show-hide');
    loginText.classList.toggle('expand');
    if(check == 0)
    {
        cta.innerHTML = "<i class=\"fas fa-chevron-up\"></i>";
        check++;
    }
    else
    {
        cta.innerHTML = "<i class=\"fas fa-chevron-down\"></i>";
        check = 0;
    }
})
