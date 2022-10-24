-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 24, 2022 at 05:11 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecuti`
--

-- --------------------------------------------------------

--
-- Table structure for table `pegawai`
--

CREATE TABLE `pegawai` (
  `name` varchar(255) NOT NULL,
  `id` varchar(255) NOT NULL,
  `ttl` varchar(255) NOT NULL,
  `jeniskelamin` varchar(255) NOT NULL,
  `divisi` varchar(255) NOT NULL,
  `agama` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `telepon` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pegawai`
--

INSERT INTO `pegawai` (`name`, `id`, `ttl`, `jeniskelamin`, `divisi`, `agama`, `alamat`, `telepon`, `email`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
('akbar', '12345', 'balam, 19-12-1919', 'pria', 'produksi', 'islam', 'jl.antasati no.44, bandar lampung', '0987654321', 'jhondoe@email.com', 'akbarbarbar', '$2b$10$TXo3ofEBHrSEcpiHpq1ThOcbxUyThDUiyb0D9GP.WwUegkrbhGgzC', '2022-10-24 14:48:37', '2022-10-24 14:48:37'),
('jhon doe', '54321', 'balam, 19-12-1919', 'pria', 'produksi', 'islam', 'jl.antasati no.44, bandar lampung', '0987654321', 'jhondoe@email.com', 'jhondoe54321', '$2b$10$KfGqL2HJABMk7GNlDi3q8OJkCq0KsKsgd5YzHXTs8MO8OduBj6.QW', '2022-10-24 14:46:33', '2022-10-24 14:46:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pegawai`
--
ALTER TABLE `pegawai`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
