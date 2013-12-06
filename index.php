<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Movie Monkey</title>

        <!-- style sheet and jquery includes -->
        <link rel="stylesheet" href="css/main.css" type="text/css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
    </head>

    <body>
    <div id='wrapper'>
        <section>
            <div id='top'>
                <a href="#top" title="Scroll back to the top">Back to the top</a>
            </div>
        </section>
        <header>
            <a href='index.php'><img id ='logo' src='images/movie_monkey.jpg' alt='movie_monkey_logo' width='125' height='125'/></a>
            <h1 id='page_title'>Movie Monkey</h1>
        </header>
        <nav class='menu'>
            <ul>
                <li><a href ="index.php">Home</a></li>
                <li><a href ="search.php">Search Movie</a></li>
                <li><a href ="now.php">Now Playing</a></li>
                <li><a href ="upcoming.php">Upcoming</a></li>
            </ul>
        </nav>
        <section id='feature_area'>
            <p>
                Welcome user!
                This website was prepared as a course work for <a href="http://www.extension.harvard.edu/courses/dynamic-web-applications">CSCI E-15 Dynamic Web Applications (Fall 2013)</a><br><br>
            </p>
            <p>
                You can navigate through the website using any of the menu items listed above. <br>
                <strong>Home:</strong> Will bring you right here!<br>
                <strong>Searh:</strong> You can lookup movie names using a keyword in the search box.<br>
                <strong>Now Playing:</strong> Lists movies currently playing in theaters.<br>
                <strong>Searh:</strong> Lists movies that are releasing soon.<br><br>
            </p>

            <p>
                The information displayed is being fetched by a third-party site: <a href="http://www.themoviedb.org/">The Movie Database.</a><br>
            </p>
            <p>
                <strong>Limitations/Disclaimers:</strong>
                Movie Database website enforces the following rules on the number of searches that can be made on their website:<br>
                <strong>Request Rate Limiting</strong>
                "We do enforce a small amount of rate limiting. Please be aware that should you exceed these limits, you will receive a 503 error.
                30 requests every 10 seconds per IP. Maximum 20 simultaneous connections".
                For more information, please visit <a href="http://docs.themoviedb.apiary.io/">here:</a>
            </p>
        </section>
        <footer>
            <p>Movie API from <a href="https://www.themoviedb.org/"> MovieDB.</a> Logo taken from <a href="http://www.logoinstant.com/"> LogoInstant</a></p>
        </footer>
    </div> <!-- end wrapper -->
    <script src="js/fetchDataFromExternal.js"></script>
    <script src="js/search.js"></script>
    </body>
</html>