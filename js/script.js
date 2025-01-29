
  $(function () {
    // WhatsApp URLs for desktop and mobile
    var hrefs = [
      "https://web.whatsapp.com/send?phone=7043435987", // Desktop
      "https://api.whatsapp.com/send?phone=7043435987" // Mobile
    ];
  
    // Function to update hrefs
    function updateWhatsAppHref() {
      var isMobile = $(window).width() < 767.98; // Check if width is less than 768px
      $(".set-url-target").attr("href", hrefs[isMobile ? 1 : 0]); // Update href
    }
  
    // Attach resize event with debounce
    $(window)
      .on("resize", function () {
        clearTimeout(this.resizeTimer); // Clear previous timer
        this.resizeTimer = setTimeout(updateWhatsAppHref, 200); // Debounce
      })
      .trigger("resize"); // Trigger on page load
  });
  