$(document).ready(function () {

    var questionNumber=0;
    var questionBank=new Array();
    var stage="#game1";
    var stage2=new Object;
    var questionLock=false;
    var numberOfQuestions;
    var score=0;
        
let perguntas = {"quizlist":[
  
	{
	"question":"Quem é esse Pokemon? <br><img src='img/pokemons/001.png'>",
	"option1":"Bulbasaur",
	"option2":"Buba",
	"option3":"Ivysaur",
    "option4":"Babasauro"
	},
	{
	"question":"Quem é esse Pokemon? <br><img src='img/pokemons/004.png'>",
	"option1":"Charmander",
	"option2":"Charizard",
    "option3":"Chamandi",
	"option4":"Charmeleon"
	},
	{
	"question":"Quem é esse Pokemon? <br><img src='img/pokemons/007.png'>",
	"option1":"Squirtle",
	"option2":"Blastoise",
    "option3":"Wartortle",
	"option4":"Squer"
	},
    {
    "question":"Quem é esse Pokemon? <br><img src='img/pokemons/010.png'>",
    "option1":"Caterpie",
    "option2":"Metapod",
    "option3":"Butterfree",
    "option4":"Lagarta"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='img/pokemons/013.png'>",
    "option1":"Weedle",
    "option2":"Kakuna",
    "option3":"Beedrill",
    "option4":"Worm"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='img/pokemons/016.png'>",
    "option1":"Pidgey",
    "option2":"Pidgeotto",
    "option3":"Pidgeot",
    "option4":"Pid"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='img/pokemons/019.png'>",
    "option1":"Rattata",
    "option2":"Rata",
    "option3":"Raticate",
    "option4":"Mouse"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='img/pokemons/021.png'>",
    "option1":"Spearow",
    "option2":"Fearow",
    "option3":"Spear",
    "option4":"Bird"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='img/pokemons/023.png'>",
    "option1":"Ekans",
    "option2":"Arbok",
    "option3":"Nidorina",
    "option4":"Bellsprout"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='img/pokemons/025.png'>",
    "option1":"Pikachu",
    "option2":"Pichu",
    "option3":"Raichu",
    "option4":"PikaPika"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='img/pokemons/027.png'>",
    "option1":"Sandshrew",
    "option2":"Sandslash",
    "option3":"Sandsplash",
    "option4":"Sandman"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='img/pokemons/035.png'>",
    "option1":"Clefairy",
    "option2":"Clefable",
    "option3":"Wigglytuff",
    "option4":"Jigglypuff"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='img/pokemons/037.png'>",
    "option1":"Vulpix",
    "option2":"Ninetales",
    "option3":"Eigthtales",
    "option4":"Ponyta"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='img/pokemons/039.png'>",
    "option1":"Jigglypuff",
    "option2":"Wigglytuff",
    "option3":"Clefairy",
    "option4":"Clefable"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='img/pokemons/041.png'>",
    "option1":"Zubat",
    "option2":"Golbat",
    "option3":"Jubat",
    "option4":"Fabat"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='img/pokemons/043.png'>",
    "option1":"Oddish",
    "option2":"Gloom",
    "option3":"Vileplume",
    "option4":"Weepinbell"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='img/pokemons/046.png'>",
    "option1":"Paras",
    "option2":"Parasect",
    "option3":"Beedrill",
    "option4":"Victreebel"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='img/pokemons/048.png'>",
    "option1":"Venonat",
    "option2":"Venomoth",
    "option3":"Venon",
    "option4":"Ventapoo"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='img/pokemons/050.png'>",
    "option1":"Diglett",
    "option2":"Dugtrio",
    "option3":"Degleet",
    "option4":"Doglee"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='img/pokemons/052.png'>",
    "option1":"Meowth",
    "option2":"Persian",
    "option3":"Meau",
    "option4":"Meawn"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='img/pokemons/054.png'>",
    "option1":"Psyduck",
    "option2":"Golduck",
    "option3":"Duckpsy",
    "option4":"Dupsy"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='img/pokemons/056.png'>",
    "option1":"Mankey",
    "option2":"Monkey",
    "option3":"Primeape",
    "option4":"Primate"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='img/pokemons/058.png'>",
    "option1":"Growlithe",
    "option2":"Arcanine",
    "option3":"Arcane",
    "option4":"Growtille"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='img/pokemons/060.png'>",
    "option1":"Poliwag",
    "option2":"Poliwhirl",
    "option3":"Poliwrath",
    "option4":"Poliweth"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='img/pokemons/063.png'>",
    "option1":"Abra",
    "option2":"Kadabra",
    "option3":"Alakazam",
    "option4":"Shazam"
    }
    

]
}   

for(i=0;i<perguntas.quizlist.length;i++){ 
    questionBank[i]=new Array;
    questionBank[i][0]=perguntas.quizlist[i].question;
    questionBank[i][1]=perguntas.quizlist[i].option1;
    questionBank[i][2]=perguntas.quizlist[i].option2;
    questionBank[i][3]=perguntas.quizlist[i].option3;
    questionBank[i][4]=perguntas.quizlist[i].option4;
}
 numberOfQuestions=questionBank.length; 


displayQuestion();






    function displayQuestion(){
     var rnd=Math.random()*3;
    rnd=Math.ceil(rnd);
     var q1;
     var q2;
     var q3;
     var q4;

    if(rnd==1){q1=questionBank[questionNumber][1];q2=questionBank[questionNumber][2];q3=questionBank[questionNumber][3];q4=questionBank[questionNumber][4];}
    if(rnd==2){q2=questionBank[questionNumber][1];q3=questionBank[questionNumber][2];q4=questionBank[questionNumber][3];q1=questionBank[questionNumber][4];}
    if(rnd==3){q3=questionBank[questionNumber][1];q4=questionBank[questionNumber][2];q1=questionBank[questionNumber][3];q2=questionBank[questionNumber][4];}
    if(rnd==4){q3=questionBank[questionNumber][4];q4=questionBank[questionNumber][4];q1=questionBank[questionNumber][4];q2=questionBank[questionNumber][4];}

    $(stage).append('<div class="questionText">'+questionBank[questionNumber][0]+'</div><div id="1" class="option">'+q1+'</div><div id="2" class="option">'+q2+'</div><div id="3" class="option">'+q3+'</div><div id="4" class="option">'+q4+'</div>');

     $('.option').click(function(){
      if(questionLock==false){questionLock=true;	
      //resposta certa
      if(this.id==rnd){
          $(this).addClass('resposta-certa')
       //$(stage).append('<div class="feedback1"></div>');
       score++;
          document.getElementById("demo").innerHTML = score;
       }
      //resposta errada	
      if(this.id!=rnd){
           $(this).addClass('resposta-errada')
       //$(stage).append('<div class="feedback2"></div>'); //<img src="./img/Questionador.jpg">
      }
      setTimeout(function(){changeQuestion()},1000);
     }})
    }//display question






        function changeQuestion(){

            questionNumber++;

        if(stage=="#game1"){stage2="#game1";stage="#game2";}
            else{stage2="#game2";stage="#game1";}

        if(questionNumber<numberOfQuestions){displayQuestion();}else{displayFinalSlide();}

         $(stage2).animate({"right": "+=800px"},"slow", function() {$(stage2).css('right','-800px');$(stage2).empty();});
         $(stage).animate({"right": "+=800px"},"slow", function() {questionLock=false;});
        }//change question




        function displayFinalSlide(){

            $(stage).append('<div class="questionText">Você terminou o quiz!<br>Total de questões: '+numberOfQuestions+'<br>Respostas corretas: '+score+' <br><br> <a href="index.html" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-refresh"></span> Tentar novamente</a><br><br><a href="../index.html" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-refresh"></span>Menu principal</a></div>');
            if (score >= 20) {
                $(stage).append('<div class="feedback"><img src="./img/genio.jpg" style="width: 300px"></div>');}
            if (score >= 11 && score <=19) {
                $(stage).append('<div class="feedback"><img src="./img/thumbup.jpg" style="width: 300px"></div>');}
            if (score <= 10) {
                $(stage).append('<div class="feedback"><img src="./img/stupid.png" style="height: 200px"></div>');}

        }//display final slide





        });//doc ready
function myName() {
    var txt;
    var person = prompt("Digite um apelido:", "");
    if (person == null || person == "") {
        txt = "sem nome";
    } else {
        txt = " " + person;
    }
    document.getElementById("nickname").innerHTML = txt;
}