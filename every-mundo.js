(function () {
    if (window.__ADNETIFY_SCRIPT) {
      console.log(
        'PROS - Adnetify is already instantiated: ',
        window.__ADNETIFY_SCRIPT
      );
  
      const scripts = Array.from(document.querySelectorAll('script'));
      scripts.forEach((script) => {
        if (script.src === window.__ADNETIFY_SCRIPT) {
          script.remove();
          console.info('PROS - Adnetify script removed');
        }
      });
  
      delete window.__ADNETIFY_SCRIPT;
    }
  
    var adnetify = document.createElement('script');
    var src =
      document.querySelectorAll('[data-container-id^="mm2-"]').length > 0
        ? 'https://everymundo.github.io/registry-adnetify2/scripts/2.0.0-experimental-14/dev/adnetify.js'
        : 'https://00-bkort.github.io/scriptEveryMundo/script-adnetify.js';
    adnetify.type = 'text/javascript';
    adnetify.src = src;
    adnetify.onload = function () {
      console.info('PROS - Adnetify loaded and ready');
    };
    adnetify.onerror = function () {
      console.info('PROS - Adnetify could not be loaded');
    };
  
    document.head.appendChild(adnetify);
    window.__ADNETIFY_SCRIPT = src;
  })();
  
