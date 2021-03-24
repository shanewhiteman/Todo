<symbol id="delete-icon" viewBox="0 0 448 448"><path d="m224 0c-123.710938 0-224 100.289062-224 224s100.289062 224 224 224 224-100.289062 224-224c-.132812-123.65625-100.34375-223.867188-224-224zm124.449219 325.824219c4.15625 4.015625 5.828125 9.964843 4.363281 15.558593s-5.835938 9.964844-11.429688 11.429688-11.542968-.207031-15.558593-4.363281l-101.824219-101.824219-101.824219 101.824219c-6.277343 6.0625-16.257812 5.976562-22.429687-.195313s-6.257813-16.152344-.195313-22.429687l101.824219-101.824219-101.824219-101.824219c-4.15625-4.015625-5.828125-9.964843-4.363281-15.558593s5.835938-9.964844 11.429688-11.429688 11.542968.207031 15.558593 4.363281l101.824219 101.824219 101.824219-101.824219c6.277343-6.0625 16.257812-5.976562 22.429687.195313s6.257813 16.152344.195313 22.429687l-101.824219 101.824219zm0 0" fill="#D80027"/></symbol>





<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline';" />
        <title>Checklist</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
        <link rel="stylesheet" type="text/css" href="style/style.css"/>
        <script src="./indx.js"></script>
    </head>

    <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
        <div class="checklogo navbar-brand">
          <a class="navbar-item">
            <img src="images/clogo.svg" width="145">
          </a>
        </div>
    </nav>

    <body>
        <div id="todo" class="columns">
            <div class="column">
                <input class="input" type="text" id="myInput" placeholder="Add to the list...">
                </input>
                <div id="ls1" class ="list1">
                    <ul id="myUL">
                        <li>Hit the gym</li>
                        <li >Pay bills</li>
                        <li>Buy eggs</li>
                        <li>Read a book</li>
                    </ul>
                </div>
            </div>
        </div>
    </body>

    <footer>
        <div class="modal-card-foot" style="justify-content: space-between">
            <div class="minus_btn">
                <a id="add" class="button is-text is-rounded is-small" onclick="addnewdummy()"><img src="images/plus-circle-solid.svg" width="38" height="38"></a>
            </div>
            <div class="calendar_btn">
                <a id="cal" class="button is-text is-rounded is-small"><img src="images/calendar-alt-solid.svg" width="38" height="38"></a>
            </div>
            <div class="add_btn">
                <a id="del" class="button is-text is-rounded is-small"><img src="images/minus-circle-solid.svg" width="38" height="38"></a>
            </div>
        </div>
    </footer>

</html>








html, body {
  height: 100%;
}

body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.columns {
  -webkit-box-flex: 1;
      -ms-flex: 1 0 auto;
          flex: 1 0 auto;
  padding: 20px;
}

.list1 {
  padding-top: 50px;
}

* {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

ul {
  margin: 0;
  padding: 0;
}

#del:active {
  background-color: transparent;
}

#add:active {
  background-color: transparent;
}

#cal:active {
  background-color: transparent;
}

.footer {
  -ms-flex-negative: 0;
      flex-shrink: 0;
}
/*# sourceMappingURL=style.css.map */






function addNewDummy() {
    let list = document.getElementById("ls1");
    let dummyText = `
    <label class="checkbox">
        <input type="checkbox">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ultrices neque ornare aenean euismod elementum nisi
        </input>
    </label>`;

    if(list.childElementCount <= 3){
    list.innerHTML += dummyText;
    }
}
function main(){
    document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("add").addEventListener("click", addNewDummy);
    });
}

main()