Reveal.initialize({

  controls: true,
  progress: false,
  history: true,
  center: true,

  transition: 'fade', // none/fade/slide/convex/concave/zoom

  // Optional reveal.js plugins

  dependencies: [
    { src: 'vendor/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
    { src: 'vendor/reveal.js/plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
    { src: 'vendor/reveal.js/plugin/notes/notes.js', async: true },
    { src: 'vendor/reveal.js/plugin/math/math.js', async: true },
    { src: 'vendor/reveal.js/plugin/print-pdf/print-pdf.js', async: true },
    { src: 'vendor/reveal.js/plugin/zoom-js/zoom.js', async: true },
    { src: 'vendor/chartist/dist/chartist.min.js', async: true },
    { src: 'vendor/chartist/dist/vivus.min.js', async: true }
  ]
});
