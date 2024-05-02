$(document).ready(function(){

    $("#task-form").hide();

    $('header button').click(function () {
        $("#task-form").slideToggle();
    })

    $('#task-form').submit(function(event){
        event.preventDefault();
        var taskName = $('#task-manager').val();
        if(taskName.trim() !== ''){
            $('#task-list').append('<li><span class="task-name">' + taskName + '</span><span class="task-actions"><button class="complete-btn">Concluir</button><button class="delete-btn">Excluir</button></span></li>');
            $('#task-manager').val('');
        }
    });

    $(document).on('click', '.complete-btn', function(){
        $(this).closest('li').find('.task-name').toggleClass('completed');
    });

    $(document).on('click', '.delete-btn', function(){
        $(this).closest('li').remove();
    });
});


















// const form = document.getElementById('form-validacao');

// let linhas = '';

// form.addEventListener('submit', function(e){
//     e.preventDefault();

//     adicionaLinha();
// });


// function adicionaLinha() {
//     const inputTarefa = document.getElementById('tarefa');




//     let linha = '<tr>';
//     linha += `<td>${inputTarefa.value}</td>`;
//     linha += '</tr>';


//     linhas += linha;

//     const corpoTabela = document.querySelector ('tbody');
//     corpoTabela.innerHTML = linhas;

//     inputTarefa.value = '';
// }
