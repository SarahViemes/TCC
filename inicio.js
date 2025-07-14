document.getElementById('cadastro-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Cadastro realizado com sucesso!');
});


// PÁGINA DE LOGIN
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (usuario === '' || senha === '') {
      alert('Por favor, preencha todos os campos!');
    } else {
      alert(`Bem-vindo, ${usuario}!`);
      // Aqui você pode redirecionar ou fazer login real.
    }
  });


