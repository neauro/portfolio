$(document).ready(function() {
  var workItemTime = 300;


  $(".work-item").mouseenter(function(e)
    {
      $(this).find(".work-item-genre").animate(
        {
          bottom: "0px"
        },
        workItemTime
      );
      $(this).find(".work-item-desc").animate(
        {
          top: "0px"
        },
        workItemTime
      );
    }
  );
  $(".work-item").mouseleave(function(e)
    {
      $(this).find(".work-item-genre").animate(
        {
          bottom: "44px"
        },
        workItemTime
      );
      $(this).find(".work-item-desc").animate(
        {
          top: "156px"
        },
        workItemTime
      );
    }
  );

 $("#work-button").click(
  function()
  {
     $("html, body").animate(
       {
         scrollTop: $("#main").offset().top
       }, 1000);
  }
  );

 $("#about-button").click(
  function()
  {
     $("html, body").animate(
       {
         scrollTop: $("#about").offset().top
       }, 1000, function()
         {
           $("#about h1").animate(
             {
               fontSize: "56px"
             },500, function()
               {
                 $("#about h1").animate(
                   {
                     fontSize: "46px"
                   },200);
               }
             );
         }
       );
  }
  );
});
