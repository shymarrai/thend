function slide1(){
	document.getElementById('imagem').src="./_imagens/banner8.png";
	setTimeout("slide2()",5000)
}

function slide2(){
	document.getElementById('imagem').src='./_imagens/banner9.png';
	setTimeout("slide3()",5000)
	
}

function slide3(){
	document.getElementById('imagem').src='./_imagens/banner11.png';
	setTimeout("slide1()",5000)
	
}




function validaForm() {
if (document.falec.nome.value.length <=1) {
alert("O campo nome não pode ficar em branco - Digite seu nome.");
falec.nome.focus();
return false;
}
if (document.falec.email.value.length <=1) {
alert("O campo e-mail não pode ficar em branco - Digite seu e-mail.");
falec.email.focus();
return false;
}
if (document.falec.password.value.length <=1) {
alert("O campo Senha não pode ficar em branco - Digite sua senha.");
falec.password.focus();
return false;
}
return false;
}

/* inicializa as variáveis de controle do cookie
Value = "";
Start = document.cookie.indexOf("");
End = document.cookie.indexOf("end");
Char = document.cookie.substring(Start,End);

// Cria o objeto Date
Now = new Date();

/ Se a variável Char estiver vazia, significa que é o primeiro acesso do usuário e solicita a digitação do nome.
Caso contrário, associa a variável Char o valor do cookie resgatado na linha 14. /
if(Char==""){
Value = prompt("Digite seu nome:","");
}else{
Value = Char;
}

// Enquanto a variável Value não for inicializada, solicita o nome do usuário
while(Value==null||Value==""){
Value = prompt("Digite seu nome:","");
}

// Determina o prazo de validade do cookie
Now.setTime(Now.getTime()+(365*24*60*60*1000));

// Define o fuso que será respeitado no controle do prazo do cookie
document.cookie = ""+Value+"end "+Now+";expires="+Now.toGMTString();+"";

// Exibe na tela a saudação ao usuário
document.write("Bem Vindo ao site "+Value+"!"); */