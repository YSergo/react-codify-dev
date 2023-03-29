<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use http\Env\Request;
use App\Models\Application;

class ApplicationController extends Controller
{
    public function handleApplication(Request $request)
    {
        $data = $request->except(['_token']);
        $app = Application::create($data);

        if($app) {
            return response()->json(['status' => true], options: JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
        } else {
            return response()->json(['status' => false], 520, options: JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
        }

    }
}
