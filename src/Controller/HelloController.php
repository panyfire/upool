<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HelloController
{
    #[Route('/api/hello/', name: 'api_hello')]
    public function hello(): Response
    {
        return new Response('<html><body>HELLO</body></html>');
    }
}