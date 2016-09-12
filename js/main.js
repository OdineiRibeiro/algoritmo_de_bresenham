DesenhaTabela();
DesenhaLinha(1,15,1,30);

$(document).ready(function(){

  //Quando clicar em desenhar
  $(document).on('click','#btn-desenhar',function(){

    //Limpa a tabela
    $('#mainTable').empty();
    DesenhaTabela();

    //pega os valores dos campos
    var x0Input = parseInt($('#x0').val());
    var x1Input = parseInt($('#x1').val());
    var y0Input = parseInt($('#y0').val());
    var y1Input = parseInt($('#y1').val());

    //Chama funcao desenharLinha()
    DesenhaLinha(x0Input,x1Input,y0Input,y1Input);
  });

});

//desenha uma tabela html simples
function DesenhaTabela(){
  var table = document.getElementById("mainTable");
  var x = 0;
  var y = 0;
  for(x = 0;x < 50;x++){
    var tr = document.createElement("tr");
    tr.setAttribute("class","pixel y");
    tr.setAttribute("id","row-"+x);
    table.appendChild(tr);
    for(y = 0;y < 50;y++){
      var td = document.createElement("td");
      td.setAttribute("class","pixel x");
      td.setAttribute("id",y);
      var t = tr.appendChild(td);
    }
  }
}

//Executa Algoritmo de Bresenham para desenhar a reta
function DesenhaLinha(x1, x2, y1, y2){
  var slope;
  var dx,dy,ince,incne,d,x,y;
  if(x1 > x2){
    DesenhaLinha(x2,x1,y2,y1);
    return;
  }
  dx = x2 - x1;
  dy = y2 - y1;
  if(dy < 0){
    slope = -1;
    dy =- dy;
  }else{
    slope = 1;
  }
  ince = 2 * dy;
  incne = 2 * dy - 2 * dx;
  d = 2 * dy - dx;
  y = y1;
  for(x = x1; x <= x2; x++){
    setInterval(acenderPixel(x,y),1000);
    if(d <= 0){
      d += ince;
    }else{
      d += incne;
      y += slope;
    }
  }
}

//Localiza qual pixel deve ser aceso
function acenderPixel(x,y){
  var row = $("#row-"+y+" #"+x).css('backgroundColor','black');
}
