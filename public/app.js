
// Grab the articles as a json
$.getJSON("/articles", function(article) {
    // For each one
    for (var i = 0; i < article.length; i++) {
       // Display the apropos information on the page
       var url = article[i].link;
       var title = article[i].title;
       var summary = "Article Summary";
       $("#articles").append("<div class='card text-white bg-dark mb-2' style='max-width: 20rem'>" + "<p data-id='" + article[i]._id + "'>" + "<div class='card-header' a href=" + article[i].link + ">" + title + "</a>" + "<hr>" + "<h6>" + summary + "</h6>" + "<p>" + article[i].body + "</p>" + "<hr>" + "<a class='btn btn-primary save'>Save Article</a>" + "<br>");
 
       $(".btn.btn-primary.save").on("click",$(this), function() {
        // alert("Article Saved", );
        
          var savedArticle = $(this)
            .parents(".card")
            .data();
          $.ajax({
            method: "POST",
            url: ""
          })  
          
          // Remove card from page
          $(this)
            .parents(".card")
            .remove();
      });
  }
});


  $("#scrape").on("click", function() {
      console.log("this works");
    alert("Scrape Complete");
    window.location.href = "/index.html"
  }); 


  

  // old code
//     // Display the apropos information on the page
//     $("#articles").append("<p data-id='" + article[i]._id + "'>" + article[i].title + "<br />" + article[i].link + "</p>");
  