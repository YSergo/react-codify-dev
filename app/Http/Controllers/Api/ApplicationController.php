<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Notifications\SendNotification;
use Illuminate\Http\Request;
use App\Models\Application;

class ApplicationController extends Controller
{

    public function handleApplication(Request $request): \Illuminate\Http\JsonResponse
    {
        $data = $request->except(['_token']);

        $result['name'] = $data['name'];
        $result['tel'] = $data['phone'];
        $result['email'] = $data['email'];
        $result['task'] = $data['request'];


        $app = Application::create($result);

        $app->notify(new SendNotification($result));

        if($app) {
            return response()->json(['status' => true], options: JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
        } else {
            return response()->json(['status' => false], 520, options: JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
        }

    }
}
