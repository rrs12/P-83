

var last_position_of_x, last_position_of_y;
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    color = "black";
    width_of_line = 2;
    width=screen.width;
    height=screen.height;
    new_width=screen.width-70;
    new_height=screen.height-300;

    canvas.addEventListener("touchstart", my_start);
    function my_start(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("line_width").value;
       last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
         last_position_of_x = e.touches[0].clientY - canvas.offsetTop;
        //Addictonal Activity ends
    }

    if(width<992){
        document.getElementById("myCanvas").width =new_width;
        document.getElementById("myCanvas").height =new_height;
        document.body.style.overflow="hidden";
        }


    canvas.addEventListener("touchmove", touch_move);
    
    function touch_move(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0] .clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

    function cleararea(){
        ctx.clearRect(0,0,canvas.width,canvas.height)
    }




    canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
mouseEvent="Empty";
color="black";
line_width=1;


canvas.addEventListener("mousedown",my_md);

function my_md(e){
    color=document.getElementById("color").value;
    line_width=document.getElementById("line_width").value;
console.log(line_width);
    mouseEvent="mouseDown";
} 

canvas.addEventListener("mouseleave",my_ml)

function my_ml(e){
    mouseEvent="mouseleave";
} 

canvas.addEventListener("mouseup",my_mu)

function my_mu(e){
    mouseEvent="mouseUP";
} 

canvas.addEventListener("mousemove",my_move)

function my_move(e){
    console.log("Inside Mose Move")
 current_position_x=e.clientX- canvas.offsetLeft;
 current_position_y=e.clientY- canvas.offsetTop;

 if(mouseEvent=="mouseDown"){
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=line_width;

     ctx.moveTo(last_position_x, last_position_y)
 ctx.lineTo(current_position_x,current_position_y);
 ctx.stroke()
 }

 last_position_y=current_position_y;
 last_position_x=current_position_x;
 
} 

function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
