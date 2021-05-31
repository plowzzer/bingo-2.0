export default function EmailToCard(email: string) {
  const date = new Date()
  const day = date.getDate()
  const month = date.getDate()
  const strs = email.split("");

  let sum = 1 
  strs.forEach((letter) => {
    sum = day + month + letter.charCodeAt(0);
  });

  return sum * strs.length;
}