<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <article id="electricCars" data-columns="3" data-index-number="12314" data-parent="cars">
      Naelike ...!
    </article>
    <script type="text/javascript">
      // querySelector ID tag
      const articleGet = document.querySelector('#electricCars');
      // get tag data
      var getColumns = articleGet.dataset.columns;
      console.log(getColumns);
      var getIndexNumber = articleGet.dataset.indexNumber;
      console.log(getIndexNumber);
      var getParent = articleGet.dataset.parent;
      console.log(getParent);
    </script>
  </body>
</html>
