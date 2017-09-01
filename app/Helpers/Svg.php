<?php
/**
 * Created by PhpStorm.
 * User: Chris
 * Date: 07.07.2017
 * Time: 05:55
 */

namespace App\Helpers;

class Svg {

	/**
	 * @param string $filename
	 * @return string html for svg sprite
	 */
	public static function import($filename) {
		$svgpath = app()->basePath(config('zeen.path.svg')) . $filename . '.svg';

		if(is_file($svgpath) === true) {
			return file_get_contents($svgpath);
		}

		return null;
	}
}