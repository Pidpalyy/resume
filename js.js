
$(function(){
    $('.main_title').slideUp(0).slideDown(2000);
});

$(function(){
    $('.background_slide_html').hide(0).show(5000);
});

$(function(){
    $('.background_slide_css').hide(0).show(5000);
});

$(function(){
    $('.background_slide_js').hide(0).show(5000);
});

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.what');
  for (let elm of elements) {
    observer.observe(elm);
  }
