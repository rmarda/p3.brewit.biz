<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Movie Monkey</title>

        <!-- style sheet and jquery includes -->
        <link rel="stylesheet" href="css/main.css" type="text/css">
        <link href="http://fonts.googleapis.com/css?family=Dancing+Script" rel="stylesheet" type="text/css">
        <link href="http://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet" type="text/css">

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
            <a href="index.php"><img id ='logo' src='images/movie_monkey.jpg' alt='movie_monkey_logo' width='125' height='125'/></a>
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
            <article id="home_page_text">

                <h2>Welcome user!</h2>
                <p>
                    This website has been prepared as a course work for <a href="http://www.extension.harvard.edu/courses/dynamic-web-applications">CSCI E-15 Dynamic Web Applications (Fall 2013)</a><br>
                </p>
                <p>
                    You can navigate through the website using any of the menu items in the menu bar:<br>
                    <strong class = "menu_item">Home:</strong> Will bring you right here!<br>
                    <strong class = "menu_item">Searh Movie:</strong> You can lookup movie names using a keyword in the search box.<br>
                    <strong class = "menu_item">Now Playing:</strong> Lists movies currently playing in theaters.<br>
                    <strong class = "menu_item">Upcoming:</strong> Lists movies that are releasing soon.<br>
                </p>

                <p>
                    The information displayed is being fetched from a third-party site: <a href="http://www.themoviedb.org/">The Movie Database.</a><br>
                    <strong class="limitations">Limitations/Disclaimers:</strong>
                    Movie Database enforces the following rules on the search limit:<br>
                    30 requests every 10 seconds per IP. Maximum 20 simultaneous connections.<br>
                    For more information, please visit their website <a href="http://docs.themoviedb.apiary.io/">here.</a>
                </p>
             </article>
        </section>
        <footer>
            <p>Movie API from <a href="https://www.themoviedb.org/"> MovieDB.</a> Logo taken from <a href="http://www.logoinstant.com/"> LogoInstant</a></p>
        </footer>
    </div> <!-- end wrapper -->
    <script src="js/fetchDataFromExternal.js"></script>
    <script src="js/search.js"></script>
    </body>
</html>