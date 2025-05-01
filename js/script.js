$(function(){var e=["https://web.whatsapp.com/send?phone=917043435987","https://api.whatsapp.com/send?phone=917043435987"];function t(){var t=767.98>$(window).width();$(".set-url-target").attr("href",e[t?1:0])}$(window).on("resize",function(){clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(t,200)}).trigger("resize")});



  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("pdfForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form from reloading the page
  
      if (!form.checkValidity()) {
        event.stopPropagation();
      } 
  
      form.classList.add("was-validated"); // Apply Bootstrap validation styles
    });
  });
  
  
  
    document.addEventListener("DOMContentLoaded", function () {
      const pdfForm = document.getElementById("pdfForm");
      const alertBox = document.createElement("div"); // Alert box for success/failure messages
      pdfForm.parentNode.insertBefore(alertBox, pdfForm);
  
      pdfForm.addEventListener("submit", async function (event) {
        event.preventDefault();
  
        if (!pdfForm.checkValidity()) {
          event.stopPropagation();
        } else {
          const email = document.getElementById("emailValidate").value;
          const companyName = document.getElementById("companyName").value;
          try {
            const response = await fetch("https://ksrbackend-3.onrender.com/api/sendCompanyEmail", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, companyName }),
            });
  
            const result = await response.json();
  
            if (response.ok) {
              alertBox.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                  <strong>Success!</strong> The e-brochure has been sent to your email.
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
              pdfForm.reset();
            } else {
              alertBox.innerHTML = `
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                  <strong>Error!</strong> ${result.error}
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
            }
          } catch (error) {
            alertBox.innerHTML = `
              <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Error!</strong> Something went wrong.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>`;
          }
        }
  
        pdfForm.classList.add("was-validated");
      });
    });
