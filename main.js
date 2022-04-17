function startClassification(){

    navigator.mediaDevices.getUserMedia({audio:true, video:false });

    classifier =ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XZF2u8v8_/', modelReady);

    }

 

    function modelReady(){

        classifier.classify(gotResults);

    }
var dog=0;
var cat=0;
 

    function gotResults(error,results){

        if(error){

            console.error(error);

        }

        else{

            console.log(results);

            random_number_r=Math.floor(Math.random()*255)+1;

            random_number_g=Math.floor(Math.random()*255)+1;

            random_number_b=Math.floor(Math.random()*255)+1;

 

            document.getElementById("result_label").innerHTML="Detected voce is of: " +results[0].label;

            document.getElementById("result_confidence").innerHTML="Detected dog : " +dog+"detected cat: "+cat;  
            
            document.getElementById("result_label").style.color="rgb("+random_number_r+" , "+random_number_g+" , "+random_number_b+")";

            document.getElementById("result_confidence").style.color="rgb("+random_number_r+" , "+random_number_g+" , "+random_number_b+")";

 

            var img1=document.getElementById("image_1");

           

 

                     

               if(results[0].label=="Barking"){

                img1.src='dog.jpeg';


               

            }

            else if(results[0].label=="Meowing"){

                               img1.src='cat.png';

               

            }
else{
    img1.src='ear.png';
}
           

        }

}