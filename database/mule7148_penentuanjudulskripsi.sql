-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 20, 2019 at 01:33 AM
-- Server version: 10.0.38-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mule7148_penentuanjudulskripsi`
--

-- --------------------------------------------------------

--
-- Table structure for table `alternatif`
--

CREATE TABLE `alternatif` (
  `id_alternatif` int(11) NOT NULL,
  `nama_alternatif` varchar(255) NOT NULL,
  `hasil_alternatif` double NOT NULL,
  `nim` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `alternatif`
--

INSERT INTO `alternatif` (`id_alternatif`, `nama_alternatif`, `hasil_alternatif`, `nim`) VALUES
(46, 'RANCANG BANGUN SISTEM INFORMASI PENGELOLAAN PANTI ASUHAN BERBASIS GEOGRAFIS', 84.777777777778, '201213014'),
(47, 'SISTEM PEMESANAN MENU BERBASIS WEB MEMANFAATKAN MIKROTIK API (STUDI KASUS: MIAW SHAKE CAT CAFE)', 78.4166666666669, '201213014'),
(48, 'APLIKASI FUZZY INFERENCE SYSTEM METODE MAMDANI UNTUK PEMILIHAN JURUSAN DI PERGURUAN TINGGI', 87.7777777777778, '201213014'),
(49, 'SISTEM INFORMASI MANAJEMEN PENYEWAAN MOBIL PADA KIKI RENTAL CAR GROUP PEKANBARU', 91.4444444444449, '201213014');

-- --------------------------------------------------------

--
-- Table structure for table `kriteria`
--

CREATE TABLE `kriteria` (
  `id_kriteria` int(11) NOT NULL,
  `nama_kriteria` varchar(255) NOT NULL,
  `tipe_kriteria` varchar(10) NOT NULL,
  `bobot_kriteria` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kriteria`
--

INSERT INTO `kriteria` (`id_kriteria`, `nama_kriteria`, `tipe_kriteria`, `bobot_kriteria`) VALUES
(10, 'Tingkat Kesulitan', 'cost', 25),
(11, 'Jenis Skripsi', 'benefit', 20),
(12, 'Referensi', 'benefit', 15),
(13, 'Penggunaan Judul', 'benefit', 10),
(14, 'Bidang Kemampuan', 'benefit', 30);

-- --------------------------------------------------------

--
-- Table structure for table `nilai`
--

CREATE TABLE `nilai` (
  `id_nilai` int(6) NOT NULL,
  `ket_nilai` varchar(45) NOT NULL,
  `jum_nilai` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nilai`
--

INSERT INTO `nilai` (`id_nilai`, `ket_nilai`, `jum_nilai`) VALUES
(48, 'Sangat Sulit', 10),
(49, 'Sulit', 9),
(50, 'Sedang', 8),
(51, 'Biasa', 7),
(52, 'Mudah', 6);

-- --------------------------------------------------------

--
-- Table structure for table `pengguna`
--

CREATE TABLE `pengguna` (
  `id_pengguna` int(11) NOT NULL,
  `nama_lengkap` varchar(255) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `level` varchar(100) NOT NULL,
  `nim` varchar(50) DEFAULT NULL,
  `semester` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pengguna`
--

INSERT INTO `pengguna` (`id_pengguna`, `nama_lengkap`, `username`, `password`, `level`, `nim`, `semester`) VALUES
(1, 'Admin', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin', 'admin', NULL),
(2, 'Raden Teguh Hamdani', 'teguh', '5787be38ee03a9ae5360f54d9026465f', 'mahasiswa', '201213014', '7'),
(3, 'Mashum Abdul Jabbar', 'jabbar', '5787be38ee03a9ae5360f54d9026465f', 'mahasiswa', '201213015', '8');

-- --------------------------------------------------------

--
-- Table structure for table `rangking`
--

CREATE TABLE `rangking` (
  `id_alternatif` int(11) NOT NULL,
  `id_kriteria` int(11) NOT NULL,
  `nilai_rangking` double NOT NULL,
  `nilai_normalisasi` double NOT NULL,
  `bobot_normalisasi` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rangking`
--

INSERT INTO `rangking` (`id_alternatif`, `id_kriteria`, `nilai_rangking`, `nilai_normalisasi`, `bobot_normalisasi`) VALUES
(46, 10, 10, 0.6, 15),
(46, 11, 8, 0.88888888888889, 17.777777777778),
(46, 12, 8, 0.8, 12),
(46, 13, 9, 1, 10),
(46, 14, 8, 1, 30),
(47, 10, 8, 0.75, 18.75),
(47, 11, 8, 0.88888888888889, 17.777777777778),
(47, 12, 7, 0.7, 10.5),
(47, 13, 8, 0.88888888888889, 8.8888888888889),
(47, 14, 6, 0.75, 22.5),
(48, 10, 10, 0.6, 15),
(48, 11, 9, 1, 20),
(48, 12, 10, 1, 15),
(48, 13, 7, 0.77777777777778, 7.7777777777778),
(48, 14, 8, 1, 30),
(49, 10, 6, 1, 25),
(49, 11, 7, 0.77777777777778, 15.555555555556),
(49, 12, 8, 0.8, 12),
(49, 13, 8, 0.88888888888889, 8.8888888888889),
(49, 14, 8, 1, 30);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alternatif`
--
ALTER TABLE `alternatif`
  ADD PRIMARY KEY (`id_alternatif`);

--
-- Indexes for table `kriteria`
--
ALTER TABLE `kriteria`
  ADD PRIMARY KEY (`id_kriteria`);

--
-- Indexes for table `nilai`
--
ALTER TABLE `nilai`
  ADD PRIMARY KEY (`id_nilai`);

--
-- Indexes for table `pengguna`
--
ALTER TABLE `pengguna`
  ADD PRIMARY KEY (`id_pengguna`);

--
-- Indexes for table `rangking`
--
ALTER TABLE `rangking`
  ADD PRIMARY KEY (`id_alternatif`,`id_kriteria`),
  ADD KEY `id_kriteria` (`id_kriteria`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alternatif`
--
ALTER TABLE `alternatif`
  MODIFY `id_alternatif` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `kriteria`
--
ALTER TABLE `kriteria`
  MODIFY `id_kriteria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `nilai`
--
ALTER TABLE `nilai`
  MODIFY `id_nilai` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `pengguna`
--
ALTER TABLE `pengguna`
  MODIFY `id_pengguna` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `rangking`
--
ALTER TABLE `rangking`
  ADD CONSTRAINT `rangking_ibfk_1` FOREIGN KEY (`id_alternatif`) REFERENCES `alternatif` (`id_alternatif`),
  ADD CONSTRAINT `rangking_ibfk_2` FOREIGN KEY (`id_kriteria`) REFERENCES `kriteria` (`id_kriteria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
