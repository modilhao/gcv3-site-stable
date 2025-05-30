import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  // Definições de SEO para a página
  const pageTitle = "Página não encontrada | Geração de Conteúdo V3";
  const pageDescription = "A página que você está procurando não foi encontrada. Volte para a página inicial.";
  
  // Adicionar meta tag robots para não indexar páginas de erro
  useEffect(() => {
    // Add noindex tag
    let robotsTag = document.querySelector('meta[name="robots"]');
    if (!robotsTag) {
      robotsTag = document.createElement('meta');
      robotsTag.setAttribute('name', 'robots');
      document.head.appendChild(robotsTag);
    }
    robotsTag.setAttribute('content', 'noindex, nofollow');
  }, []);

  return (
    <>
      <SEO 
        title={pageTitle}
        description={pageDescription}
        url="https://geracaodeconteudo.com.br/404"
        image="/og-image.jpg"
      />
      <Navbar />
      
      <main id="main-content" className="pt-24 pb-16">
        <div className="min-h-[60vh] w-full flex items-center justify-center">
          <Card className="w-full max-w-md mx-4">
            <CardContent className="pt-6">
              <div className="flex mb-4 gap-2">
                <AlertCircle className="h-8 w-8 text-orange-500" />
                <h1 className="text-2xl font-bold text-gray-900">Página não encontrada</h1>
              </div>

              <p className="mt-4 text-gray-600 mb-6">
                A página que você está procurando não existe ou foi movida. Verifique se o endereço está correto ou navegue para outra seção do site.
              </p>
              
              <Link href="/">
                <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                  <Home className="h-4 w-4" />
                  Voltar para a página inicial
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
