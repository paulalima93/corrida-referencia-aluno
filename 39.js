//montar o placar e botão de reset com elementos HTML

//adicionar ao handleElements
    this.resetTitle.html("Reinicar Jogo");
    this.resetTitle.class("resetText");
    this.resetTitle.position(width / 2 + 200, 40);

    this.resetButton.class("resetButton");
    this.resetButton.position(width / 2 + 230, 100);

    this.leadeboardTitle.html("Placar");
    this.leadeboardTitle.class("resetText");
    this.leadeboardTitle.position(width / 3 - 60, 40);

    this.leader1.class("leadersText");
    this.leader1.position(width / 3 - 50, 80);

    this.leader2.class("leadersText");
    this.leader2.position(width / 3 - 50, 130);



//função usada para dar lógica à dinamica do placar
//no primeiro if, verificamos se o rank dos dois jogadores é 0. Se for, significa que ninguém ganhou ainda, 
//então o nome aparece na ordem de quem apertou o botão jogar, na primeira linha o player1 e na segunda linha, o player2
//esse primeiro if tambem verifica se o player1 ganhou, ou seja, se ele é o rank1; se sim, o player1 aparecerá em cima.
//o segundo if verifica somente se o player2 foi o ganhador, ou seja, se ele é o rank1; se sim, o player2 aparecerá em cima.
showLeaderboard() {
    var leader1, leader2;
    var players = Object.values(allPlayers);
    if (
      (players[0].rank === 0 && players[1].rank === 0) ||
      players[0].rank === 1
    ) {
      // &emsp;    Essa etiqueta é usada para exibir quatro espaços.
      leader1 =
        players[0].rank +
        "&emsp;" +
        players[0].name +
        "&emsp;" +
        players[0].score;

      leader2 =
        players[1].rank +
        "&emsp;" +
        players[1].name +
        "&emsp;" +
        players[1].score;
    }

    if (players[1].rank === 1) {
      leader1 =
        players[1].rank +
        "&emsp;" +
        players[1].name +
        "&emsp;" +
        players[1].score;

      leader2 =
        players[0].rank +
        "&emsp;" +
        players[0].name +
        "&emsp;" +
        players[0].score;
    }

    this.leader1.html(leader1);
    this.leader2.html(leader2);
  }


//estilo para o titulo do jogo enquanto o jogo está sendo jogado
.gameTitleAfterEffect{
  width: 25%;
  height: 80px;
}

//estilo para o botão de reset, placar e texto do reset
.resetButton {
  width:60px;
  height:60px;
  background-image: url('./assets/reset.png');
  background-size: cover;
  border-radius: 30px;
  display: inline-block;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  outline: none;
}

.resetText{
  font-size: 25px;
  color: white;
  font-family: vollkorn;
  text-align: center;
  text-shadow: -1px 1px 0 #ff1744,
                1px 1px 0 #ff1744,
                1px -1px 0 #ff1744,
                -1px -1px 0 #ff1744;
}

.leadersText{
  font-size: 20px;
  color: white;
  font-family: vollkorn;
  text-align: center;
}



//adicionar rank e score às informações do player(constructor) e nos metodos addPlayer e update da classe Player.
//fazer a função de resetar o banco de dados
//adicionar o marcador ao player
//fazer a camera seguir os jogadores

//fazer o carro movimentar para as laterais




