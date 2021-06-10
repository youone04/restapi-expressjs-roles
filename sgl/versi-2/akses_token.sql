-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 10 Jun 2021 pada 17.55
-- Versi server: 10.4.18-MariaDB
-- Versi PHP: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_restAPi`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `akses_token`
--

CREATE TABLE `akses_token` (
  `id_token` int(3) NOT NULL,
  `id_user` int(3) NOT NULL,
  `akses_token` text NOT NULL,
  `ip_address` varchar(50) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `akses_token`
--

INSERT INTO `akses_token` (`id_token`, `id_user`, `akses_token`, `ip_address`, `role`) VALUES
(8, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZF91c2VyIjoxLCJ1c2VybmFtZSI6Inl1ZGkgZ3VuYXdhbiIsImVtYWlsIjoieXVkaS5ndW5hd2FuQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzAiLCJyb2xlIjoyLCJ0Z2xfZGFmdGFyIjoiMjAyMS0wMi0yMVQxNzowMDowMC4wMDBaIn1dLCJpYXQiOjE2MjMzNDA1MTIsImV4cCI6MTYyMzQyNjkxMn0.F70Got3_4wbRszoA7YLR3Lo29RhqEmSh1O8C_GEDatI', '192.168.1.248', 2);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `akses_token`
--
ALTER TABLE `akses_token`
  ADD PRIMARY KEY (`id_token`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `akses_token`
--
ALTER TABLE `akses_token`
  MODIFY `id_token` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
