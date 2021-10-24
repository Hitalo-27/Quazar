import "./ContatoCss.css";

export default function Contact() {
  return (
      <section className="contact">
        <div className="contact-below">
          <h2 id="contactID">Contate-nos</h2>
          <p>
            {" "}
            Entre em contato conosco para qualquer duvida, reclamação 
            ou elogios, o seu feedback é muito importante para nos.
          </p>
        </div>
        <div className="container-contact">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <i className="fa fa-street-view" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Endereço</h3>
                <p>
                  R. Felíciano de Mendonça,
                  <br /> 290 - Guaianases, São Paulo
                </p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Telefone</h3>
                <p>(11)2554-0978</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>quazaroficial@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <h2>Envie sua menssagem</h2>
              <div className="inputBox">
                <input type="text" name="" required />
                <span>Nome completo</span>
              </div>

              <div className="inputBox">
                <input type="email" name="" required />
                <span>Email</span>
              </div>

              <div className="inputBox">
                <input type="text" name="" required />
                <span>Assunto</span>
              </div>

              <div className="inputBox">
                <textarea className="textareaStyle" required />
                <span>Menssagem...</span>
              </div>

              <div className="inputBox">
                <input type="submit" name="" value="Enviar" required />
              </div>
            </form>
          </div>
        </div>
      </section>
  );
}