import classes from "./Home.module.css"
const Home =()=> {
    return(
        // <div className={classes.Home}>
        //     <h4 className={classes.h4}> This is HoMe PaGe</h4>
        //     <p >thiis web side about our products and our success </p>
        //     <button className={classes.button}>sign up</button>
        // </div>

            <div className={classes.Projects}>
              <section>
                <div className={classes.cont}>
                  <h1>products company.</h1>
                  <p>
                
Also see How to Write an About Us Page for information about creating a story for your website, which you can use in your company presentation.
                  </p>

                  <button className={classes.button}>sign up</button>
                </div>

            




              </section>





              
              <footer>
                <div>
                  <span>
                    <p>Services</p>
                    <p>About Us</p>
                    <p>our company</p>
                    <p>Contacts</p>
                  </span>
                  <span>
                    <p>Online store</p>
                    <p>products store </p>
                <p>products system</p>
                  </span>
                  <span>
                    <p>Web-site</p>
                    <p>....</p>
                    <p>SEO busines</p>
                    <p>Business process</p>
                    <p>Online store</p>
                  </span>
                  <span>
                    <p>Mahatchkala st Sultana-Akhmeda </p>
                    <p>+7 234 21 34 78 </p>
                    <p>me@gmail.com</p>
                  </span>
                  <span>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>WhatsApp</p>
                    <p>Telegram</p>
                  </span>
                </div>
        
                <span className={classes.footerSpan}>
                ©2021 Jackets shop
                </span>
              </footer>
            </div>
     





    )
}
export default Home;