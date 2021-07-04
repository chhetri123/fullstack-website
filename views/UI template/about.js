const layout = require("../layout");
module.exports = ({ req }) => {
  return layout({
    content: `<section class="page-section bg-primary text-white mb-0" id="about">
      <div class="container">
        <!-- About Section Heading-->
        <h2 class="page-section-heading text-center text-uppercase text-white">
          About
        </h2>
        <!-- Icon Divider-->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon text-warning"><i class="fas fa-star"></i></div>
          <div class="divider-custom-line"></div>
        </div>
        <!-- About Section Content-->
        <div class="row">
          <div class="col-lg-4 ms-auto">
           <div class="container d-flex  bg-primary text-white text-center flex-column" style="padding-right: 78px;">
        <!-- Masthead Avatar Image-->
        <img
          class="masthead-avatar mb-5 myImageabout"
          src="assets/img/portfolio/about.jpg"
          alt="..."
        />
        <!-- Masthead Heading-->
        <h3 class="text-uppercase Display-1 mb-0">Chhetri Rocks</h3>
        <!-- Icon Divider-->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon text-warning"><i class="fas fa-star"></i></div>
          <div class="divider-custom-line"></div>
        </div>
        <!-- Masthead Subheading-->
        <h6 class="masthead-subheading font-weight-light text-success  mb-3">
          Web Developer - Web Designer - Electronics Engineer
        </h6>
      </div>
          </div>
          <div class="col-lg-4 me-auto">
            <p class="Displa-1">
             Hi..My name is manish chhetri.I am from Syangja.I study in
                  Bachlore in Electronics ,communication and technology
                  engineering at WRC lamachaur pokhara.I like coding because
                  when i start coding i dont know when time is gone.And i also
                  like playing game mostly cricket and Volley ball.I love to
                  spend time in my laptop most of the time i do coding.And in
                  rest time i like to listen the nepali meadouls songs which
                  makes me relief from being boring.
            <br>
            <br>
             And Its been a year i involved in web development field.I have
                  completed web develoment course from online Udemy site. And I
                  have made some really cool projects .You can check it out in
                  my github.😊
            </p>
          </div>
        </div>
        <!-- About Section Button-->
        <div class="text-center mt-4">
          <a class="btn btn-xl btn-outline-light" href="github" target="_blank">
            <i class="fas fa-downArrow me-2"></i>
           Github link
          </a>
        </div>
      </div>
    </section>`,
    title: "About Me",

    id: req,
  });
};
