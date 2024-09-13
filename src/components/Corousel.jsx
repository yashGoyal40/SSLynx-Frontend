import * as React from "react"

import { Card, CardContent } from "../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselDemo() {
  const securityTips = [
    "🔒 **Keep Your SSL Certificates Updated:** Outdated certificates can leave your site vulnerable. Regularly check and renew your SSL certificates to maintain a secure connection.",
    "🛡️ **Use Strong Encryption:** Ensure your SSL certificates use strong encryption protocols (e.g., TLS 1.2 or higher) to protect data in transit and prevent interception by attackers.",
    "🚫 **Avoid Self-Signed Certificates:** While self-signed certificates might seem convenient, they lack the trust provided by a trusted Certificate Authority (CA) and can lead to security warnings for users.",
    "🔍 **Regularly Scan for Vulnerabilities:** Use tools to scan your website for potential vulnerabilities, including expired or improperly configured SSL certificates, to ensure ongoing protection.",
    "🔄 **Implement Security Headers:** Complement your SSL certificate with security headers like Content Security Policy (CSP) and Strict-Transport-Security (HSTS) to enhance your website's security posture."
  ];

  return (
    <Carousel className="w-full max-w-xl color text-white">
      <CarouselContent>
        {securityTips.map((tip, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="color text-white">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <p className="text-xl font-semibold text-center">{tip}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
