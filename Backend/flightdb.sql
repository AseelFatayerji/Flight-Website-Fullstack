-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Mar 19, 2024 at 02:39 PM
-- Server version: 8.0.18
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flightdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `airports`
--

DROP TABLE IF EXISTS `airports`;
CREATE TABLE IF NOT EXISTS `airports` (
  `airport_id` int(11) NOT NULL AUTO_INCREMENT,
  `location` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `airport_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`airport_id`)
);



--
-- Dumping data for table `airports`
--

INSERT INTO `airports` (`airport_id`, `location`, `airport_name`) VALUES
(1, 'Adrar', 'Touat-Cheikh Sidi Mohamed Belk'),
(2, 'Algiers', 'Houari Boumediene Airport'),
(3, 'Cairo', 'Cairo International Airport'),
(4, 'Cairo', 'Sphinx International Airportt'),
(5, 'Tripoli', 'Tripoli International Airport'),
(6, 'Tajoura', 'Mitiga International Airport'),
(7, 'Niamey', 'Diori Hamani International Air'),
(8, 'Willemstad', 'Curaçao International Airport'),
(9, 'Roseau', 'Douglas–Charles Airport'),
(10, 'Brades', 'John A. Osborne Airport'),
(11, 'Toronto (Mississauga)', 'Toronto Pearson International '),
(12, 'Mexico City', 'Mexico City International Airp'),
(13, 'Chicago', 'Midway International Airport');


-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
CREATE TABLE IF NOT EXISTS `bookings` (
  `booking_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `flight_id` int(11) NOT NULL,
  `payment` bit(1) NOT NULL,
  PRIMARY KEY (`booking_id`),

  FOREIGN KEY (`user_id`) REFERENCES  users(`user_id`),
  FOREIGN KEY (`flight_id`) REFERENCES  flights(`flight_id`)
);

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`booking_id`, `user_id`, `flight_id`, `payment`) VALUES
(1, 1, 1, b'1');


-- --------------------------------------------------------

--
-- Table structure for table `flights`
--

DROP TABLE IF EXISTS `flights`;
CREATE TABLE IF NOT EXISTS `flights` (
  `flight_id` int(11) NOT NULL AUTO_INCREMENT,
  `flight_destination` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `airport_id` int(11) NOT NULL,
  `plane_id` int(11) NOT NULL,
  `departure_date` date NOT NULL,
  `return_date` date NOT NULL,
  `price` int(4) NOT NULL,
  `nb_passengers` int(11) NOT NULL,
  `img` text NOT NULL,
  PRIMARY KEY (`flight_id`),

  FOREIGN KEY (`plane_id`) REFERENCES   planes(`plane_id`),
  FOREIGN KEY (`airport_id`) REFERENCES airports(`airport_id`)
);

--
-- Dumping data for table `flights`
--

INSERT INTO `flights` (`flight_id`, `flight_destination`, `airport_id`, `plane_id`, `departure_date`, `return_date`, `price`, `nb_passengers`, `img`) VALUES
(1, 'Chicago', 13, 2, '2024-03-22', '2024-03-28', 200, 350, 'https://images.pexels.com/photos/1823681/pexels-photo-1823681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');


-- --------------------------------------------------------

--
-- Table structure for table `planes`
--

DROP TABLE IF EXISTS `planes`;
CREATE TABLE IF NOT EXISTS `planes` (
  `plane_id` int(11) NOT NULL AUTO_INCREMENT,
  `plane_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `max_capacity` int(3) NOT NULL DEFAULT '300',
  PRIMARY KEY (`plane_id`)
);


--
-- Dumping data for table `planes`
--

INSERT INTO `planes` (`plane_id`, `plane_name`, `max_capacity`) VALUES
(1, 'Airbus A350-900 ', 350),
(2, 'Boeing 747-400', 660),
(3, 'Airbus A340-500', 325),
(4, 'Airbus A340-300', 267),
(5, 'Airbus A330-300', 440),
(6, 'Boeing 777-200', 440),
(7, 'Airbus A340-600', 475),
(8, 'Boeing 777-300', 550),
(9, 'Boeing 747-8', 467),
(10, 'Airbus A380-800', 853);


-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
CREATE TABLE IF NOT EXISTS `reviews` (
  `review_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `flight_id` int(11) NOT NULL,
  `rating` int(1) NOT NULL,
  `review_text` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `aproved` bit(1) DEFAULT NULL,
  PRIMARY KEY (`review_id`),

  FOREIGN KEY (`user_id`) REFERENCES users(`user_id`),
  FOREIGN KEY (`flight_id`) REFERENCES flights(`flight_id`)
);


-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`user_id`)
);

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_email`, `user_password`) VALUES
(1, 'Aseel', 'aseel@gmail.com', '$2y$10$hbsdPb8.SPKzOanLPyCXMuarIxXdJObi1E8Qs5dY4poxr5nw4Xt0O');

-- --------------------------------------------------------

--
-- Table structure for table `wallets`
--

DROP TABLE IF EXISTS `wallets`;
CREATE TABLE IF NOT EXISTS `wallets` (
  `wallet_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `balance` int(5) NOT NULL,
  PRIMARY KEY (`wallet_id`),

  FOREIGN KEY (`user_id`) REFERENCES users(`user_id`)
);


DROP TABLE IF EXISTS `coins`;
CREATE TABLE IF NOT EXISTS `coins` (
  `coins_id` int(11) NOT NULL AUTO_INCREMENT,
  `wallet_id` int(11) NOT NULL,
  `amount` int(5) NOT NULL,
  PRIMARY KEY (`coins_id`),
  FOREIGN KEY (`wallet_id`) REFERENCES wallets(`wallet_id`)
);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
