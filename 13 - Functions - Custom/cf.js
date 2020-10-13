//Function Definition
function calculateBill() {//function block
  
  // this is the function body and anything that goes inside of the actual function body,
  console.log('Running Calculate Bill');

  const total = Math.floor(100 * 1.13);
  return total; // temporary variable o r garbage collected not needed
}

//Function call or "Run"
// calculateBill();
const myTotal = calculateBill();
console.log(`Your total is $${myTotal} bills`);

console.log(`Your total is $${calculateBill()}`);

function toDO() {
  const something = `
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus sint eaque praesentium eligendi quam quis labore. Minima nesciunt obcaecati a nihil suscipit doloribus nobis aperiam voluptas itaque dignissimos blanditiis ducimus, deleniti modi et vel minus veritatis ipsa explicabo voluptate natus vitae aspernatur, eius ab! Animi similique tenetur aut commodi, sunt, officia, fugiat molestias quisquam ipsum aliquid consequatur ducimus exercitationem quam explicabo voluptate. Enim illum nihil autem ullam impedit? Illo voluptatum id quas quasi molestiae distinctio sunt repudiandae itaque vel ipsam, quia facilis, soluta eveniet totam ipsum a maiores veniam, sint reiciendis minima exercitationem eligendi. Et fugiat qui saepe asperiores praesentium, aut aliquam vel labore cupiditate nihil, harum corrupti quaerat ex a assumenda consectetur ratione. Laudantium quibusdam optio dolor laborum, voluptatibus cum eum cumque quia molestias sapiente totam dolorem, dolorum explicabo possimus dicta, dolore illum! Officia minima ea sunt libero at voluptatibus nobis ab, iste minus cum vero eveniet commodi distinctio maiores velit quaerat blanditiis perferendis saepe omnis ad vel doloremque quae ducimus doloribus? Veritatis cum reiciendis modi, possimus error eligendi doloribus iusto voluptatibus aspernatur consequatur ducimus cumque illum non ex velit corrupti dicta nihil sequi est. Officiis impedit ducimus iste itaque ratione, animi odio? Magni aliquam illum excepturi quas id fugiat adipisci esse quod nam voluptates repudiandae dolor molestias nemo in iste itaque, deleniti assumenda inventore molestiae ab. Modi nisi rerum facilis tempore, dolores dolorum officiis necessitatibus veniam ad dolore. Aspernatur accusantium voluptatum rerum nam. Voluptates, fugiat excepturi quidem labore corporis eius saepe ut amet id non voluptatum. Sapiente voluptate officiis esse molestias impedit aliquam ex distinctio, accusamus quod quo repudiandae ipsam incidunt ea laudantium et vitae consequuntur, autem deleniti, nemo odio? Sequi minus iste maxime, dignissimos, voluptate possimus vitae reiciendis consectetur et harum atque. Soluta similique assumenda quis ducimus fugit. Exercitationem in vitae ullam sapiente non harum nulla consectetur et sunt soluta dolores veniam mollitia iste corporis commodi deleniti iure quas, suscipit dolorem neque eveniet? Incidunt, quaerat. Provident velit corrupti praesentium tenetur eos, doloremque consequuntur, dolorem nemo, fuga maxime facilis ab illo expedita. Facere dignissimos commodi inventore cumque ea nostrum consequuntur iste necessitatibus, placeat earum maiores aut excepturi est, minus adipisci obcaecati beatae ipsa, ducimus doloremque dicta ut asperiores? Voluptate reprehenderit harum, explicabo fugiat assumenda eligendi. Nam reprehenderit magni error deserunt iusto, eaque ab accusamus id necessitatibus excepturi, voluptate provident nihil molestiae sunt ad. Laudantium placeat ratione nisi, architecto, atque sed porro similique odio facilis tempora perferendis possimus maiores./p>
        </div>
    `;

    return something;
};

const template = toDO();

document.body.innerHTML = template;


