"use client"

import Script from "next/script"

/**
 * Cherry financing "payment options" page widget.
 * Renders the full Cherry experience (hero, calculator, how-it-works, FAQ)
 * into the placeholder divs below. Used on the /financing page.
 * Snippet provided by Cherry (https://withcherry.com) for Akron Vet Clinic.
 */
export function CherryPaymentWidget() {
  return (
    <>
      <Script id="cherry-payment-widget" strategy="afterInteractive">
        {`
(function (w, d, s, o, f, js, fjs) {
  w[o] = w[o] || function () {
    (w[o].q = w[o].q || []).push(arguments);
  };
  (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
  js.id = o;
  js.src = f;
  js.async = 1;
  fjs.parentNode.insertBefore(js, fjs);
})(window, document, "script", "_hw", "https://files.withcherry.com/widgets/widget.js");
_hw("init", {
  debug: false,
  variables: {
    slug: 'akron-vet-clinic',
    name: 'Akron Vet Clinic',
    images: [36],
    customLogo: '',
    defaultPurchaseAmount: 750,
    customImage: '',
    imageCategory: 'veterinary',
    language: 'en',
  },
  styles: {
    primaryColor: '#a30400',
    secondaryColor: '#a3040010',
    fontFamily: 'Montserrat',
    headerFontFamily: 'Montserrat',
  }
}, ['hero','calculator','howitworks','faq']);
        `}
      </Script>

      <div id="all" />
      <div id="hero" />
      <div id="calculator" />
      <div id="howitworks" />
      <div id="testimony" />
      <div id="faq" />
    </>
  )
}
