document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var nome = document.getElementById('name').value;
    var telefone = document.getElementById('telephone').value;
    if (nome && telefone) {
        addContact(nome, telefone);
        document.getElementById('name').value = ''; // Clear input fields after adding contact
        document.getElementById('telephone').value = '';
    } else {
        alert('Por favor insira o nome e o número de telefone.');
    }
});

function addContact(nome, telefone) {
    var table = document.getElementById('contactTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = nome;
    cell2.innerHTML = telefone;
}