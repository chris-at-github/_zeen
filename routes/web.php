<?php

$app->get('/', function () use ($app) {
	$app->configure('zeen');

  return view('index', [
  	'settings' => config('zeen')
	]);
});

$app->get('/scene/{uuid}', function ($uuid) use ($app) {
	$app->configure('zeen');

	if(in_array($uuid, config('zeen.scenes')) === true) {
		$app->configure('scene/' . $uuid);

		return view('scene', [
			'settings' => config('zeen'),
			'scene' => config('scene/' . $uuid)
		]);
	}
});