//poue exo 8 commande

$(document).ready(function () {
  //alert("La page est chargée avec la version :" + $.fn.jquery);

  // initialise tous les composant
  function onBtnClickAjout() {
    alert("click");

    $("#idtable tr:last").css({ color: "grey" });

    let ligne =
      "<td> id Article <input type='text'/></td>" +
      "<td> Prix unitaire <input type ='text'/></td>" +
      "<td>Quantité <input type='number' min='0' class='classqte'/></td>" +
      "<td>Sous-Total <input type='text' class='stotal'readonly/></td>";

    let tr = $("<tr></tr>").html(ligne);

    //ajout de la ligne à la table idtable
    $("#idtable").append(tr);

    let dernier = $("#idtable tr:last");
    dernier.css({ color: "red" });

    let inputPrix = dernier.find("input").eq(1);
    inputPrix.addClass("classprix");
    inputPrix.attr("value", 0);
    inputPrix.blur(onblur);

    function onblur(event) {
      let ligne = $(event.currentTarget).parents("tr");
      let inputs = ligne.find("input");
      inputs.eq(1).val("=> prix");
      inputs.eq(2).val(100);
      inputs.eq(3).val("=>sous total");
    }

    function onblur(event) {
      let ligne = $(event.currentTarget).parents("tr");
      let inputs = ligne.find("input");

      let prix = parseFloat(inputs.eq(1).val());
      let qte = parseInt(inputs.eq(2).val());

      if (Number.isNaN(qte) || Number.isNaN(prix) || prix < 0 || qte < 0) {
        $(this).addClass("erreur");
      } else {
        $(this).removeClass("erreur");
        inputs.eq(3).val(qte * prix);
        majTotal();
      }
    }

    function majTotal() {
      let total = 0;

      $("#idtable")
        .find("input.stotal")
        .each(function () {
          total += parseFloat($(this).val());
        });

      $("#idtotal").text(total);
    }
  }
  // initialise tous les composant
  function initComponents() {
    $("#btnAjoutLigne").click(onBtnClickAjout);
  }

  // appelle la fonction d’initialisation après chargement du document
  $(document).ready(initComponents);
});
