<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * @var array
     */
    protected $middleware = [
        // Global middleware
        \App\Http\Middleware\CustomCorsMiddleware::class,
        \App\Http\Middleware\CorsMiddleware::class, // Add your custom CORS middleware here
        \Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode::class,
        // ... other middleware
    ];

    /**
     * The application's route middleware.
     *
     * @var array
     */
    protected $routeMiddleware = [
        // Route-specific middleware
        'auth' => \App\Http\Middleware\Authenticate::class,
        // ... other middleware
    ];

    /**
     * The middleware groups.
     *
     * @var array
     */
    protected $middlewareGroups = [
        'web' => [
            // Web middleware
        ],

        'api' => [
            \App\Http\Middleware\CustomCorsMiddleware::class,
            \App\Http\Middleware\CorsMiddleware::class,
            'throttle:api',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],
    ];
}
