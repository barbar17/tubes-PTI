-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 01, 2022 at 02:02 AM
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
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
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
  `tipeakun` varchar(255) NOT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `fotourl` varchar(255) DEFAULT NULL,
  `ttd` varchar(255) DEFAULT NULL,
  `ttdurl` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pegawai`
--

INSERT INTO `pegawai` (`name`, `id`, `ttl`, `jeniskelamin`, `divisi`, `agama`, `alamat`, `telepon`, `email`, `username`, `password`, `tipeakun`, `foto`, `fotourl`, `ttd`, `ttdurl`, `createdAt`, `updatedAt`) VALUES
('akbar', '12345', 'Balam, 17-01-2001', 'Pria', 'Produksi', 'Islam', 'Jl.Pangeran Senopati Raya, Balam', '081234567890', 'akbar.12345@email.com', 'akbar2001', '$2b$10$4.eX9JV.rGVxMsbMgWclvufrvztr9FTemXpSp3Vdj9iJOHf0tv.Ja', 'user', '27245e5926ae27938d2d6ba2965c5073.jpg', 'http://localhost:5000/pegawai/foto/27245e5926ae27938d2d6ba2965c5073.jpg', NULL, NULL, '2022-10-31 22:08:01', '2022-11-01 00:51:45');

-- --------------------------------------------------------

--
-- Table structure for table `suratcuti`
--

CREATE TABLE `suratcuti` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `userid` varchar(255) NOT NULL,
  `divisi` varchar(255) NOT NULL,
  `jatahcuti` varchar(255) NOT NULL,
  `tglpengajuan` date DEFAULT NULL,
  `tglmulai` date DEFAULT NULL,
  `tglselesai` date DEFAULT NULL,
  `jeniscuti` varchar(255) NOT NULL,
  `alasan` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `komentar` text DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `fileurl` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pegawai`
--
ALTER TABLE `pegawai`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `suratcuti`
--
ALTER TABLE `suratcuti`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `suratcuti`
--
ALTER TABLE `suratcuti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
