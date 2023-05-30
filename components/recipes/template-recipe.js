class TemplateRecipe extends HTMLElement {
    constructor() {
      super();
    }

    recipe_name = this.getAttribute("recipe_name");
    recipe_desc = this.getAttribute("recipe_description");
    main_image_src = this.getAttribute('main_image_src')
    ingredient_image_src = this.getAttribute('ingredient_image_src')
    ingredient_list = this.getAttribute('ingredient_list')
    instruction_list = this.getAttribute('instruction_list')

    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="./css/recipe.css">

        <div class='container_recipe'>
          <div class='top_shape'>s</div>
          <div class='bot_shape'>s</div>
          <div class='title_recipe'>` + this.recipe_name + `</div>
          <div class='desc_recipe'><div>` + this.recipe_desc + `</div></div>
          <div class='arrow_container'>
            <img class='arrow' src='./assets/arrow.png'></img>
            <img class='food_img' src='` + this.main_image_src + `'></img>
            <img class='ingredient_img' src='` + this.ingredient_image_src + `'></img>
          </div>
          <div class='container_instructions'>
            <div class='ingredients'><span class='title'>Ingredients</span><br />` + this.stringToList(this.ingredient_list, 'unordered') + `</div>
            <div class='instructions'><span class='title'>Instructions</span><br />` +  this.stringToList(this.instruction_list, 'ordered')+ `</div>
          
          </div>
        </div>
        `;
        console.log(12)
      }

    stringToList(str, listType) {
        var arr = str.split(',,');
        var list = listType=='ordered' ? 'ol' : 'ul' ;

        var return_html = '<' + list + '>';

        for (var i = 0; i < arr.length; i++) {
            return_html = return_html + '<li>' + arr[i] + '</li>';
        }

        return return_html + '</' + list + '>';
    }
  }

  customElements.define('recipe-template', TemplateRecipe);