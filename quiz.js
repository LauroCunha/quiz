(function() 
 {
  var allQuestions = [{
    question: "Qual o trabalho de Mark Justin Roiland na serie?",
    options: ["Escritor", "Diretor", "Dublador", "Todos acima"],
    answer: 3
  }, {
    question: "Em quanto tempo o episodio piloto foi feito?",
    options: ["Algumas horas", "Alguns dias", "Algumas semanas", "Alguns meses"],
    answer: 0
  }, {
    question: "Qual a frase de efeito do Rick?",
    options: ["To poco me fudendo", "wubba lubba dub dub", "Eu estou em muita dor","Por favor me ajude"],
    answer: 1
  },{
    question: "Qual filme inspirou a serie?",
    options: ["De volta pro futuro", "Star wars", "Star trek", "Donnie Darko"],
    answer: 0
  }, {
    question: "Qual o universo do rick original?",
    options: ["Earth Cesium-136", "Earth Cesium-137", "Earth Cesium-138", "Earth Cesium-139"],
    answer: 1
  },{
    question: "Como o dublador grava os arrotos?",
    options: ["Ele deixa o som gravando enquanto bebe cerveja", "Ele força os arrotos a sair", "Ele pede um dublador profissional faze-los", "Ele finge os arrotos"],
    answer: 0
  },{
    question: "Quantas timelines diferentes ocorreram no episodio a rickle in time??",
    options: ["32", "16", "8", "4"],
    answer: 0
  },{
    question: "Qual a identidade do rapper ice T?",
    options: ["Snoop Dog", "Vapor T", "Tracy Lauren Marrow", "Water T"],
    answer: 3
  },{
    question: "Quantas pessoas morreram na serie?",
    options: ["734", "934", "808", "578"],
    answer: 2
  },{
    question: "Quantos personagens principais há na série?",
    options: ["2", "5", "3", "1"],
    answer: 0
    }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Por favor selecione uma opção !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Questão No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();