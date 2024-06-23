<?php

use Pest\Plugins\Bail;

return [
    App\Providers\AppServiceProvider::class,
    App\Providers\FortifyServiceProvider::class,
    Barryvdh\DomPDF\ServiceProvider::class,
];
