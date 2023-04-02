@php
    function findHashedFiles($directory, $filename) {
        $hash = '';
        if (is_dir($directory)) {
            $files = scandir($directory);

            foreach ($files as $file) {
                if (preg_match("/^" . preg_quote($filename, '/') . "\.[a-f0-9]{8}\.(js|css)$/", $file, $matches)) {
                    $hash = substr($file, strlen($filename) + 1, 8);
                    break;
                }
            }
        }

        return $hash;
    }

    $cssDirectory = public_path('static/css');
    $jsDirectory = public_path('static/js');
    $cssHash = findHashedFiles($cssDirectory, 'main');
    $jsHash = findHashedFiles($jsDirectory, 'main');
@endphp
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <link rel="icon" href="{{ asset('favicon.ico') }}"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <meta name="theme-color" content="#000000"/>
    <meta name="description" content="Web site created using create-react-app"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="apple-touch-icon" href="{{ asset('logo192.png') }}"/>
    <link rel="manifest" href="{{ asset('manifest.json') }}"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Manrope:wght@200;300;400;500;600&family=Montserrat:wght@400;500;600;700;800&family=Sono:wght@200;300;400;500;600&display=swap"
          rel="stylesheet">
    <title>Codify.Software</title>
    <script defer="defer" src="{{ asset('static/js/main.' . $jsHash .'.js') }}"></script>
    <link href="{{ asset('static/css/main.' . $cssHash .'.css') }}" rel="stylesheet">
</head>
<body>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>
</body>
</html>
