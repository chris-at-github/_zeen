<?php
namespace App\Managers;

use Illuminate\Support\Facades\Cache;

class Scene {

	/**
	 * @var array
	 */
	protected $storage = [];

	/**
	 * Create a new cache clear command instance.
	 *
	 * @return void
	 */
	public function __construct() {
	}

	/**
	 * @return void
	 */
	public function collect() {

		if(empty($this->storage) === true) {

			echo Cache::get('key');

			// Initialize zeen config
			app()->configure('zeen');

			// Read all scenes from config and load more information
			foreach(config('zeen.scenes') as $uuid) {

				// Initialize and read scene config
				app()->configure('scene/' . $uuid);
				$scene = config('scene/' . $uuid);

				$this->storage[$uuid] = [
					'uuid'    => $scene['uuid'],
					'title'   => $scene['title'],
					'version' => $scene['version']
				];
			}

			Cache::put('key', 1, 10);
		}
	}
}