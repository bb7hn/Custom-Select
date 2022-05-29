const custom_select = (id=null,onchange = ()=>{console.log('default function')})=>{
    
  if(id == null){
      let x, i, j, l, ll, selElmnt, a, b, c;
      /* Look for any elements with the class "custom-select": */
      x = document.getElementsByClassName("custom-select");
      l = x.length;
      for (i = 0; i < l; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      ll = selElmnt.length;
      /* For each element, create a new DIV that will act as the selected item: */
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = '<span>'+selElmnt.options[selElmnt.selectedIndex].innerHTML+'</span>';
      x[i].appendChild(a);
      /* For each element, create a new DIV that will contain the option list: */
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < ll; j++) {
          /* For each option in the original select element,
          create a new DIV that will act as an option item: */
          c = document.createElement("DIV");
          c.innerHTML = selElmnt.options[j].innerHTML;
          c.addEventListener("click", function(e) {
              /* When an item is clicked, update the original select box,
              and the selected item: */
              let y, i, k, s, h, sl, yl;
              s = this.parentNode.parentNode.getElementsByTagName("select")[0];
              sl = s.length;
              h = this.parentNode.previousSibling;
              for (i = 0; i < sl; i++) {
              if (s.options[i].innerHTML == this.innerHTML) {
                  s.selectedIndex = i;
                  s.value = this.getAttribute('value');
                  onchange(s.value);
                  h.innerHTML = this.innerHTML;
                  y = this.parentNode.getElementsByClassName("same-as-selected");
                  yl = y.length;
                  for (k = 0; k < yl; k++) {
                  y[k].removeAttribute("class");
                  }
                  this.setAttribute("class", "same-as-selected");
                  break;
              }
              }
              h.click();
          });
          b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function(e) {
          /* When the select box is clicked, close any other select boxes,
          and open/close the current select box: */
          e.stopPropagation();
          closeAllSelect(this);
          this.nextSibling.classList.toggle("select-hide");
          this.classList.toggle("select-arrow-active");
      });
      }
  }else{
      let x, i, j, l, ll, selElmnt, a, b, c;
      /* Look for any elements with the class "custom-select": */
      x = document.getElementById(id);
      selElmnt = x.getElementsByTagName("select")[0];
      ll = selElmnt.length;
      /* For each element, create a new DIV that will act as the selected item: */
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = '<span>'+selElmnt.options[selElmnt.selectedIndex].innerHTML+'</span>';
      x.appendChild(a);
      /* For each element, create a new DIV that will contain the option list: */
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < ll; j++) {
          /* For each option in the original select element,
          create a new DIV that will act as an option item: */
          c = document.createElement("DIV");
          c.innerHTML = selElmnt.options[j].innerHTML;
          c.setAttribute('value',selElmnt.options[j].getAttribute('value'));
          c.addEventListener("click", function(e) {
              /* When an item is clicked, update the original select box,
              and the selected item: */
              let y, i, k, s, h, sl, yl;
              s = this.parentNode.parentNode.getElementsByTagName("select")[0];
              sl = s.length;
              h = this.parentNode.previousSibling;
              for (i = 0; i < sl; i++) {
              if (s.options[i].innerHTML == this.innerHTML) {
                  s.selectedIndex = i;
                  s.value = this.getAttribute('value');
                  onchange(s.value);
                  h.innerHTML = this.innerHTML;
                  y = this.parentNode.getElementsByClassName("same-as-selected");
                  yl = y.length;
                  for (k = 0; k < yl; k++) {
                  y[k].removeAttribute("class");
                  }
                  this.setAttribute("class", "same-as-selected");
                  break;
              }
              }
              h.click();
          });
          b.appendChild(c);
      }
      x.appendChild(b);
      a.addEventListener("click", function(e) {
          /* When the select box is clicked, close any other select boxes,
          and open/close the current select box: */
          e.stopPropagation();
          closeAllSelect(this);
          this.nextSibling.classList.toggle("select-hide");
          this.classList.toggle("select-arrow-active");
      });
      
  }
}
const closeAllSelect = (elmnt) => {
/* A function that will close all select boxes in the document,
except the current select box: */
let x, y, i, xl, yl, arrNo = [];
x = document.getElementsByClassName("select-items");
y = document.getElementsByClassName("select-selected");
xl = x.length;
yl = y.length;
for (i = 0; i < yl; i++) {
  if (elmnt == y[i]) {
    arrNo.push(i)
  } else {
    y[i].classList.remove("select-arrow-active");
  }
}
for (i = 0; i < xl; i++) {
  if (arrNo.indexOf(i)) {
    x[i].classList.add("select-hide");
  }
}
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
/* Cncomment for activate for all selects
document.onload = () => {
  custom_select   
}

*/
