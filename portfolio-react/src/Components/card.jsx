<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Profile card || Saumya</title>
    <style>
    

        .card {
            margin: 0px auto;
            height: 400px;
            width: 350px;
            border: 2px solid black;
            background-color: black;
            border-radius: 20px;
            box-shadow: 0px 0px 18px 10px white
        }

        .up {
            display: flex;
            justify-content: center;
            background-color: rgb(102, 187, 239);
            border-radius: 20px;


        }


        img {
            border-radius: 50%;
            margin-top: 10px;
            margin-bottom: 10px;
            border:2px solid black ;
            box-shadow: 0px 0px 10px 10px white
        }
        h1{
            color: white;
            font-size: 30px;
            font-weight: bolder;
            text-align: center;
        }

        body {
            background-image: url("background.jpeg");
            background-repeat: no-repeat;
            background-size: cover;
        
        }

        h2{
            color: white;
            text-align: center;
            
        }
        p{
            color: aliceblue;
            
            text-align: center;
            
        }
        .bottom{
            text-align: center;
            font-size: 20px;
            
        }

    </style>
</head>

<body>

        <section>
            <div id="top">
                <h1>Portfolio card</h1>

            </div>
        
                <div class="card">
                    <div class="up">

                        <img src="perfect img.jpeg" height="150px" width="150px">
                    </div>
                    <div class="body">
                        <h2><b>Saumya Srivastava</b></h2>
                        <p>Software Engineer</p>
                        <p>Passionate developer ,by exploring<br> more problem solving in building <br>scalable software . </p>
                    </div>
                    <div class="bottom">
                      <a href="#">  <i class="fa-brands fa-instagram"style="color:white;margin-left:20px;"></i></a>
                      <a href="#">   <i class="fa-brands fa-linkedin"style="color:white;margin-left:20px;"></i></a>
                        <a href="#">   <i class="fa-brands fa-github"style="color:white;margin-left:20px;"></i></a>

                    </div>
                </div>
               


        </section>
    
</body>

</html>