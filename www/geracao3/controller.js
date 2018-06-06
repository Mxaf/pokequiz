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
	"question":"Quem é esse Pokemon? <br><img src='./Pokedex/252.png'>",
	"option1":"Treecko",
	"option2":"Celebi",
	"option3":"Grovyle",
    "option4":"Sceptile"
	},
	{
	"question":"Quem é esse Pokemon? <br><img src='./Pokedex/255.png'>",
	"option1":"Torchic",
	"option2":"Combusken",
    "option3":"Blaziken",
	"option4":"Huntail"
	},
	{
	"question":"Quem é esse Pokemon? <br><img src='./Pokedex/258.png'>",
	"option1":"Mudkip",
	"option2":"Marshtomp",
    "option3":"Swampert",
	"option4":"Walrein"
	},
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/261.png'>",
    "option1":"Poochyena",
    "option2":"Mightyena",
    "option3":"Chimecho",
    "option4":"Tropius"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/263.png'>",
    "option1":"Zigzagoon",
    "option2":"Linoone",
    "option3":"Absol",
    "option4":"Wynaut"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/265.png'>",
    "option1":"Wuemple",
    "option2":"Silcoon",
    "option3":"Shuppet",
    "option4":"Banette"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/267.png'>",
    "option1":"Beautifly",
    "option2":"Flygon",
    "option3":"Feebas",
    "option4":"Milotic"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/268.png'>",
    "option1":"Cascoon",
    "option2":"Silcoon",
    "option3":"Dustox",
    "option4":"Kecleon"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/270.png'>",
    "option1":"Lotad",
    "option2":"Lombre",
    "option3":"Ludicolo",
    "option4":"Lileep"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/273.png'>",
    "option1":"Seedot",
    "option2":"Nuzleaf",
    "option3":"Shiftry",
    "option4":"Cradily"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/276.png'>",
    "option1":"Taillow",
    "option2":"Swellow",
    "option3":"Claydol",
    "option4":"Lileep"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/278.png'>",
    "option1":"Wingull",
    "option2":"Pelipper",
    "option3":"Whiscash",
    "option4":"Baltoy"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/280.png'>",
    "option1":"Ralts",
    "option2":"Kirlia",
    "option3":"Gardevoir",
    "option4":"Corphish"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/283.png'>",
    "option1":"Surskit",
    "option2":"Masquerain",
    "option3":"Solrock",
    "option4":"Barboach"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/285.png'>",
    "option1":"Shroomish",
    "option2":"Breloom",
    "option3":"Zangoose",
    "option4":"Plusle"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/287.png'>",
    "option1":"Slakoth",
    "option2":"Vigoroth",
    "option3":"Slaking",
    "option4":"Seviper"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/290.png'>",
    "option1":"Nincada",
    "option2":"Ninjask",
    "option3":"Shedinja",
    "option4":"Lunatone"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/293.png'>",
    "option1":"Whismur",
    "option2":"Loudred",
    "option3":"Exploud",
    "option4":"Altaria"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/307.png'>",
    "option1":"Meditite",
    "option2":"Medicham",
    "option3":"Manectric",
    "option4":"Minun"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/296.png'>",
    "option1":"Makuhita",
    "option2":"Hariyama",
    "option3":"Vibrava",
    "option4":"Swablu"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/298.png'>",
    "option1":"Azurill",
    "option2":"Illumise",
    "option3":"Volbeat",
    "option4":"Gulpin"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/299.png'>",
    "option1":"Nosepass",
    "option2":"Carvanha",
    "option3":"Swalot",
    "option4":"Wailmer"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/300.png'>",
    "option1":"Skitty",
    "option2":"Delcatty",
    "option3":"Sableye",
    "option4":"Torkoal"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/303.png'>",
    "option1":"Mawile",
    "option2":"Numel",
    "option3":"Spinda",
    "option4":"Trapinch"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/304.png'>",
    "option1":"Aron",
    "option2":"Lairon",
    "option3":"Aggron",
    "option4":"Anorith"
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

            $(stage).append('<div class="questionText">Você terminou o quiz!<br>Total de questões: '+numberOfQuestions+'<br>Respostas corretas: '+score+' <br><br> <a href="index.html" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-refresh"></span> Tentar novamente</a><br><br> <a href="../index.html" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-refresh"></span>Menu principal</a></div>');
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