import classes from "./Pants.module.css"
const Pants = () => {
    return (
        <div className={classes.Projects}>
            <section>
                <div className={classes.cont}>
                    <h1>products company.</h1>
                    <p>
                       AMERICAN PANTS
                  </p>
                    <button className={classes.button}>sign up</button>
                </div>
            </section>

            <main>
                <div>
                    <span>
                        <h5 className={classes.pants}>pants</h5>
                        <p>Trousers, slacks, or pants (North American English) are an item of clothing that might have originated in Central Asia, worn from the waist to the ankles, covering both legs separately (rather than with cloth extending across both legs as in robes, skirts, and dresses).

                        Outside North America, the word pants generally means underwear and not trousers.[1] Shorts are similar to trousers, but with legs that come down only to around the area of the knee, higher or lower depending on the style of the garment. To distinguish them from shorts, trousers may be called "long trousers" in certain contexts such as school uniform, where tailored shorts may be called "short trousers", especially in the UK.

                        The oldest known trousers were found at the Yanghai cemetery in Turpan, Xinjiang, western China and dated to the period between the 10th and the 13th centuries BC. Made of wool, the trousers had straight legs and wide crotches and were likely made for horseback riding.[2][3]

                        In most of Europe, trousers have been worn since ancient times and throughout the Medieval period, becoming the most common form of lower-body clothing for adult males in the modern world. Breeches were worn instead of trousers in early modern Europe by some men in higher classes of society. Distinctive formal trousers are traditionally worn with formal and semi-formal day attire. Since the mid-20th century, trousers have increasingly been worn by women as well.

                        Jeans, made of denim, are a form of trousers for casual wear widely worn all over the world by both sexes. Shorts are often preferred in hot weather or for some sports and also often by children and adolescents. Trousers are worn on the hips or waist and are often held up by buttons, elastic, a belt or suspenders (braces). Unless elastic, and especially for men, trousers usually provide a zippered or buttoned fly. Jeans usually feature side and rear pockets with pocket openings placed slightly below the waist band. It is also possible for trousers to provide cargo pockets further down the legs.

Maintenance of fit is more challenging for trousers than for some other garments. Leg-length can be adjusted with a hem, which helps to retain fit during the adolescent and early adulthood growth years. Tailoring adjustment of girth to accommodate weight gain or weight loss is relatively limited, and otherwise serviceable trousers may need to be replaced after a significant change in body composition.</p>

                    </span>

                </div>

                <span className={classes.footerSpan}>
                    ©2021 Jackets shop
                </span>
            </main>
        </div>




//   function animation({level}) {
//     if (level == 10) 
//       return;
//     animation(level + 1);
//   }
//   animation(0);
//   function animation({type}) {
//     if (type == 10) 
//       return;
//     animation(type + 1);
//   }
//   animation(0);
// function test({level}) {
//     if (!level==10) return;
//     const q = quantity || 1; 
//     console.log(`We have ${q} ${fruit}!`);
//   }
//   test('banana'); 
//   test('apple', 2); 
//   function test(fruit, quantity) {
//     if (!fruit) return;
//     const q = quantity || 1; // if quantity not provided, default to one
  
//     console.log(`We have ${q} ${fruit}!`);
//   }
//   //test results
//   test('banana'); // We have 1 banana!
//   test('apple', 2); // We have 2 apple!


    )
}
export default Pants;