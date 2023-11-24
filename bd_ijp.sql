-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2023 at 02:05 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bd_ijp`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_contato`
--

create database bd_ijp;

use bd_ijp;

CREATE TABLE `tb_contato` (
  `CId` int(11) NOT NULL,
  `CNome` varchar(100) NOT NULL,
  `CEmail` varchar(30) NOT NULL,
  `CTelefone` varchar(15) NOT NULL,
  `CCPF` varchar(20) NOT NULL,
  `CMensagem` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

select * from `tb_contato`;

-- --------------------------------------------------------

--
-- Table structure for table `tb_parceiros`
--

CREATE TABLE `tb_parceiros` (
  `PId` int(11) NOT NULL,
  `PNome` varchar(100) NOT NULL,
  `PEmail` varchar(30) NOT NULL,
  `PCNPJ` varchar(30) NOT NULL,
  `PRazaoSocial` varchar(150) NOT NULL,
  `PMensagem` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

select * from `tb_parceiros`;

--
-- Dumping data for table `tb_parceiros`
--

INSERT INTO `tb_parceiros` (`PId`, `PNome`, `PEmail`, `PCNPJ`, `PRazaoSocial`, `PMensagem`) VALUES
(1, 'Carlos Eduardo', 'carlosedbento123@gmail.com', '55.444.888/0001', 'Heartlands', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_contato`
--
ALTER TABLE `tb_contato`
  ADD PRIMARY KEY (`CId`);

--
-- Indexes for table `tb_parceiros`
--
ALTER TABLE `tb_parceiros`
  ADD PRIMARY KEY (`PId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_contato`
--
ALTER TABLE `tb_contato`
  MODIFY `CId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_parceiros`
--
ALTER TABLE `tb_parceiros`
  MODIFY `PId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
