function bmi() {
  weight.addEventListener("input", () => {
  const height = document.getElementById("height")
  const inheight = height.value
  const weight = document.getElementById("weight")
  const inweight = weight.value
  const BMI = inweight / (inheight * inheight) * 100
  let right_weight = (inheight / 100) * (inheight / 100) * 22
  let right_weight2 = "あなたの適正体重は"+right_weight+"です"
  document.getElementById("bmi").innerHTML = BMI
  document.getElementById("right_weight").innerHTML = right_weight2
  })
}
window.addEventListener('load', bmi)