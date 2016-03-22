var selectForm = {
    body: document.querySelector('body'),
    selectFormBox: document.createElement('div'),
    selectFormH: document.createElement('h3'),
    selectForm: document.createElement('form'),
    selectFormOl: document.createElement('ol'),    
    btn: document.createElement('button'),
    
    createForm: function() {
        this.body.appendChild(this.selectFormBox);
        this.selectFormBox.classList.add('select_Form_Box');
        this.selectFormBox.appendChild(this.selectFormH);
        this.selectFormH.classList.add('select__Form__H');
        this.selectFormH.innerHTML = 'Тест по программированию';
        this.selectFormBox.appendChild(this.selectForm);
        this.selectForm.classList.add('select__Form');
        this.selectForm.appendChild(this.selectFormOl);       
        this.selectFormOl.classList.add('select__Form__Content');
        this.selectForm.appendChild(this.btn);      
        this.btn.classList.add('form__button');
        this.btn.innerHTML = 'Проверить мои результаты';
    },
    createFormQwe: function() {
        for ( var i = 0; i < 3; i++) {
           var FormFirstLevelLi = document.createElement('li');
           var selectFormUl = document.createElement('ul');
           var selectFormUlTitle = document.createElement('h4');
           selectFormUlTitle.innerHTML = 'Вопрос №'+(i+1);
           selectFormUlTitle.classList.add('question__content__title');
           selectFormUl.appendChild(selectFormUlTitle);
             for ( var j = 0; j < 3; j++) {
                var FormSecondLevelLi = document.createElement('li');
                var answerCheckboxText = document.createElement('label');
                var answerCheckbox = document.createElement('input');
                answerCheckbox.setAttribute('type', 'checkbox');
                answerCheckbox.setAttribute('id', 'check'+(j+1));
                answerCheckbox.classList.add('answer__Checkbox');
                this.selectFormOl.appendChild(FormFirstLevelLi);
                FormFirstLevelLi.classList.add('question');
                FormFirstLevelLi.appendChild(selectFormUl); 
                selectFormUl.classList.add('question__content');
                selectFormUl.appendChild(FormSecondLevelLi);
                FormSecondLevelLi.classList.add('question__content__answer');
                FormSecondLevelLi.appendChild(answerCheckbox);
                FormSecondLevelLi.appendChild(answerCheckboxText);
                answerCheckboxText.classList.add('answer__text');
                answerCheckboxText.setAttribute('for', 'check'+(j+1));
                answerCheckboxText.innerHTML = 'Вариант ответа №'+(j+1);
                console.log(typeof answerCheckboxText);
              }
        }
    }
};
selectForm.createForm();
selectForm.createFormQwe();



