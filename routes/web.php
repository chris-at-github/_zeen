<?php

$app->get('/', function () use ($app) {
	$app->configure('cultures');
	$app->configure('scene/dada57d4-ac8b-4b74-ac70-538046fff862');

  return view('index', [
  	'settings' => config('cultures'),
		'scene' => config('scene/dada57d4-ac8b-4b74-ac70-538046fff862')
	]);
});

$app->get('/scene/{uuid}', function ($uuid) use ($app) {
	$app->configure('cultures');

	if(in_array($uuid, config('cultures.scenes')) === true) {
		$app->configure('scene/' . $uuid);

		return view('scene', [
			'settings' => config('cultures'),
			'scene' => config('scene/' . $uuid)
		]);
	}
});