<?php
    $hostname="localhost";
    $user="root";
    $password="";
    $db="la_guerra";

    $con = mysqli_connect($hostname, $user, $password);
    if(!$con) die ("No se pudo realizar la conexión." . mysqli_error($con));

    $db_con = mysqli_select_db($con, $db);
    if(!$db_con) {
        mysqli_real_query($con, "CREATE DATABASE $db");
        $db_con = mysqli_select_db($con, $db);

        $result = mysqli_real_query($con, "CREATE TABLE game_user (

            player_id INT(12) NOT NULL AUTO_INCREMENT,
            nombre VARCHAR(28) NOT NULL,
            apellido VARCHAR(28) NOT NULL,
            alias VARCHAR(16) NOT NULL,
            mail VARCHAR(32) NOT NULL,
            pass VARCHAR(16) NOT NULL,
            nombre_cuenta VARCHAR(16) NOT NULL,
            avatar VARCHAR(16) NOT NULL,
            win INT(12) NOT NULL,
            lose INT(12) NOT NULL,
            fecha_nacimiento DATE NOT NULL,
            sexo ENUM('hombre', 'mujer') NOT NULL,
            PRIMARY KEY (player_id)
        );");
        if(!$result) echo "No se han podido crear las tablas, error." . mysqli_error($result);
        $result = mysqli_real_query($con, "CREATE TABLE game_stat(
            game_id INT(12) NOT NULL AUTO_INCREMENT,
            ganador_id INT(12) NOT NULL,
            perdedor_id INT(12) NOT NULL,
            tiempo_total TIMESTAMP NOT NULL,
            fecha_juego DATETIME NOT NULL,
            revanchas_p1 INT(4) NOT NULL,
            revanchas_p2 INT(4) NOT NULL,
            tiempo_p1 TIMESTAMP NOT NULL,
            tiempo_p2 TIMESTAMP NOT NULL,
            PRIMARY KEY (game_id)
        );");
        if(!$result) echo "No se han podido crear las tablas, error." . mysqli_error($result);
    }

    //ACA COMIENZA LA DIVERSIÓN!!!!
?>
