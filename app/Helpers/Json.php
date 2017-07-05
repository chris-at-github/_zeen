<?php
namespace App\Helpers;

class Json {

	/**
	 * @param array|object $value
	 * @return string
	 */
	static public function encode($value) {
		return json_encode($value);
	}
}