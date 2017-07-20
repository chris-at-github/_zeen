<?php

namespace App\Console\Commands;

class SceneCollection extends \Illuminate\Console\Command {
	/**
	 * The name and signature of the console command.
	 *
	 * @var string
	 */
	protected $signature = 'scene:collection';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Collect all scene files and store information in a cache entry';

	/**
	 * Create a new command instance.
	 *
	 * @return void
	 */
	public function __construct() {
		parent::__construct();
	}

	/**
	 * Execute the console command.
	 *
	 * @return void
	 */
	public function handle() {

		/* @var \App\Managers\Scene $sceneManager */
		$sceneManager = app(\App\Managers\Scene::class);
		$sceneManager->collect();
	}
}