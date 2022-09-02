<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Find the area of a circle</title>
</head>
<body>
  <h1>Area of a circle</h1>

  <form name="form1">
    <p>Area of a circle</p>
    <label for="radius">Enter value of radius</label>
    <input type="text" name="txt_radius" id="radius">
    <br><br>
    <button onclick="CalculateArea();">Enter</button>
    <!-- <input type="button" value="Calculate" onClick='CalculateArea();'> -->
  </form>

  <script>
    function CalculateArea() {
      var radius = document.form1.txt_radius.value;
      document.write("<p>Radius of the circle = " + radius + "cm </p>");
      document.write("Area of the circle is " + (radius * radius * Math.PI) + " sq.cm");
    }
  </script>
</body>

</html>
