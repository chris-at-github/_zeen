<?php

namespace App\Console\Commands;

class SceneTileset extends \Illuminate\Console\Command {
	/**
	 * The name and signature of the console command.
	 *
	 * @var string
	 */
	protected $signature = 'scene:tileset {uuid}';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Create the tileset for a scene';

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

		dd($this->argument('uuid'));

		$this->info('Display this on the screen: ' . $this->argument('uuid'));
	}
}