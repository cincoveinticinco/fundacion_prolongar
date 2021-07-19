-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: localhost    Database: prolongar
-- ------------------------------------------------------
-- Server version	8.0.25-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ar_internal_metadata`
--

DROP TABLE IF EXISTS `ar_internal_metadata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ar_internal_metadata` (
  `key` varchar(255) NOT NULL,
  `value` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ar_internal_metadata`
--

LOCK TABLES `ar_internal_metadata` WRITE;
/*!40000 ALTER TABLE `ar_internal_metadata` DISABLE KEYS */;
INSERT INTO `ar_internal_metadata` VALUES ('environment','development','2021-07-13 11:20:04.668656','2021-07-13 11:20:04.668656');
/*!40000 ALTER TABLE `ar_internal_metadata` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name_city` varchar(255) DEFAULT NULL,
  `departments_id` bigint NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `index_cities_on_departments_id` (`departments_id`),
  CONSTRAINT `fk_rails_31277a2a17` FOREIGN KEY (`departments_id`) REFERENCES `departments` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,'Bogota',1,'2021-07-15 21:27:27.170510','2021-07-15 21:27:27.170510');
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contacts` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `edificio` varchar(255) DEFAULT NULL,
  `ciudad` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacts`
--

LOCK TABLES `contacts` WRITE;
/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;
INSERT INTO `contacts` VALUES (6,'Prolongar','Cl 95 # 11 A - 37 oficina 402','Oxford Center  P.H.','Bogota, Colombia','+57 322 348 8278','asistente@fundacionprolongar.org','2021-07-14 17:43:47.631634','2021-07-14 17:46:44.346641');
/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name_department` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'Cundinamarca','2021-07-15 21:27:27.170510','2021-07-15 21:27:27.170510');
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genders`
--

DROP TABLE IF EXISTS `genders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genders` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `gender` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genders`
--

LOCK TABLES `genders` WRITE;
/*!40000 ALTER TABLE `genders` DISABLE KEYS */;
INSERT INTO `genders` VALUES (1,'Masculino','2021-07-15 21:27:27.170510','2021-07-15 21:27:27.170510'),(2,'Femenino','2021-07-15 21:27:27.172157','2021-07-15 21:27:27.172157'),(3,'Otro','2021-07-15 21:28:24.949318','2021-07-15 21:28:24.949318');
/*!40000 ALTER TABLE `genders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_banners`
--

DROP TABLE IF EXISTS `home_banners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_banners` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `order_banner` int DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_banners`
--

LOCK TABLES `home_banners` WRITE;
/*!40000 ALTER TABLE `home_banners` DISABLE KEYS */;
INSERT INTO `home_banners` VALUES (40,'/images_banner/2021-07-1414:57:48-0500_Capturadepantallade2021-06-1816-39-42.png',1,'2021-07-14 19:57:48.383969','2021-07-15 14:19:17.250311'),(41,'/images_banner/2021-07-1415:59:02-0500_Capturadepantallade2021-07-0113-05-38.png',2,'2021-07-14 20:59:02.307844','2021-07-15 14:19:17.265386'),(45,'/images_banner/2021-07-1416:38:11-0500_Capturadepantallade2021-07-0214-39-50.png',3,'2021-07-14 21:38:11.580529','2021-07-15 14:18:56.723739'),(50,'/images_banner/2021-07-1416:52:55-0500_Capturadepantallade2021-07-0617-20-10.png',4,'2021-07-14 21:52:55.555115','2021-07-15 14:18:56.729582'),(61,'/images_banner/2021-07-1509:18:24-0500_Capturadepantallade2021-07-0214-40-31.png',5,'2021-07-15 14:18:24.320122','2021-07-15 14:18:44.907078'),(62,'/images_banner/2021-07-1510:26:55-0500_Capturadepantallade2021-07-0113-06-35.png',6,'2021-07-15 15:26:55.638856','2021-07-15 15:26:55.638856');
/*!40000 ALTER TABLE `home_banners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `location` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_contents`
--

DROP TABLE IF EXISTS `menu_contents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu_contents` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name_page` varchar(255) DEFAULT NULL,
  `texto` text,
  `image` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_contents`
--

LOCK TABLES `menu_contents` WRITE;
/*!40000 ALTER TABLE `menu_contents` DISABLE KEYS */;
INSERT INTO `menu_contents` VALUES (1,'¿PARA QUE ES?','ok','/images_banner/2021-07-1510:31:14-0500_Capturadepantallade2021-07-0617-10-51.png','2021-07-15 14:40:47.407363','2021-07-15 15:31:14.748351'),(2,'¿A QUIEN VA DIRIGIDA?','ok','/images_banner/2021-07-1510:31:27-0500_Capturadepantallade2021-07-0617-03-59.png','2021-07-15 14:40:47.413178','2021-07-15 15:31:27.835355'),(3,'MODULOS','ok','/images_banner/2021-07-1510:37:40-0500_Capturadepantallade2021-07-0617-14-29.png','2021-07-15 14:40:47.417605','2021-07-15 15:37:40.255480'),(4,'PRINCIPIOS','ok','/images_banner/2021-07-1510:37:56-0500_Capturadepantallade2021-07-0214-39-14.png','2021-07-15 14:40:47.421232','2021-07-15 15:37:56.495905');
/*!40000 ALTER TABLE `menu_contents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `module_pages`
--

DROP TABLE IF EXISTS `module_pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `module_pages` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name_module` varchar(255) DEFAULT NULL,
  `imagen_min` varchar(255) DEFAULT NULL,
  `description` text,
  `img_banner` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `module_pages`
--

LOCK TABLES `module_pages` WRITE;
/*!40000 ALTER TABLE `module_pages` DISABLE KEYS */;
INSERT INTO `module_pages` VALUES (1,'4','/img_modules/2021-07-1412:11:16-0500_Capturadepantallade2021-06-1816-39-20.png','		\r\n	ok','/img_modules/2021-07-1412:11:16-0500_Capturadepantallade2021-07-0109-16-57.png','2021-07-14 17:11:16.361271','2021-07-14 17:11:16.361271');
/*!40000 ALTER TABLE `module_pages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schema_migrations`
--

DROP TABLE IF EXISTS `schema_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schema_migrations` (
  `version` varchar(255) NOT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schema_migrations`
--

LOCK TABLES `schema_migrations` WRITE;
/*!40000 ALTER TABLE `schema_migrations` DISABLE KEYS */;
INSERT INTO `schema_migrations` VALUES ('20210701164258'),('20210701164540'),('20210701164736'),('20210701165013'),('20210713173409'),('20210713173454'),('20210713173843'),('20210713173936'),('20210713202737'),('20210713203236'),('20210713203505'),('20210713203906'),('20210714220006'),('20210715142914'),('20210715165058'),('20210715211058'),('20210715211251'),('20210715211815'),('20210715214742'),('20210716154129'),('20210716194236'),('20210716195622');
/*!40000 ALTER TABLE `schema_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `session_tokens`
--

DROP TABLE IF EXISTS `session_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `session_tokens` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `users_id` bigint NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `index_session_tokens_on_users_id` (`users_id`),
  CONSTRAINT `fk_rails_5496a9776f` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session_tokens`
--

LOCK TABLES `session_tokens` WRITE;
/*!40000 ALTER TABLE `session_tokens` DISABLE KEYS */;
INSERT INTO `session_tokens` VALUES (6,15,'f0566a96c2483554123883f25ca4bac96c485f60995d110b482eacb8f9094178','2021-07-16 21:55:02.535520','2021-07-16 22:09:02.061231'),(7,13,'bb43abd1b49bb7dcec179ef62f4f3bda336ca3df7fa4721ba3340848a22b9b27','2021-07-16 22:08:21.650246','2021-07-16 22:08:21.650125');
/*!40000 ALTER TABLE `session_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_module_page_dependences`
--

DROP TABLE IF EXISTS `sub_module_page_dependences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_module_page_dependences` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `sub_module_page_id` bigint NOT NULL,
  `dependence_id` bigint DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `index_sub_module_page_dependences_on_sub_module_page_id` (`sub_module_page_id`),
  KEY `fk_rails_e436789fe7` (`dependence_id`),
  CONSTRAINT `fk_rails_e436789fe7` FOREIGN KEY (`dependence_id`) REFERENCES `sub_module_pages` (`id`),
  CONSTRAINT `fk_rails_fee1aa63cc` FOREIGN KEY (`sub_module_page_id`) REFERENCES `sub_module_pages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_module_page_dependences`
--

LOCK TABLES `sub_module_page_dependences` WRITE;
/*!40000 ALTER TABLE `sub_module_page_dependences` DISABLE KEYS */;
/*!40000 ALTER TABLE `sub_module_page_dependences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_module_page_has_users`
--

DROP TABLE IF EXISTS `sub_module_page_has_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_module_page_has_users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `sub_module_page_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `view_module` tinyint(1) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `index_sub_module_page_has_users_on_sub_module_page_id` (`sub_module_page_id`),
  KEY `index_sub_module_page_has_users_on_user_id` (`user_id`),
  CONSTRAINT `fk_rails_81742df9b1` FOREIGN KEY (`sub_module_page_id`) REFERENCES `sub_module_pages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_rails_e5f964da6d` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_module_page_has_users`
--

LOCK TABLES `sub_module_page_has_users` WRITE;
/*!40000 ALTER TABLE `sub_module_page_has_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `sub_module_page_has_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_module_pages`
--

DROP TABLE IF EXISTS `sub_module_pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_module_pages` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `module_page_id` bigint NOT NULL,
  `sub_module_name` varchar(255) DEFAULT NULL,
  `description` text,
  `link` varchar(255) DEFAULT NULL,
  `file_pdf` varchar(255) DEFAULT NULL,
  `content` text,
  `image_min` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `index_sub_module_pages_on_module_page_id` (`module_page_id`),
  CONSTRAINT `fk_rails_36c2b1942a` FOREIGN KEY (`module_page_id`) REFERENCES `module_pages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_module_pages`
--

LOCK TABLES `sub_module_pages` WRITE;
/*!40000 ALTER TABLE `sub_module_pages` DISABLE KEYS */;
INSERT INTO `sub_module_pages` VALUES (1,1,'prubea1','		dfs		\r\n	\r\n	','dsf',NULL,'<p>1</p>\r\n','/img_modules/2021-07-1611:06:12-0500_Capturadepantallade2021-07-0109-16-57.png','2021-07-14 21:17:39.874323','2021-07-16 16:06:12.882793'),(7,1,'prueba pdf','pruebas pdf','prueba pdf','/file_pdfs/2021-07-1512:22:35-0500_finanzas_cierres.pdf','<p>ok</p>\r\n','/img_modules/2021-07-1611:06:19-0500_Capturadepantallade2021-07-0214-39-12.png','2021-07-15 17:22:35.153709','2021-07-16 16:06:19.999846');
/*!40000 ALTER TABLE `sub_module_pages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_admins`
--

DROP TABLE IF EXISTS `user_admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_admins` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_admins`
--

LOCK TABLES `user_admins` WRITE;
/*!40000 ALTER TABLE `user_admins` DISABLE KEYS */;
INSERT INTO `user_admins` VALUES (1,'john','a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3','2021-07-15 14:19:27.285713','2021-07-15 14:19:27.285713');
/*!40000 ALTER TABLE `user_admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `gender_id` bigint NOT NULL,
  `current_location` tinyint(1) DEFAULT NULL,
  `city_id` bigint NOT NULL,
  `receive_info` tinyint(1) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `index_users_on_gender_id` (`gender_id`),
  KEY `index_users_on_city_id` (`city_id`),
  CONSTRAINT `fk_rails_47055e3204` FOREIGN KEY (`gender_id`) REFERENCES `genders` (`id`),
  CONSTRAINT `fk_rails_9c7442481a` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'John','123','no@gm.com','20',1,1,1,1,'2021-07-15 21:27:27.170510','2021-07-15 21:27:27.170510'),(13,'John','a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3','no1@gm.com','20',1,1,1,1,'2021-07-16 16:40:57.564509','2021-07-16 16:40:57.564509'),(15,'John','a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3','no2@gm.com','21',1,1,1,1,'2021-07-16 17:07:46.489296','2021-07-16 17:08:23.059049');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-19  9:08:33
