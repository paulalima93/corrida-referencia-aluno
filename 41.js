 //método que pega do banco qual carro chegou no final

getCarsAtEnd() {
    database.ref("carsAtEnd").on("value", data => {
      this.rank = data.val();
    });
  }

//metodo que manda pro banco qual carro chegou no final
  static updateCarsAtEnd(rank) {
    database.ref("/").update({
      carsAtEnd: rank
    });
  }

//chamar getCarsAtEnd no método play, e o updateCarsAtEnd quando o carro passar da linha de chegada

//metodo que mostra a posição do player ao passar da linha de chegada e finaliza o jogo
 showRank() {
    swal({
      //title: `Incrível!${"\n"}Rank${"\n"}${player.rank}`,
      title: `Incrível!${"\n"}${player.rank}º lugar`,
      text: "Você alcançou a linha de chegada com sucesso!",
      imageUrl:
        "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
      imageSize: "100x100",
      confirmButtonText: "Ok"
    });
  }

//metodo que mostra mensagem de fim de jogo por acabar combustivel ou vida e finaliza o jogo
  gameOver() {
    swal({
      title: `Fim de Jogo`,
      text: "Oops você perdeu a corrida!",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Obrigado por jogar"
    });
  }



//codigo para usar o sweet alert, colocar no index.html

 <!-- Sweet Alert-->
    <script
      src="https://code.jquery.com/jquery-3.5.1.min.js"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
      crossorigin="anonymous"
    ></script>
    <script src="./lib/sweetalert.min.js"></script>
    <link rel="stylesheet" type="text/css" href="./lib/sweetalert.css" />

