document.addEventListener("DOMContentLoaded", function() {
  function checkPassword() {
      var passwordInput = document.querySelector('.password input[type="password"]');
      var password = passwordInput.value;

      if (password === '0000') {
          window.location.href = 'game_screen/index.html';
      } else {
          alert('비밀번호가 올바르지 않습니다.');
      }
  }

  var button = document.querySelector('button');
  button.addEventListener('click', checkPassword);
});
