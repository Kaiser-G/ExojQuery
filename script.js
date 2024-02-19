// Exercice 5 : exercices jQuery avec séparation du JavaScript et du HTML

$(document).ready(function () {
  alert("La page est chargée avec la version :" + $.fn.jquery);

  $(document).mousemove(function (event) {
    $("#souris").text(
      "Axe x : " + event.pageX + " , " + "Axe Y : " + event.pageY
    );

    $("#event").html("Event : " + event.type);
  });

  //   function onParagraphClick() {
  //     alert("cliqué");
  //     $(this).hide();
  //   }

  //   function initComponents() {
  //     $("p").click(onParagraphClick);
  //   }
  //   $(document).ready(initComponents);

  $("p").click(function () {
    alert("cliqué V1");
    $(this).hide();
  });

  // méthode événementielle associée à l’événement click sur les
  // paragraphes
  function onParagraphClick(event) {
    // on affiche un trace avec l'objet sur lequel on a cliqué
    $("#decl").text(
      event.type + "  sur " + event.target + " id = " + event.target.id
    );
    // on cache le paragraphe si c'est le paragraphe "p1"
    if (event.target.id === "p1") {
      $(this).hide();
    }
  }
});
