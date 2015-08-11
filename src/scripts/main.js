Reveal.initialize({

  controls: true,
  progress: false,
  history: true,
  center: true,

  transition: 'fade', // none/fade/slide/convex/concave/zoom

  // Optional reveal.js plugins

  dependencies: [
    { src: '/js/vendor/libs/classList.js', condition: function() { return !document.body.classList; } },
    { src: 'js/vendor/plugins/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
    { src: 'js/vendor/plugins/notes/notes.js', async: true },
    { src: 'js/vendor/plugins/chartist/chartist.js', async: true },
    { src: 'js/vendor/plugins/math/math.js', async: true },
    { src: 'js/vendor/plugins/print-pdf/print-pdf.js', async: true },
    { src: 'js/vendor/plugins/vivus/vivus.min.js', async: true },
    { src: 'js/vendor/plugins/zoom-js/zoom.js', async: true }
  ]
});


