//-> na função start, criamos os carros

    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;

    cars = [car1, car2];
    
    
 //-> adicionamos a função play para ser chamada quando temos 2 jogadores. Ela carrega a imagem da pista e os sprites dos carros
 
 play() {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6);

      //índice da matriz
      var index = 0;
      for (var plr in allPlayers) {
        //adicione 1 ao índice para cada loop
        index = index + 1;

        //use os dados do banco de dados para exibir os carros nas direções x e y
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        cars[index - 1].position.x = x;
        cars[index - 1].position.y = y;

        
      }

      this.handlePlayerControls();

      drawSprites();
    }
  }
  
  
  //-> handleElements é chamada quando o jogo começa, ela trata de esconder o formulário do inicio do jogo e muda a posição de tamaho da imagem de titulo
  
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

    
    
    
  //-> Na classe Player.js, nós precisamos pegar do banco de dados a informação dos player adicionadas lá quando usamos addPlayer. Usamos essas informações 
  na função play, onde pegamos as posições do player para manipular as sprites do carro
  
 static getPlayersInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", data => {
      allPlayers = data.val();
    });
  }   
  
  
  //-> no sketch.js, na função preload, precisamos guardar as imagens usadas no jogo em suas variáveis.
  
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/PISTA.png");
  
  
  
