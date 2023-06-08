<?php

namespace Lifespikes\Employees\Traits;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;

trait HasToastResponses
{
    /**
     * @param  array<string, mixed>  $data
     * @param  array<int, array<string, mixed>|string>  $to
     * @return JsonResponse|RedirectResponse
     */
    public function response(?string $message, string $type, array $data = [], int $status = 200, string|array|null $to = null)
    {
        if (request()->expectsJson()) {
            return response()->json(array_merge([
                'message' => $message,
            ], $data), $status);
        }

        /**
         * @var string $route
         * @var array<string, mixed> $params
         */
        [$route, $params] = is_array($to) ? $to : [$to, []];

        return ! is_null($to)
            ? to_route($route, $params)->with($type, $message)
            : back()->with($type, $message);
    }

    /**
     * @param  array<string, mixed>  $data
     */
    public function success(string $message, array $data = [], int $status = 200): JsonResponse|RedirectResponse
    {
        return $this->response($message, 'success', $data, $status);
    }

    /**
     * @param  array<string, mixed>  $data
     */
    public function error(string $message, array $data = [], int $status = 422): JsonResponse|RedirectResponse
    {
        return $this->response($message, 'error', $data, $status);
    }

    /**
     * @param  array<string, mixed>  $data
     * @param  array<string, mixed>  $params
     * @return JsonResponse|RedirectResponse
     */
    public function successTo(string $route, array $params = [], string $message = null, array $data = [], int $status = 200)
    {
        return $this->response($message, 'success', $data, $status, [$route, $params]);
    }

    /**
     * @param  string|null  $message
     * @param  array<string, mixed>  $data
     * @param  int  $status
     * @return JsonResponse|RedirectResponse
     */
    public function successBackTo(string $message = null, array $data = [], int $status = 200)
    {
        return $this->response($message, 'success', $data, $status);
    }

    /**
     * @param  string|null  $message
     * @param  array<string, mixed>  $data
     * @param  int  $status
     * @return JsonResponse|RedirectResponse
     */
    public function errorBackTo(string $message = null, array $data = [], int $status = 422)
    {
        return $this->response($message, 'error', $data, $status);
    }

    /**
     * @param  array<string, mixed>  $data
     * @param  array<string, mixed>  $params
     * @return JsonResponse|RedirectResponse
     */
    public function errorTo(string $route, array $params = [], string $message = null, array $data = [], int $status = 422)
    {
        return $this->response($message, 'error', $data, $status, [$route, $params]);
    }
}
    
