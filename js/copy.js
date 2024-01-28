(function () {
    
  const copyMailId = document.querySelectorAll('.mail-text');

  copyMailId.forEach(copyText => {
    copyText.addEventListener('click', () => {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(copyText);
      selection.removeAllRanges();
      selection.addRange(range);

      try {
        document.execCommand('copy');
        selection.removeAllRanges();

        const mailId = copyText.textContent;
        copyText.textContent = '¡Copiado!';
        copyText.classList.add('success');

        setTimeout(() => {
            copyText.textContent = mailId;
            copyText.classList.remove('success');
        }, 1000);
      } catch (e) {
        copyText.textContent = '¡No se pudo copiar!, usa Ctrl+C';
        copyText.classList.add('error');

        setTimeout(() => {
            errorMsg.classList.remove('show');
        }, 1200);
      }
    });
  });

})();