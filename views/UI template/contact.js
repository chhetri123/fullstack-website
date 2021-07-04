const layout = require("../layout");
module.exports = ({ req, msg = false }) => {
  return layout({
    content: ` <section class="contact-me" id="contact" style="
    background: black;
    color: white;
    margin-top: 90px;
    padding-bottom: 80px;
    overflow: hidden;
">
      <div class="row1">
        <h1 >Contact me</h1>
        <p>I'm available any time,<br>if you have something just feel free and leave a message<br>😊<span>❤</span></p>
      </div>
      <form method="post" class="contact-form">
      <div class="contact">
        <div class="contact-1">
        
          <input type="text" name="name" id="name" placeholder="Your name.... " required>

          <input type="email" name="Email" id="email" placeholder="Your Email...." required>
       
        </div>
        <div class="contact-2">
          <input type="text" name="phoneNumber" id="phone" placeholder="Your mobile number... " >
          <input type="text" name="howGotMe" id="find" placeholder="How did you find me?..">

        </div>
        <div class="contact-3">
          <textarea name="message" id="message" placeholder="Leave a message.." required></textarea>
        </div>

      </div>
      <button type="submit" class="submit">Send</button>
    </form>
    ${
      msg
        ? ` <h1 style="margin-top: 93px;
    font-size: 14px;
    color: orange;
    text-transform: capitalize;
      color:"orange";>${msg}</h1>
    `
        : ""
    }
    </section>
     `,
    title: "Contact",
    id: req,
  });
};
