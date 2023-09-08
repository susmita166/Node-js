-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 08, 2023 at 02:50 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bntyy`
--

-- --------------------------------------------------------

--
-- Table structure for table `t_tblpersonaldetails`
--

CREATE TABLE `t_tblpersonaldetails` (
  `id` int(11) NOT NULL,
  `RegistrationNo` varchar(45) DEFAULT NULL,
  `Name` varchar(60) DEFAULT NULL,
  `Father_Name` varchar(45) DEFAULT NULL,
  `Gender` varchar(255) DEFAULT NULL,
  `DOB` varchar(255) DEFAULT NULL,
  `DOB_In_Year` int(11) DEFAULT NULL,
  `Blood_Group` varchar(11) DEFAULT NULL,
  `Aadhar_No` varchar(45) DEFAULT NULL,
  `Photo` varchar(500) DEFAULT NULL,
  `Mobile_No` varchar(45) DEFAULT NULL,
  `Email_Id` varchar(45) DEFAULT NULL,
  `IsDeleted` tinyint(4) NOT NULL DEFAULT 0,
  `Action` varchar(45) DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `t_tblpersonaldetails`
--
ALTER TABLE `t_tblpersonaldetails`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `t_tblpersonaldetails`
--
ALTER TABLE `t_tblpersonaldetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
