<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'azaber_trial_pacific' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'N*^q[~ 8%Zz%alF[VTLm<3IMUIDNvJf296?*H85fZjxpn Qm5:nNk-Q7~([z PQ-' );
define( 'SECURE_AUTH_KEY',  'BJ;HH]6T(LZJ2_r6b]?w2&e36q)R|W$F5m/$G~(E,[vD-X0Z,Y%X9Q;}dsCTpAnv' );
define( 'LOGGED_IN_KEY',    '3C7~+l()E0y[zGQ(1Tyl=~K$??*hxJs,*_{ImLfFL/EDR:Z<. $QIf.QT<E M%=i' );
define( 'NONCE_KEY',        'vyXz;VM0_vKIxCR@*hzRi.:<{}Rsbz%8&a<uny=ia:E9K.!#tse,w6=#+ 4.fIyh' );
define( 'AUTH_SALT',        '*qe-{:2An?*1+=g~b$sY[*aE@;u=G>uLAFp2a3!cQ7.}$JJZ94GrY/GQx4w3 FfU' );
define( 'SECURE_AUTH_SALT', 'm/RA< `J2lV4~vt/j;`99Z2q<}.>436}ac%WDJ/rqc3-6<COe_p;bR:,R$v4f887' );
define( 'LOGGED_IN_SALT',   'kQsJZO*[Qot@_;}-c}^n,O.`cr7;ykB:+JOmaytKoy4N,/XF;W,`E5Q;XAew4|Gv' );
define( 'NONCE_SALT',       'W(WVp]TMK2^oROT?U]Gcs-8g8sxibT$S3:2COG!8NM%E3?D3%|eodl;AYbVM5SX|' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
