
$(function(){

		var main = '<main></main>';
		$('body').append(main);

		var table = '<table></table>';
		$('main').append(table);

		var thead = '<thead></thead>';
		$('table').append(thead);

		var tr = '<tr></tr>';
		$('thead').append(tr);

		var th = '<th>Nome</th><th>E-mail</th>';
		$('tr').append(th);

		var tbody = '<tbody></tbody>';
		$('table').append(tbody);		

		var form = '<form></form>';
		$('body').append(form);

		var div = '<div><label>Nome:</label></div> <input name="nome" type="text" placeholder="digite o nome do funcionário">   <div><label>E-mail:</label></div> <input name="email" type="email" placeholder="digite o e-mail do funcionário">';
		$('form').append(div);

		var button = '<button id="btn-add">Adicionar</button>';
		$('form').append(button);

		$("#btn-add").click(function(event){
			event.preventDefault();
			var nome = $('input[name = "nome"]').val();
			var email = $('input[name = "email"]').val();

			var tr2 = '<tr><td>' + nome + '</td>  <td>' + email + '</td></tr>';

			$('tbody').append(tr2);
		});

		
		$('body').css('width', '980px');
		$('body').css('padding', '0');
		$('body').css('margin', '0');
		$('body').css('position', 'relative');
		$('body').css('padding', '0');

		$('tr').css('margin', 'center');
		
		
		$('#btn-add').css('width', '100px');
		$('#btn-add').css('border-radius', '5px');
		$('#btn-add').css('margin-left', '20px');
		$('#btn-add').css('font-size', '10pt');
		$('#btn-add').css('text-align', 'center');

	});







