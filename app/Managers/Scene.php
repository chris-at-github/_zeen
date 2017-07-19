<?php
namespace App\Managers;

class Scene {

	/**
	 * @return void
	 */
	public function collect() {

		// Initialize zeen config
		app()->configure('zeen');

		// Read all scenes from config and load more information
		foreach(config('zeen.scenes') as $uuid) {
			dd($uuid);
		}
	}
}