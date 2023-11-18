/* =======Counter Up Start ======== */
let counterItems = document.querySelectorAll(".counter_item");
let speed = 200;

let ocunterItemsArr = Array.from(counterItems);
ocunterItemsArr.map((counter) => {
  let countValue = counter.dataset.count;
  let inititalCount = Number(counter.innerText);
  let newSpeed = Math.floor(countValue / speed);

  const updateCount = () => {
    inititalCount = inititalCount + newSpeed;
    counter.innerText = inititalCount;
    if (inititalCount < countValue) {
      setTimeout(() => {
        updateCount();
      }, 20);
    }
  };
  updateCount();
});
/* =======Counter Up End ======== */
