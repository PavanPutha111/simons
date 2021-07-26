<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Timer</title>
    <style>
        body {
            background-color: orange;
            text-align: center;
            padding: 50px;
        }
        
        .container {
            margin-top: 50px;
        }
        
        h1 {
            margin-bottom: 70px;
        }
    </style>
</head>

<body>
    <h1>VENNELA STOPWATCH</h1>
    <h3><span class="num1">00</span>:<span class="num2">00</span></h3>
    <div class="container">
        <button style="padding: 20px;" onclick="startTime()" class="btn col-md-3 btn-outline-primary start">Start</button>
        <button style="padding: 20px;" onclick="stopTimer()" class="btn col-md-3 btn-outline-light stop">Stop</button>
        <button style="padding: 20px;" onclick="rester()" class="btn col-md-3 btn-outline-dark rest">Reset</button>
    </div>
    <script>
        let start = document.querySelector('.start');
        let stop = document.querySelector('.stop');
        let rest = document.querySelector('rest');
        let sec = 0;
        let min = 1;
        let starter;
        let stopper;

        function startTime() {
            starter = setInterval(function() {
                if (sec <= 9) {
                    document.querySelector('.num2').innerHTML = "0" + sec;
                } else if (sec >= 10) {
                    document.querySelector('.num2').innerHTML = sec;
                }

                if (sec == 60) {
                    min++;
                    document.querySelector('.num1').innerHTML = "0" + min;
                } else if (sec > 60) {
                    sec = 0;
                    document.querySelector('.num2').innerHTML = sec;
                }

                sec++;

            }, 500);
        }

        function stopTimer() {
            stopper = clearInterval(starter);
        }

        function rester() {
            document.querySelector('h3').innerHTML = "00" + ":" + "00";
        }
    </script>
</body>

</html>
