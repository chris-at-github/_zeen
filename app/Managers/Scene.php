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

//			if(Cache::get('key'))

//			dd(Cache::has('key'));

			dd(Cache::get('scenes'));

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

			Cache::put('scenes', $this->storage, 1440);
		}
	}
}