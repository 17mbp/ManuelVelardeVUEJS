# Proyecto MVT 
BASE DE DATOS cuando se creo por SQUELIZER Y MANUALmente para el LOGIN de usuarios
-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 23-12-2024 a las 23:18:09
-- Versión del servidor: 8.3.0
-- Versión de PHP: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `manuelvelarde`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direcciones`
--

DROP TABLE IF EXISTS `direcciones`;
CREATE TABLE IF NOT EXISTS `direcciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `apellidopaterno` varchar(255) NOT NULL,
  `apellidomaterno` varchar(255) NOT NULL,
  `domicilio` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `direcciones`
--

INSERT INTO `direcciones` (`id`, `nombre`, `apellidopaterno`, `apellidomaterno`, `domicilio`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'Manuel ', 'Velarde ', 'Torres', 'cerezo #565', 'mvt@mail.com', '2024-12-23 19:37:55', '2024-12-23 19:37:55'),
(4, 'Lucero', 'Torres', 'Velarde', 'ROSA #112 INT 3 BALCONES DE LA CANTERA', 'lucy@music.net', '2024-12-23 20:43:37', '2024-12-23 22:24:24'),
(11, 'CARMEN', 'MEDRANO', 'ARELLANO', 'CEREZO # 38', 'DCARMEN@ROCK.NET', '2024-12-23 21:59:55', '2024-12-23 22:06:40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `correo_electronico` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `correo_electronico` (`correo_electronico`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `correo_electronico`, `contrasena`, `createdAt`, `updatedAt`) VALUES
(1, 'manuel-dev@outlook.com', '654321', '2024-12-23 21:17:49', '2024-12-23 21:17:49');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

##############
0)cree en phpmyadmin mysql la base de datos
ManuelVelarde

1)iniciar Proyecto vuejs
npm init -y
2)
npm install sequelize mysql2
3)
npm install -g nodemon
npm install --save-dev nodemon


4) crear la tabla paso definicion
npx sequelize-cli model:generate --name Direcciones --attributes nombre:string,email:string,direccion:string,apellidomaterno:string,apellidopaterno:string
npx sequelize-cli db:migrate

5)instalar axios para ajax
npm install axios

6)agregar el enroutador
npm install vue-router@4

INCIAR FRONTEND      puerto default
npm run dev

INICIAR BACKEND
npm run serve
