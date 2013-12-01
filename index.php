<!DOCTYPE html>
<html>
    <head>
        <title>Movie Monkey</title>

        <link rel="stylesheet" href="css/main.css" type="text/css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>

    </head>
    <body>
    <div id='wrapper'>
        <header>
            <h1 id='pageTitle'>Movie Monkey</h1>
        </header>
        <nav class='menu'>
            <ul>
                <li><a href ="index.php" id="search">Search Movie</a></li>
                <li><a href ="now.php" id="now">Now Playing</a></li>
                <li><a href ="upcoming.php" id="upcoming">Upcoming</a></li>
            </ul>
        </nav>
        <section id='feature_area'>
            <article id='search'>
                <div class='inner'>
                    <h1>Search a movie</h1>
                    <input id='movie' type='text' />
                    <button>Search</button>
                </div> <!-- end inner div -->
            </article> <!-- end search article -->
            <article id='searchResult'>
                <div class='inner'>

                </div>
            </article>
        </section>
        <footer>
            <p>Movie API from <a href="https://www.themoviedb.org/"> MovieDB</a></p>
        </footer>
    </div> <!-- end wrapper -->
    <script src="js/searchMovie.js"></script>
    </body>
</html>