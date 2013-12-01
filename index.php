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
        <header>
            <h1 id='page_title'>Movie Monkey</h1>
        </header>
        <nav class='menu'>
            <ul>
                <li><a href ="index.php">Search Movie</a></li>
                <li><a href ="now.php">Now Playing</a></li>
                <li><a href ="upcoming.php">Upcoming</a></li>
            </ul>
        </nav>
        <section id='feature_area'>
            <article id='search_movie'>
                <div class='inner'>
                    <h1>Search movie</h1>
                    <input id='movie_input' type='text'/>
                    <button>Search</button>
                </div>
            </article>
            <article id='search_results'>
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