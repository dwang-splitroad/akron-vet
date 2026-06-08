"use client"

import Script from "next/script"

/**
 * Cherry financing "floating estimator" button.
 * Renders site-wide via the root layout so the floating CTA appears on every page.
 * Snippet provided by Cherry (https://withcherry.com) for Akron Vet Clinic.
 */
export function CherryFloatingWidget() {
  return (
    <>
      <Script id="cherry-floating-widget" strategy="afterInteractive">
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
    floatingEstimator: {
      position: 'bottom-right',
      offset: { x: '0px', y: '0px' },
      zIndex: 9999,
      ctaFontFamily: 'Montserrat',
      bodyFontFamily: 'Montserrat',
      ctaColor: '#a30400',
      ctaTextColor: '#FFFFFF'
    }
  }
}, ['floatingEstimator']);
        `}
      </Script>
      <div id="floatingEstimator" />
    </>
  )
}
