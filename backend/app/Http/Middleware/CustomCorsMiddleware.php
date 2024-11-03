<?php

namespace App\Http\Middleware;

use Closure;
use Asm89\Stack\CorsService;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CustomCorsMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    protected $cors;

    public function __construct()
    {
        $this->cors = new CorsService([
            'allowedOrigins' => ['http://localhost:5173'], // Add your frontend origin here
            'allowedMethods' => ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Define allowed methods
            'allowedHeaders' => ['Content-Type', 'Authorization'], // Define allowed headers
            'exposedHeaders' => [],
            'supportsCredentials' => true, // Set to true if you need cookies or authentication headers
            'maxAge' => 0,
            'Cross-Origin-Opener-Policy' => 'same-origin',
            'Cross-Origin-Embedder-Policy' => 'require-corp',
            'Cross-Origin-Resource-Policy' => 'same-origin'
        ]);
    }

    public function handle($request, Closure $next)
    {
        if ($this->cors->isCorsRequest($request)) {
            if ($this->cors->isPreflightRequest($request)) {
                return $this->cors->handlePreflightRequest($request);
            }
        }

        $response = $next($request);

        return $this->cors->addActualRequestHeaders($response, $request);
    }
}
