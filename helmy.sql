-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-12-2020 a las 15:50:29
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `helmy`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivos_txt`
--

CREATE TABLE `archivos_txt` (
  `id` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `txt` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `mac` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `userId` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `archivos_txt`
--

INSERT INTO `archivos_txt` (`id`, `txt`, `mac`, `userId`) VALUES
('213205560778', '2020-12-8-10-58-14', '00:A0:50:80:9B:1F', '324873852711'),
('235392023227', '2020-10-27-11-45-19', '00:A0:50:80:9B:1F', '917681296060'),
('316712300105', '2020-12-10-11-44-52', '00:A0:50:67:93:63', '930493852878'),
('41112174862', '2020-12-9-15-10-28', '00:A0:50:67:93:63', '930493852878'),
('475374145917', '2020-12-9-15-16-44', '00:A0:50:67:93:63', '930493852878'),
('49690809694', '2020-12-10-11-28-15', '00:A0:50:67:93:63', '930493852878'),
('501494411349', '2020-12-9-9-58-28', '00:A0:50:67:93:63', '930493852878'),
('591563318602', '2020-12-9-15-10-42', '00:A0:50:67:93:63', '930493852878'),
('595433077024', '2020-12-7-20-30-26', '00:A0:50:80:9B:1F', '324873852711'),
('69419507791', '2020-12-10-11-42-46', '00:A0:50:67:93:63', '930493852878'),
('723965875062', '2020-12-10-11-26-48', '00:A0:50:67:93:63', '930493852878'),
('752263699942', '2020-12-9-15-11-10', '00:A0:50:67:93:63', '930493852878'),
('827269616580', '2020-12-9-9-56-56', '00:A0:50:67:93:63', '930493852878'),
('887315626983', '2020-12-9-15-12-57', '00:A0:50:67:93:63', '930493852878'),
('914999465428', '2020-12-10-11-29-34', '00:A0:50:67:93:63', '930493852878'),
('916395175637', '2020-10-27-16-21-41', '00:A0:50:80:9B:1F', '917681296060'),
('933106374380', '2020-12-7-20-31-8', '00:A0:50:80:9B:1F', '324873852711');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `blockchain`
--

CREATE TABLE `blockchain` (
  `id` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `bikeId` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `names` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `surnames` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `brand` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `plate` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `chassis` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `userId` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `bondId` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `blockchain`
--

INSERT INTO `blockchain` (`id`, `bikeId`, `email`, `names`, `surnames`, `brand`, `plate`, `chassis`, `userId`, `bondId`) VALUES
('89419112686', '38108996961431743450105277652082', 'javier.lc2@hotmail.com', 'JAVIER_LC2', 'CC', 'HERO', 'TYJJJJ', 'fhji', '930493852878', '9958933122587899');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clients`
--

