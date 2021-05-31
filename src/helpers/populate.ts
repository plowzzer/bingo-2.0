import cardCreator from './cardCreator'

export default function () {

  const mixWords = cardCreator('email@email.com')
  return mixWords
  // if (localStorage.getItem("chart")) {
  //   JSON.parse(localStorage.getItem("chart") || "")
  // } else {
  //   const newPossibles = PosibleValues;
  //   const newValues: Card[] = [];
  //   const emailNumberCode = emailToCode(string);

  //   for (let i = 0; i < 25; i++) {
  //     if (i === 0) {
  //       let elementIndex = emailNumberCode % newPossibles.length;
  //       newValues.push({ value: newPossibles[elementIndex], state: false });
  //       newPossibles.splice(elementIndex, 1);
  //     }
  //     else if (i === 12) {
  //       newValues.push({ value: "FREE", state: true });
  //     } else {
  //       let elementIndex = (emailNumberCode * i) % newPossibles.length;
  //       newValues.push({ value: newPossibles[elementIndex], state: false });
  //       newPossibles.splice(elementIndex, 1);
  //     }
  //   }

  //   localStorage.setItem("chart", JSON.stringify(newValues));
  //   setCards(newValues);
  // }


}