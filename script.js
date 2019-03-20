class AddCheckBoxItem {
     constructor(id) {
          this.element = document.querySelector(id);
          this.addButton = document.createElement('button');
          this.inputField = document.createElement('input');

          // Type of input
          this.inputField.type = 'text';
          
          // Button content
          this.addButton.innerText = 'Adicionar';

          // Click no botão doutô
          this.addButton.addEventListener('click', this.handlerClick.bind(this));

          this.element.appendChild(this.inputField);
          this.element.appendChild(this.addButton);
     }

     handlerClick(evt) {
          const inputContainer = document.createElement('div');
          const inputReadOnly = document.createElement('input');
          const deleteButton = document.createElement('button');

          // Seta as propriedades do input
          inputReadOnly.readOnly = true;
          inputReadOnly.classList.add('read-only');
          inputReadOnly.value = this.inputField.value;

          // Propriedades do botão
          deleteButton.innerText = 'Remover';
          deleteButton.classList.add('add-item-remove-button');
          deleteButton.addEventListener('click', (function() {
               return function() {
                    inputContainer.remove();
               }
          })());

          // Seta as prop do container
          inputContainer.classList.add('add-item-container');


          inputContainer.appendChild(inputReadOnly);
          inputContainer.appendChild(deleteButton);
          this.element.appendChild(inputContainer);

          // LIMPA O VALOR DO INPUT
          this.inputField.value = '';

          // VOLTA O FOCO PARA O INPUT
          this.inputField.focus();

     }
}

new AddCheckBoxItem('#addItem');