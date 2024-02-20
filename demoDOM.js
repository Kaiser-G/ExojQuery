// Exercice 6 : exercices jQuery avec séparation du JavaScript et du HTML

$(document).ready(function () {
  // alert("La page est chargée avec la version :" + $.fn.jquery);

  function onBtnClickFirst() {
    $("#divtest").before("ajouter un nouvel élément en début de liste");
  }
  function onBtnClickBefore() {
    $("#p2").before("ajouter un nouvel élément avant un élément de la liste");
  }

  function onBtnClickAfter() {
    $("#pcible").after(
      "ajouter un nouvel élément après un élément de la liste"
    );
  }
  function onBtnClickRemove() {
    $("#pcible").remove();
  }

  function onBtnClickEmpty() {
    $("#p2").empty();
  }

  //création des boutons

  function initComponents() {
    $("#btnAjoutDebutListe").click(onBtnClickFirst);
    $("#btnAjoutAvant").click(onBtnClickBefore);
    $("#btnAjoutApres").click(onBtnClickAfter);
    $("#btnSup").click(onBtnClickRemove);
    $("#btnVider").click(onBtnClickEmpty);
  }
  $(document).ready(initComponents);
});
