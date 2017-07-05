<?php

$app->get('/', function () use ($app) {
	$app->configure('cultures');

  return view('index', [
  	'settings' => config('cultures')
	]);
});
