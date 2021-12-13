/* SQL Manager Lite for MySQL                              5.8.0.53447 */
/* ------------------------------------------------------------------- */
/* Host     : localhost                                                */
/* Port     : 3306                                                     */
/* Database : solucion_digital_co_ferrogrif                            */


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES 'utf8mb4' */;

SET FOREIGN_KEY_CHECKS=0;

/* Structure for the `auth_group` table : */

CREATE TABLE `auth_group` (
  `id` INTEGER(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY USING BTREE (`id`),
  UNIQUE KEY `name` USING BTREE (`name`)
) ENGINE=InnoDB
AUTO_INCREMENT=1 ROW_FORMAT=DYNAMIC CHARACTER SET 'latin1' COLLATE 'latin1_spanish_ci'
;

/* Structure for the `django_content_type` table : */

CREATE TABLE `django_content_type` (
  `id` INTEGER(11) NOT NULL AUTO_INCREMENT,
  `app_label` VARCHAR(100) COLLATE latin1_spanish_ci NOT NULL,
  `model` VARCHAR(100) COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY USING BTREE (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` USING BTREE (`app_label`, `model`)
) ENGINE=InnoDB
AUTO_INCREMENT=7 ROW_FORMAT=DYNAMIC CHARACTER SET 'latin1' COLLATE 'latin1_spanish_ci'
;

/* Structure for the `auth_permission` table : */

CREATE TABLE `auth_permission` (
  `id` INTEGER(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) COLLATE latin1_spanish_ci NOT NULL,
  `content_type_id` INTEGER(11) NOT NULL,
  `codename` VARCHAR(100) COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY USING BTREE (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` USING BTREE (`content_type_id`, `codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB
AUTO_INCREMENT=25 ROW_FORMAT=DYNAMIC CHARACTER SET 'latin1' COLLATE 'latin1_spanish_ci'
;

/* Structure for the `auth_group_permissions` table : */

CREATE TABLE `auth_group_permissions` (
  `id` INTEGER(11) NOT NULL AUTO_INCREMENT,
  `group_id` INTEGER(11) NOT NULL,
  `permission_id` INTEGER(11) NOT NULL,
  PRIMARY KEY USING BTREE (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` USING BTREE (`group_id`, `permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` USING BTREE (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_aut` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_g` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB
AUTO_INCREMENT=1 ROW_FORMAT=DYNAMIC CHARACTER SET 'latin1' COLLATE 'latin1_spanish_ci'
;

/* Structure for the `auth_user` table : */

CREATE TABLE `auth_user` (
  `id` INTEGER(11) NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(128) COLLATE latin1_spanish_ci NOT NULL,
  `last_login` DATETIME(6) DEFAULT NULL,
  `is_superuser` TINYINT(1) NOT NULL,
  `username` VARCHAR(150) COLLATE latin1_spanish_ci NOT NULL,
  `first_name` VARCHAR(30) COLLATE latin1_spanish_ci NOT NULL,
  `last_name` VARCHAR(150) COLLATE latin1_spanish_ci NOT NULL,
  `email` VARCHAR(254) COLLATE latin1_spanish_ci NOT NULL,
  `is_staff` TINYINT(1) NOT NULL,
  `is_active` TINYINT(1) NOT NULL,
  `date_joined` DATETIME(6) NOT NULL,
  PRIMARY KEY USING BTREE (`id`),
  UNIQUE KEY `username` USING BTREE (`username`)
) ENGINE=InnoDB
AUTO_INCREMENT=2 ROW_FORMAT=DYNAMIC CHARACTER SET 'latin1' COLLATE 'latin1_spanish_ci'
;

/* Structure for the `auth_user_groups` table : */

CREATE TABLE `auth_user_groups` (
  `id` INTEGER(11) NOT NULL AUTO_INCREMENT,
  `user_id` INTEGER(11) NOT NULL,
  `group_id` INTEGER(11) NOT NULL,
  PRIMARY KEY USING BTREE (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` USING BTREE (`user_id`, `group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` USING BTREE (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_i` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB
AUTO_INCREMENT=1 ROW_FORMAT=DYNAMIC CHARACTER SET 'latin1' COLLATE 'latin1_spanish_ci'
;

/* Structure for the `auth_user_user_permissions` table : */

CREATE TABLE `auth_user_user_permissions` (
  `id` INTEGER(11) NOT NULL AUTO_INCREMENT,
  `user_id` INTEGER(11) NOT NULL,
  `permission_id` INTEGER(11) NOT NULL,
  PRIMARY KEY USING BTREE (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` USING BTREE (`user_id`, `permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` USING BTREE (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_aut` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_aut` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB
AUTO_INCREMENT=1 ROW_FORMAT=DYNAMIC CHARACTER SET 'latin1' COLLATE 'latin1_spanish_ci'
;

/* Structure for the `django_admin_log` table : */

CREATE TABLE `django_admin_log` (
  `id` INTEGER(11) NOT NULL AUTO_INCREMENT,
  `action_time` DATETIME(6) NOT NULL,
  `object_id` LONGTEXT COLLATE latin1_spanish_ci,
  `object_repr` VARCHAR(200) COLLATE latin1_spanish_ci NOT NULL,
  `action_flag` SMALLINT(5) UNSIGNED NOT NULL,
  `change_message` LONGTEXT COLLATE latin1_spanish_ci NOT NULL,
  `content_type_id` INTEGER(11) DEFAULT NULL,
  `user_id` INTEGER(11) NOT NULL,
  PRIMARY KEY USING BTREE (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` USING BTREE (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` USING BTREE (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_djang` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB
AUTO_INCREMENT=3 ROW_FORMAT=DYNAMIC CHARACTER SET 'latin1' COLLATE 'latin1_spanish_ci'
;

/* Structure for the `django_migrations` table : */

CREATE TABLE `django_migrations` (
  `id` INTEGER(11) NOT NULL AUTO_INCREMENT,
  `app` VARCHAR(255) COLLATE latin1_spanish_ci NOT NULL,
  `name` VARCHAR(255) COLLATE latin1_spanish_ci NOT NULL,
  `applied` DATETIME(6) NOT NULL,
  PRIMARY KEY USING BTREE (`id`)
) ENGINE=InnoDB
AUTO_INCREMENT=18 ROW_FORMAT=DYNAMIC CHARACTER SET 'latin1' COLLATE 'latin1_spanish_ci'
;

/* Structure for the `django_session` table : */

CREATE TABLE `django_session` (
  `session_key` VARCHAR(40) COLLATE latin1_spanish_ci NOT NULL,
  `session_data` LONGTEXT COLLATE latin1_spanish_ci NOT NULL,
  `expire_date` DATETIME(6) NOT NULL,
  PRIMARY KEY USING BTREE (`session_key`),
  KEY `django_session_expire_date_a5c62663` USING BTREE (`expire_date`)
) ENGINE=InnoDB
ROW_FORMAT=DYNAMIC CHARACTER SET 'latin1' COLLATE 'latin1_spanish_ci'
;

/* Data for the `django_content_type` table  (LIMIT 0,500) */

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
  (1,'admin','logentry'),
  (2,'auth','permission'),
  (3,'auth','group'),
  (4,'auth','user'),
  (5,'contenttypes','contenttype'),
  (6,'sessions','session');
COMMIT;

/* Data for the `auth_permission` table  (LIMIT 0,500) */

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
  (1,'Can add log entry',1,'add_logentry'),
  (2,'Can change log entry',1,'change_logentry'),
  (3,'Can delete log entry',1,'delete_logentry'),
  (4,'Can view log entry',1,'view_logentry'),
  (5,'Can add permission',2,'add_permission'),
  (6,'Can change permission',2,'change_permission'),
  (7,'Can delete permission',2,'delete_permission'),
  (8,'Can view permission',2,'view_permission'),
  (9,'Can add group',3,'add_group'),
  (10,'Can change group',3,'change_group'),
  (11,'Can delete group',3,'delete_group'),
  (12,'Can view group',3,'view_group'),
  (13,'Can add user',4,'add_user'),
  (14,'Can change user',4,'change_user'),
  (15,'Can delete user',4,'delete_user'),
  (16,'Can view user',4,'view_user'),
  (17,'Can add content type',5,'add_contenttype'),
  (18,'Can change content type',5,'change_contenttype'),
  (19,'Can delete content type',5,'delete_contenttype'),
  (20,'Can view content type',5,'view_contenttype'),
  (21,'Can add session',6,'add_session'),
  (22,'Can change session',6,'change_session'),
  (23,'Can delete session',6,'delete_session'),
  (24,'Can view session',6,'view_session');
COMMIT;

/* Data for the `auth_user` table  (LIMIT 0,500) */

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
  (1,'pbkdf2_sha256$180000$4FTtezhS1BR6$ctDTt47TSVu5U3h4QBwkYPKV3m99sL1WqE+M2njeChA=','2020-07-28 01:49:31.000000',1,'admin@system.com','Admin','User','alesarabia@gmail.com',1,1,'2020-07-28 01:45:22.000000');
COMMIT;

/* Data for the `django_admin_log` table  (LIMIT 0,500) */

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
  (1,'2020-07-28 01:46:45.721508','1','admin@ferrogrisoft.com',2,'[{\"changed\": {\"fields\": [\"Username\", \"First name\", \"Last name\"]}}]',4,1),
  (2,'2020-07-28 01:50:15.713650','1','admin@system.com',2,'[{\"changed\": {\"fields\": [\"Username\"]}}]',4,1);
COMMIT;

/* Data for the `django_migrations` table  (LIMIT 0,500) */

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
  (1,'contenttypes','0001_initial','2020-07-28 01:42:55.622753'),
  (2,'auth','0001_initial','2020-07-28 01:42:55.858862'),
  (3,'admin','0001_initial','2020-07-28 01:42:56.634144'),
  (4,'admin','0002_logentry_remove_auto_add','2020-07-28 01:42:56.812727'),
  (5,'admin','0003_logentry_add_action_flag_choices','2020-07-28 01:42:56.823594'),
  (6,'contenttypes','0002_remove_content_type_name','2020-07-28 01:42:56.916905'),
  (7,'auth','0002_alter_permission_name_max_length','2020-07-28 01:42:56.936853'),
  (8,'auth','0003_alter_user_email_max_length','2020-07-28 01:42:56.959830'),
  (9,'auth','0004_alter_user_username_opts','2020-07-28 01:42:56.973229'),
  (10,'auth','0005_alter_user_last_login_null','2020-07-28 01:42:57.055217'),
  (11,'auth','0006_require_contenttypes_0002','2020-07-28 01:42:57.060204'),
  (12,'auth','0007_alter_validators_add_error_messages','2020-07-28 01:42:57.070176'),
  (13,'auth','0008_alter_user_username_max_length','2020-07-28 01:42:57.092154'),
  (14,'auth','0009_alter_user_last_name_max_length','2020-07-28 01:42:57.115057'),
  (15,'auth','0010_alter_group_name_max_length','2020-07-28 01:42:57.136998'),
  (16,'auth','0011_update_proxy_permissions','2020-07-28 01:42:57.147968'),
  (17,'sessions','0001_initial','2020-07-28 01:42:57.194130');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;