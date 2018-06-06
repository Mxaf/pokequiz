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
	"question":"Quem é esse Pokemon? <br><img src='./Pokedex/387.png'>",
	"option1":"Turtwig",
	"option2":"Grotle",
	"option3":"Torterra",
    "option4":"Staraptor"
	},
	{
	"question":"Quem é esse Pokemon? <br><img src='./Pokedex/390.png'>",
	"option1":"Chimchar",
	"option2":"Monferno",
    "option3":"Infernape",
	"option4":"Staravia"
	},
	{
	"question":"Quem é esse Pokemon? <br><img src='./Pokedex/393.png'>",
	"option1":"Piplup",
	"option2":"Prinplup",
    "option3":"Empoleon",
	"option4":"Starly"
	},
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/399.png'>",
    "option1":"Bidoof",
    "option2":"Bibarel",
    "option3":"Bagon",
    "option4":"Banette"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/401.png'>",
    "option1":"Kricketot",
    "option2":"Kricketune",
    "option3":"Kyogre",
    "option4":"Kecleon"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/403.png'>",
    "option1":"Shinx",
    "option2":"Luxio",
    "option3":"Luxray",
    "option4":"Latios"
    },

    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/406.png'>",
    "option1":"Budew",
    "option2":"Roserade",
    "option3":"Registeel",
    "option4":"Regice"
    },

    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/408.png'>",
    "option1":"Cranidos",
    "option2":"Rampardos",
    "option3":"Glalie",
    "option4":"Clamperl"
    },

    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/410.png'>",
    "option1":"Shieldon",
    "option2":"Bastiondon",
    "option3":"Bagon",
    "option4":"Shelgon"
    },

    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/412.png'>",
    "option1":"Burmy",
    "option2":"Wormadam",
    "option3":"Mothim",
    "option4":"Salamence"
    },

    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/415.png'>",
    "option1":"Combee",
    "option2":"Vespiquen",
    "option3":"Victini",
    "option4":"Servine"
    },

    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/417.png'>",
    "option1":"Pachirisu",
    "option2":"Buizel",
    "option3":"Floatzel",
    "option4":"Snivy"
    },

    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/420.png'>",
    "option1":"Cherubi",
    "option2":"Cherrim",
    "option3":"Chatot",
    "option4":"Chimchar"
    },

    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/422.png'>",
    "option1":"Shellos",
    "option2":"Gastrodon",
    "option3":"Ambipom",
    "option4":"Jirachi"
    },

    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/425.png'>",
    "option1":"Drifloon",
    "option2":"Drifblim",
    "option3":"Beldum",
    "option4":"Deoxys"
    },

    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/427.png'>",
    "option1":"Buneary",
    "option2":"Lopunny",
    "option3":"Mismagius",
    "option4":"Honchkrow"
    },

    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/433.png'>",
    "option1":"Chingling",
    "option2":"Cradily",
    "option3":"Chimecho",
    "option4":"Champerl"
    },

    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/434.png'>",
    "option1":"Stunky",
    "option2":"Skuntank",
    "option3":"Spiritomb",
    "option4":"Shaymin"
    },

    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/438.png'>",
    "option1":"Bonsly",
    "option2":"Happiny",
    "option3":"Bronzor",
    "option4":"Bronzong"
    },

    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/439.png'>",
    "option1":"Mime Jr.",
    "option2":"Metang",
    "option3":"Manaphy",
    "option4":"Phione"
    },

    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/440.png'>",
    "option1":"Happiny",
    "option2":"Hippopotas",
    "option3":"Hippowdon",
    "option4":"Heatran"
    },

    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/446.png'>",
    "option1":"Munchlax",
    "option2":"Chatot",
    "option3":"Carnivine",
    "option4":"Croagunk"
    },

    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/456.png'>",
    "option1":"Finneon",
    "option2":"Lumineon",
    "option3":"Lickilicky",
    "option4":"Leafeon"
    },

    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/458.png'>",
    "option1":"Mantyke",
    "option2":"Weavile",
    "option3":"Mamoswine",
    "option4":"Mesprit"
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