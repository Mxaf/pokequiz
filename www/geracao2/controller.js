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
	"question":"Quem é esse Pokemon? <br><img src='./Pokedex/152.png'>",
	"option1":"Chikorita",
	"option2":"Bayleef",
	"option3":"Doduo",
    "option4":"Meganium"
	},
	{
	"question":"Quem é esse Pokemon? <br><img src='./Pokedex/155.png'>",
	"option1":"Cyndaquil",
	"option2":"Quilava",
    "option3":"Typhlosion",
	"option4":"Dratini"
	},
	{
	"question":"Quem é esse Pokemon? <br><img src='./Pokedex/158.png'>",
	"option1":"Totodile",
	"option2":"Croconaw",
    "option3":"Feraligatr",
	"option4":"Snorlax"
	},
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/161.png'>",
    "option1":"Sentret",
    "option2":"Furret",
    "option3":"Omastar",
    "option4":"Omanyte"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/163.png'>",
    "option1":"Hoothoot",
    "option2":"Noctowl",
    "option3":"Sentret",
    "option4":"Quilava"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/165.png'>",
    "option1":"Ledyba",
    "option2":"Ledian",
    "option3":"Jynx",
    "option4":"Scyther"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/167.png'>",
    "option1":"Spinarak",
    "option2":"Ariados",
    "option3":"Seadra",
    "option4":"Seaking"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/170.png'>",
    "option1":"Chinchou",
    "option2":"Crobat",
    "option3":"Lanturn",
    "option4":"Zubat"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/172.png'>",
    "option1":"Pichu",
    "option2":"Pikachu",
    "option3":"Raichu",
    "option4":"Elekid"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/173.png'>",
    "option1":"Cleffa",
    "option2":"Igglybuff",
    "option3":"Jigglypuff",
    "option4":"Wigglytuff"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/174.png'>",
    "option1":"Igglybuff",
    "option2":"Wigglytuff",
    "option3":"Jigglypuff",
    "option4":"Cleffa"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/175.png'>",
    "option1":"Togepi",
    "option2":"Togetic",
    "option3":"Tyrogue",
    "option4":"Phanpy"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/177.png'>",
    "option1":"Natu",
    "option2":"Xatu",
    "option3":"Mantine",
    "option4":"Sneasel"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/179.png'>",
    "option1":"Mareep",
    "option2":"Flaaffy",
    "option3":"Ampharos",
    "option4":"Corsola"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/182.png'>",
    "option1":"Bellossom",
    "option2":"Stantler",
    "option3":"Larvitar",
    "option4":"Blissey"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/183.png'>",
    "option1":"Marill",
    "option2":"Azumarill",
    "option3":"Pineco",
    "option4":"Sentret"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/185.png'>",
    "option1":"Sudowoodo",
    "option2":"Politoed",
    "option3":"Hoothoot",
    "option4":"Furret"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/187.png'>",
    "option1":"Hoppip",
    "option2":"Skipoom",
    "option3":"Jumpuff",
    "option4":"Cyndaquil"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/190.png'>",
    "option1":"Aipom",
    "option2":"Kabuto",
    "option3":"Horsea",
    "option4":"Koffing"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/191.png'>",
    "option1":"Sunkern",
    "option2":"Sunflora",
    "option3":"Yanma",
    "option4":"Wooper"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/194.png'>",
    "option1":"Wooper",
    "option2":"Quagsire",
    "option3":"Espeon",
    "option4":"Umbreon"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/198.png'>",
    "option1":"Murkrow",
    "option2":"Slowking",
    "option3":"Misdreavus",
    "option4":"Unown"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/202.png'>",
    "option1":"Wobbuffet",
    "option2":"Girafarig",
    "option3":"Pineco",
    "option4":"Forretress"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/216.png'>",
    "option1":"Teddiursa",
    "option2":"Ursaring",
    "option3":"Slugma",
    "option4":"Swinub"
    },
    {
    "question":"Quem é esse Pokemon? <br><img src='./Pokedex/246.png'>",
    "option1":"Larvitar",
    "option2":"Pupitar",
    "option3":"Tyranitar",
    "option4":"Suicune"
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