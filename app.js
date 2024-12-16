let btn1=document.getElementById('mybtn1')
let btn2=document.getElementById('mybtn2')
const getHexa=()=>
{
    let myHexa="0123456789abcdef"
let color="#"
  for(let i=0;i<=6;i++)
  {
    color=color+myHexa[Math.floor(Math.random()*16)];
     
  }
  console.log(color)
  return color
}
const handlebtn1 = () => {
    let rgb1 = getHexa(); // Assuming getHexa() returns a valid hex color.
    document.body.style.backgroundImage = `linear-gradient(to right, #eee, #fff)`;
  };
  
const handlebtn2=()=>{
    let rgb2=getHexa();
   }
btn1.addEventListener("click",handlebtn1);
btn2.addEventListener("click",handlebtn2);


