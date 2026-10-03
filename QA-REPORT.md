# Shivaloka Service Center — V1 UX/QA Audit

## Automated checks
- 1 H1 present: PASS
- All 7 images have alt text: PASS
- Local image assets resolve: PASS
- No duplicate HTML IDs: PASS
- Internal section links resolve: PASS
- External links using `target=_blank` include `rel=noopener`: PASS
- WhatsApp CTA elements: 8
- Phone CTA elements: 4
- No placeholder/lorem content detected: PASS

## Accessibility checks
- Primary blue button contrast against white: 4.42:1
- WhatsApp green button contrast against white: 5.39:1
- Dark navy background contrast against white: 14.53:1
- Skip-to-content link included: PASS
- Semantic heading hierarchy: PASS
- Images have alternative text: PASS
- FAQ uses native details/summary controls: PASS

## UX audit findings and fixes
1. **Fake-looking review cards were removed.** V1 previously used generic content in two review cards. The sales-demo version now shows one representative public review and two clearly labelled review-theme cards instead of fabricated testimonials.
2. **WhatsApp is a primary conversion path.** Service-specific CTAs prefill the customer's appliance/problem context.
3. **Mobile conversion is protected.** A fixed Call / WhatsApp bar is present below 640px.
4. **Pricing is explicit.** ₹300 is presented as the service visit charge, with repair/spare-part charges additional.
5. **Claims are qualified.** Warranty and all-brand claims include verification language where appropriate.
6. **Green CTA contrast was improved** from approximately 3.0:1 to 5.39:1 for white text.
7. **Real photos are temporary demo assets.** Replace with owner-approved originals before production launch.
8. **Google Maps area is intentionally a lightweight location card** rather than an API-dependent map embed; the real Google Maps listing is linked directly.

## Manual tests still required in a real browser/device
- iPhone Safari
- Android Chrome
- Desktop Chrome/Edge
- Phone tap-to-call
- WhatsApp opening and prefilled message
- Google Maps opening
- Sticky CTA not covering content
- Keyboard navigation
- Screen-reader spot check
- Real image loading after final assets are supplied
- Lighthouse/PageSpeed performance check after deployment

## Production verification required from owner
- Exact service list
- Exact warranty terms
- Emergency-service availability/conditions
- All-brand claim
- 10 km service radius
- Current phone/WhatsApp number
- Business hours
- Approved photos and logo
- Permission to publish selected customer reviews/photos
