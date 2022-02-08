(function(win,doc){
    'use strict';

    //confirm ir the user wants to delete data
    if(doc.querySelector('.btnDel')){
        let btnDel = doc.querySelectorAll('.btnDel');
        for(let i=0; i < btnDel.length; i++){
            btnDel[i].addEventListener('click', function(event){
                if(confirm('Do you want to delete this data?')){
                    return true;
                }else{
                    event.preventDefault();
                };
            });

        };
    };

    //ajax do form
    if(doc.querySelector('#form')){
        let form=doc.querySelector('#form');
        function sendForm(event)
        {
            preventDefault();
            let data = new FormData(form);
            let ajax = new HMLHttpRequest();
            let token = doc.querySelectorAll('input')[0].value;

            ajax.open('POST', form.action);
            ajax.setRequestHeader('X-CSRF-TOKEN',token);
            ajax.onreadystatechange = function()
            {
                if(ajax.status === 200 && ajax.readyStaty === 4){
                    console.log('Cadastrou!');
                }
            }
            ajax.send(data);

        }
        form.addEventListener('submit', sendForm, false);
    }

})(window,document);