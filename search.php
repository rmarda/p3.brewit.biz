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
    <section id='search_section'>
        <article id='search_article'>
            <div>
                <input type="text" id='movie_input' class="search" placeholder="lookup a movie..." maxlength="30" size='40'>
                <input type="button" id='movie_search_btn' value="Search">
            </div>
        </article>
    </section>
    <section class='page_number_info'>
    </section>
    <section id='feature_area'>
    </section>
    <section class='page_number_info'>
    </section>
    <footer>
        <p>Movie API from <a href="https://www.themoviedb.org/"> MovieDB.</a> Logo taken from <a href="http://www.logoinstant.com/"> LogoInstant</a></p>
    </footer>
</div> <!-- end wrapper -->
<script src="js/fetchDataFromExternal.js"></script>
<script src="js/search.js"></script>
</body>
</html>