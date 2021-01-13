<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/js/ion.rangeSlider.min.js"></script> 
<script type="text/javascript">
 document.addEventListener("DOMContentLoaded", () => {
  // 🍓 global variables
  const $slider = $("#slider"),
    $input = $("#input");

  // 🍑 slider magic
  $slider.ionRangeSlider({
    min: 12,
    max: 400,
    from: 20,
    onStart: (data) => {
      $input.prop("placeholder", "This is a space to type");
    },
    onChange: (data) => {
      let value = data.from,
        factor = 1; // optional
      $input.css("font-size", `${value * factor}px`);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // 🍓 global variables
  const $slider = $("#slider-tracking"),
    $input = $("#input");

  // 🍑 slider magic
  $slider.ionRangeSlider({
    min: -1,
    max: 5,
    from: 0,
    onChange: (data) => {
      let value = data.from,
        factor = 0.1; // optional
      $input.css("letter-spacing", `${value * factor}em`);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // 🍓 global variables
  const $slider = $("#slider-2"),
    $input = $("#input-2");

  // 🍑 slider magic
  $slider.ionRangeSlider({
    min: 12,
    max: 400,
    from: 38,
    onChange: (data) => {
      let value = data.from,
        factor = 1; // optional
      $input.css("font-size", `${value * factor}px`);
    }
  });
});
</script>
