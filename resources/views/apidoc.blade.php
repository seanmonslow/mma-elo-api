<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>MMA ELO API</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ asset('css/common.css') }}">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    </head>
    <body>
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
                <a class="navbar-brand" href="/">MMA ELO</a>
            </nav>
            <div class="jumbotron">
                <div class="row">
                <h1 class="display-5">API Docs</h1>
                </div>
               <div class="row">
                <h3 class="display-5">Search For fighters</h3>
               </div>
               <div class="row">
                <p>URL: http://www.mmaelo.com/api/fighterSearch/gracie?api_key={apikey}</p>
               </div>
               <div class="row">
                <p>Result: </p>
               </div>
               <div class="row">
               <div style="background-color: white; width: 100%">[<br>
                    {
                    name: "Steven Smith",
                    wins: 1,
                    losses: 0,
                    draws: 0,
                    current_elo: null,
                    lowest_elo: null,
                    highest_elo: null,
                    id: 13127,
                    height: "",
                    weight: "",
                    birthdate: null
                    },<br>
                    {
                    name: "Steven Smith",
                    wins: 1,
                    losses: 0,
                    draws: 0,
                    current_elo: null,
                    lowest_elo: null,
                    highest_elo: null,
                    id: 112375,
                    height: "",
                    weight: "318 lbs",
                    birthdate: null
                    }<br>
                ]
                </div>
               </div>
               <br>
               <div class="row">
                <h3 class="display-5">Get Fighter's Info</h3>
               </div>
               <div class="row">
                <p>URL: http://www.mmaelo.com/api/13127/info?api_key={apikey}</p>
               </div>
               <div class="row">
                <p>Result: </p>
               </div>
               <div class="row">
               <div style="background-color: white; width: 100%">
               {
                    name: "Steven Smith",
                    wins: 1,
                    losses: 0,
                    draws: 0,
                    current_elo: null,
                    lowest_elo: null,
                    highest_elo: null,
                    id: 13127,
                    height: "",
                    weight: "",
                    birthdate: null
                }
                </div>
                </div>
                <br>
                <div class="row">
                <h3 class="display-5">Get Fighter's Fights</h3>
               </div>
               <div class="row">
                <p>URL: http://www.mmaelo.com/api/13127/fights?api_key={apikey}</p>
               </div>
               <div class="row">
                <p>Result: </p>
               </div>
               <div class="row" style="background-color: white; width: 100%; max-height: 100px; overflow-y:scroll;">
               [<br>
{
id: 80142,
fighter1id: 13127,
fighter2id: 74150,
event_date: "2011-03-13 12:00:00",
event: "BOTB - Battle of the Brawlers 3",
result: "loss",
result_how: "TKO (Submission to Punches)",
fighter1eloafter: "1223",
fighter2eloafter: "1240",
otherFighter1: {
name: "Steven Smith",
wins: 1,
losses: 0,
draws: 0,
current_elo: null,
lowest_elo: null,
highest_elo: null,
id: 13127,
height: "",
weight: "",
birthdate: null
},
otherFighter2: {
name: "Marcus Farmer",
wins: 0,
losses: 0,
draws: 0,
current_elo: null,
lowest_elo: null,
highest_elo: null,
id: 74150,
height: "",
weight: "",
birthdate: null
}
},
{
id: 80143,
fighter1id: 13127,
fighter2id: 74150,
event_date: "2010-11-28 12:00:00",
event: "BOTB - Battle of the Brawlers 2",
result: "win",
result_how: "Submission (Rear-Naked Choke)",
fighter1eloafter: "1316",
fighter2eloafter: "1148",
otherFighter1: {
name: "Steven Smith",
wins: 1,
losses: 0,
draws: 0,
current_elo: null,
lowest_elo: null,
highest_elo: null,
id: 13127,
height: "",
weight: "",
birthdate: null
},
otherFighter2: {
name: "Marcus Farmer",
wins: 0,
losses: 0,
draws: 0,
current_elo: null,
lowest_elo: null,
highest_elo: null,
id: 74150,
height: "",
weight: "",
birthdate: null
}
},
{
id: 80141,
fighter1id: 13127,
fighter2id: 13130,
event_date: "2005-06-04 12:00:00",
event: "WW - Warriors Way",
result: "win",
result_how: "KO",
fighter1eloafter: "1264",
fighter2eloafter: "1136",
otherFighter1: {
name: "Steven Smith",
wins: 1,
losses: 0,
draws: 0,
current_elo: null,
lowest_elo: null,
highest_elo: null,
id: 13127,
height: "",
weight: "",
birthdate: null
},
otherFighter2: {
name: "Dale Morris",
wins: 0,
losses: 1,
draws: 0,
current_elo: null,
lowest_elo: null,
highest_elo: null,
id: 13130,
height: "",
weight: "",
birthdate: null
}
}
]
               </div>
            </div>
        </div>
        @include('footer')
    </body>
</html>
