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
            <div class="jumbotron" style="text-align: center;">
                @if (!isset($apikey))
                <h1 class="display-4">Sign up to the API</h1>
                <form action="/api" method="post">
                @csrf
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" name="email" placeholder="Enter email" style="width: 50%; margin-left:25%;">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                @else
                <h1 class="display-4">You have now signed up</h1>
                <p class="lead">API key: {{{ $apikey }}}</p>
                <hr class="my-4">
                <p>Example of use: https://www.mmaelo.com/api/fighterSearch/gracie?api_key={yourapikey}</p>
                @endif
            </div>
        </div>
        @include('footer')
    </body>
</html>