CREATE TABLE `clients` (
  `id` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `names` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `clients`
--

INSERT INTO `clients` (`id`, `names`, `phone`, `email`) VALUES
('191130106255', 'f', 'f', 'soler@gmail.com'),
('267484492548', 'dd', 'dd', 'gg@gmail.com'),
('282730009422', 'f', 'f', 'rr@gmail.com'),
('462635911540', 'tree', '336543636', 'bolivars@gmail.com'),
('657134236537', 'dd', 'dd', 'tt@gmail.com'),
('853101688744', 'd', '4346546354', 'soler@g.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detection`
--

CREATE TABLE `detection` (
  `id` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `impact` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `alertSMS` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `alertPolice` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `alertAmbulance` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `canceled` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `txt` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `mac` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `userId` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `detection`
--

INSERT INTO `detection` (`id`, `impact`, `alertSMS`, `alertPolice`, `alertAmbulance`, `canceled`, `txt`, `mac`, `userId`) VALUES
('366691306580', '2020-10-17-23-42-53', '-1', '0', '0', '', '', '', '745247930871'),
('574702811304', '2020-11-20-15-21-13', '0', '0', '0', '', '', '', '253519644354'),
('706716222322', '2020-12-10-11-45-54', '0', '0', '0', '', '', '', '930493852878'),
('755387649105', '2020-10-22-14-15-34', '0', '0', '0', '', '', '', '157360153487'),
('860049891514', '2020-11-1-12-24-5', '-1', '0', '0', '', '', '', '917681296060'),
('86473664586', '2020-12-8-11-5-37', '-1', '0', '0', '', '', '', '324873852711');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `email_confirmation`
--

CREATE TABLE `email_confirmation` (
  `userId` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `confirmationCode` varchar(255) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `email_confirmation`
--

INSERT INTO `email_confirmation` (`userId`, `email`, `confirmationCode`) VALUES
('154212465227', 'javier.lc2@hotmail.com', '$2y$10$tgA7W7m3wSvvP3JbxPG13eDeoqMeyGBmCXI6POt5AqHxerMidx41m'),
('20872229826', 'javier.lc2@hotmail.com', '$2y$10$tgA7W7m3wSvvP3JbxPG13eDeoqMeyGBmCXI6POt5AqHxerMidx41m'),
('211604744033', 'javier.lc2@hotmail.com', '$2y$10$tgA7W7m3wSvvP3JbxPG13eDeoqMeyGBmCXI6POt5AqHxerMidx41m'),
('221597506831', 'javier.lc2@hotmail.com', '$2y$10$tgA7W7m3wSvvP3JbxPG13eDeoqMeyGBmCXI6POt5AqHxerMidx41m'),
('234427837193', 'javier.lc2@hotmail.com', '$2y$10$tgA7W7m3wSvvP3JbxPG13eDeoqMeyGBmCXI6POt5AqHxerMidx41m'),
('253519644354', 'juanoviedoperdomo@hotmail.com', '$2y$10$Zgtd8erpkK7DLAZWEFCRvue8QJv59ZIZKytCZuoN3vvKlsvKeMtyO'),
('372857747021', 'javier.lc2@hotmail.com', '$2y$10$tgA7W7m3wSvvP3JbxPG13eDeoqMeyGBmCXI6POt5AqHxerMidx41m'),
('414548216229', 'javier.lc2@hotmail.com', '$2y$10$tgA7W7m3wSvvP3JbxPG13eDeoqMeyGBmCXI6POt5AqHxerMidx41m'),
('429813458737', 'javier.lc2@hotmail.com', '$2y$10$tgA7W7m3wSvvP3JbxPG13eDeoqMeyGBmCXI6POt5AqHxerMidx41m'),
('50871271559', 'javier.lc2@hotmail.com', '$2y$10$tgA7W7m3wSvvP3JbxPG13eDeoqMeyGBmCXI6POt5AqHxerMidx41m'),
('527729233595', 'javier.lc2@hotmail.com', '$2y$10$tgA7W7m3wSvvP3JbxPG13eDeoqMeyGBmCXI6POt5AqHxerMidx41m'),
('545009321910', 'javier.lc2@hotmail.com', '$2y$10$tgA7W7m3wSvvP3JbxPG13eDeoqMeyGBmCXI6POt5AqHxerMidx41m'),
('648268503181', 'javier.lc2@hotmail.com', '$2y$10$tgA7W7m3wSvvP3JbxPG13eDeoqMeyGBmCXI6POt5AqHxerMidx41m'),
('657919778606', 'javier.lc2@hotmail.com', '$2y$10$tgA7W7m3wSvvP3JbxPG13eDeoqMeyGBmCXI6POt5AqHxerMidx41m'),
('668255153893', 'javier.lc2@hotmail.com', '$2y$10$tgA7W7m3wSvvP3JbxPG13eDeoqMeyGBmCXI6POt5AqHxerMidx41m'),
('681426372684', 'javier@ualberta.ca', '$2y$10$OCHjid5ODlsAxoVAx2ISCu0hIW3Qp/dJx89jVgyjlr7O7qXTAl.Fm'),
('738644540179', 'javier.lc2@hotmail.com', '$2y$10$tgA7W7m3wSvvP3JbxPG13eDeoqMeyGBmCXI6POt5AqHxerMidx41m'),
('825334639603', 'javier.lc2@hotmail.com', '$2y$10$tgA7W7m3wSvvP3JbxPG13eDeoqMeyGBmCXI6POt5AqHxerMidx41m'),
('831854774398', 'javierle@ualberta.ca', '$2y$10$CX5/suY/Xr/k.vFUE48gIeZRvh9fDtu5PQawcXeZVYli23tan8yDi'),
('870283355702', 'anglik2793@gmail.com', '$2y$10$UHcvFcUECApwdB.RYm7Pqeoz5C1qNEjeTzbyD8VWhGMEO804RXuI.'),
('930493852878', 'javier.lc2@hotmail.com', '$2y$10$tgA7W7m3wSvvP3JbxPG13eDeoqMeyGBmCXI6POt5AqHxerMidx41m');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `forgot_password`
--

CREATE TABLE `forgot_password` (
  `id` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `userId` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `code` varchar(255) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `helmet`
--

CREATE TABLE `helmet` (
  `id` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `brand` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `size` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `alias` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `customColor` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `intercom_mac` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `mac` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `userId` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `helmet`
--

INSERT INTO `helmet` (`id`, `brand`, `size`, `alias`, `customColor`, `intercom_mac`, `mac`, `userId`) VALUES
('161025966093', 'wyBJ2ZVLfsFSE9mD5deS2w==\n', 'Vd96dPLyoybBxuyxcLXsEA==\n', 'hc', '-16711880', '00:00:00:01:D4:74', '00:A0:50:81:74:E7', '324873852711'),
('223039343145', 'nc6lyisDzyM3o2DYG8wssQ==\n', 'j+0lz8l2kD91aBOIPoGCxw==\n', 'rojo', '-65536', '', '00:A0:50:74:F8:B2', '253519644354'),
('523745505477', 'XS3IiLALrKYTGd2yuwm9XA==\n', 'QJ7EN7E1wf3dGS0a+AzjQA==\n', 'Casco', '-16711696', '00:12:6F:04:F0:C1', '00:A0:50:05:8B:6B', '260777736150'),
('635044105426', 'F+pweFw3l/jfhhdxsQszWw==\n', '1i2w/a3crLm0cpReC7qjAw==\n', 'rojo', '-65536', '', '00:A0:50:7F:66:DB', '930493852878'),
('757752809916', 'nc6lyisDzyM3o2DYG8wssQ==\n', 'E4BfCiufK4CD3Ss7K1Dy8A==\n', 'casco1', '-16766465', '', '00:A0:50:05:8B:6B', '253519644354'),
('948418395220', 'F+pweFw3l/jfhhdxsQszWw==\n', '1i2w/a3crLm0cpReC7qjAw==\n', 'casco', '-65322', '', '00:A0:50:05:8B:6B', '930493852878'),
('986586791222', 'n', 'size', 'alias', '679349', '', '78', '930493852878');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `impact`
--

CREATE TABLE `impact` (
  `impacto` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `ang_inferior` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `ang_superior` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `impact`
--

INSERT INTO `impact` (`impacto`, `ang_inferior`, `ang_superior`) VALUES
('44', '44', '44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `motorcycle`
--

CREATE TABLE `motorcycle` (
  `id` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `alias` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `policySoat` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `noPolicyTwo` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `policyTelephoneTwo` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `brand` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `plate` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `chassis` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `threeDigitsWheelReference` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `threeDigitsBackupPowerKey` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `mac` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `codeM` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `userId` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `motorcycle`
--

INSERT INTO `motorcycle` (`id`, `alias`, `policySoat`, `noPolicyTwo`, `policyTelephoneTwo`, `brand`, `plate`, `chassis`, `threeDigitsWheelReference`, `threeDigitsBackupPowerKey`, `mac`, `codeM`, `userId`) VALUES
('381906876331', 'hm', 'K92sEaKzOR7o8mqmG1GUEw==\n', '9go4loFmEO6UkMaqb4OCyQ==\n', '9go4loFmEO6UkMaqb4OCyQ==\n', '4cdop3/46hmxvxs+Npv7GQ==\n', 'rASrfc2/Whsjo4T2aWr7eQ==\n', 'LIFu/AfIaftC3yu9ne/BXQ==\n', 'HHnHn248zaGl8lh2cdA0BQ==\n', 'kz2GcI2cF48rtk8XZY2lig==\n', '00:A0:50:80:9B:1F', '6r1EeT6hyXdmEuoHygrVtsAOxTylk6m+kUGIQMOXQAL2CjiWgWYQ7pSQxqpvg4LJ\n', '324873852711'),
('432543525323', 'P', 'N', 'M', 'F', 'Y', 'TTT888', 'DS', '1;1;1', '2;2;2', '00:A0:50:67:93:63', '884433227788', '253519644354'),
('655835112372', 'hm', 'UUOCkru4yxafq1ZwPGThrA==\n', 'HG4vS+75QDdv+hyF26jRzQ==\n', 'HG4vS+75QDdv+hyF26jRzQ==\n', 'QYynWUy4PwJSfjrhAXzoSg==\n', '3dKqrP4rVNVlr0YnpAEqeg==\n', 'WyP4n135XsXm2OfJrC6OQg==\n', 'n0OWqqlAhx95BC9c6p/Idw==\n', 'xVlyxhRc6YxDaMyC7NtunQ==\n', '00:A0:50:80:9B:1F', 'HeQCArPjns73GRtOYAQAzd73eUVEYRpMl3WqpiSgT6Ucbi9L7vlAN2/6HIXbqNHN\n', '863512126019'),
('736174853190', 'hm', 'EoEnZriI45d8Rrtpas3/2A==\n', 'HJn+2bAE1UXRDJpiYfAf/Q==\n', 'HJn+2bAE1UXRDJpiYfAf/Q==\n', 'BO0V61EtK5vwyEZQsQdj7A==\n', 'DWAO2+QP4DAR/6d5S53c1g==\n', 'GE8P3Yg/TJhDTYPmnqVNgg==\n', 'sjq9A9LgoW9yg5M4fdTORw==\n', 'qlJfQnqUTVSuWfQzGK2JOg==\n', '00:A0:50:80:9B:1F', 'p4sZ8HCR2HS8B3+Dicmf96FBZuVYZwaj97Cnpm8aA8Ecmf7ZsATVRdEMmmJh8B/9\n', '917681296060'),
('858542191609', 'moto ', 'TQWP7AB4Js1xpH814cGeJA==\n', 'fOgEWjuawx4Mtrk5Gk9oTA==\n', 'fOgEWjuawx4Mtrk5Gk9oTA==\n', 'aQ/zgM2z+8TnBj/5my6+mQ==\n', 'c2jxornQDEAMgfwBFfgQbQ==\n', 'T+Fxp+v3y6LJZNZijD58mg==\n', '8i0osA2kzdibigBsoyemKg==\n', 'JDwImYZ6IUDav/KozOAmTA==\n', '00:A0:50:67:93:63', '4I+nViFBhX8H/lh5tIb1v8wtrGHaPc7/++uKdd5OXZd86ARaO5rDHgy2uTkaT2hM\n', '930493852878');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `person_five`
--

CREATE TABLE `person_five` (
  `id` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `namesSecondEmergencyContact` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `surnamesSecondEmergencyContact` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `numberSecondEmergencyContact` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `userId` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `person_five`
--

INSERT INTO `person_five` (`id`, `namesSecondEmergencyContact`, `surnamesSecondEmergencyContact`, `numberSecondEmergencyContact`, `userId`) VALUES
('210489631217', 'YqJruatavMQXsILgV+SNLg==\n', 'ZBVnI4UWvgnB7C84fQCWpA==\n', '9BMfslQ20C33jDy1yyoOyA==\n', '253519644354'),
('889717197064', 'n5IIz9TanKaDAvVHZ59L3A==\n', 'kZ69wjsbbLjPqJJX5dgI+A==\n', 'JX2z0aYHsQHiZcGCVRO0Mg==\n', '930493852878');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `person_four`
--

CREATE TABLE `person_four` (
  `id` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `firstEmergencyContactNames` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `surnamesFirstEmergencyContact` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `firstEmergencyContactNumber` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `userId` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `person_four`
--

INSERT INTO `person_four` (`id`, `firstEmergencyContactNames`, `surnamesFirstEmergencyContact`, `firstEmergencyContactNumber`, `userId`) VALUES
('668264741135', '9op95z+D0yoUyf0y7MlOtw==\n', 'LDscquwDnFnTZevoivmEeg==\n', 'VAXkSwg4rGXEv7uh/EedjQ==\n', '917681296060'),
('681655424125', 'ltS2WGq5HxrFTG4JM6F4Ow==\n', 'dy11/nck4I4ndMTVMuRemg==\n', '+vReb9pVIDknr/B6OZm5Bg==\n', '260777736150'),
('724904617217', 'srX8fLg6vqCkwtmFx5NHTQ==\n', 'Lj1dalqBHF9xlewdvYWTbA==\n', 'F1RGfdArnRywNzrMI2IVDg==\n', '40860121828'),
('80903930315', '83o5DzbCT8H0VAlHZQWcDQ==\n', 'XjdtyTozEX4aFx8wvfjx+w==\n', 'AODyGd2RwNMfJyY0i7xTdQ==\n', '930493852878'),
('846692721528', '6q15qmG/vf8KWeDwJXVzTQ==\n', 'qKk79MySLV+Iya7skm09lA==\n', '8qm7BIKl8x0ZC/nDnWCC3Q==\n', '253519644354'),
('879633177452', 'LCc/bKgdXu3tglZKGszj4Q==\n', 'dzqQlNw8s/y8vyRbj9c4+Q==\n', '+waHwqbs3vppHvsSfTrcZA==\n', '324873852711'),
('975711523206', 'bCYV7MO8qybAbhQpSRxlpw==\n', 'P3Cl2hF3N+BNM8r5XCAURw==\n', 'Jq/wcKDFinCgic6ClAIFYg==\n', '863512126019');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `person_one`
--

CREATE TABLE `person_one` (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `nationality` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `documentType` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `documentNumber` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `colombianLicense` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `userId` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `person_one`
--

INSERT INTO `person_one` (`id`, `nationality`, `documentType`, `documentNumber`, `colombianLicense`, `userId`) VALUES
('385823886621', 'Colombia', 'Cedula', '1029325343', '1', '81120463422'),
('555340629950', 'mIvMsh30CN5V6DLTNC0nSQ==\n', 'BsdOgx38vxisXe5DKsYFfebV0ZS3WmBvM7XQETlGjTk=\n', 'mAvzBybwvTUQ14V96RylUQ==\n', 'BHZCuo+Ra9fQ2BZuuC7Kgg==\n', '930493852878'),
('674722951157', 'T0TwgZZV1/IOOjzsAQyEyw==\n', 'oxt/dtATaBHT1CCsLjk8P5kjg9N1i9W7gj3bbYjm9YQ=\n', 'SpAowFDiS/0rytSqHGI+pQ==\n', 'CECEg3fjs+Hmi01aVqquSQ==\n', '40860121828'),
('695991036674', 'z0mddjTK7mblziaq72yWLw==\n', 'ldJ2cO0Ms7M8DSkTf+JkTr+iz6Qurc1wQSDzq0bzInY=\n', 'eIdANs0WFiBP7EQ9hYCyjw==\n', 'ioeFqnSmjZhTPLVd2RbT3Q==\n', '260777736150'),
('790228435160', 'ePDQTLvghg62nfzDj7g6gw==\n', '8D5QxBqPKJVysafchADj09Qvi/J5ws8RuhKdmHl00io=\n', 'm2N2/Fkp5NTvHfQkfK9xsw==\n', 'zohESbQmt+H9kZTCsvYb2g==\n', '917681296060'),
('885295671997', 'wlXPwhX9onfGGuYtVdwf7A==\n', 'Rb4ufY42nxMiboCT/66GIxIhtqhFkf0A9TJsVT8GE7I=\n', 'GOhEIbd9DN7fUr5fc0sGPQ==\n', '+qVolV3b57GqU1lKEMz0Ig==\n', '253519644354'),
('951819882178', 'dz7CVwhZC31TiQzaJbIUZQ==\n', 'IaxOMumkjDrOZNXrUE20eDYMHWdml98QNEw4YnXA+F0=\n', 'qmOuJgTSd1douX9WPinEYw==\n', 'gvzUoRDV7QOxsgvY/YHRUw==\n', '324873852711'),
('987409853442', 'Colombia', 'cedula', '123456789', '1', '863512126019');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `person_three`
--

CREATE TABLE `person_three` (
  `id` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `sex` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `eps` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `arl` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `userId` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `person_three`
--

INSERT INTO `person_three` (`id`, `sex`, `eps`, `arl`, `phone`, `userId`) VALUES
('225406199832', 'rSqDy498v0Jcm4NCg51S2A==\n', '2Vkc/GjKTIhUhOY7R6QHzA==\n', 'x3qEczGd31wNP9l+2ksvwg==\n', 'CFq3mr0w5OCeh6nEC8LI+g==\n', '917681296060'),
('232259455653', '+qVolV3b57GqU1lKEMz0Ig==\n', 'P1C2nnPI7tIz2FlUZ/BDhg==\n', 'KPjGcDX2a/Y08GnQ8lTvVg==\n', 'yxfe/txdj4pTUmxOBHWOWw==\n', '253519644354'),
('293780004117', 'fLq9HUrMmHP0q+he5LQ89Q==\n', 'GZqaLolMITaZeC8yU0cAsw==\n', 'S0bEBIJJz5/jZ9XG+Kc6PA==\n', 'FJysSS2KkcQitae5PMpQSg==\n', '930493852878'),
('402036279573', 'gvzUoRDV7QOxsgvY/YHRUw==\n', 'qlDpNb1XSwFcDmJxAq6M3w==\n', 'Yzq4i9PiLNktu7FFt2dChw==\n', 'M7ckjeXAznnVXdx9qlvBFQ==\n', '324873852711'),
('710740980133', 'daELnecY3j0rLD6Vl5MHjQ==\n', 'F3cnzzp46XrN1vjO1UjLFA==\n', '8rv0FU5NKWhS0eXRSj6e/Q==\n', 'bg9dhrcAHpwJfiYbpV1StA==\n', '40860121828'),
('838630900562', 'VPKYFuAvD/DxW1iHYC+aHA==\n', 'i9f75Fq3DDTekd9kSwZzEw==\n', 'xY4K3eHgTT9SZoYHtzd0rA==\n', 'VI/Xk3j3YHTU0Bs95ed9/w==\n', '863512126019'),
('977129289603', 'ioeFqnSmjZhTPLVd2RbT3Q==\n', '41UUV1nSfTy/838gX8BfhA==\n', 'X+a0sErIiaJa721YsrztxQ==\n', 'MNm4GI6qOq/s8l6VPdvKjA==\n', '260777736150');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `person_two`
--

CREATE TABLE `person_two` (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `licenseNumber` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `names` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `surnames` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `age` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `rh` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `userId` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `person_two`
--

INSERT INTO `person_two` (`id`, `licenseNumber`, `names`, `surnames`, `age`, `rh`, `userId`) VALUES
('121476161952', 'CtllYxhQDqN9RhLDr3itlw==\n', '3El9bmrO4ziTJIvZLYdh1w==\n', 'XjdtyTozEX4aFx8wvfjx+w==\n', 'te52ufMUCYg2GDYdNu/0PQ==\n', 'mq7zM88CgKyigijVgUvzbQ==\n', '930493852878'),
('35678394947', 'SpAowFDiS/0rytSqHGI+pQ==\n', 'AhZQEAuXJbLX/UF9XFCsmg==\n', 'VuN8M67s9XAL10ZCTFA8zA==\n', 'qNiw5e9luPGsUvwVKHPoZQ==\n', 'KvUFXCZkttI6gMhcN408KQ==\n', '40860121828'),
('415996373327', 'GOhEIbd9DN7fUr5fc0sGPQ==\n', 'YqJruatavMQXsILgV+SNLg==\n', 'StNlI/EbEpJM5sfOz2WX+Q==\n', 'eRRvAVbCJPsUc9Lkv8cZPA==\n', 'yTkxd8amTq+vjfDEnT+Rdw==\n', '253519644354'),
('475784749783', 'DVzLd43o63eUM3KjrLxZHw==\n', 'ALX2RbBCOm/1zNZMvNd/9w==\n', 'ov+Z1mbh7909Cii00+hVZQ==\n', '41LueH5x6E6ESxzIbG/wAg==\n', 'tb6JiPHzS+msU+/imSc8fQ==\n', '917681296060'),
('59846293204', 'G5YQKMYchEX5cSrVYx/puQ==\n', 'At6wdEToaI6ctVWBjkzIfQ==\n', 'gTrpMc0V0vRLee4OyrRl8w==\n', 'TTnHvj2Tkr6XDOrMEHIRZg==\n', 'zdcPQ39Bmq61f1ZABgkxCg==\n', '863512126019'),
('949878643483', 'qmOuJgTSd1douX9WPinEYw==\n', '9loT4xWT1niHwFf+RQVzPg==\n', 'yNXak2BRkWtogq9XDOaveQ==\n', 'GoTBeP7INOzUsfy+Chn7mg==\n', 'rVFjsRXvVOC9quX4331rvw==\n', '324873852711'),
('9611789344', 'eIdANs0WFiBP7EQ9hYCyjw==\n', '53ilAjc6SGk2POd6IUjv5Q==\n', '53ilAjc6SGk2POd6IUjv5Q==\n', 'wlnW/jqhhc2ZFiBHymkcgg==\n', 'oHVH75IVlPvg0iZD+XVjag==\n', '260777736150');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `userId` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `userK` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `status` int(11) NOT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `tyc` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`userId`, `email`, `password`, `userK`, `status`, `type`, `tyc`) VALUES
('253519644354', 'juanoviedoperdomo@hotmail.com', 'Juacojuano95', '8RiBg2Lu++nJgdvEQ+XzbA==\n', 1, 'email', 1),
('260777736150', 'jf.villavisan@uniandes.edu.co', 'fabian1012', 'chWTtu4sB9sopSXpedm4NA==\n', 1, 'email', 1),
('324873852711', 'javierle@ualberta.ca', '123456', 'VRHhtvKJzpo7/930Ea4npg==\n', 1, 'email', 1),
('350651762324', 'javicastellanos666@hotmail.com', 'FACEBOOK', 'm3CIloGr/hZBIAld8AxvwQ==\n', 1, 'social', 1),
('40860121828', 'c.octoplus@gmail.com', '123456', 'ny+BBLoye+lj9Tbt5N/gzQ==\n', 1, 'email', 1),
('599689037017', 'javicastellanos666@gmail.com', 'GOOGLE', 'xmX2z7Zo6IsUZACwGMZz2Q==\n', 1, 'social', 1),
('81120463422', 'ravopo3702@yamails.net', '123456', '12345', 1, 'email', 1),
('845154970745', 'jfvillavisanb@correo.udistrital.edu.co', 'GOOGLE', 'ZJhdGg5pdt9xURrE17GrWA==\n', 1, 'social', 1),
('863512126019', 'javierle@ualberta.ca', 'GOOGLE', 'byAYJRrn0UJktBm7TqpRfg==\n', 1, 'social', 1),
('870283355702', 'anglik2793@gmail.com', 'COLOMBIA1993', 'yIzozDL66Z/vOuwOvK1F1A==\n', 0, 'email', 0),
('917681296060', 'cluzmery11@gmail.com', 'GOOGLE', 'khu8YHlSVnS/aBQ9zHdJRA==\n', 1, 'social', 1),
('930493852878', 'javier.lc2@hotmail.com', '123456', '3Ab2qQo4m0G5CkJ+dAo99Q==\n', 1, 'email', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_update`
--

CREATE TABLE `user_update` (
  `id` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `updatePassword` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `updateData` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `userId` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `user_update`
--

INSERT INTO `user_update` (`id`, `updatePassword`, `updateData`, `userId`) VALUES
('261837935031', '0', '1', '863512126019'),
('488772935085', '0', '0', '930493852878'),
('561837935032', '0', '1', '917681296060');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `archivos_txt`
--
ALTER TABLE `archivos_txt`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `blockchain`
--
ALTER TABLE `blockchain`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detection`
--
ALTER TABLE `detection`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `email_confirmation`
--
ALTER TABLE `email_confirmation`
  ADD PRIMARY KEY (`userId`);

--
-- Indices de la tabla `forgot_password`
--
ALTER TABLE `forgot_password`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `helmet`
--
ALTER TABLE `helmet`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `motorcycle`
--
ALTER TABLE `motorcycle`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `mac` (`mac`);

--
-- Indices de la tabla `person_five`
--
ALTER TABLE `person_five`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `person_four`
--
ALTER TABLE `person_four`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `person_one`
--
ALTER TABLE `person_one`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_Id` (`userId`);

--
-- Indices de la tabla `person_three`
--
ALTER TABLE `person_three`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `person_two`
--
ALTER TABLE `person_two`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `userId` (`userId`);

--
-- Indices de la tabla `user_update`
--
ALTER TABLE `user_update`
  ADD PRIMARY KEY (`id`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `helmet`
--
ALTER TABLE `helmet`
  ADD CONSTRAINT `helmet_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE;

--
-- Filtros para la tabla `motorcycle`
--
ALTER TABLE `motorcycle`
  ADD CONSTRAINT `motorcycle_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`);

--
-- Filtros para la tabla `person_five`
--
ALTER TABLE `person_five`
  ADD CONSTRAINT `person_five_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE;

--
-- Filtros para la tabla `person_four`
--
ALTER TABLE `person_four`
  ADD CONSTRAINT `person_four_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE;

--
-- Filtros para la tabla `person_one`
--
ALTER TABLE `person_one`
  ADD CONSTRAINT `person_one_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE;

--
-- Filtros para la tabla `person_three`
--
ALTER TABLE `person_three`
  ADD CONSTRAINT `person_three_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE;

--
-- Filtros para la tabla `person_two`
--
ALTER TABLE `person_two`
  ADD CONSTRAINT `person_two_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
