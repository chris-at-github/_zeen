<?php

$app->get('/', function () use ($app) {
	$app->configure('cultures');
	$app->configure('scene/dada57d4-ac8b-4b74-ac70-538046fff862');

  return view('index', [
  	'settings' => config('cultures'),
		'scene' => config('scene/dada57d4-ac8b-4b74-ac70-538046fff862')
	]);
});
