const boton = document.querySelector(".boton");
const id = document.querySelector(".span");
const consejos = document.querySelector(".parrafo");

/*boton de advice */
boton.addEventListener("click", (e) => {
  /* location.reload();*/
  e.preventDefault();
  apiadvice();
});

/*conectamos con la api de advice */
/*await cuando acabes significa* */
/*no me funciono await, por esa razon utilize "then" */
function apiadvice() {
  try {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        const consejo = {
          id: data.slip.id,
          advi: data.slip.advice,
        };
        id.innerHTML = `#${consejo.id}`;
        consejos.innerHTML = `${consejo.advi}`;
      });
  } catch (error) {
    console.log(error);
  }
}

/*primer consejo que aparece en la api igual que la foto del ejercicio */
const resultadojson = () => {
  fetch(`https://api.adviceslip.com/advice/${71}`)
    .then((res) => res.json())
    .then((data) => {
      let cons = {
        consejo: data.slip.advice,
        id: data.slip.id,
      };
      console.log(data);
      (id.innerHTML = `#${cons.id}`), (consejos.innerHTML = `${cons.consejo}`);
    });
};
resultadojson();
