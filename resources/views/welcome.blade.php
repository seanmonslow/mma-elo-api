<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }

            .react-autosuggest__container {
                position: relative;
            }

            .react-autosuggest__input {
                width: 240px;
                height: 30px;
                padding: 10px 20px;
                font-family: Helvetica, sans-serif;
                font-weight: 300;
                font-size: 16px;
                border: 1px solid #aaa;
                border-radius: 4px;
            }

            .react-autosuggest__input--focused {
                outline: none;
            }

            .react-autosuggest__input--open {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }

            .react-autosuggest__suggestions-container {
                display: none;
            }

            .react-autosuggest__suggestions-container--open {
                display: block;
                position: absolute;
                top: 51px;
                width: 280px;
                border: 1px solid #aaa;
                background-color: #fff;
                font-family: Helvetica, sans-serif;
                font-weight: 300;
                font-size: 16px;
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;
                z-index: 2;
            }

            .react-autosuggest__suggestions-list {
                margin: 0;
                padding: 0;
                list-style-type: none;
            }

            .react-autosuggest__suggestion {
                cursor: pointer;
                padding: 10px 20px;
            }

            .react-autosuggest__suggestion--highlighted {
                background-color: #ddd;
            }

        </style>
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    </head>
    <body>
        <div id="app"></div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
